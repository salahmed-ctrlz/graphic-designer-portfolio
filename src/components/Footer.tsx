import React from 'react';
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; // Assuming you're using shadcn/ui

const Footer: React.FC = () => {
  const { translations, language } = useLanguage();
  
  // Use appropriate locale format based on language
  const locale = language === 'ar' ? 'ar-SA' : 'en-US';
  const timeZone = 'Africa/Algiers';
  
  const currentTime = new Date().toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: timeZone
  });

  const currentDate = new Date().toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com'
    },
    {
      name: 'Behance',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
      ),
      url: 'https://behance.net'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://facebook.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/your-number'
    }
  ];

  return (
    <footer className="border-t border-[#EBEBEB] bg-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Time Block */}
          <div className="flex flex-col">
            <div className="text-5xl md:text-7xl font-bold tracking-tight mb-2">{currentTime}</div>
            <div className="text-lg text-muted-foreground">{currentDate}</div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand & Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">{translations.footer.contactTitle}</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:contact@tariqalamin.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@tariqalamin.com</span>
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Algeria</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">{translations.footer.connectTitle}</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground text-muted-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h3 className="text-xl font-bold mb-4">{translations.footer.legalTitle}</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  {translations.footer.copyright} {new Date().getFullYear()}
                </p>
                <p className="text-muted-foreground">
                  {translations.footer.rightsReserved}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer line */}
      <div className="border-t border-[#EBEBEB] py-4 mt-4">
        <div className="container-custom text-sm text-muted-foreground text-center">
          <p>
            All information on this website is fictional. "Tariq Al Amin" is a fictional character created solely for demonstration purposes.
          </p>
          <p className="mt-1">
            All designs, logos, and other visual elements were created by the website developer: 
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://salahmed-ctrlz.github.io/salaheddine-medkour-portfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline ml-1 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    Medkour Salah Eddine
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-foreground text-background text-xs py-1 px-2 rounded">
                  Visit Developer Portfolio
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;