import { PropsWithChildren } from 'react';
import Button from '../ui/button';

interface SidebarProps {
  userName?: string;
  onLogoutButtonClick: () => void;
}

const Sidebar = ({
  onLogoutButtonClick,
  userName = 'Not found',
  children,
}: PropsWithChildren<SidebarProps>) => {
  return (
    <aside className="fixed top-14 z-30 hidden h-screen w-full shrink-0 md:sticky md:block border-r max-w-[200px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="py-[1.125rem] px-4 flex items-center justify-between">
            <div className="truncate text-14-m w-[5rem] whitespace-nowrap">
              {userName}
            </div>
            <Button variant="outline" onClick={onLogoutButtonClick}>
              로그아웃
            </Button>
          </div>
          <div className="p-3 grid gap-y-[0.125rem]">{children}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
