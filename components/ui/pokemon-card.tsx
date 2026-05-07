import Link from "next/link"
import PokeCards from './pokemon-card-template'

interface Pokemon{
    name: string,
    lang: string
}

interface PokemonData{
    id: string,
    localId: string,
    name: string,
    image: string
}

async function FetchPokemon({name, lang} : Pokemon){
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const cards = await fetch(`https://api.tcgdex.net/v2/${lang}/cards?name=${name}*`)
    // const cards = await fetch(`https://api.tcgdex.net/v2/id/cards?name=${pokemon.name}&pagination:page=1&pagination:itemsPerPage=6`)
    const data = await cards.json()

    return data
}

export default async function PokemonCard({name, lang} : Pokemon){
    // const searchParams = useSearchParams()
    // const name = searchParams.get('search')

    if(!name){
        return (
            <div>Try search something</div>
        )
    }

    const data = await FetchPokemon({name, lang})
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {data.length > 0 ? data.map((e : PokemonData) => {
                return (
                    e.image && <div key={e.id}>
                        <Link href={`/${lang}/${e.id}`}>
                        {/* <img className="hover:scale-105 transition-all duration-300" alt={e.id} src={`${e.image}/low.webp`} loading='eager' /> */}
                        <PokeCards image={e.image}></PokeCards>
                        </Link>
                    </div>
                )
            }) : <div className="col-span-2 md:col-span-3 lg:col-span-5 mx-auto">Not found</div>}
        </div>
    )
}