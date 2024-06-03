interface DisplayContainerProps {
  title?: string;
}

const DisplayContainer = ({
  title = '',
  children,
}: ComponentWithChildren<DisplayContainerProps>) => {
  return (
    <div className="p-4 mb-6 bg-white rounded-md">
      <div className="mb-2 text-xl">{title}</div>
      {children}
    </div>
  );
};

export default DisplayContainer;
