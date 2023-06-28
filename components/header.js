import "../app/globals.css";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#2b2b2b",
        height: 80,
        justifyContent: "space-around",
      }}
      className="sticky flex items-center font-semibold  text-white"
    >
      <div>
        <Image
          src="/light-it-logo.png"
          alt="Light it logo"
          width={100}
          height={24}
          priority
        />
      </div>
      <div>
        <select
          id="dropdown"
          defaultValue="save-and-leave"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="save-and-leave">Guardar y salir</option>
          <option value="dont-save">Salir sin guardar</option>
          <option value="save">Guardar y continuar</option>
        </select>
      </div>
    </header>
  );
}
