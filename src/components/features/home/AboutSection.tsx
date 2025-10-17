import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export async function AboutSection() {
  const imagePath = "./public/about-image.jpg";
  const file = await fs.readFile(imagePath);
  const { base64 } = await getPlaiceholder(file);

  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 md:h-180 rounded-lg overflow-hidden">
            <Image 
              src="/about-image.jpg" 
              alt="Sobre" 
              fill 
              className="object-cover"
              placeholder="blur"
              blurDataURL={base64}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
        <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl text-muted-foreground">
              Antônio Gomes Lacerda
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold">&quot;A educação não tem preço, sua falta tem custo&quot;</h1>
        </div>
      </div>
    </section>
); }