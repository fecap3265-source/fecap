import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const hoverColor = '#b1853a';

  return (
    <footer style={{ backgroundColor: '#1f304a' }} className="text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Conteúdo Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          {/* 1. Seção da Marca */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <Image
                src="/logo.png"
                alt="FCP Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold text-white">FCP</h3>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Capacitação com excelência FCP.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/frentecapacitacao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#b1853a] transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#b1853a] transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* 2. Navegação */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Navegação</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-400 hover:text-[#b1853a] transition-transform duration-300 hover:translate-x-1">
                Início
              </Link>
              <Link href="/sobre" className="text-gray-400 hover:text-[#b1853a] transition-transform duration-300 hover:translate-x-1">
                Sobre Nós
              </Link>
              <Link href="/contato" className="text-gray-400 hover:text-[#b1853a] transition-transform duration-300 hover:translate-x-1">
                Contato
              </Link>
            </div>
          </div>

          {/* 3. Contato */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Entre em Contato</h4>
            <p className="text-gray-400 mb-4">
              Envie-nos sugestões, dúvidas, mensagens no geral diretamente no e-mail abaixo:
            </p>
            <a
              href="mailto:frentecapacitacao6@gmail.com"
              className="font-semibold break-all hover:underline"
              style={{ color: hoverColor }}
            >
              frentecapacitacao6@gmail.com
            </a>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="border-t border-blue-900/50 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} FCP. Todos os direitos reservados.
          </p>
          <p>
            CNPJ: 63.269.149/0001-90
          </p>
        </div>
      </div>
    </footer>
); }