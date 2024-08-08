import clsx from "clsx";
import Image from "next/image";

const UserDetailsCard = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        className,
        "w-full rounded-[10px] border-2 border-neutral-30 p-[15px] font-axiforma",
      )}
    >
      <div className="h-[100px] w-[100px]">
        <Image
          src="/images/avatar2.svg"
          alt="profile image"
          width={90}
          height={90}
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>
      <section className="mt-[10px]">
        <h3 className="text-[19px] font-bold text-secondary-100 sm:text-[23px]">
          Afolabi Olanipekun
        </h3>
        <p className="font-semibold text-secondary-120">Male</p>
        <div className="space-y-[10px]">
          <div className="flex items-center gap-2 text-[13px] sm:text-base">
            <p className="font-semibold">DOB:</p>
            <p className="text-secondary-70">31/8/1998</p>
          </div>
          <div className="flex items-center gap-2 text-[13px] sm:text-base">
            <p className="font-semibold">User ID:</p>
            <p className="text-secondary-70">128403</p>
          </div>
          <div className="flex items-center gap-2 text-[13px] sm:text-base">
            <p className="font-semibold">Email:</p>
            <p className="text-secondary-70">afolabinapekun@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-[13px] sm:text-base">
            <p className="font-semibold">Account Status:</p>
            <p className="text-secondary-70">Active</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserDetailsCard;
