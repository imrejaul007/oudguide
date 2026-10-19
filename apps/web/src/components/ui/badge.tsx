import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#5c161d] text-white',
        gold: 'border-[#c59b27]/40 bg-[#fbf5e6] text-[#8c6a15]',
        crimson: 'border-[#5c161d]/25 bg-[#fbf0f1] text-[#5c161d]',
        forest: 'border-[#1b4d3e]/30 bg-[#eef7f2] text-[#1b4d3e]',
        locked: 'border-[#ddd7ca] bg-[#f0ede6] text-[#6a6458]',
        outline: 'border-[#e6dfd1] text-[#14161d]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
