import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between mb-5 items-center'>
      <div className="">
        <h1 className='text-foreground text-[24px] font-normal'>Tasks</h1>
        <h3 className='text-muted-foreground/60 text-[14px] font-normal'>Manage your projects and track progress</h3>
      </div>
      <div className="">
         <button
          className="flex items-center justify-center mr-2.5 rounded-md rotate-45 w-[39.56px] h-[39.56px] bg-primary transition-opacity hover:opacity-80"
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
    </div>
  )
}
