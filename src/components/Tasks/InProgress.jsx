import React from 'react'

export default function InProgress() {
  return (
    <div>
         <div className="flex items-center gap-2 mb-4 mt-1">
        <div className="flex items-center gap-2 rounded-full px-4.75 py-1.75 border border-muted-foreground/30">
          <h2 className="font-medium text-foreground text-[14px]">In Progress</h2>
          <div className="flex items-center justify-center rounded-full w-5.75 h-5.75 bg-muted text-muted-foreground text-[10px]">
            3
          </div>
        </div>
      </div>
    </div>
  )
}
