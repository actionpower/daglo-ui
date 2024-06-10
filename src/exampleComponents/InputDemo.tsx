import { Input, Label } from '@/src/components';

const InputDemo = () => {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="Email" id="email" />
    </div>
  );
};

export default InputDemo;
