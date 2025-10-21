import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, Clock } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1f304a' }} className="text-gray-300 relative overflow-hidden">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b1853a] to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Conteúdo Principal do Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 text-center lg:text-left mb-12">
          {/* 1. Seção da Marca */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="FCP Logo"
                  width={70}
                  height={70}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#b1853a]/30 rounded-lg transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#b1853a] transition-colors duration-300">FCP</h3>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs text-lg leading-relaxed">
              Capacitação com excelência FCP. Transformando vidas através da educação.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/frentecapacitacao', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: WhatsappIcon, href: 'https://wa.me/5547984995261', label: 'WhatsApp' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 rounded-full hover:bg-[#b1853a] hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navegação Rápida */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#b1853a]/30 inline-block">
              Navegação
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { href: '/', label: 'Início' },
                { href: '/sobre', label: 'Sobre Nós' },
                { href: '/contato', label: 'Contato' },
              ].map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-[#b1853a] transition-all duration-300 hover:translate-x-2 group flex items-center justify-center lg:justify-start gap-2"
                >
                  <div className="w-1 h-1 bg-[#b1853a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* 3. Contato */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#b1853a]/30 inline-block">
              Contato
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:frentecapacitacao6@gmail.com"
                className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-[#b1853a] transition-colors duration-300 group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#b1853a]/10">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium break-all">
                  frentecapacitacao6@gmail.com
                </span>
              </a>
              <a 
                href="https://wa.me/5547984995261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-[#b1853a] transition-colors duration-300 group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#b1853a]/10">
                  <WhatsappIcon className="h-4 w-4" />
                </div>
                <span className="font-medium">
                  +55 47 98499-5261
                </span>
              </a>
            </div>
          </div>

          {/* 4. Informações Adicionais */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#b1853a]/30 inline-block">
              Informações
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Clock className="h-4 w-4 text-[#b1853a]" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Segunda a Sexta</p>
                  <p className="text-sm">8h às 18h</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-blue-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Frente Capacitação Profissional. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs">
                CNPJ: 63.269.149/0001-90
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <Link href="/politica-de-privacidade" className="hover:text-[#b1853a] transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-[#b1853a] transition-colors duration-300">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
); }