import Image from "next/image";
import Breadcrumb from "./breadcrumb";

export default function Products({
  title,
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <div className="p-4">
      <Breadcrumb title={title} setSelectedProduct={setSelectedProduct} />
      <span className=".bg-black text-lg font-semibold">
        {selectedProduct.name}
      </span>
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
  );
}
