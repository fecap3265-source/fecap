import { mockProfessors } from "@/lib/professors-data";
import Image from 'next/image';

export function ProfessorsSection() {
  return (
    <section className="bg-muted py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center sm:text-4xl font-bold tracking-tight mb-12">
          PALESTRANTES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mockProfessors.map((prof) => (
            <div key={prof.name} className="flex flex-col items-center">
              <div className="relative h-48 w-48 sm:h-60 sm:w-60 rounded-full overflow-hidden mb-4">
                <Image
                  src={prof.imageUrl}
                  alt={prof.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, 240px"
                />
              </div>
              <h3 className="font-semibold text-lg text-center">{prof.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{prof.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
); }