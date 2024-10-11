"use client";

import { FC } from 'react';
import useProduct from '@/hooks/useProduct';

const Categories: FC = () => {
  const { categories} = useProduct();

  return (
    <div className='p-5 flex gap-5 overflow-x-auto'>
        {categories.map((category) => (
            <div key={category} className='whitespace-nowrap text-lg'>{category}</div>
        ))}
    </div>
  );
};

export default Categories;
