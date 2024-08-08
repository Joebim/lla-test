interface DeleteDeviceProperties {
  isClose: () => void;
}
const DeleteDevice: React.FC<DeleteDeviceProperties> = ({ isClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={isClose}
      style={{ background: "#0000005e" }}
    >
      <div
        className="w-full max-w-md space-y-4 rounded-t-xl bg-white px-6 py-6 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4">
          <h2 className="font-axiformaHeavy text-base font-bold">
            Delete Device
          </h2>
        </div>
        <div className="mt-4">
          <p className="border-b-4 border-gray-200 pb-6 text-sm text-gray-300">
            Are you sure you want to delete this device? This action cannot be
            undone.
          </p>
        </div>
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <button className="w-2/5 rounded-3xl bg-red-600 p-3 px-6 text-xs text-white">
            Delete
          </button>
          <button
            onClick={isClose}
            className="w-2/5 rounded-3xl border p-3 px-6 text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDevice;
