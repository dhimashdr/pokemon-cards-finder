'use client'

import {motion as m} from 'motion/react'

export default function PokeCards( { image } : { image : string }){
    return (
        <m.img initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="hover:scale-105 transition-all ease-linear duration-300 rounded-sm drop-shadow-card-foreground/30 drop-shadow-lg" alt={`${image}/low.webp`} src={`${image}/low.webp`} loading='lazy' />
    )
}