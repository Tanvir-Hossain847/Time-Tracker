import Navbar from "@/components/Navbar/Navbar";
import Tasks from "@/components/Tasks";
import Timer from "@/components/Timer/Timer";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex overflow-hidden w-262.5 h-124.25 rounded-xl bg-background border-1 border-muted-foreground/20">
        <Navbar />
        <Tasks />
        <Timer />
      </div>
    </div>
  );
}
