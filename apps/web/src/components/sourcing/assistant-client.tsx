'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Send, Sparkles, MapPin, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

interface AssistantProducer {
  id: string;
  slug: string;
  name: string;
  city?: string | null;
  country_name?: string | null;
  category?: string | null;
  product_families?: string[];
  handles_origins?: string[];
  contact_unlocked: boolean;
  minimum_order_quantity?: string | null;
  /** Why this producer matched — surfaced so the buyer can judge the fit. */
  match_reasons?: string[];
}

interface AssistantResponse {
  intent: string;
  answer: string;
  suggestions: string[];
  producers?: AssistantProducer[];
  references?: { label: string; href: string }[];
}

interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  producers?: AssistantProducer[];
  references?: { label: string; href: string }[];
}

const DEFAULT_SUGGESTIONS = [
  'Which distillers ship aged Assam oud oil?',
  'How do I spot fake agarwood?',
  'What determines oud oil price?',
  'Do I need a CITES permit to import oud?',
];

export function SourcingAssistant({ locale }: { locale: string }) {
  const isAr = locale === 'ar';
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/v1/sourcing/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: trimmed, locale }),
      });

      if (!res.ok) throw new Error('Assistant request failed');

      const data: AssistantResponse = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: data.answer,
          producers: data.producers,
          references: data.references,
        },
      ]);
      if (data.suggestions?.length) setSuggestions(data.suggestions);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: isAr
            ? 'تعذّر الوصول إلى المساعد حالياً. يرجى المحاولة بعد قليل.'
            : 'The assistant is temporarily unreachable. Please try again shortly.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-shell">
      {/* Head */}
      <div className="chat-head">
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: 'var(--green-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Sparkles size={20} style={{ color: '#ffffff' }} />
        </div>
        <div>
          <h2 className="chat-head-title">{isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}</h2>
          <p className="chat-head-sub">
            {isAr
              ? 'يعمل على سجل OudGuide الموثق — بيانات الاتصال محمية'
              : 'Reads the documented OudGuide register — contact data protected'}
          </p>
        </div>
        <ShieldCheck
          size={18}
          style={{ marginInlineStart: 'auto', color: 'var(--green-600)', flexShrink: 0 }}
        />
      </div>

      {/* Log */}
      <div className="chat-log" ref={logRef}>
        {messages.length === 0 && (
          <div className="chat-msg chat-msg-bot">
            <h4>{isAr ? 'مرحباً' : 'Welcome'}</h4>
            <p>
              {isAr
                ? 'اسألني عن أي صنف عود، أو إقليم، أو طريقة تقطير، أو متطلبات توريد بالجملة. سأبحث في السجل الموثق وأعرض النتائج دون كشف أي بيانات اتصال للموردين.'
                : 'Ask me about any oud material, terroir, distillation method, or wholesale requirement. I search the documented register and surface results without exposing supplier contact details.'}
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.role === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}`}>
            {msg.content.split('\n').map((line, j) => (
              <p key={j} style={{ margin: 0 }}>{line}</p>
            ))}

            {/* Matched producers */}
            {msg.producers && msg.producers.length > 0 && (
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {msg.producers.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${locale}/directory/${p.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: '11px 14px',
                      background: 'var(--bg-pearl)',
                      border: '1px solid var(--color-border-warm)',
                      borderRadius: 10,
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.92rem',
                          fontWeight: 500,
                          color: 'var(--green-800)',
                        }}
                      >
                        {p.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--ink-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          marginTop: 2,
                        }}
                      >
                        <MapPin size={11} />
                        {p.city ? `${p.city}, ` : ''}{p.country_name}
                        {p.minimum_order_quantity && ` · MOQ: ${p.minimum_order_quantity}`}
                      </div>

                      {/* Match reasons — why this producer surfaced */}
                      {p.match_reasons && p.match_reasons.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 4,
                            marginTop: 7,
                          }}
                        >
                          {p.match_reasons.map((reason, ri) => (
                            <span
                              key={ri}
                              className="chip"
                              style={{
                                fontSize: '0.68rem',
                                padding: '2px 8px',
                                background: 'var(--green-50)',
                                borderColor: 'var(--green-100)',
                                color: 'var(--green-700)',
                              }}
                            >
                              {reason}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowRight size={15} style={{ color: 'var(--green-600)', flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            )}

            {/* References */}
            {msg.references && msg.references.length > 0 && (
              <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {msg.references.map((r) => (
                  <Link key={r.href + r.label} href={`/${locale}${r.href}`} className="chip chip-gold">
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="chat-msg chat-msg-bot" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <Loader2 size={14} style={{ color: 'var(--green-600)' }} className="spin" />
            <span className="chat-typing">
              <span /><span /><span />
            </span>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {!isLoading && messages.length === 0 && (
        <div className="chat-suggestions">
          {suggestions.map((s, i) => (
            <button key={i} onClick={() => ask(s)} className="chat-suggestion">
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="chat-input-bar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') ask(input);
          }}
          placeholder={isAr
            ? 'اسأل عن صنف، أو إقليم، أو متطلب توريد...'
            : 'Ask about a material, terroir, or wholesale requirement...'}
          aria-label={isAr ? 'سؤال المساعد' : 'Ask the assistant'}
        />
        <button onClick={() => ask(input)} disabled={isLoading || !input.trim()} className="btn btn-primary">
          <Send size={15} />
          <span className="hidden-mobile">{isAr ? 'إرسال' : 'Ask'}</span>
        </button>
      </div>
    </div>
  );
}
