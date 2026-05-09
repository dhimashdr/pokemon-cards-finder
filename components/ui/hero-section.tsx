'use client'

import { motion as m } from 'motion/react'

const slideLeft = {
    mulai : {
        x : 10,
        opacity : 0
    },
    berhenti : {
        x : 0,
        opacity : 1
    }
}

const slideUp = {
    mulai : {
        y : 10,
        opacity : 0
    },
    berhenti : {
        y : 0,
        opacity : 1
    }
}

export default function HeroSection(){
    return (
        <div className="flex flex-col md:flex-row pt-10 w-full md:bg-cover md:bg-[url('/assets/bg-image.svg')] justify-center gap-8 md:gap-24 items-center-safe">
            <div className="text-center md:text-left">
                <m.h1 className="font-bold text-3xl lg:text-5xl" variants={slideUp} initial='mulai' animate='berhenti' transition={{duration: 0.5, ease: 'linear'}}>Pokemon <span className='dark:text-primary text-primary-foreground'>Finder</span></m.h1>
                <m.p className="font-light text-xs lg:text-sm" variants={slideUp} initial='mulai' animate='berhenti' transition={{duration: 0.5, ease: 'linear'}}>
                    Find Pokemon TCG cards and click for the details. You can switch the language as well.
                </m.p>
            </div>
            <div>
                <m.img src='/assets/hero-image.png' className='h-32 lg:h-64 w-fit object-contain' draggable='false' variants={slideLeft} initial='mulai' animate='berhenti' transition={{duration: 0.5, ease: 'linear'}} />
            </div>
        </div>
    )
}