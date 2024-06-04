import AlertDemo from './exampleComponents/AlertDemo';
import AlertDialogDemo from './exampleComponents/AlertDialogDemo';
import BadgeDemo from './exampleComponents/BadgeDemo';
import CheckboxDemo from './exampleComponents/CheckboxDemo';
import DialogDemo from './exampleComponents/DialogDemo';
import DisplayContainer from './exampleComponents/DisplayContainer';
import InputDemo from './exampleComponents/InputDemo';
import PaginationDemo from './exampleComponents/PaginationDemo';
import SelectDemo from './exampleComponents/SelectDemo';
import SonnerDemo from './exampleComponents/SonnerDemo';
import SwitchDemo from './exampleComponents/SwitchDemo';
import TabsDemo from './exampleComponents/TabsDemo';
import TextareaDemo from './exampleComponents/TextareaDemo';
import ToastDemo from './exampleComponents/ToastDemo';
import { Toaster as SonnerToaster } from './ui/sonner';
import Toaster from './ui/toaster';

function App() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4 bg-gray-100">
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
        <Toaster />
      </DisplayContainer>
      <DisplayContainer title="Sonner Demo">
        <SonnerDemo />
        <SonnerToaster />
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
      <DisplayContainer title="Switch Demo">
        <SwitchDemo />
      </DisplayContainer>
      <DisplayContainer title="Pagination Demo">
        <PaginationDemo />
      </DisplayContainer>
    </div>
  );
}

export default App;
