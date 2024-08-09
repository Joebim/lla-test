import { ChevronLeft, Laptop, Smartphone, Trash } from "lucide-react";

interface Device {
  id: number;
  name: string;
  status: string;
  lastSeen: string;
  icon: JSX.Element;
}

interface DeviceProperties {
  openDeleteDeviceModal: () => void;
  handleCancelClick: () => void;
}

const devices: Device[] = [
  {
    id: 1,
    name: "Iphone 14 Pro Max",
    status: "Active",
    lastSeen: "2024-08-01",
    icon: <Smartphone />,
  },
  {
    id: 2,
    name: "HP Spectre",
    status: "Inactive",
    lastSeen: "2024-08-02",
    icon: <Laptop />,
  },
  {
    id: 3,
    name: "Macbook Pro",
    status: "Active",
    lastSeen: "2024-08-02",
    icon: <Laptop />,
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    status: "Active",
    lastSeen: "2024-08-02",
    icon: <Smartphone />,
  },
];

const RenderDevicesLoggedIn: React.FC<DeviceProperties> = ({
  openDeleteDeviceModal,
  handleCancelClick,
}) => (
  <div className="relative flex w-full flex-col">
    <div className="flex items-center justify-between">
      <button
        className="rounded-full bg-gray-100 p-2"
        onClick={handleCancelClick}
      >
        <ChevronLeft size={20} className="text-black" />
      </button>
      <button
        className="absolute right-0 rounded-3xl bg-orange-500 px-8 py-3 text-xs text-white md:px-12 md:text-sm"
        aria-label="Sign out of all devices"
      >
        Sign-out of all devices
      </button>
    </div>
    <div className="mt-10 w-full">
      <table
        className="w-full border-collapse bg-white"
        aria-label="Devices table"
      >
        <thead className="h-14 rounded-t-xl bg-gray-50 font-axiformaSemiBold">
          <tr>
            <th className="px-4 py-2 text-left text-xs lg:text-sm">
              Device you are logged in
            </th>
            <th className="px-4 py-2 text-left text-xs lg:text-sm">Status</th>
            <th className="px-4 py-2 text-left text-xs lg:text-sm">
              Last Seen
            </th>
            <th className="px-4 py-2 text-left text-xs lg:text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr
              key={device.id}
              className={`border-b text-xs md:text-sm ${device.status === "Inactive" ? "bg-red-50" : ""}`}
            >
              <td className="flex items-center space-x-3 px-4 py-2">
                <div className="rounded-full bg-gray-50 p-2">{device.icon}</div>
                <div className="font-axiforma">{device.name}</div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <span
                    className={`mr-2 h-1.5 w-1.5 rounded-full ${device.status === "Inactive" ? "bg-red-400" : "bg-green-400"}`}
                    aria-label={`Status: ${device.status}`}
                  />
                  {device.status}
                </div>
              </td>
              <td className="px-4 py-2">{device.lastSeen}</td>
              <td className="px-4 py-2">
                <button
                  onClick={openDeleteDeviceModal}
                  aria-label={`Delete ${device.name}`}
                >
                  <Trash size={16} className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RenderDevicesLoggedIn;
