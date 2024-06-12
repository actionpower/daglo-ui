import { useToast } from '@/src/hooks/useToast';
import { Button, ToastAction, Toaster } from '@/src/components';

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <div className="flex gap-x-2">
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'This is toast',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Toast default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'This is toast',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            variant: 'destructive',
          });
        }}
      >
        Toast destructive
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'This is toast',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Toast with action
      </Button>
    </div>
  );
};

export default ToastDemo;
