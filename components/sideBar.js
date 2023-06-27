'use client';
import React, { useState } from 'react'
import SideBarItem from "./sideBarItem"
import SideBarTab from "./sideBarTab"

export default function SideBar({ children }) {
    const [selectedItem, setSelectedItem] = useState(0)

    const items = [
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

    return (
        <div className="flex flex-col md:flex-row flex-1">
            <aside className="bg-white w-full md:w-24">
                <nav>
                <ul>
                    {items.map((item) => (
                    <SideBarItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        icon={item.icon}
                        setSelectedItem={setSelectedItem}
                    />
                    ))}
                </ul>
                </nav>
            </aside>
            {items.map((item) => (
                <SideBarTab
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    selectedItem={selectedItem}
                />
            ))}
            <main className="flex-1">{children}</main>
        </div>
    )
}