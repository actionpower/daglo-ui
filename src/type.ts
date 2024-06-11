import { ComponentProps } from 'react';

export interface PropsWithChildrenAndAs<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
}

export type ExtendedPropsWithChildrenAndAs<
  T extends React.ElementType,
  K extends object,
> = PropsWithChildrenAndAs<T> &
  K &
  Omit<ComponentProps<T>, keyof PropsWithChildrenAndAs<T>>;
