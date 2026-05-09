import { ToggleMode } from "@/components/ui/toggle-mode"
import { SearchBar } from "@/components/ui/search-bar"
import { SelectLang } from "@/components/ui/select-lang"
import PokemonCard from "@/components/ui/pokemon-card"
import PokemonSkeleton from "@/components/ui/pokemon-skeleton"
import { Suspense } from "react"
import Link from "next/link"
import HeroSection from "@/components/ui/hero-section"

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
    <div className="flex flex-col items-center w-full gap-16">
      <div className="w-full pt-8">
        <HeroSection/>
      </div>
      <div className="flex gap-2 w-full md:w-1/2 justify-center px-8 md:px-0">
        <SearchBar/>
        <SelectLang/>
      </div>
      <div className="px-8 md:px-16 lg:px-48">
        <Suspense key={`${queryName}.${queryLang}`} fallback={<PokemonSkeleton></PokemonSkeleton>}>
              <PokemonCard name={queryName} lang={queryLang}></PokemonCard>
        </Suspense>
      </div>
    </div>
  )
}
