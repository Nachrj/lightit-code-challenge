import '@/app/globals.css'
import Image from 'next/image'

export default function SideBarItem({ id, title, icon, setSelectedItem }) {
    return (
        <li>
            <button onClick={() => setSelectedItem(id)} className="flex flex-col items-center w-full px-2 py-2 text-sm font-medium text-neutral-900 rounded-md hover:bg-neutral-200 hover:text-neutral-900 focus:outline-none focus:bg-neutral-200 focus:text-neutral-900">
                <Image
                    src={`/images/${icon}.png`}
                    alt="Light it logo"
                    width={30}
                    height={30}
                    priority
                    className="flex-grow"
                />
                <span style={{ fontSize: ".7em" }} className="justify-center">{title}</span>
            </button>
        </li>
    )
}