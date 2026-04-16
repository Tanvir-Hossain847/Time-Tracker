import { Clock } from "lucide-react";
import React from "react";

export default function Cards({ task, first, priorityDot }) {
  return (
    <div>
      <div
        className={`flex items-center justify-between rounded-sm px-4.5 py-2.5 min-h-20.25 ${first ? "bg-primary/10 border border-primary/40" : "bg-secondary"}`}
      >
        <div
          className={`h-12 w-1 bg-primary -ms-4.5 mr-5 ${first ? "opacity-100" : "opacity-35"}`}
        />

        <div className="flex flex-col gap-1.5 tracking-normal flex-1 min-w-0">
          <h3 className="text-foreground font-medium text-[16px]">
            {task.title}
          </h3>
          <h2 className="text-muted-foreground/60  text-[14px]">
            {task.category}
          </h2>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-start gap-1.5">
            <div className={`${priorityDot[task.priority]} p-1 -mt-4`} />
            <h2 className="-mt-[21.5px] text-[14px]">{task.priority}</h2>
          </div>
          <div className="flex items-start">
            <Clock
              size={12}
              className="text-muted-foreground/60 -mt-4.5 mr-1.5"
            />
            <h2 className="text-muted-foreground/60 text-[14px] -mt-5.5">
              {task.time}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
