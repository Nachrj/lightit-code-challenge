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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col md:flex-row flex-1">
          <aside className="bg-white w-full md:w-60">
            <nav>
              <ul>
                <SideBarItem 
                  title="Aberturas"
                  icon="Aberturas"
                />
                <SideBarItem 
                  title="Equipamiento"
                  icon="Equipamiento"
                />
                <SideBarItem 
                  title="Terminaciones"
                  icon="Terminaciones"
                />
              </ul>
            </nav>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
