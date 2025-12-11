import Link from "next/link";
import {
  DropletIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                <DropletIcon className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">
                Dis<span className="text-[var(--secondary)]">cloro</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Distribuidor de cloro e produtos químicos para tratamento de água,
              piscinas e uso industrial. Qualidade e segurança para seu negócio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent)] transition-colors"
              >
                <WhatsAppIcon size={24} />
              </a>
              <a
                href="https://instagram.com/discloro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--secondary)] transition-colors"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://facebook.com/discloro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://linkedin.com/company/discloro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/produtos?categoria=tratamento-agua"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tratamento de Água
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=piscinas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Piscinas
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=industrial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industrial
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=limpeza"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Limpeza Profissional
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="text-[var(--secondary)] shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  Rua Moacyr Padilha, 1000
                  <br />
                  Jardim Primavera
                  <br />
                  Duque de Caxias - RJ, 00000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="text-[var(--secondary)]" size={20} />
                <a
                  href="tel:+551199999999"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="text-[var(--secondary)]" size={20} />
                <a
                  href="mailto:contato@discloro.com.br"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contato@discloro.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Discloro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacidade"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
