import { IconJarLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import SidebarMenuItem from './SidebarMenuItem';

interface SidebarProps {
  userName?: string;
  onLogoutButtonClick: () => void;
}

const Sidebar = ({
  onLogoutButtonClick,
  userName = 'Not found',
}: SidebarProps) => {
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
          <SidebarMenuItem
            icon={<IconJarLogoIcon className="w-4 mr-[0.375rem]" />}
          >
            <button>유저 관리</button>
          </SidebarMenuItem>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
