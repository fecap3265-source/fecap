import { Button } from "@/components/ui/button";
import { Mail, Instagram, ArrowRight } from "lucide-react";

export function HomeContactSection() {
  return (
    <section className="bg-gradient-to-br from-muted to-muted/80 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Pronto para o <span className="text-primary">próximo nível</span>?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Para inscrições, dúvidas e mais informações sobre nossos cursos, entre em contato através dos canais abaixo. Nossa equipe está pronta para atendê-lo.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button asChild size="lg" className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              <a 
                href="mailto:frentecapacitacao6@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Enviar E-mail
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold border-2 hover:border-primary/50 transition-all">
              <a 
                href="https://instagram.com/frentecapacitacao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Siga no Instagram
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
); }