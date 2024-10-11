import useProduct from "@/hooks/useProduct"
import {Product} from '@/types/product'
import Image from "next/image"
import {FC} from 'react'

const Card:FC<Product> = ({price, weight, name, category, imageUrl, metadata}) => {
   
    return (
        <div className="flex flex-col gap-2 p-5 bg-[#F9F8F6] rounded-lg">
            <Image src={imageUrl} width={150} height={150} alt={name} className="h-auto w-full aspect-square mix-blend-multiply object-cover"></Image>
            <div>
                <div className="text-2xl font-bold">${price}</div>
                <div className="text-base">{name}</div>
            </div>
        </div>
    )
}

export default Card