import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export async function AboutSection() {
  const imagePath = "./public/about-image.jpg";
  const file = await fs.readFile(imagePath);
  const { base64 } = await getPlaiceholder(file);

  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-2 sm:px-4 lg:px-6">
        <div className="relative h-180 rounded-lg overflow-hidden">
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
        <div 
          className="space-y-4 text-center p-8 rounded-lg"
          style={{ backgroundColor: '#1f304a' }}
        >
            <h3 className="text-xl md:text-2xl text-gray-200">
              Antônio Gomes Lacerda
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-white">&quot;A educação não tem preço, sua falta tem custo&quot;</h1>
        </div>
      </div>
    </section>
); }