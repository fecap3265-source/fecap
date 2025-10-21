import { Button } from "@/components/ui/button";
import { Instagram, Mail, ArrowRight, Star } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export function HomeContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-20 lg:py-32 overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay com gradiente para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-purple-900/60" />
      
      {/* Elementos decorativos sutis */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header melhorado */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Star className="h-4 w-4 text-white fill-current" />
              <span className="text-sm font-medium text-white">Estamos Prontos para Atender</span>
              <Star className="h-4 w-4 text-white fill-current" />
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white">
              Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600"> impulsionar sua carreira</span>?
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Sua jornada de capacitação começa aqui. Fale conosco, tire suas dúvidas e garanta sua vaga. Nossa equipe está à disposição para ajudar você a crescer.
            </p>
          </div>
          
          {/* Grid de botões melhorado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            {/* WhatsApp Card */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-green-500/20 rounded-full">
                  <WhatsappIcon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm mb-4">Rápido e Direto</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                  <a
                    href="https://wa.me/5547984995261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <WhatsappIcon className="h-4 w-4" />
                    Conversar Agora
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-pink-500/20 rounded-full">
                  <Instagram className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
                <p className="text-gray-300 text-sm mb-4">Com nossas novidades</p>
                <Button asChild variant="outline" className="w-full border-2 border-white/30 hover:border-pink-500 text-white hover:bg-pink-500/10 font-bold">
                  <a
                    href="https://instagram.com/frentecapacitacao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    Seguir
                  </a>
                </Button>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-500/20 rounded-full">
                  <Mail className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
                <p className="text-gray-300 text-sm mb-4">Se Preferir</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                  <a
                    href="mailto:frentecapacitacao6@gmail.com"
                    className="flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Enviar Mensagem
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Informação adicional */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-md mx-auto">
            <p className="text-gray-300 mb-2">Nosso horário de atendimento:</p>
            <p className="text-white font-semibold">Segunda a Sexta • 8h às 18h</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-300">
                Responderemos o mais rápido <span className="text-primary font-semibold"> possível </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
); }