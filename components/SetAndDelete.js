"use client";

export default function SetAndDelete() {
  return (
    <div className="flex justify-end m-6">
      <button
        onClick={() => console.log("Fijar")}
        className="w-24 rounded-xl bg-white px-4 py-3 mr-4"
      >
        Fijar
      </button>
      <button
        onClick={() => console.log("Borrar")}
        className="w-24 rounded-xl bg-white px-4 py-3"
      >
        Borrar
      </button>
    </div>
  );
}
