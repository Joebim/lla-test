
interface DeleteDeviceProperties {
    isClose: () => void;
}
const DeleteDevice: React.FC<DeleteDeviceProperties> = ({isClose}) => {
    
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={isClose}
      style={{ background: "#0000005e" }}
    >
      <div
        className="w-full max-w-md rounded-t-xl text-center bg-white px-6 py-6 space-y-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4">
          <h2 className="text-base font-bold font-axiformaHeavy">Delete Device</h2>
        </div>
        <div className="mt-4">
          <p className="text-gray-300 text-sm pb-6  border-b-4 border-gray-200">
            Are you sure you want to delete this device? This action cannot be
            undone.
          </p>
        </div>
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <button
            className="w-2/5 text-xs rounded-3xl bg-red-600 p-3 px-6 text-white"
          >
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
