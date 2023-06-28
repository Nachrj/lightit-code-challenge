"use client";

import Image from "next/image";

export default function ArrowsButtons() {
  return (
    <div className="flex justify-center m-6">
      <div className="bg-white rounded relative w-20 h-20">
        <button
          onClick={() => console.log("Up Arrow")}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 p-1 flex flex-col items-center justify-center"
        >
          <Image
            src="/images/Flecha.png"
            alt="top arrow"
            width={20}
            height={20}
            priority
          />
        </button>
        <button
          onClick={() => console.log("Left Arrow")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 flex flex-col items-center justify-center"
        >
          <Image
            src="/images/Flecha.png"
            alt="left arrow"
            width={20}
            height={20}
            priority
            style={{ transform: "rotate(-90deg)" }}
          />
        </button>
        <button
          onClick={() => console.log("Down Arrow")}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 flex flex-col items-center justify-center"
        >
          <Image
            src="/images/Flecha.png"
            alt="bottom arrow"
            width={20}
            height={20}
            priority
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <button
          onClick={() => console.log("Right Arrow")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 flex flex-col items-center justify-center"
        >
          <Image
            src="/images/Flecha.png"
            alt="right arrow"
            width={20}
            height={20}
            priority
            style={{ transform: "rotate(90deg)" }}
          />
        </button>
      </div>
    </div>
  );
}
