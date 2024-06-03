import AlertDialogDemo from './exampleComponents/AlertDialogDemo';
import CheckboxDemo from './exampleComponents/CheckboxDemo';
import DisplayContainer from './exampleComponents/DisplayContainer';

function App() {
  return (
    <div className="p-4">
      <DisplayContainer title="Alert Dialog Demo">
        <AlertDialogDemo />
      </DisplayContainer>
      <DisplayContainer title="Checkbox Demo">
        <CheckboxDemo />
      </DisplayContainer>
    </div>
  );
}

export default App;
