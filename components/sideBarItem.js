import '@/app/globals.css'
import Image from 'next/image'

export default function SideBarItem({ title, icon }) {
    return (
        <li>
            <button className="flex flex-col items-center w-full px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
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