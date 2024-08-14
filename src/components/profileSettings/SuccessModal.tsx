import Image from "next/image";

export function SuccessModal() {
  return (
    <div className="flex w-10/12 flex-col items-center rounded-xl bg-white p-6 font-axiforma md:w-3/5 lg:w-2/5">
      <div className="flex flex-col items-center space-y-2 border-b-2 border-dotted border-gray-200 p-2">
        <Image
          src="/profile/ok.png"
          alt="Profile"
          width={500}
          height={500}
          className="h-20 w-20 rounded-xl object-contain"
        />
        <h1 className="text-center font-lilita text-2xl md:text-3xl">
          Your profile has been successfully updated
        </h1>
        <p className="text-xs text-gray-500 md:text-base">
          Click to see new profile picture
        </p>
      </div>
      <div className="w-full pt-6">
        <button className="w-full rounded-3xl bg-orange-500 px-8 py-3 text-white">
          View Profile
        </button>
      </div>
    </div>
  );
}
