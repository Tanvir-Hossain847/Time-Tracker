"use client"
import React from 'react'
import Header from './Header'
import InProgress from './InProgress'
import Cards from './Cards';

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
    <div className='flex flex-col h-full flex-1 min-w-0 bg-secondary/50 p-8'>
        <section>
            <Header/>
        </section>

        <section>
            <InProgress/>
        </section>

        <section>
            <div className="flex flex-col gap-3 w-139 h-66.75 flex-1">
        {tasks.map((task, i) => <Cards key={task.id} task={task} priorityDot={priorityDot} first={i === 0} />)}
      </div>
        </section>
    </div>
  )
}
