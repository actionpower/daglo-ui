import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/src/utils';
import clsx from 'clsx';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        medium: 'h-9 px-4 py-2',
        small: 'h-8 rounded-md px-3 text-xs',
        large: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

const loadingVariants = cva(``, {
  variants: {
    variant: {
      primary: 'bg-primary/90',
      secondary: 'bg-secondary/80',
      destructive: 'bg-destructive/90',
      outline: 'bg-white text-accent-foreground hover:bg-white',
      link: '',
      ghost: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const loadingSpinnerVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-white',
      destructive: 'text-white',
      outline: 'text-blue-500',
      ghost: 'text-blue-500',
      link: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      asChild = false,
      children,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          clsx({ 'cursor-not-allowed opacity-50': isLoading }),
          'flex items-center justify-center',
          `${isLoading ? loadingVariants({ variant }) : ''}`,
        )}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              'animate-spin',
              clsx({ 'mr-3': !!children }),
              loadingSpinnerVariants({ variant }),
            )}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {icon && !isLoading && <div className="mr-2">{icon}</div>}
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
