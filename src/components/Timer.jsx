"use client";
import Image from "next/image";
import { RefreshCw, ChevronDown, Timer as TimerIcon } from "lucide-react";

export default function Timer() {
  return (
    <div className="flex flex-col h-full w-[344px] shrink-0 bg-secondary border-l border-border p-3.5 gap-2.5">

      <div className="flex gap-1 -mt-2 -ml-2">
        <div className="w-2 h-2 bg-[#D74242] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F49D25] rounded-full"></div>
        <div className="w-2 h-2 bg-[#918989] rounded-full"></div>
      </div>

      {/* Active Timer Card */}
      <div className="rounded-md w-[312px] mt-1 flex items-center gap-3 h-[88px] p-4 bg-muted-foreground/6 border-[1.5px] border-primary/50">

        <div className="">
          <Image src="/Clock.svg" alt="clock" width={25} height={30} />
        </div>

        <div className="w-full">
          <div className="flex items-center gap-5 mt-1">
            <h5 className="text-[9.5px] font-semibold text-foreground/60">ACTIVE TIMER</h5>
            <Image src="/add-file.svg" alt="add" width={14} height={14} className="ml-0.5" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[32px] font-bold text-foreground/90 leading-none">
              00:00<span className="text-[18px] font-semibold">00</span>
            </  span>
            <button
              className="flex items-center -mt-4 justify-center w-12 h-12 bg-destructive rounded-[14px] shrink-0"
              aria-label="Stop timer"
            >
              <span className="block w-4 h-4 bg-white rounded-[3px]" />
            </button>
          </div>
        </div>
      </div>


      {/* Work On Card */}
      <div className="flex items-center gap-2 my-3">

        <div className="flex items-center justify-center rounded-md bg-muted-foreground/6 px-2 py-6.5">
          <h5 className="rotate-180 select-none text-[9.5px] font-bold text-foreground-90 [writing-mode:vertical-lr]">
            WORK ON
          </h5>
        </div>

        <div className="flex flex-col gap-2">

          <div className="flex flex-1 w-[275px] items-center justify-between rounded-md bg-muted-foreground/6 px-4 py-3 transition-colors hover:bg-[#22262d] cursor-pointer">
            <h3 className="font-medium">UI/UX Designer</h3>
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="flex w[275px] items-center justify-between rounded-md bg-muted-foreground/6 px-4 py-3 transition-colors hover:bg-[#22262d] cursor-pointer">
            <h2 className="font-medium">Time Tracker Dashboard</h2>
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="w-[312px]">

      
      <div className="bg-muted-foreground/6 rounded-t-md px-4 py-5 border-b-2 border-sidebar">
        <div className="flex justify-between h-[49px] items-center ">
          <div className="flex gap-3 items-center">
            <div className="bg-[#223544] w-[46px] h-[46px] grid place-content-center rounded-lg">
              <Image src="/Vector.svg" alt="sidebar" width={18} height={18} className="" />
            </div>
            <div className="">
              <h5 className="text-[12.5px] font-medium text-foreground/60">Today</h5>
              <h5 className="text-[20px] font-bold">2h 44m</h5>
            </div>
          </div>
          <div className="">
            <Image src="/Green70.svg" alt="sidebar" width={49} height={49} className="" />
          </div>
        </div>
      </div>

      <div className="bg-muted-foreground/6 rounded-b-md px-4 py-5">
        <div className="flex justify-between h-[49px] items-center ">
          <div className="flex gap-3 items-center">
            <div className="bg-[#223544] w-[46px] h-[46px] grid place-content-center rounded-lg">
              <Image src="/calander.svg" alt="sidebar" width={18} height={18} className="" />
            </div>
            <div className="">
              <h5 className="text-[11.5px] font-medium text-foreground/60">THIS WEEK</h5>
              <h5 className="text-[20px] font-bold">2h 44m</h5>
            </div>
          </div>
          <div className="">
            <Image src="/Red30.svg" alt="sidebar" width={49} height={49} className="" />
          </div>
        </div>
      </div>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="">
        <button aria-label="Collapse sidebar">
          <Image src="/sidebar.svg" alt="sidebar" width={18} height={18} />
        </button>
        </div>
        <div className="flex items-center gap-6">
        <h2 className="font-bold text-foreground">Version 0.0.4</h2>
        <button className="flex items-center gap-1.5 text-[#2BB0F3] transition-opacity hover:opacity-70" aria-label="Sync">
          <RefreshCw size={15} />
          <span className="text-[13px]">Sync</span>
        </button>
        </div>
      </div>

    </div>
  );
}

function StatRow({ iconSrc, label, value, ringImg }) {
  return (
    <div className="flex items-center justify-between rounded-xl px-3 py-3 bg-accent border border-border">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center rounded-xl w-11 h-11 bg-secondary shrink-0">
          <Image src={iconSrc} alt={label} width={20} height={20} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold text-muted-foreground tracking-[0.08em]">{label}</span>
          <span className="text-[20px] font-bold text-foreground">{value}</span>
        </div>
      </div>
      <Image src={ringImg} alt={label} width={56} height={56} />
    </div>
  );
}
