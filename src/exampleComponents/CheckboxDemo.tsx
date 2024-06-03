import { Checkbox } from '@/src/ui/checkbox';
import { Label } from '@/src/ui/label';

const CheckboxDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
};

export default CheckboxDemo;
