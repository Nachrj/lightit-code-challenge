import Image from 'next/image'

export default function ZoomButtons() {
    return (
        <div className="flex justify-end m-6">
        <div className="bg-white rounded">
          <button className="p-2 flex flex-col items-center justify-center">
            <Image 
                src="/images/+.png"
                alt="+"
                width={25}
                height={25}
                priority
              />
          </button>
          <button className="p-2 flex flex-col items-center justify-center">
            <Image 
              src="/images/-.png"
              alt="-"
              width={25}
              height={25}
              priority
            />
          </button>
        </div>
      </div>
    )
}