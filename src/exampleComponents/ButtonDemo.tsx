import { Button } from '@actionpower/daglo-ui';
import { RocketIcon } from '@radix-ui/react-icons';

const ButtonDemo = () => {
  return (
    <div className="grid grid-cols-2 gap-y-1">
      <div className="flex flex-col gap-1">
        <Button>M-Primary</Button>
        <Button variant="secondary">M-Secondary</Button>
        <Button variant="outline">M-Button</Button>
        <Button variant="outline" icon={<RocketIcon className="w-4 h-4" />}>
          M- Button with icon
        </Button>
        <Button variant="link">M-Link</Button>
        <Button variant="outline" isLoading />
        <Button variant="outline" isLoading>
          Loading with child
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <Button size="small">s-Primary</Button>
        <Button size="small" variant="secondary">
          s-Secondary
        </Button>
        <Button size="small" variant="outline">
          s-Button
        </Button>
        <Button
          size="small"
          variant="outline"
          icon={<RocketIcon className="w-4 h-4" />}
        >
          s-Button with icon
        </Button>
        <Button variant="link">s-Link</Button>
        <Button variant="outline" isLoading />
        <Button variant="outline" isLoading>
          Loading with child
        </Button>
      </div>
      <div className="flex gap-x-1">
        <Button isLoading />
        <Button size="small" isLoading />
        <Button variant="secondary" isLoading />
        <Button variant="secondary" isLoading size="small" />
        <Button variant="outline" isLoading />
        <Button variant="outline" isLoading size="small" />
      </div>
    </div>
  );
};

export default ButtonDemo;
