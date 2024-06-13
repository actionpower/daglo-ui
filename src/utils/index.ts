import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast as sonnerToast } from 'sonner';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export { cn, sonnerToast };
