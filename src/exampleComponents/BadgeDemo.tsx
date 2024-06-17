import { Badge } from '@actionpower/daglo-ui';

const BadgeDemo = () => {
  return (
    <div className="flex gap-x-2">
      <Badge variant="default">Badge</Badge>
      <Badge variant="destructive">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
    </div>
  );
};

export default BadgeDemo;
