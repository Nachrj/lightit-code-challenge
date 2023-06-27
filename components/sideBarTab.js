'use client';
import { useEffect, useState } from "react";
import Image from 'next/image'

const DEFAULT_SELECTED_PRODUCT = {
    name: '',
    items: []
}

export default function SideBarTab({ id, title, selectedItem }) {
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(DEFAULT_SELECTED_PRODUCT)

    useEffect(() => {
        fetch(`https://us-central1-prueba-front-280718.cloudfunctions.net/${title.toLowerCase()}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [title])

    useEffect(() => {
        if (selectedItem !== id) {
            setSelectedProduct(DEFAULT_SELECTED_PRODUCT)
        }
    }, [id, selectedItem])

    const handleButton = (item) => {
        const mappedProducts = {
            name: item.name,
            items: item.items
        }
        setSelectedProduct(mappedProducts)
    }

    return (
        selectedItem === id && (
            <div className={`bg-grey-100 w-1/5 rounded-t-md shadow-md transition-transform duration-300 transform`}>
                {selectedProduct.items.length === 0 ? (
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
                ) : (
                    <div className="p-4">
                        <span className=".bg-black text-lg font-semibold">{selectedProduct.name}</span>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {selectedProduct.items.map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Image 
                                        src={item.img} 
                                        alt={item.name}
                                        width={20}
                                        height={20}
                                        className="w-20 h-20 object-cover"
                                    />
                                    <span className="mt-2">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    );
}