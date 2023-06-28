'use client';

import { DEFAULT_SELECTED_PRODUCT } from '../utils/constants'

export default function Breadcrumb({ title, setSelectedProduct }) {
    return (
      <div className="pb-4 flex items-center" onClick={() => setSelectedProduct(DEFAULT_SELECTED_PRODUCT)}>
        <button className="text-gray-400">&lt; {title}</button>
      </div>
    )
  }