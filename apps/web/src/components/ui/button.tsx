import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-[#5c161d] text-white hover:bg-[#430d12] shadow-sm',
        gold: 'bg-gradient-to-r from-[#dfba55] via-[#c59b27] to-[#916812] text-[#0b0c10] font-bold shadow-[0_4px_16px_rgba(197,155,39,0.3)] hover:shadow-[0_6px_22px_rgba(197,155,39,0.45)] hover:-translate-y-0.5',
        crimson: 'bg-[#5c161d] text-white hover:bg-[#430d12] hover:-translate-y-0.5 shadow-sm',
        forest: 'bg-[#1b4d3e] text-white hover:bg-[#14362a] shadow-sm',
        outline: 'border border-[#e6dfd1] bg-white text-[#14161d] hover:border-[#c59b27] hover:text-[#916812] hover:bg-[#fffdf8]',
        secondary: 'bg-[#f5f0e6] text-[#5c161d] hover:bg-[#ece5d6]',
        ghost: 'text-[#14161d] hover:bg-black/5 hover:text-[#5c161d]',
        link: 'text-[#c59b27] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
