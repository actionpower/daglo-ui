import { PropsWithChildren } from 'react';

interface DisplayContainerProps {
  title?: string;
}

const DisplayContainer = ({
  title = '',
  children,
}: PropsWithChildren<DisplayContainerProps>) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="mb-2 text-xl">{title}</div>
      {children}
    </div>
  );
};

export default DisplayContainer;
