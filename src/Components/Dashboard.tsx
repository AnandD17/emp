import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const progressApp = [
    {
      title: "Productivity on Monday",
      percent: 4,
    },
    {
      title: "Productivity on Tuesday",
      percent: 24,
    },
    {
      title: "Productivity on Wednesday",
      percent: 54,
    },
    {
      title: "Productivity on Thursday",
      percent: 24,
    },
    {
      title: "Productivity on Friday",
      percent: 22,
    },
    {
      title: "Productivity on Saturday",
      percent: 10,
    },
    {
      title: "Productivity on Sunday",
      percent: 9,
    },
  ];

  return (
    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col p-[15px] ">
      <div className="relative rounded-[20px] pb-[40px]  w-[100%]">
        <div className="absolute h-[100%] w-[100%] left-0 top-0 bg-box rounded-[20px]"></div>
        <div className="h-[45px] bg-box-input rounded-[20px] flex items-center justify-center">
          <p className="text-[#FFFFFFB3] text-center text-md">
            Employee Productivity Dashboard
          </p>
        </div>
        <div className="mt-[42px] px-[15px] flex flex-col gap-[20px]">
          {progressApp.map((item, index) => (
            <Progress key={index} title={item.title} percent={item.percent} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProgressProps {
  title: string;
  percent: number;
}

const Progress = ({ title, percent }: ProgressProps) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex justify-between w-[75%] mx-auto">
        <p className="text-sm text-[#fff]">{title}</p>
        <p className="text-primary_text">{percent}%</p>
      </div>
      <div className="w-[100%] relative h-[12px]">
        <div
          style={{
            width: `${percent}%`,
          }}
          className={`h-[100%] absolute left-0  border-[1px] bg-[#36A54680] border-[#36A546] rounded-[20px]`}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
