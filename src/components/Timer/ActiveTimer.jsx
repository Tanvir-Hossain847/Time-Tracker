import React from 'react'

export default function ActiveTimer() {
  return (
    <div className='rounded-md w-78 mt-1 flex justify-between items-center gap-3 h-22 p-4 bg-card border-[1.5px] border-primary/50'>
      <div className="flex items-center gap-3">
        <div className="">
            <svg width="31" height="33" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.65002 1.15H13.65" stroke="#B9BDC6" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.15 16.15L14.9 12.4" stroke="#B9BDC6" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.15 26.15C16.6729 26.15 21.15 21.6728 21.15 16.15C21.15 10.6272 16.6729 6.15 11.15 6.15C5.62718 6.15 1.15002 10.6272 1.15002 16.15C1.15002 21.6728 5.62718 26.15 11.15 26.15Z" stroke="#B9BDC6" strokeWidth="2.3" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="flex flex-col leading-tight mt-2">
            <div className="flex items-center gap-4">
                <h4 className='text-[9.5px] font-semibold text-foreground/60'>ACTIVE TIMER</h4>

                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.350572 5.11451V2.38692C0.378927 1.2549 1.36555 0.352109 2.56918 0.356465H6.41903L9.34998 3.22927V8.2202C9.35866 9.36148 8.40386 10.3035 7.19213 10.3498H2.56918C2.55124 10.3503 2.53388 10.3498 2.51594 10.3498C1.29322 10.3242 0.323953 9.37074 0.350572 8.2202V7.02027" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.26691 0.349998V1.93396C6.26691 2.70716 6.93122 3.33389 7.75292 3.33606" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.15881 7.21535H3.034" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.97526 5.17214H3.03326" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <foreignObject x="2.35004" y="2.35" width="14" height="14"><div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:"blur(1.5px)",clipPath:"url(#bgblur_0_153_2015_clip_path)",height:"100%",width:"100%"}}></div></foreignObject><g data-figma-bg-blur-radius="3">
                <rect x="5.35004" y="5.35" width="8" height="8" rx="4" fill="#02439F" fillOpacity="0.3"/>
                <path d="M9.35004 7.85V10.85M10.85 9.35H7.85004" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="bgblur_0_153_2015_clip_path" transform="translate(-2.35004 -2.35)"><rect x="5.35004" y="5.35" width="8" height="8" rx="4"/>
                </clipPath></defs>
                </svg>
            </div>
            <div className="">
                <h2 className='text-[30px]'>00:00 <span  className='text-lg -ms-1.5'>00</span></h2>
            </div>
        </div>
      </div>
      <div className="w-13 h-13 rounded-xl bg-destructive grid place-content-center ">
        <div className="w-4 h-4 rounded-xs bg-white"></div>
      </div>
    </div>
  )
}
