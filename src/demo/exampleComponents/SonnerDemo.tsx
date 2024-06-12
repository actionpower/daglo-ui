import { Button, SonnerToaster } from '@/src/components';
import useSonner from '@/src/hooks/useSonner';

const SonnerDemo = () => {
  const { sonnerToast } = useSonner();

  return (
    <>
      <SonnerToaster />
      <Button
        variant="outline"
        onClick={() =>
          sonnerToast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
};

export default SonnerDemo;