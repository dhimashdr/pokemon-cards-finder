import PokemonDetail from "@/components/ui/pokemon-detail"

export default async function PokemonPage({ params } : { params: Promise<{ id: string }> } ){
    const { id } = await params
    
    const card = await fetch(`https://api.tcgdex.net/v2/en/cards/${id}`)
    const data = await card.json()

    // name, illustrator, set.logo, set.name, rarity

    return (
        <PokemonDetail name={data.name} id={data.id} image={data.image} illustrator={data.illustrator} set={data.set.logo} rarity={data.rarity}></PokemonDetail>
    )
}