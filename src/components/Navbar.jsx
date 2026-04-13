"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-col h-full w-[86px] bg-background border-r border-border shrink-0">
      <div className="flex flex-col items-center justify-between w-full h-full px-[11px] py-[24px]">

        {/* Top */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center justify-center rounded-full w-[38px] h-[38px] mb-2">
            <Image src="/LOGO.svg" alt="logo" width={38} height={38} />
          </div>
          <div className="space-y-1 w-[68px] text-center bg-chart-5/15 p-3 rounded-xl">
            <Image src="/Menu.svg" alt="logo" width={18} height={18} className="mx-auto" />
            <h4>Tasks</h4>
          </div>
          <div className="space-y-1">
            <Image src="/Settings.svg" alt="logo" width={20} height={20} className="mx-auto" />
            <h4>Settings</h4>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4">
          <button className="flex items-center justify-center rounded-lg p-2 transition-opacity hover:opacity-70" aria-label="Log out">
            <Image src="/log out.svg" alt="log out" width={18} height={18} />
          </button>
          <div className="flex items-center justify-center rounded-full w-[34px] h-[34px] bg-primary text-primary-foreground font-semibold text-[11px]">
            MR
          </div>
        </div>

      </div>
    </nav>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 w-full transition-colors ${
        active ? "bg-card text-foreground" : "bg-transparent text-muted-foreground"
      }`}
      aria-label={label}
    >
      <Image src={icon} alt={label} width={18} height={18} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
