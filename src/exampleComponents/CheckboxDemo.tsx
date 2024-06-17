import { Checkbox, Label } from '@actionpower/daglo-ui';

const CheckboxDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
};

export default CheckboxDemo;
