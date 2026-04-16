import { RefreshCw } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center justify-between mt-auto pt-2'>
      <div className="">
        <button aria-label="Collapse sidebar" className="text-aaccent">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.52778 0.75H14.9722C15.9541 0.75 16.75 1.54594 16.75 2.52778V14.9722C16.75 15.9541 15.9541 16.75 14.9722 16.75H2.52778C1.54594 16.75 0.75 15.9541 0.75 14.9722V2.52778C0.75 1.54594 1.54594 0.75 2.52778 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4166 0.75V16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.19489 11.4158L7.86115 8.7496L5.19489 6.08334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="">
            <h4 className='text-foreground text-[14px]'>Version 0.0.4</h4>
        </div>
        <div className="">
            <button className="flex items-center gap-1.5 text-[#2BB0F3] transition-opacity hover:opacity-70" aria-label="Sync">
            <RefreshCw size={15} />
            <p className="text-[13px]">Sync</p>
          </button>
        </div>
      </div>
    </div>
  )
}
