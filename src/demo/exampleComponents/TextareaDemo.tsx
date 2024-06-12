import { Textarea, Label } from '@/src/components';

const TextareaDemo = () => {
  return (
    <div>
      <Label htmlFor="Message">message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
};

export default TextareaDemo;
