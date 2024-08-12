import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div>
      <div className="flex gap-1 text-secondary-70">
        <Link
          href="/dashboard/user/quests"
          className="duration-150 hover:underline active:scale-95"
        >
          Quests
        </Link>
        <span className="text-secondary-70">/</span>
        <Link
          href=""
          className="text-secondary-120 duration-150 hover:underline active:scale-95"
        >
          The Burning Building
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
