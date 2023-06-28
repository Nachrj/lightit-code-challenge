"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumb from "./breadcrumb";
import { DEFAULT_SELECTED_PRODUCT } from "../utils/constants";
import Categories from "./categories";
import Products from "./products";

export default function SideBarTab({ id, title, selectedItem, isOpen }) {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(
    DEFAULT_SELECTED_PRODUCT
  );

  useEffect(() => {
    fetch(
      `https://us-central1-prueba-front-280718.cloudfunctions.net/${title.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [title]);

  // I am not a fan of the useEffect with the selectedItem dependencie,
  // but it is a way to solve this problem.
  useEffect(() => {
    if (selectedItem !== id) {
      setSelectedProduct(DEFAULT_SELECTED_PRODUCT);
    }
  }, [id, selectedItem]);

  const handleButton = (item) => {
    const mappedProducts = {
      name: item.name,
      items: item.items,
    };
    setSelectedProduct(mappedProducts);
  };

  return (
    selectedItem === id &&
    isOpen && (
      <div
        className={`bg-neutral-200 w-1/4 rounded-t-md shadow-md transition-transform duration-300 transform`}
      >
        {selectedProduct.items.length === 0 ? (
          // don't really know if categories and
          // products is the best way to describe this items.
          <Categories title={title} data={data} handleButton={handleButton} />
        ) : (
          <Products
            title={title}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        )}
      </div>
    )
  );
}
