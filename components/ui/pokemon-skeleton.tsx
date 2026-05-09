import { Skeleton } from "@/components/ui/skeleton"

export default function PokemonSkeleton(){
    const placeholderCount = 15; 

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {Array.from({ length: placeholderCount }).map((_, index) => (
            <Skeleton key={index} className="aspect-5/7 h-[24vh] md:h-[20vh] lg:h-[32vh]"></Skeleton>
        ))}
        </div>
    );

}