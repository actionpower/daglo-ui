interface DisplayContainerProps {
  title?: string;
}

const DisplayContainer = ({
  title = '',
  children,
}: ComponentWithChildren<DisplayContainerProps>) => {
  return (
    <div className="mb-4">
      <div className="mb-2 text-xl">{title}</div>
      {children}
    </div>
  );
};

export default DisplayContainer;
