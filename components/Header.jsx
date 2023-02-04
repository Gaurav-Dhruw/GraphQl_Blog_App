import React, {useContext} from 'react';
import Link from 'next/link';

const Header = () => {
    const categories = [{name: 'React', slug:'react'},{name:'Web Development', slug: "web-dev"}];
    return (
        <div className='container mx-auto px-10 md:px-20 mb-10 md:mb-20'>
            <div className='flex border-b-4 w-full items-center justify-between border-pink-500 py-6'>
                <div className=''>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl px-2'>
                            Blog
                        </span>
                    </Link>
                </div>
                <div className='hidden md:flex '>
                    {categories.map(category =>(
                        <Link href={`/category/${category.slug}`}>
                            <span className='md:float-right align-middle font-semibold cursor-pointer px-3 mx-3'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Header