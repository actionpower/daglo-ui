import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface SidebarMenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isCurrentPath?: boolean;
}

const SidebarMenuItem = ({
  icon,
  children,
  isCurrentPath = false,
  className,
  ...restProps
}: ComponentWithChildren<SidebarMenuItemProps>) => {
  const hasIcon = !!icon;

  return (
    <button
      className={cn(
        'flex items-center p-2 rounded-md hover:bg-slate-100 text-14-r w-full text-left',
        clsx({ 'text-14-b bg-slate-100': isCurrentPath }),
        className,
      )}
      {...restProps}
    >
      {icon && <div className="mr-[0.375rem]">{icon}</div>}
      <div className={clsx({ 'ml-[1.375rem]': !hasIcon })}>{children}</div>
    </button>
  );
};

export default SidebarMenuItem;
