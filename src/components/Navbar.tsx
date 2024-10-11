import {FC} from 'react'
import Image from 'next/image'

const Navbar:FC = () => {
    return (
        <header className='flex items-center justify-between px-10 pt-5 pb-3'>
            <h1 className='text-xl'>Vegetables</h1>
            <div className='flex gap-5'>
                <Image src='/icons/search.svg' alt='search-icon' height={24} width={24}/>
                <Image src='/icons/filter.svg' alt='filter-icon' height={24} width={24}/>
            </div>
        </header>
    )
}

export default Navbar