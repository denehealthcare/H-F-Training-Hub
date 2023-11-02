import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { link: 'About us', href:'/about-us'},
    { link: 'Learning', href: '/' },
    { link: 'Events', href: '/' },
    { link: 'News', href: '/news' },
    { link: 'Contact Us', href: '/contact-us' },

]

export default function Navbar() {
    return (
        <>

            <div className='shadow-md'>
    
                <div className="max-w-[1440px] m-auto">
                    <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">
    
                        <div className='flex pt-[30px] pb-[30px] justify-between items-center r-light'>
    
                            {/* Logo */}
                            <div>
                                Logo Here
                            </div>
    
                            <nav className='hidden  lg:flex gap-[70px]'>
    
                                {navigation.map((nav, index) => (
    
                                    <Link key={index} href={nav.href}>
    
                                        {nav.link}
    
                                    </Link>
    
                                ))}
    
                            </nav>
    
    
    
                            <div className='flex'>
    
    
                                {/* Hamburger */}
                                <button className='lg:hidden pr-4'>
    
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
    
                                </button>
    
    
                                {/* Search */}
                                <button className='circle relative'>
    
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-[white] absolute top-[10px] left-[10px]' height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
    
                                </button>
    
                            </div>
    
                        </div>
    
                    </div>
                </div>
            </div>
 
        </>

    )
}
