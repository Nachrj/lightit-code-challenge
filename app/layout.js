import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import SideBarItem from '@/components/sideBarItem'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Light-it Challenge',
  description: 'Code challenge for Light-it',
}

export default function RootLayout({ children }) {
  const items = [
    {
      title: 'Aberturas',
      icon: 'Aberturas'
    },
    {
      title: 'Equipamiento',
      icon: 'Equipamiento'
    },
    {
      title: 'Terminaciones',
      icon: 'Terminaciones'
    }
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col md:flex-row flex-1">
          <aside className="bg-white w-full md:w-24">
            <nav>
              <ul>
                {items.map((item, index) => (
                  <SideBarItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </nav>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
