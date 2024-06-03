import { Button } from '@/src/ui/button';
import { ToastAction } from '@/src/ui/toast';
import { useToast } from '@/src/ui/use-toast';

const ToastDemo = () => {
  const { toast } = useToast();
  return (
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
      Add to calendar
    </Button>
  );
};

export default ToastDemo;
