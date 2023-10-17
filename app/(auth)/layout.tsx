import { authCover } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <section className='flex h-[100vh] items-center'>
        <div className="w-full relative h-[100vh] md:block hidden">
            <Image className='w-full h-full object-cover' width={20000} height={20000} src={authCover} alt="Abstract 3D ligth shape" />
        </div>
        <div className="w-full">
            {children}
        </div>
    </section>
  )
}

export default Layout