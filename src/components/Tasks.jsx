"use client";
import { Clock } from "lucide-react";

const tasks = [
  { id: 1, title: "Timetracker Dashboard App Redesign", category: "UI/UX Designer", priority: "High", time: "2:44:01" },
  { id: 2, title: "Dashboard Wireframe Design", category: "UI/UX Designer", priority: "Medium", time: "2:44:01" },
  { id: 3, title: "Acrylic Nail Extension Course", category: "UI/UX Designer", priority: "Low", time: "2:44:01" },
];

const priorityDot = {
  High: "rounded-full w-[7px] h-[7px] shrink-0 bg-destructive",
  Medium: "rounded-full w-[7px] h-[7px] shrink-0 bg-chart-3",
  Low: "rounded-full w-[7px] h-[7px] shrink-0 bg-chart-1",
};

export default function Tasks() {
  return (
    <div className="flex flex-col h-full flex-1 min-w-0 bg-secondary/50 p-8">

      {/* Header */}
      <div className="flex justify-between mb-5 items-center">
        <div>
          <h1 className="text-foreground">Tasks</h1>
          <h2 className="text-muted-foreground/60">Manage your projects and track progress</h2>
        </div>
        <button
          className="flex items-center justify-center mr-[10px] rounded-md rotate-45 w-[39.56px] h-[39.56px] bg-primary transition-opacity hover:opacity-80"
          aria-label="Add task"
        >
          <div className="-rotate-45">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 6.25015H11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.25 0.75V11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Filter badge */}
      <div className="flex items-center gap-2 mb-4 mt-1">
        <div className="flex items-center gap-2 rounded-full px-[19px] py-[7px] border border-muted-foreground/30">
          <h2 className="font-medium text-foreground">In Progress</h2>
          <div className="flex items-center justify-center rounded-full w-[23px] h-[23px] bg-muted text-muted-foreground text-[10px]">
            3
          </div>
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
    <div className={`flex items-center justify-between rounded-sm px-4.5 py-2.5 min-h-[81px] ${first ? "bg-primary/10 border border-primary/40" : "bg-secondary"}`}>

      <div className={`h-12 w-1 bg-primary -ms-[20px] mr-5 ${first ? "opacity-100" : "opacity-35"}`} />

      <div className="flex flex-col gap-1.5 tracking-normal flex-1 min-w-0">
        <h3 className="text-foreground font-medium">{task.title}</h3>
        <h2 className="text-muted-foreground/60">{task.category}</h2>
      </div>

      <div className="flex items-start gap-6">
        <div className="flex items-start gap-1.5">
          <div className={`${priorityDot[task.priority]} p-1 -mt-4`} />
          <h2 className="-mt-[21.5px]">{task.priority}</h2>
        </div>
        <div className="flex items-start">
          <Clock size={12} className="text-muted-foreground/60 -mt-4.5 mr-1.5" />
          <h2 className="text-muted-foreground/60 -mt-5.5">{task.time}</h2>
        </div>
      </div>

    </div>
  );
}
