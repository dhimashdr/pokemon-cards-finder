import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function About(){
    return (
        <div className='flex flex-col pt-4 md:pt-8 px-8'>
            <h1 className='font-bold text-2xl md:text-4xl text-primary-foreground dark:text-primary'>About</h1>
            <Separator></Separator>
            <div className='text-xs md:text-sm'>
                <p>Simple website to find a Pokemon TCG cards. All card resources retrieved from <Link className="text-primary-foreground dark:text-primary font-semibold" href="https://tcgdex.dev/">TCGDex</Link> through API.</p>
                <p>
                Tech stack I used in this projects:
                </p>
                <div className='flex-col flex'>
                    <div className='flex items-center-safe gap-2'>
                        <div className='h-2 w-2 dark:bg-primary-foreground bg-primary rounded-sm'></div>
                        <p className='font-light italic'><Link href='https://nextjs.org' className='font-semibold bg-accent not-italic'>Next.js</Link> as Frontend</p>
                    </div>
                    <div className='flex items-center-safe gap-2'>
                        <div className='h-2 w-2 dark:bg-primary-foreground bg-primary rounded-sm'></div>
                        <p className='font-light italic'><Link href="https://motion.dev" className='font-semibold bg-accent not-italic'>motion</Link> for interactivity</p>
                    </div>
                    <div className='flex items-center-safe gap-2'>
                        <div className='h-2 w-2 dark:bg-primary-foreground bg-primary rounded-sm'></div>
                        <p className='font-light italic'><Link href="https://ui.shadcn.com/" className='font-semibold bg-accent not-italic'>shadcn</Link> for premade components</p>
                    </div>
                    <div className='flex items-center-safe gap-2'>
                        <div className='h-2 w-2 dark:bg-primary-foreground bg-primary rounded-sm'></div>
                        <p className='font-light italic'><Link href="https://tailwindcss.com/" className='font-semibold bg-accent not-italic'>TailwindCSS</Link> for styling</p>
                    </div>
                </div>
            </div>
            <br />
            <h1 className='font-bold text-2xl md:text-4xl text-primary-foreground dark:text-primary'>Repository</h1>
            <Separator></Separator>
            <div className='text-xs md:text-sm'>
                <p>If you are wondering this website resources, you can see it through : </p>
                <div className='flex-col flex'>
                    <div className='flex items-center-safe gap-2'>
                        <div className='h-2 w-2 dark:bg-primary-foreground bg-primary rounded-sm'></div>
                        <p className='font-light italic'><Link href='https://github.com/dhimashdr/pokemon-cards-finder' className='font-semibold bg-accent not-italic'>github/pokemon-cards-finder</Link></p>
                    </div>
                </div>
            </div>
            <br/>
            <Separator/>
            <p className='text-center text-xs md:text-sm'>Made by <Link className="text-primary-foreground dark:text-primary font-semibold" href="https://dhimashdr.vercel.app">dhimashdr</Link></p>
        </div>
    )
}