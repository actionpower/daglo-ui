import AlertDialogDemo from './exampleComponents/AlertDialogDemo';
import CheckboxDemo from './exampleComponents/CheckboxDemo';
import DisplayContainer from './exampleComponents/DisplayContainer';
import InputDemo from './exampleComponents/InputDemo';

function App() {
  return (
    <div className="p-4">
      <DisplayContainer title="Alert Dialog Demo">
        <AlertDialogDemo />
      </DisplayContainer>
      <DisplayContainer title="Checkbox Demo">
        <CheckboxDemo />
      </DisplayContainer>
      <DisplayContainer title="Input Demo">
        <InputDemo />
      </DisplayContainer>
    </div>
  );
}

export default App;
