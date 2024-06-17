import { ContentsLayout } from '@actionpower/daglo-ui';
import AlertDemo from './exampleComponents/AlertDemo';
import AlertDialogDemo from './exampleComponents/AlertDialogDemo';
import BadgeDemo from './exampleComponents/BadgeDemo';
import ButtonDemo from './exampleComponents/ButtonDemo';
import CheckboxDemo from './exampleComponents/CheckboxDemo';
import DatePickerDemo from './exampleComponents/DatePickerDemo';
import DialogDemo from './exampleComponents/DialogDemo';
import DisplayContainer from './exampleComponents/DisplayContainer';
import InputDemo from './exampleComponents/InputDemo';
import PaginationDemo from './exampleComponents/PaginationDemo';
import RadioGroupDemo from './exampleComponents/RadioGroupDemo';
import SelectDemo from './exampleComponents/SelectDemo';
import SidebarDemo from './exampleComponents/SidebarDemo';
import SonnerDemo from './exampleComponents/SonnerDemo';
import SwitchDemo from './exampleComponents/SwitchDemo';
import TabsDemo from './exampleComponents/TabsDemo';
import TextareaDemo from './exampleComponents/TextareaDemo';
import ToastDemo from './exampleComponents/ToastDemo';

const App = () => {
  return (
    <div>
      <SidebarDemo />
      <div className="grid grid-cols-2 gap-3 p-4 bg-gray-100">
        <DisplayContainer title="Alert Dialog Demo">
          <AlertDialogDemo />
        </DisplayContainer>
        <DisplayContainer title="Checkbox Demo">
          <CheckboxDemo />
        </DisplayContainer>
        <DisplayContainer title="Input Demo">
          <InputDemo />
        </DisplayContainer>
        <DisplayContainer title="Textarea Demo">
          <TextareaDemo />
        </DisplayContainer>
        <DisplayContainer title="Select Demo">
          <SelectDemo />
        </DisplayContainer>
        <DisplayContainer title="Tabs Demo">
          <TabsDemo />
        </DisplayContainer>
        <DisplayContainer title="Toast Demo">
          <ToastDemo />
        </DisplayContainer>
        <DisplayContainer title="Sonner Demo">
          <SonnerDemo />
        </DisplayContainer>
        <DisplayContainer title="Dialog Demo">
          <DialogDemo />
        </DisplayContainer>
        <DisplayContainer title="Badge Demo">
          <BadgeDemo />
        </DisplayContainer>
        <DisplayContainer title="Alert Demo">
          <AlertDemo />
        </DisplayContainer>
        <DisplayContainer title="Pagination Demo">
          <PaginationDemo />
        </DisplayContainer>
        <DisplayContainer title="Switch Demo">
          <SwitchDemo />
        </DisplayContainer>
        <DisplayContainer title="Button Demo">
          <ButtonDemo />
        </DisplayContainer>
        <DisplayContainer title="RadioGroup Demo">
          <RadioGroupDemo />
        </DisplayContainer>
        <DisplayContainer title="DatePicker Demo">
          <DatePickerDemo />
        </DisplayContainer>
        <DisplayContainer title="Content title and layout">
          <ContentsLayout title="권한 관리">컨텐츠</ContentsLayout>
        </DisplayContainer>
      </div>
    </div>
  );
};

export default App;
