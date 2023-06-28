'use client';
import React, { useEffect, useState } from 'react'
import SideBarItem from "./sideBarItem"
import SideBarTab from "./sideBarTab"
import Image from 'next/image';

const ITEMS = [
    {
        id: 1,
        title: 'Aberturas',
        icon: 'Aberturas'
    },
    {
        id: 2,
        title: 'Equipamiento',
        icon: 'Equipamiento'
    },
    {
        id: 3,
        title: 'Terminaciones',
        icon: 'Terminaciones'
    }
]    

export default function SideBar({ children }) {
    const [selectedItem, setSelectedItem] = useState(0)
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    }

    const handleItemSelection = (id) => {
        setSelectedItem(id)
        setIsOpen(true)
    }

    return (
        <div className="flex flex-col md:flex-row flex-1">
            <nav className='flex h-screen justify-center items-center'>
                <ul>
                    {ITEMS.map((item) => (
                        <SideBarItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            icon={item.icon}
                            setSelectedItem={handleItemSelection}
                        />
                    ))}
                </ul>
            </nav>
            {ITEMS.map((item) => (
                <SideBarTab
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    selectedItem={selectedItem}
                    isOpen={isOpen}
                />
            ))}
            { selectedItem !== 0 && (
            <div className='bg-neutral-400 flex items-center'>
                <button onClick={() => toggleOpen()} className='trapezoid bg-neutral-200 h-20'>
                    <Image 
                        src="/images/activo.png"
                        alt="arrow"
                        width={15}
                        height={15}
                        priority
                        className={!isOpen ? 'rotate-180' : ''}
                        placeholder="empty"
                    />
                </button>
            </div>
            )}
            <main className="flex-1">{children}</main>
        </div>
    )
}