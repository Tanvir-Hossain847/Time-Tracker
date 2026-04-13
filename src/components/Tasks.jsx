"use client";
import Image from "next/image";
import { Clock } from "lucide-react";

const tasks = [
  { id: 1, title: "Timetracker Dashboard App Redesign", category: "UI/UX Designer", priority: "High", time: "2:44:01" },
  { id: 2, title: "Dashboard Wireframe Design", category: "UI/UX Designer", priority: "Medium", time: "2:44:01" },
  { id: 3, title: "Acrylic Nail Extension Course", category: "UI/UX Designer", priority: "Low", time: "2:44:01" },
];

const priorityDot = {
  High: "bg-destructive",
  Medium: "bg-chart-3",
  Low: "bg-chart-1",
};

export default function Tasks() {
  return (
    <div className="flex flex-col h-full flex-1 min-w-0 bg-secondary/50 p-8">

      {/* Header */}
      <div className="flex justify-between mb-5 items-center">
        <div>
          <h1 className="text-foreground ">Tasks</h1>
          <h2 className="text-muted-foreground mt-0.5">Manage your projects and track progress</h2>
        </div>
        <button
          className="flex items-center justify-center mr-[10px] rounded-md rotate-45 w-[39.56px] h-[39.56px] bg-primary  transition-opacity hover:opacity-80"
          aria-label="Add task"
        >
          <Image src="/plus.svg" alt="add" width={16} height={16} className="p-[2px] -rotate-45"/>
        </button>
      </div>

      {/* Filter badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 rounded-full px-[16px] py-[10px] border border-muted">
          <h2 className="font-medium text-foreground">In Progress</h2>
          <span className="flex items-center justify-center rounded-full w-[23px] h-[23px] bg-muted text-[#B9BDC6] text-[10px]">
            3
          </span>
        </div>
      </div>

      {/* Task list */}
      <div className="flex flex-col gap-3 w-[556px] h-[267px] flex-1">
        {tasks.map((task, i) => <TaskRow key={task.id} task={task} first={i === 0} />)}
      </div>

    </div>
  );
}

function TaskRow({ task, first }) {
  return (
    <div className={`flex items-center justify-between rounded-sm px-5 py-2.5 min-h-[81px] ${first ? "bg-primary/10 border border-primary/40" : "bg-secondary"}`}>

      {/*border*/}
      <div className={`h-12 w-1 bg-primary -ms-[20px] mr-5 ${first ? "opacity-100" : "opacity-35"}`}></div>

      {/* Left */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <h3 className=" text-foreground font-medium">{task.title}</h3>
        <h2 className=" text-muted-foreground">{task.category}</h2>
      </div>

      {/* Right */}
      <div className="flex items-start gap-5">
        <div className="flex items-start gap-1.5">
          <div className={`rounded-full w-[7px] h-[7px] -mt-4 mr-2 ${priorityDot[task.priority]}`} />
          <h2 className=" -mt-[22px] -ml-2">{task.priority}</h2>
        </div>
        <div className="flex items-start gap-1">
          <Clock size={12} className="text-muted-foreground -mt-4.5 mr-2" />
          <h2 className=" text-muted-foreground -mt-[22px] -ml-2 leading-relaxed">{task.time}</h2>
        </div>
      </div>

    </div>
  );
}
