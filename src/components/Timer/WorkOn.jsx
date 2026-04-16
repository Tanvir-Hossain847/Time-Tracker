import React from 'react'

export default function WorkOn() {
  return (
    <div className='flex items-center gap-2.75 my-3'>
      <div className="flex items-center justify-center rounded-sm bg-card px-1.5 py-6">
        <h4 className='rotate-180 tracking-wide select-none text-[9.5px] text-foreground/75 [writing-mode:vertical-lr]'>WORK ON</h4>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-1 w-68.75 items-center justify-between rounded-sm bg-card px-3 py-2.25 cursor-pointer">
            <h4 className='font-normal'>UI/UX Designer</h4>
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <div className="flex flex-1 w-68.75 items-center justify-between rounded-sm bg-card px-3 py-2.25 cursor-pointer">
            <h4 className='text-muted-foreground font-medium text-[14px]'>Time Tracker Dashboard</h4>
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </div>
    </div>
  )
}
