import AlertDialogDemo from './exampleComponents/AlertDialogDemo';
import CheckboxDemo from './exampleComponents/CheckboxDemo';
import DisplayContainer from './exampleComponents/DisplayContainer';
import InputDemo from './exampleComponents/InputDemo';
import SelectDemo from './exampleComponents/SelectDemo';
import TabsDemo from './exampleComponents/TabsDemo';
import TextareaDemo from './exampleComponents/TextareaDemo';

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
    </div>
  );
}

export default App;
