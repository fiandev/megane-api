import * as FaIcons from "react-icons/fa";

export default function Statistic({ icon, value }) {
  let Icon = FaIcons[icon];

  return (
    <div className="flex items-center gap-0.5">
      <Icon className="w-4 h-4 text-primary" />
      <span className="font-semibold">{value}</span>
    </div>
  );
}
