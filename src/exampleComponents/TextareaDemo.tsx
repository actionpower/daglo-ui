import { Label, Textarea } from '@actionpower/daglo-ui';

const TextareaDemo = () => {
  return (
    <div>
      <Label htmlFor="Message">message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
};

export default TextareaDemo;
