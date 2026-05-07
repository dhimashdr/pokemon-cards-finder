import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

interface CardsInfo{
    name : string,
    id : string,
    image : string,
    illustrator : string,
    set : string,
    rarity : string
}

export default function PokemonDetail({ name, id, image, illustrator, set, rarity } : CardsInfo){

    return (
        <div className="flex flex-col md:flex-row mx-auto w-full justify-center items-center gap-4 h-screen">
            <div className=''>
                <img src={`${image}/high.webp`} alt={id} draggable='false' className='w-1/2 object-contain mx-auto rounded-sm drop-shadow-card-foreground/30 drop-shadow-lg'/>
            </div>
            <div>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-primary-foreground dark:text-primary italic">Name</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell className='font-light'>{name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-primary-foreground dark:text-primary italic">Illustrator</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell className="font-light">{illustrator}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-primary-foreground dark:text-primary italic">Set</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell className="font-light block">{set && <img src={`${set}.webp`} className='h-8 w-fit object-contain' draggable='false'/>}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-primary-foreground dark:text-primary italic">Rarity</TableCell>
                            <TableCell>:</TableCell>
                            <TableCell className="font-light block">{rarity}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}