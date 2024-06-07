interface ContentsLayoutProps {
  title?: string;
}

const ContentsLayout = ({
  children,
  title = '제목',
}: ComponentWithChildren<ContentsLayoutProps>) => {
  return (
    <section className="w-full p-4">
      <h1 className="text-24-b py-[1.0625rem] px-4 border-b border-slate-200 w-full">
        {title}
      </h1>
      <div className="w-full px-4 py-10">{children}</div>
    </section>
  );
};

export default ContentsLayout;
