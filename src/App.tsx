import ContentsLayout from './components/ContentsLayout';
import AlertDemo from './demo/exampleComponents/AlertDemo';
import AlertDialogDemo from './demo/exampleComponents/AlertDialogDemo';
import BadgeDemo from './demo/exampleComponents/BadgeDemo';
import ButtonDemo from './demo/exampleComponents/ButtonDemo';
import CheckboxDemo from './demo/exampleComponents/CheckboxDemo';
import DatePickerDemo from './demo/exampleComponents/DatePickerDemo';
import DialogDemo from './demo/exampleComponents/DialogDemo';
import DisplayContainer from './demo/exampleComponents/DisplayContainer';
import InputDemo from './demo/exampleComponents/InputDemo';
import PaginationDemo from './demo/exampleComponents/PaginationDemo';
import RadioGroupDemo from './demo/exampleComponents/RadioGroupDemo';
import SelectDemo from './demo/exampleComponents/SelectDemo';
import SidebarDemo from './demo/exampleComponents/SidebarDemo';
import SonnerDemo from './demo/exampleComponents/SonnerDemo';
import SwitchDemo from './demo/exampleComponents/SwitchDemo';
import TabsDemo from './demo/exampleComponents/TabsDemo';
import TextareaDemo from './demo/exampleComponents/TextareaDemo';
import ToastDemo from './demo/exampleComponents/ToastDemo';

import '../dist/styles/index.css';
import '../dist/styles/calendarStyle.css';

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
// import React from 'react';

// const App = () => {
//   return <div>App</div>;
// };

// export default App;
