'use client'

import { Input } from './input'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Search } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

function SearchBar(){
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term : string) => {
        const params = new URLSearchParams(searchParams)

        if (term.length >= 3) {
        params.set('search', term);
        } else {
        params.delete('search');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 500)

    return (
        // <Input placeholder='Pokemon you want to find...' onChange={(e) => handleSearch(e.target.value)}/>
        <InputGroup id='searchbar' className="max-w-xs transition-all">
            <InputGroupInput id='searchbar' autoComplete='off' placeholder="e.g. pika..." onChange={(e) => handleSearch(e.target.value)} defaultValue={searchParams.get('search')?.toString()}/>
            <InputGroupAddon id='searchbar'>
                <Search />
            </InputGroupAddon>
        </InputGroup>
    )
}

export { SearchBar }