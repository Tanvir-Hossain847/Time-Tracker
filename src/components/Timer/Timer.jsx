import React from 'react'
import ActiveTimer from './ActiveTimer'
import WorkOn from './WorkOn'
import Progress from './Progress'
import Footer from './Footer'

export default function Timer() {
  return (
    <div className='flex flex-col h-full w-[344px] shrink-0 bg-secondary border-l border-border p-3.5 gap-2.5'>
      <section>
        <div className="flex gap-1 -mt-2 -ml-2">
        <div className="w-2.75 h-2.75 bg-[#D74242] rounded-full" />
        <div className="w-2.75 h-2.75 bg-[#F49D25] rounded-full" />
        <div className="w-2.75 h-2.75 bg-[#918989] rounded-full" />
      </div>
      </section>

      <section>
        <ActiveTimer/>
      </section>
      
      <section>
        <WorkOn/>
      </section>
      
      <section>
        <Progress/>
      </section>
      
      <section>
        <Footer/>
      </section>
    </div>
  )
}
