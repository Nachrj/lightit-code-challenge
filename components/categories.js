'use client';

import Image from 'next/image'

export default function Categories({ title, data, handleButton }) {
    return(
        <div className="p-4">
            <span className=".bg-black text-lg font-semibold">{title}</span>
            <div className="mt-4 grid grid-cols-1 gap-4">
                {data.map((item, index) => (
                    <button key={index} onClick={() => handleButton(item)} className="flex justify-between rounded-xl bg-white px-4 py-3">
                        <span>{item.name}</span>
                        <Image
                            src="/images/activo.png"
                            alt="right arrow"
                            width={15}
                            height={15}
                            priority
                            className="rotate-180"
                            placeholder="empty"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}