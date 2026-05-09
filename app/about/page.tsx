import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function About(){
    return (
        <div className='flex flex-col pt-4 md:pt-8 px-8 gap-2'>
            <h1 className='font-bold text-2xl md:text-4xl text-primary-foreground dark:text-primary'>About</h1>
            <Separator></Separator>
            <div className='text-xs md:text-sm'>
                <p>Simple website to find a Pokemon TCG cards. All card resources retrieved from <Link className="text-primary-foreground dark:text-primary font-semibold" href="https://tcgdex.dev/">TCGDex</Link> through API.</p>
                <p>
                Tech stack I used in this project :
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
                        <p className='font-light'><Link href='https://github.com/dhimashdr/pokemon-cards-finder' className='font-semibold bg-accent'>github/pokemon-cards-finder</Link></p>
                    </div>
                </div>
            </div>
            <br />
            <h1 className='font-bold text-2xl md:text-4xl text-primary-foreground dark:text-primary'>Contributors</h1>
            <Separator></Separator>
            <br />
            <div className='w-full flex items-center-safe justify-center-safe gap-8'>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/assets/about/dimas.jpg" alt="dimas" draggable='false' className="h-16 md:h-24 object-contain rounded-full"/>
                    <div className='flex flex-col items-center-safe'>
                        <h1 className='font-semibold text-sm'><Link href='https://dhimashdr.vercel.app'>
                        Dimas
                        </Link></h1>
                        <p className='italic text-xs text-muted-foreground'>frontend</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/assets/about/meow.jpg" alt="meow" draggable='false' className="h-16 md:h-24 object-contain rounded-full"/>
                    <div className='flex flex-col items-center-safe'>
                        <h1 className='font-semibold text-sm'>Meow</h1>
                        <p className='italic text-xs text-muted-foreground'>mood booster</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {/* <p className='text-center text-xs md:text-sm'>2026 ♦️ <Link className="text-primary-foreground dark:text-primary font-semibold" href="https://dhimashdr.vercel.app">dhimashdr</Link></p> */}
        </div>
    )
}