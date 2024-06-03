import { Input } from '@/src/ui/input';
import { Label } from '../ui/label';

const InputDemo = () => {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="Email" id="email" />
    </div>
  );
};

export default InputDemo;
