import Navbar from "@/components/Navbar/Navbar";
import Tasks from "@/components/Tasks";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex overflow-hidden w-[1050px] h-[497px] rounded-2xl bg-background">
        <Navbar />
        <Tasks />
        <Timer />
      </div>
    </div>
  );
}
