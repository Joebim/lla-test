import clsx from "clsx";

const DashboardModal = ({
  children,
  className,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}) => {
  return (
    <main
      onClick={onClose}
      className={clsx(
        "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-slate-100 bg-opacity-20 px-[15px] backdrop-blur-sm md:px-0",
      )}
    >
      <section
        className={clsx(
          className,
          "shadow-sm w-fit rounded-[20px] bg-white p-[20px]",
        )}
      >
        {children}
      </section>
    </main>
  );
};

export default DashboardModal;
