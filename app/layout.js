import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Light-it Challenge',
  description: 'Code challenge for Light-it',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ backgroundColor: "#2b2b2b", height: 80, justifyContent: "space-around" }} className="sticky flex items-center font-semibold  text-white">
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
            <select id="dropdown" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected value="save-and-leave" >Guardar y salir</option>
              <option value="dont-save">Salir sin guardar</option>
              <option value="save">Guardar y continuar</option>
            </select>          
          </div>
        </header>
        {children}
        </body>
    </html>
  )
}
