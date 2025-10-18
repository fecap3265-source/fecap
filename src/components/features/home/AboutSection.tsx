import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function AboutSection() {
  const imagePath = "./public/about-image.jpg";
  const file = await fs.readFile(imagePath);
  const { base64 } = await getPlaiceholder(file);

  return (
    <section className="bg-background py-6">
      <div className="container mx-auto grid md:grid-cols-2 items-center px-2 sm:px-4 lg:px-6 gap-12">
        <div className="relative h-180 rounded-lg overflow-hidden z-10">
            <Image 
              src="/about-image.jpg" 
              alt="Sobre" 
              fill 
              className="object-cover"
              placeholder="blur"
              blurDataURL={base64}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
        </div>
        <div 
          className="relative z-9 sm:top-2 space-y-4 text-center p-8 rounded-lg md:-ml-16"
          style={{ backgroundColor: '#1f304a' }}
        >
            <h3 className="text-lg md:text-xl text-gray-200">
              Antônio Gomes Lacerda
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-white pt-6">&quot;A educação não tem preço, sua falta tem custo&quot;</h1>
            <div className="pt-4">
              <Button asChild variant="inverted" size="lg">
                <Link href="/contato">INSCREVA-SE</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
); }