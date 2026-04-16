"use client";
import { RefreshCw } from "lucide-react";
import Image from "next/image";

export default function Timer() {
  return (
    <div className="flex flex-col h-full w-[344px] shrink-0 bg-secondary border-l border-border p-3.5 gap-2.5">

      <div className="flex gap-1 -mt-2 -ml-2">
        <div className="w-[11px] h-[11px] bg-[#D74242] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#F49D25] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#918989] rounded-full" />
      </div>

      {/* Active Timer Card */}
      <div className="rounded-md w-[312px] mt-1 flex items-center gap-3 h-[88px] p-4 bg-card border-[1.5px] border-primary/50">
        <div className="text-muted-foreground">
          <svg width="25" height="30" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.65002 1.15H13.65" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.15 16.15L14.9 12.4" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.15 26.15C16.6729 26.15 21.15 21.6728 21.15 16.15C21.15 10.6272 16.6729 6.15 11.15 6.15C5.62718 6.15 1.15002 10.6272 1.15002 16.15C1.15002 21.6728 5.62718 26.15 11.15 26.15Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-5 mt-1">
            <h5 className="text-[9.5px] font-semibold text-foreground/60">ACTIVE TIMER</h5>
            <div className="text-muted-foreground ml-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.350572 5.11451V2.38692C0.378927 1.2549 1.36555 0.352109 2.56918 0.356465H6.41903L9.334998 3.22927V8.2202C9.35866 9.36148 8.40386 10.3035 7.19213 10.3498H2.56918C2.55124 10.3503 2.53388 10.3498 2.51594 10.3498C1.29322 10.3242 0.323953 9.37074 0.350572 8.2202V7.02027" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.26691 0.349998V1.93396C6.26691 2.70716 6.93122 3.33389 7.75292 3.33606" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.15881 7.21535H3.034" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.97526 5.17214H3.03326" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="5.35004" y="5.35" width="8" height="8" rx="4" fill="#02439F" fillOpacity="0.3"/>
                <path d="M9.35004 7.85V10.85M10.85 9.35H7.85004" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[32px] font-bold text-foreground/90 leading-none">
              00:00<span className="text-[18px] font-semibold">00</span>
            </span>
            <button className="flex items-center -mt-4 justify-center w-12 h-12 bg-destructive rounded-[14px] shrink-0" aria-label="Stop timer">
              <div className="block w-4 h-4 bg-white rounded-[3px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Work On Card */}
      <div className="flex items-center gap-2.75 my-3">
        <div className="flex items-center justify-center rounded-sm bg-card px-1.5 py-6">
          <p className="rotate-180 select-none text-[9.5px] text-foreground/75 [writing-mode:vertical-lr]">WORK ON</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-1 w-68.75 items-center justify-between rounded-sm bg-card px-3 py-2.25 cursor-pointer">
            <h3 className="font-medium">UI/UX Designer</h3>
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex w-[275px] items-center justify-between rounded-sm bg-card px-[12px] py-[9px] cursor-pointer">
            <h2 className="text-muted-foreground font-medium tracking-tight">Time Tracker Dashboard</h2>
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-78">
        <div className="bg-card rounded-t-md px-4 py-5 border-b-2 border-sidebar">
          <div className="flex justify-between h-12.25 items-center">
            <div className="flex gap-3.5 items-center">
              <div className="bg-chart-2 w-11.5 h-11.5 grid place-content-center rounded-lg text-white">
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.90002 14.2158C5.65779 14.2158 6.38451 13.9108 6.92033 13.368C7.45615 12.8251 7.75717 12.0888 7.75717 11.3211C7.75717 9.72318 7.18574 9.00529 6.61431 7.84739C5.38917 5.36602 6.35831 3.15329 8.90002 0.900024C9.47145 3.79476 11.1857 6.57371 13.4715 8.42634C15.7572 10.279 16.9 12.479 16.9 14.7948C16.9 15.8592 16.6931 16.9131 16.2911 17.8965C15.889 18.8799 15.2997 19.7734 14.5569 20.526C13.814 21.2787 12.9321 21.8757 11.9615 22.283C10.9909 22.6904 9.9506 22.9 8.90002 22.9C7.84945 22.9 6.80916 22.6904 5.83856 22.283C4.86795 21.8757 3.98604 21.2787 3.24317 20.526C2.5003 19.7734 1.91103 18.8799 1.50899 17.8965C1.10695 16.9131 0.900024 15.8592 0.900024 14.7948C0.900024 13.4597 1.39488 12.1386 2.04288 11.3211C2.04288 12.0888 2.3439 12.8251 2.87972 13.368C3.41554 13.9108 4.14226 14.2158 4.90002 14.2158Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="mt-1.5 -space-y-0.5">
                <h5 className="text-[11px] font-medium text-foreground/80 tracking-wide uppercase ">Today</h5>
                <h5 className="text-[20px] font-semibold">2h 44m</h5>
              </div>
            </div>
            <Image src="/Green70.svg" alt="70%" width={49} height={49} />
          </div>
        </div>
        <div className="bg-card rounded-b-md px-4 py-5">
          <div className="flex justify-between h-[49px] items-center">
            <div className="flex gap-3.5 items-center">
              <div className="bg-chart-2 w-[46px] h-[46px] grid place-content-center rounded-lg text-white">
                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57208 0.850006V4.62779" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.1279 0.850006V4.62779" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.9611 2.73907H2.73886C1.69566 2.73907 0.849976 3.58476 0.849976 4.62797V17.8502C0.849976 18.8934 1.69566 19.7391 2.73886 19.7391H15.9611C17.0043 19.7391 17.85 18.8934 17.85 17.8502V4.62797C17.85 3.58476 17.0043 2.73907 15.9611 2.73907Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0.849976 8.40579H17.85" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.57208 12.1833H5.58097" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.34998 12.1833H9.35886" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.1279 12.1833H13.1368" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.57208 15.9612H5.58097" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.34998 15.9612H9.35886" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.1279 15.9612H13.1368" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="mt-1.5 -space-y-0.5">
                <h5 className="text-[11.5px] text-foreground/80 tracking-wide">THIS WEEK</h5>
                <h5 className="text-[20px] font-bold">2h 44m</h5>
              </div>
            </div>
            <Image src="/Red30.svg" alt="30%" width={49} height={49} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <button aria-label="Collapse sidebar" className="text-muted-foreground">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.52778 0.75H14.9722C15.9541 0.75 16.75 1.54594 16.75 2.52778V14.9722C16.75 15.9541 15.9541 16.75 14.9722 16.75H2.52778C1.54594 16.75 0.75 15.9541 0.75 14.9722V2.52778C0.75 1.54594 1.54594 0.75 2.52778 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4166 0.75V16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.19489 11.4158L7.86115 8.7496L5.19489 6.08334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex items-center gap-6">
          <h2 className="text-foreground">Version 0.0.4</h2>
          <button className="flex items-center gap-1.5 text-[#2BB0F3] transition-opacity hover:opacity-70" aria-label="Sync">
            <RefreshCw size={15} />
            <p className="text-[13px]">Sync</p>
          </button>
        </div>
      </div>

    </div>
  );
}
