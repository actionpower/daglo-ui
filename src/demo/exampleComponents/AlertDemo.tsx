import { Alert, AlertDescription, AlertTitle } from '@/src/components';
import { RocketIcon } from '@radix-ui/react-icons';

const AlertDemo = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Alert variant="default">
        <RocketIcon className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <RocketIcon className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertDemo;
