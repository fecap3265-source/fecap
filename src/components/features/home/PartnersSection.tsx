import { mockPartners } from "@/lib/partners-data";
import Image from 'next/image';

export function PartnersSection() {
  return (
    <section className="bg-background py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold tracking-tight mb-12">
          SÓCIOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mockPartners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center">
              <div className="relative h-60 w-60 rounded-full overflow-hidden mb-4">
                <Image
                  src={partner.imageUrl}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">{partner.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{partner.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
); }