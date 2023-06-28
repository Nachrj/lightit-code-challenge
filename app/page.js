import ArrowsButtons from '@/components/arrowsButtons'
import ZoomButtons from '@/components/zoomButtons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-grey-900">
      <div className="flex justify-end m-6">
        <button className="w-24 rounded-xl bg-white px-4 py-3 mr-4">Fijar</button>
        <button className="w-24 rounded-xl bg-white px-4 py-3">Borrar</button>
      </div>
      <div className="flex-grow flex justify-end items-end">
      <ZoomButtons />
      <ArrowsButtons />
      </div>
    </main>
  )
}
