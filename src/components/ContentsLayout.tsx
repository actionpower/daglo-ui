interface ContentsLayoutProps {
  title?: string;
}

const ContentsLayout = ({
  children,
  title = '제목',
}: ComponentWithChildren<ContentsLayoutProps>) => {
  return (
    <section>
      <h1 className="text-24-b py-[1.0625rem] px-4 border-b border-slate-200">
        {title}
      </h1>
      <div className="px-4 py-10">{children}</div>
    </section>
  );
};

export default ContentsLayout;
