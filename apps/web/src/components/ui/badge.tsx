import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'gold' | 'crimson' | 'emerald' | 'charcoal' | 'locked';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantMap: Record<BadgeVariant, string> = {
  gold: 'badge-gold',
  crimson: 'badge-crimson',
  emerald: 'badge-emerald',
  charcoal: 'badge-charcoal',
  locked: 'badge-locked',
};

export function Badge({ variant = 'gold', className, ...props }: BadgeProps) {
  return <span className={cn('badge', variantMap[variant], className)} {...props} />;
}