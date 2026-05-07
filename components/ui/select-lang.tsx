'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

function SelectLang(){
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term : string) => {
        const params = new URLSearchParams(searchParams)

        if (term) {
        params.set('lang', term);
        } else {
        params.delete('lang');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 500)

    return (
        <Select onValueChange={(value) => handleSearch(value)} defaultValue={searchParams.get('lang')?.toString() || "en"}>
      <SelectTrigger className="w-full max-w-24">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="id">ID 🇮🇩</SelectItem>
          <SelectItem value="en">EN 🇪🇳</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    )
}

export { SelectLang }