import { FC } from "react";

import { Switch } from "./switch";

interface IProperties {
  onToggle: (key: string) => void;
  checked: boolean;
  key: string;
}

const SwitchToggle: FC<IProperties> = ({ onToggle, checked, key }) => {
  return (
    <Switch
      className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-neutral-40"
      onClick={() => onToggle(key)}
      checked={checked}
    />
  );
};

export default SwitchToggle;
