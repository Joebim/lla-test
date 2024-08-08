import { Card, CardContent } from "../ui/card";

interface metricsProperties {
  title: string;
  stat: number;
  desc: string;
  icon: React.ReactNode;
}

const UserMetricsCard = ({ title, stat, desc, icon }: metricsProperties) => {
  return (
    <Card className="h-fit w-full rounded-[10px] border-[1px] border-secondary-10 bg-transparent pt-[13px] font-axiforma">
      <CardContent>
        <div className="flex items-center justify-between">
          <h3 className="text-[13px] font-bold text-neutral-110">{title}</h3>
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-neutral-30">
            {icon}
          </div>
        </div>
        <h3 className="mt-[15px] font-lilita text-[20px] font-semibold text-primary-80">
          {stat}
        </h3>
        <p className="text-[12px]">
          <span className="text-primary-60">-8%</span> {desc}
        </p>
      </CardContent>
    </Card>
  );
};

export default UserMetricsCard;
