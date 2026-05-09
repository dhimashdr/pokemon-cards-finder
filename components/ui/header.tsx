import Link from 'next/link'
import { ToggleMode } from "@/components/ui/toggle-mode"

export default function Header(){
    return (
        <div className='flex flex-row-reverse text-xs md:text-sm py-4 px-8 md:py-8 md:px-16 w-full gap-4 md:gap-8 border-b-2 font-semibold items-center'>
            <Link href='/about' className='hover:bg-accent px-1 transition-colors duration-300 rounded-sm'>About</Link>
            <Link href='/' className='hover:bg-accent px-1 transition-colors duration-300 rounded-sm'>Home</Link>
            <div className='flex-1/2'></div>
            <ToggleMode/>
        </div>
    )
}