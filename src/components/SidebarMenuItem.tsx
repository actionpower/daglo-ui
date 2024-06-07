import React from 'react';

interface SidebarMenuItemProps {
  icon: React.ReactNode;
}

const SidebarMenuItem = ({
  icon,
  children,
}: ComponentWithChildren<SidebarMenuItemProps>) => {
  return (
    <div className="p-3 grid gap-y-[0.125rem]">
      <div className="flex items-center p-2">
        {icon && icon}
        <div className="text-14-r">{children}</div>
      </div>
    </div>
  );
};

export default SidebarMenuItem;
