import clsx from 'clsx';
import React from 'react';
import { cn } from '../lib/utils';
import { ExtendedPropsWithChildrenAndAs } from '../type';

interface SidebarMenuItemProps {
  icon?: React.ReactNode;
  isCurrentPath?: boolean;
}

const SidebarMenuItem = <ElementProps extends React.ElementType = 'a'>({
  icon,
  children,
  isCurrentPath = false,
  className,
  as,
  ...restProps
}: ExtendedPropsWithChildrenAndAs<ElementProps, SidebarMenuItemProps>) => {
  const hasIcon = !!icon;
  const Component = as || 'a';

  return (
    <Component
      className={cn(
        'flex items-center p-2 rounded-md hover:bg-slate-100 text-14-r w-full text-left hover:cursor-pointer',
        clsx({ 'text-14-b bg-slate-100': isCurrentPath }),
        className,
      )}
      {...restProps}
    >
      {icon && <div className="mr-[0.375rem]">{icon}</div>}
      <div className={clsx({ 'ml-[1.375rem]': !hasIcon })}>{children}</div>
    </Component>
  );
};

export default SidebarMenuItem;
