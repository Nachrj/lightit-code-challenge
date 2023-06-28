import SetAndDelete from "@/components/SetAndDelete";
import ArrowsButtons from "@/components/arrowsButtons";
import ZoomButtons from "@/components/zoomButtons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-neutral-400">
      <SetAndDelete />
      <div className="flex-grow flex justify-end items-end mb-4">
        <ZoomButtons />
        <ArrowsButtons />
      </div>
    </main>
  );
}
