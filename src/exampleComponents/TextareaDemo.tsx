import { Textarea } from '@/src/ui/textarea';
import { Label } from '../ui/label';

const TextareaDemo = () => {
  return (
    <div>
      <Label htmlFor="Message">message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
};

export default TextareaDemo;
