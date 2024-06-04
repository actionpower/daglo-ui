import { Label } from '@/src/ui/label';
import { Switch } from '@/src/ui/switch';

const SwitchDemo = () => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <Label htmlFor="default">Default</Label>
        <Switch id="default" />
      </div>
      <div>
        <Label htmlFor="disabled">Disabled</Label>
        <Switch id="disabled" disabled />
      </div>
      <div>
        <Label htmlFor="checked">checked</Label>
        <Switch id="checked" checked />
      </div>
      <div>
        <Label htmlFor="airplane-mode">Loading</Label>
        <Switch id="airplane-mode" isLoading />
      </div>
      <div>
        <Label htmlFor="airplane-mode">Checked Loading</Label>
        <Switch id="airplane-mode" checked isLoading />
      </div>
    </div>
  );
};

export default SwitchDemo;