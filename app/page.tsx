import { ToggleMode } from "@/components/ui/toggle-mode"
import { SearchBar } from "@/components/ui/search-bar"
import { SelectLang } from "@/components/ui/select-lang"
import PokemonCard from "@/components/ui/pokemon-card"
import PokemonSkeleton from "@/components/ui/pokemon-skeleton"
import { Suspense } from "react"
import Link from "next/link"

interface SearchParams{
  lang: string,
  search: string
}

export default async function Page({
  searchParams
} : { searchParams : Promise<SearchParams>}) {
  const params = await searchParams
  const queryName = params.search ? params.search : ""
  const queryLang = params.lang ? params.lang : "en"

  return (
    <div className="flex flex-col items-center w-full gap-8 p-10">
      <div className="flex pt-10">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-5xl">Pokemon Finder</h1>
          <p className="font-light text-xs lg:text-sm">
            Find Pokemon TCG cards and click for the details. Fetched from <Link className="text-primary-foreground dark:text-primary" href="https://tcgdex.dev/">tcgdex.dev</Link>
          </p>
        </div>
      </div>
      <div className="flex gap-2 w-full md:w-1/2 justify-center">
        <SearchBar></SearchBar>
        <SelectLang></SelectLang>
        <ToggleMode></ToggleMode>
      </div>
      <div className="px-2 md:px-4 lg:px-10">
        <Suspense key={`${queryName}.${queryLang}`} fallback={<PokemonSkeleton></PokemonSkeleton>}>
              <PokemonCard name={queryName} lang={queryLang}></PokemonCard>
        </Suspense>
      </div>
    </div>
  )
}
