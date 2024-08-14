import { FC } from "react";

import { Switch } from "./switch";

interface IProperties {
  onToggle?: () => void;
  checked: boolean;
}

const SwitchToggle: FC<IProperties> = ({ onToggle, checked }) => {
  return (
    <Switch
      className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-neutral-40"
      onCheckedChange={onToggle}
      checked={checked}
    />
  );
};

export default SwitchToggle;
