import { IconJarLogoIcon } from '@radix-ui/react-icons';
import ContentsLayout from '../components/ContentsLayout';
import Sidebar from '../components/Sidebar';
import SidebarMenuItem from '../components/SidebarMenuItem';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/ui/accordion';
import { Accordion } from '../ui/accordion';

const SidebarDemo = () => {
  const userName = 'foo';

  const onLogoutButtonClick = () => {
    console.log('logout');
  };

  const onSidebarMenuItemButtonClick = () => {
    console.log('sidebar menu button click');
  };

  return (
    <div className="flex">
      <Sidebar userName={userName} onLogoutButtonClick={onLogoutButtonClick}>
        <SidebarMenuItem
          icon={<IconJarLogoIcon className="w-4" />}
          onClick={onSidebarMenuItemButtonClick}
        >
          Button
        </SidebarMenuItem>
        <SidebarMenuItem
          icon={<IconJarLogoIcon className="w-4" />}
          isCurrentPath
          onClick={onSidebarMenuItemButtonClick}
        >
          current path style
        </SidebarMenuItem>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-full text-left">
              <SidebarMenuItem
                icon={<IconJarLogoIcon className="w-4" />}
                onClick={onSidebarMenuItemButtonClick}
              >
                Accordion(closed)
              </SidebarMenuItem>
            </AccordionTrigger>
            <AccordionContent>
              <SidebarMenuItem>list1</SidebarMenuItem>
              <SidebarMenuItem>list2</SidebarMenuItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible defaultValue="test-1">
          <AccordionItem value="test-1">
            <AccordionTrigger className="w-full text-left">
              <SidebarMenuItem
                icon={<IconJarLogoIcon className="w-4" />}
                onClick={onSidebarMenuItemButtonClick}
              >
                Accordion(contain current path)
              </SidebarMenuItem>
            </AccordionTrigger>
            <AccordionContent>
              <SidebarMenuItem isCurrentPath>list1</SidebarMenuItem>
              <SidebarMenuItem>list2</SidebarMenuItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
      <ContentsLayout title="테스트">컨텐츠</ContentsLayout>
    </div>
  );
};

export default SidebarDemo;
