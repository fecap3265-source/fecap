import { mockPartners } from "@/lib/partners-data";
import Image from 'next/image';

export function PartnersSection() {
  return (
    <section className="bg-background py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold tracking-tight mb-12">
          SÓCIAS
        </h2>

        <div className="flex justify-center flex-wrap gap-8">
          {mockPartners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center w-90">
              <div className="relative h-60 w-60 rounded-full overflow-hidden mb-4">
                <Image
                  src={partner.imageUrl}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <h3 className="font-semibold text-lg text-center">{partner.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{partner.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
); }