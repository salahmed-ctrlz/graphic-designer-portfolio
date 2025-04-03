import React, { createContext, useState, useContext, useEffect } from 'react';
import { Translations } from '@/types/props';

// Define available languages and translations
const languages = ['en', 'fr', 'de', 'es', 'ar'] as const;
type Language = typeof languages[number];

const translations: Record<Language, Translations> = {
  en: {
    language: 'en',
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      selectedWork: 'Selected Work',
      logos: 'Logos'
    },
    footer: {
      marqueeText: 'Creative Design Studio • Brand Identity • Logo Design • Visual Systems',
      contactTitle: 'Contact Us',
      connectTitle: 'Connect With Us',
      legalTitle: 'Legal',
      copyright: '©',
      rightsReserved: 'All rights reserved.'
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Get in touch with me for your next project',
      quickContactTitle: 'Quick Contact',
      connectTitle: 'Connect With Me',
      visit: 'Visit my profile',
      form: {
        successTitle: 'Message Sent!',
        successMessage: 'Thank you for your message. We will get back to you soon.',
        errorTitle: 'Error',
        errorMessage: 'There was an error sending your message. Please try again.',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'Your email',
        phoneLabel: 'Phone',
        phonePlaceholder: 'Your phone number',
        countryLabel: 'Country',
        messageLabel: 'Message',
        messagePlaceholder: 'Your message',
        sending: 'Sending...',
        send: 'Send Message'
      },
      socialDescriptions: {
        instagram: 'Follow me on Instagram for daily design inspiration and behind-the-scenes content.',
        behance: 'Check out my portfolio on Behance to see more of my work.',
        linkedin: 'Connect with me on LinkedIn to stay updated on my professional journey.',
        facebook: 'Like my Facebook page to get the latest updates and news.',
        whatsapp: 'Chat with me on WhatsApp for quick inquiries.'
      }
    },
    about: {
      title: 'About Me',
      portraitAlt: 'Portrait of the designer',
      backgroundTitle: 'Background',
      backgroundText: 'With over 10 years of experience in graphic design and brand identity, I have worked with clients from various industries to create memorable and effective visual identities.',
      philosophyTitle: 'Design Philosophy',
      philosophyText: 'I believe that good design is not just about aesthetics, but about solving problems and communicating messages effectively. Every project is an opportunity to tell a unique story.',
      processTitle: 'My Process',
      processText: 'I follow a collaborative approach, working closely with clients to understand their vision and goals. This ensures that the final design not only looks great but also aligns with their business objectives.',
      servicesTitle: 'Services',
      services: [
        'Brand Identity Design',
        'Logo Design',
        'Visual Identity Systems',
        'Typography Selection',
        'Color Palette Development',
        'Brand Guidelines',
        'Marketing Materials',
        'Packaging Design'
      ]
    },
    selectedWork: {
      title: 'Selected Work',
      subtitle: 'A curated selection of brand identity projects and logo design work.',
      ctaButton: 'View All Projects',
      ctaTitle: 'Start a Project',
      ctaText: 'Have a project in mind? Let\'s create something extraordinary together.',
      projects: [
        {
          id: 1,
          subtitle: 'Communications Startup'
        },
        {
          id: 2,
          subtitle: 'Renewable Energy'
        },
        {
          id: 3,
          subtitle: 'Luxury Hotel'
        },
        {
          id: 4,
          subtitle: 'Architecture Firm'
        },
        {
          id: 5,
          subtitle: 'Historical Museum'
        },
        {
          id: 6,
          subtitle: 'Audio Technology'
        }
      ]
    },
    trustedAgencies: {
      title: 'Trusted by Leading Agencies',
      description: 'We work with the best agencies in the industry',
      goToSlide: 'Go to slide'
    },
    home: {
      heroTitle: 'Creative Design Studio',
      heroName: 'Tariq Al-Amin',
      exploreButton: 'Explore My Work',
      processTitle: 'My Process',
      processDescription: 'I follow a collaborative approach, working closely with clients to understand their vision and goals.',
      testimonialsTitle: 'What Clients Say'
    },
    projectDetail: {
      notFound: 'Project not found',
      client: 'Client',
      year: 'Year',
      imageAlt: 'Project Image',
      previous: 'Previous Project',
      next: 'Next Project',
      projects: [
        {
          id: 1,
          subtitle: 'Communications Startup',
          category: 'Brand Identity',
          description: 'A comprehensive brand identity design for a communications startup.'
        },
        {
          id: 2,
          subtitle: 'Renewable Energy',
          category: 'Logo Design',
          description: 'Logo design for a renewable energy company.'
        },
        {
          id: 3,
          subtitle: 'Luxury Hotel',
          category: 'Brand Identity',
          description: 'Brand identity design for a luxury hotel chain.'
        },
        {
          id: 4,
          subtitle: 'Architecture Firm',
          category: 'Visual Identity',
          description: 'Visual identity system for an architecture firm.'
        },
        {
          id: 5,
          subtitle: 'Historical Museum',
          category: 'Brand Identity',
          description: 'Brand identity design for a historical museum.'
        },
        {
          id: 6,
          subtitle: 'Audio Technology',
          category: 'Logo Design',
          description: 'Logo design for an audio technology company.'
        }
      ]
    }
  },
  fr: {
    language: 'fr',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact',
      selectedWork: 'Travaux Sélectionnés',
      logos: 'Logos'
    },
    footer: {
      marqueeText: 'Studio de Design Créatif • Identité de Marque • Design de Logo • Systèmes Visuels',
      contactTitle: 'Contactez-nous',
      connectTitle: 'Connectez-vous avec nous',
      legalTitle: 'Légal',
      copyright: '©',
      rightsReserved: 'Tous droits réservés.'
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Contactez-moi pour votre prochain projet',
      quickContactTitle: 'Contact Rapide',
      connectTitle: 'Connectez-vous avec moi',
      visit: 'Visitez mon profil',
      form: {
        successTitle: 'Message Envoyé!',
        successMessage: 'Merci pour votre message. Nous vous répondrons bientôt.',
        errorTitle: 'Erreur',
        errorMessage: 'Une erreur est survenue l\'envoi de votre message. Veuillez réessayer.',
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email',
        emailPlaceholder: 'Votre email',
        phoneLabel: 'Téléphone',
        phonePlaceholder: 'Votre numéro de téléphone',
        countryLabel: 'Pays',
        messageLabel: 'Message',
        messagePlaceholder: 'Votre message',
        sending: 'Envoi en cours...',
        send: 'Envoyer le message'
      },
      socialDescriptions: {
        instagram: 'Suivez-moi sur Instagram pour des inspirations de design quotidiennes et des contenus derrière les quais.',
        behance: 'Consultez mon portfolio sur Behance pour voir plus de mes travaux.',
        linkedin: 'Me connecter sur LinkedIn pour rester à jour sur ma carrière professionnelle.',
        facebook: 'J\'aime ma page Facebook pour obtenir les dernières mises à jour et les actualités.',
        whatsapp: 'Discutez avec moi sur WhatsApp pour des questions rapides.'
      }
    },
    about: {
      title: 'À Propos de Moi',
      portraitAlt: 'Portrait du designer',
      backgroundTitle: 'Parcours',
      backgroundText: 'Avec plus de 10 ans d\'expérience en design graphique et identité de marque, j\'ai travaillé avec des clients de divers secteurs pour créer des identités visuelles mémorables et efficaces.',
      philosophyTitle: 'Philosophie de Design',
      philosophyText: 'Je crois que le bon design ne concerne pas seulement l\'esthétique, mais aussi la résolution de problèmes et la communication efficace des messages. Chaque projet est une opportunité de raconter une histoire unique.',
      processTitle: 'Mon Processus',
      processText: 'Je suis une approche collaborative, travaillant en étroite collaboration avec les clients pour comprendre leur vision et leurs objectifs. Cela garantit que le design final ne soit pas seulement esthétique mais aussi aligné avec leurs objectifs commerciaux.',
      servicesTitle: 'Services',
      services: [
        'Design d\'Identité de Marque',
        'Design de Logo',
        'Systèmes d\'Identité Visuelle',
        'Sélection de Typographie',
        'Développement de Palette de Couleurs',
        'Guide de Marque',
        'Matériaux Marketing',
        'Design d\'Emballage'
      ]
    },
    selectedWork: {
      title: 'Travaux Sélectionnés',
      subtitle: 'Une sélection organisée de projets d\'identité de marque et de design de logo.',
      ctaButton: 'Voir Tous les Projets',
      ctaTitle: 'Démarrer un Projet',
      ctaText: 'Vous avez un projet en tête ? Créons quelque chose d\'extraordinaire ensemble.',
      projects: [
        {
          id: 1,
          subtitle: 'Startup de Communication'
        },
        {
          id: 2,
          subtitle: 'Énergie Renouvelable'
        },
        {
          id: 3,
          subtitle: 'Hôtel de Luxe'
        },
        {
          id: 4,
          subtitle: 'Cabinet d\'Architecture'
        },
        {
          id: 5,
          subtitle: 'Musée Historique'
        },
        {
          id: 6,
          subtitle: 'Technologie Audio'
        }
      ]
    },
    trustedAgencies: {
      title: 'Approuvé par les Meilleures Agences',
      description: 'Nous travaillons avec les meilleures agences du secteur',
      goToSlide: 'Aller à la diapositive'
    },
    home: {
      heroTitle: 'Studio de Design Créatif',
      heroName: 'Tariq Al-Amin',
      exploreButton: 'Explorer Mon Travail',
      processTitle: 'Mon Processus',
      processDescription: 'Je suis une approche collaborative, travaillant en étroite collaboration avec les clients pour comprendre leur vision et leurs objectifs.',
      testimonialsTitle: 'Ce que Disent les Clients'
    },
    projectDetail: {
      notFound: 'Projet non trouvé',
      client: 'Client',
      year: 'Année',
      imageAlt: 'Image du Projet',
      previous: 'Projet Précédent',
      next: 'Projet Suivant',
      projects: [
        {
          id: 1,
          subtitle: 'Startup de Communication',
          category: 'Identité de Marque',
          description: 'Une conception d\'identité de marque complète pour une startup de communication.'
        },
        {
          id: 2,
          subtitle: 'Énergie Renouvelable',
          category: 'Design de Logo',
          description: 'Design de logo pour une entreprise d\'énergie renouvelable.'
        },
        {
          id: 3,
          subtitle: 'Hôtel de Luxe',
          category: 'Identité de Marque',
          description: 'Design d\'identité de marque pour une chaîne d\'hôtels de luxe.'
        },
        {
          id: 4,
          subtitle: 'Cabinet d\'Architecture',
          category: 'Identité Visuelle',
          description: 'Système d\'identité visuelle pour un cabinet d\'architecture.'
        },
        {
          id: 5,
          subtitle: 'Musée Historique',
          category: 'Identité de Marque',
          description: 'Design d\'identité de marque pour un musée historique.'
        },
        {
          id: 6,
          subtitle: 'Technologie Audio',
          category: 'Design de Logo',
          description: 'Design de logo pour une entreprise de technologie audio.'
        }
      ]
    }
  },
  de: {
    language: 'de',
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      contact: 'Kontakt',
      selectedWork: 'Ausgewählte Arbeiten',
      logos: 'Logos'
    },
    footer: {
      marqueeText: 'Kreatives Designstudio • Markenidentität • Logo-Design • Visuelle Systeme',
      contactTitle: 'Kontaktieren Sie uns',
      connectTitle: 'Verbinden Sie sich mit uns',
      legalTitle: 'Rechtliches',
      copyright: '©',
      rightsReserved: 'Alle Rechte vorbehalten.'
    },
    contact: {
      title: 'Kontaktieren Sie mich',
      subtitle: 'Kontaktieren Sie mich für Ihr nächstes Projekt',
      quickContactTitle: 'Schneller Kontakt',
      connectTitle: 'Verbinden Sie sich mit mir',
      visit: 'Besuchen Sie mein Profil',
      form: {
        successTitle: 'Nachricht Gesendet!',
        successMessage: 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
        errorTitle: 'Fehler',
        errorMessage: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        nameLabel: 'Name',
        namePlaceholder: 'Ihr Name',
        emailLabel: 'E-Mail',
        emailPlaceholder: 'Ihre E-Mail',
        phoneLabel: 'Telefon',
        phonePlaceholder: 'Ihre Telefonnummer',
        countryLabel: 'Land',
        messageLabel: 'Nachricht',
        messagePlaceholder: 'Ihre Nachricht',
        sending: 'Wird gesendet...',
        send: 'Nachricht senden'
      },
      socialDescriptions: {
        instagram: 'Folge mir auf Instagram für tägliche Designinspirations und hinter den Kulissen.',
        behance: 'Schauen Sie meinen Portfolio auf Behance, um mehr über meine Arbeiten zu sehen.',
        linkedin: 'Verbinden Sie sich mit mir auf LinkedIn, um über meine berufliche Reise auf dem Laufenden zu bleiben.',
        facebook: 'Gefällt mir meiner Facebook-Seite, um die neuesten Updates und Neuigkeiten zu erhalten.',
        whatsapp: 'Chatten Sie mit mir auf WhatsApp für schnelle Anfragen.'
      }
    },
    about: {
      title: 'Über Mich',
      portraitAlt: 'Porträt des Designers',
      backgroundTitle: 'Hintergrund',
      backgroundText: 'Mit über 10 Jahren Erfahrung im Grafikdesign und der Markenidentität habe ich mit Kunden aus verschiedenen Branchen zusammengearbeitet, um unvergessliche und effektive visuelle Identitäten zu schaffen.',
      philosophyTitle: 'Design-Philosophie',
      philosophyText: 'Ich glaube, dass gutes Design nicht nur um Ästhetik geht, sondern um Problemlösung und effektive Kommunikation von Botschaften. Jedes Projekt ist eine Gelegenheit, eine einzigartige Geschichte zu erzählen.',
      processTitle: 'Mein Prozess',
      processText: 'Ich verfolge einen kollaborativen Ansatz und arbeite eng mit Kunden zusammen, um ihre Vision und Ziele zu verstehen. Dies stellt sicher, dass das endgültige Design nicht nur gut aussieht, sondern auch mit ihren Geschäftszielen übereinstimmt.',
      servicesTitle: 'Dienstleistungen',
      services: [
        'Markenidentitätsdesign',
        'Logo-Design',
        'Visuelle Identitätssysteme',
        'Typografieauswahl',
        'Farbpalettenentwicklung',
        'Markenrichtlinien',
        'Marketingmaterialien',
        'Verpackungsdesign'
      ]
    },
    selectedWork: {
      title: 'Ausgewählte Arbeiten',
      subtitle: 'Eine kuratierte Auswahl von Markenidentitätsprojekten und Logo-Design-Arbeiten.',
      ctaButton: 'Alle Projekte anzeigen',
      ctaTitle: 'Projekt starten',
      ctaText: 'Haben Sie ein Projekt im Sinn? Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen.',
      projects: [
        {
          id: 1,
          subtitle: 'Kommunikations-Startup'
        },
        {
          id: 2,
          subtitle: 'Erneuerbare Energien'
        },
        {
          id: 3,
          subtitle: 'Luxushotel'
        },
        {
          id: 4,
          subtitle: 'Architekturbüro'
        },
        {
          id: 5,
          subtitle: 'Historisches Museum'
        },
        {
          id: 6,
          subtitle: 'Audiotechnologie'
        }
      ]
    },
    trustedAgencies: {
      title: 'Vertraut von führenden Agenturen',
      description: 'Wir arbeiten mit den besten Agenturen der Branche',
      goToSlide: 'Zu Folie gehen'
    },
    home: {
      heroTitle: 'Kreatives Designstudio',
      heroName: 'Tariq Al-Amin',
      exploreButton: 'Meine Arbeit Entdecken',
      processTitle: 'Mein Prozess',
      processDescription: 'Ich verfolge einen kollaborativen Ansatz und arbeite eng mit Kunden zusammen, um ihre Vision und Ziele zu verstehen.',
      testimonialsTitle: 'Was Kunden Sagen'
    },
    projectDetail: {
      notFound: 'Projekt nicht gefunden',
      client: 'Kunde',
      year: 'Jahr',
      imageAlt: 'Projektbild',
      previous: 'Vorheriges Projekt',
      next: 'Nächstes Projekt',
      projects: [
        {
          id: 1,
          subtitle: 'Kommunikations-Startup',
          category: 'Markenidentität',
          description: 'Ein umfassendes Markenidentitätsdesign für ein Kommunikations-Startup.'
        },
        {
          id: 2,
          subtitle: 'Erneuerbare Energien',
          category: 'Logo-Design',
          description: 'Logo-Design für ein Unternehmen für erneuerbare Energien.'
        },
        {
          id: 3,
          subtitle: 'Luxushotel',
          category: 'Markenidentität',
          description: 'Markenidentitätsdesign für eine Luxushotelkette.'
        },
        {
          id: 4,
          subtitle: 'Architekturbüro',
          category: 'Visuelle Identität',
          description: 'Visuelles Identitätssystem für ein Architekturbüro.'
        },
        {
          id: 5,
          subtitle: 'Historisches Museum',
          category: 'Markenidentität',
          description: 'Markenidentitätsdesign für ein historisches Museum.'
        },
        {
          id: 6,
          subtitle: 'Audiotechnologie',
          category: 'Logo-Design',
          description: 'Logo-Design für ein Audiotechnologie-Unternehmen.'
        }
      ]
    }
  },
  es: {
    language: 'es',
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      contact: 'Contacto',
      selectedWork: 'Trabajos Seleccionados',
      logos: 'Logos'
    },
    footer: {
      marqueeText: 'Estudio de Diseño Creativo • Identidad de Marca • Diseño de Logo • Sistemas Visuales',
      contactTitle: 'Contáctenos',
      connectTitle: 'Conéctese con nosotros',
      legalTitle: 'Legal',
      copyright: '©',
      rightsReserved: 'Todos los derechos reservados.'
    },
    contact: {
      title: 'Contácteme',
      subtitle: 'Póngase en contacto conmigo para su próximo proyecto',
      quickContactTitle: 'Contacto Rápido',
      connectTitle: 'Conéctese conmigo',
      visit: 'Visite mi perfil',
      form: {
        successTitle: '¡Mensaje Enviado!',
        successMessage: 'Gracias por su mensaje. Nos pondremos en contacto con usted pronto.',
        errorTitle: 'Error',
        errorMessage: 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.',
        nameLabel: 'Nombre',
        namePlaceholder: 'Su nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'Su correo electrónico',
        phoneLabel: 'Teléfono',
        phonePlaceholder: 'Su número de teléfono',
        countryLabel: 'País',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Su mensaje',
        sending: 'Enviando...',
        send: 'Enviar mensaje'
      },
      socialDescriptions: {
        instagram: 'Sígueme en Instagram para inspiración de diseño diaria y contenido detrás de escena.',
        behance: 'Echa un vistazo a mi portfolio en Behance para ver más de mi trabajo.',
        linkedin: 'Conéctese conmigo en LinkedIn para mantenerse actualizado sobre mi viaje profesional.',
        facebook: 'Me gusta mi página de Facebook para obtener las últimas actualizaciones y noticias.',
        whatsapp: 'Chatea conmigo en WhatsApp para consultas rápidas.'
      }
    },
    about: {
      title: 'Sobre Mí',
      portraitAlt: 'Retrato del diseñador',
      backgroundTitle: 'Antecedentes',
      backgroundText: 'Con más de 10 años de experiencia en diseño gráfico e identidad de marca, he trabajado con clientes de diversas industrias para crear identidades visuales memorables y efectivas.',
      philosophyTitle: 'Filosofía de Diseño',
      philosophyText: 'Creo que el buen diseño no se trata solo de estética, sino de resolver problemas y comunicar mensajes de manera efectiva. Cada proyecto es una oportunidad para contar una historia única.',
      processTitle: 'Mi Proceso',
      processText: 'Sigo un enfoque colaborativo, trabajando estrechamente con los clientes para entender su visión y objetivos. Esto asegura que el diseño final no solo se vea bien, sino que también se alinee con sus objetivos comerciales.',
      servicesTitle: 'Servicios',
      services: [
        'Diseño de Identidad de Marca',
        'Diseño de Logo',
        'Sistemas de Identidad Visual',
        'Selección de Tipografía',
        'Desarrollo de Paleta de Colores',
        'Guías de Marca',
        'Materiales de Marketing',
        'Diseño de Embalaje'
      ]
    },
    selectedWork: {
      title: 'Trabajos Seleccionados',
      subtitle: 'Una selección curada de proyectos de identidad de marca y diseño de logotipos.',
      ctaButton: 'Ver Todos los Proyectos',
      ctaTitle: 'Iniciar un Proyecto',
      ctaText: '¿Tienes un proyecto en mente? Creemos algo extraordinario juntos.',
      projects: [
        {
          id: 1,
          subtitle: 'Startup de Comunicaciones'
        },
        {
          id: 2,
          subtitle: 'Energía Renovable'
        },
        {
          id: 3,
          subtitle: 'Hotel de Lujo'
        },
        {
          id: 4,
          subtitle: 'Firma de Arquitectura'
        },
        {
          id: 5,
          subtitle: 'Museo Histórico'
        },
        {
          id: 6,
          subtitle: 'Tecnología de Audio'
        }
      ]
    },
    trustedAgencies: {
      title: 'Confían en Nosotros las Mejores Agencias',
      description: 'Trabajamos con las mejores agencias de la industria',
      goToSlide: 'Ir a la diapositiva'
    },
    home: {
      heroTitle: 'Estudio de Diseño Creativo',
      heroName: 'Tariq Al-Amin',
      exploreButton: 'Explorar Mi Trabajo',
      processTitle: 'Mi Proceso',
      processDescription: 'Sigo un enfoque colaborativo, trabajando estrechamente con los clientes para entender su visión y objetivos.',
      testimonialsTitle: 'Lo que Dicen los Clientes'
    },
    projectDetail: {
      notFound: 'Proyecto no encontrado',
      client: 'Cliente',
      year: 'Año',
      imageAlt: 'Imagen del Proyecto',
      previous: 'Proyecto Anterior',
      next: 'Proyecto Siguiente',
      projects: [
        {
          id: 1,
          subtitle: 'Startup de Comunicaciones',
          category: 'Identidad de Marca',
          description: 'Un diseño integral de identidad de marca para una startup de comunicaciones.'
        },
        {
          id: 2,
          subtitle: 'Energía Renovable',
          category: 'Diseño de Logo',
          description: 'Diseño de logo para una empresa de energía renovable.'
        },
        {
          id: 3,
          subtitle: 'Hotel de Lujo',
          category: 'Identidad de Marca',
          description: 'Diseño de identidad de marca para una cadena de hoteles de lujo.'
        },
        {
          id: 4,
          subtitle: 'Firma de Arquitectura',
          category: 'Identidad Visual',
          description: 'Sistema de identidad visual para una firma de arquitectura.'
        },
        {
          id: 5,
          subtitle: 'Museo Histórico',
          category: 'Identidad de Marca',
          description: 'Diseño de identidad de marca para un museo histórico.'
        },
        {
          id: 6,
          subtitle: 'Tecnología de Audio',
          category: 'Diseño de Logo',
          description: 'Diseño de logo para una empresa de tecnología de audio.'
        }
      ]
    }
  },
  ar: {
    language: 'ar',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      contact: 'اتصل بنا',
      selectedWork: 'أعمال مختارة',
      logos: 'الشعارات'
    },
    footer: {
      marqueeText: 'استديو تصميم إبداعي • هوية العلامة التجارية • تصميم الشعار • الأنظمة المرئية',
      contactTitle: 'اتصل بنا',
      connectTitle: 'تواصل معنا',
      legalTitle: 'قانوني',
      copyright: '©',
      rightsReserved: 'جميع الحقوق محفوظة.'
    },
    contact: {
      title: 'اتصل بي',
      subtitle: 'تواصل معي لمشروعك القادم',
      quickContactTitle: 'اتصال سريع',
      connectTitle: 'تواصل معي',
      visit: 'زيارة ملفي الشخصي',
      form: {
        successTitle: 'تم إرسال الرسالة!',
        successMessage: 'شكراً لرسالتك. سنتواصل معك قريباً.',
        errorTitle: 'خطأ',
        errorMessage: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
        nameLabel: 'الاسم',
        namePlaceholder: 'اسمك',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'بريدك الإلكتروني',
        phoneLabel: 'الهاتف',
        phonePlaceholder: 'رقم هاتفك',
        countryLabel: 'البلد',
        messageLabel: 'الرسالة',
        messagePlaceholder: 'رسالتك',
        sending: 'جاري الإرسال...',
        send: 'إرسال الرسالة'
      },
      socialDescriptions: {
        instagram: 'تابعني على Instagram للحصول على تأليف تصميم يومي ومحتوى الخلفية.',
        behance: 'تحقق من المحفظة على Behance لرؤية المزيد من عملي.',
        linkedin: 'تواصل معي على LinkedIn لمعرفة المزيد عن رحلتي المهنية.',
        facebook: 'أعجبني صفحتي على Facebook للحصول على آخر التحديثات والأخبار.',
        whatsapp: 'تحدث معي على WhatsApp للاستفسارات السريعة.'
      }
    },
    about: {
      title: 'عني',
      portraitAlt: 'صورة المصمم',
      backgroundTitle: 'الخلفية',
      backgroundText: 'مع أكثر من 10 سنوات من الخبرة في التصميم الجرافيكي وهوية العلامة التجارية، عملت مع عملاء من مختلف الصناعات لإنشاء هويات بصرية لا تُنسى وفعالة.',
      philosophyTitle: 'فلسفة التصميم',
      philosophyText: 'أعتقد أن التصميم الجيد لا يتعلق فقط بالجماليات، بل بحل المشكلات وتوصيل الرسائل بفعالية. كل مشروع هو فرصة لرواية قصة فريدة.',
      processTitle: 'عملية التصميم',
      processText: 'أتبع نهجًا تعاونيًا، أعمل عن كثب مع العملاء لفهم رؤيتهم وأهدافهم. يضمن ذلك أن التصميم النهائي لا يبدو جيدًا فحسب، بل يتوافق أيضًا مع أهداف أعمالهم.',
      servicesTitle: 'الخدمات',
      services: [
        'تصميم هوية العلامة التجارية',
        'تصميم الشعار',
        'أنظمة الهوية البصرية',
        'اختيار الخطوط',
        'تطوير لوحة الألوان',
        'إرشادات العلامة التجارية',
        'مواد التسويق',
        'تصميم التغليف'
      ]
    },
    selectedWork: {
      title: 'أعمال مختارة',
      subtitle: 'مجموعة مختارة من مشاريع هوية العلامة التجارية وتصميم الشعارات.',
      ctaButton: 'عرض جميع المشاريع',
      ctaTitle: 'ابدأ مشروعًا',
      ctaText: 'هل لديك مشروع في ذهنك؟ دعنا نبتكر شيئًا استثنائيًا معًا.',
      projects: [
        {
          id: 1,
          subtitle: 'شركة ناشئة للاتصالات'
        },
        {
          id: 2,
          subtitle: 'الطاقة المتجددة'
        },
        {
          id: 3,
          subtitle: 'فندق فاخر'
        },
        {
          id: 4,
          subtitle: 'شركة معمارية'
        },
        {
          id: 5,
          subtitle: 'متحف تاريخي'
        },
        {
          id: 6,
          subtitle: 'تكنولوجيا الصوت'
        }
      ]
    },
    trustedAgencies: {
      title: 'موثوق به من قبل أفضل الوكالات',
      description: 'نعمل مع أفضل الوكالات في الصناعة',
      goToSlide: 'الذهاب إلى الشريحة'
    },
    home: {
      heroTitle: 'استديو تصميم إبداعي',
      heroName: 'طارق الأمين',
      exploreButton: 'استكشف أعمالي',
      processTitle: 'عمليتي',
      processDescription: 'أتبع نهجًا تعاونيًا، وأعمل عن كثب مع العملاء لفهم رؤيتهم وأهدافهم.',
      testimonialsTitle: 'ما يقوله العملاء'
    },
    projectDetail: {
      notFound: 'المشروع غير موجود',
      client: 'العميل',
      year: 'السنة',
      imageAlt: 'صورة المشروع',
      previous: 'المشروع السابق',
      next: 'المشروع التالي',
      projects: [
        {
          id: 1,
          subtitle: 'شركة ناشئة للاتصالات',
          category: 'هوية العلامة التجارية',
          description: 'تصميم شامل لهوية العلامة التجارية لشركة ناشئة في مجال الاتصالات.'
        },
        {
          id: 2,
          subtitle: 'الطاقة المتجددة',
          category: 'تصميم الشعار',
          description: 'تصميم شعار لشركة طاقة متجددة.'
        },
        {
          id: 3,
          subtitle: 'فندق فاخر',
          category: 'هوية العلامة التجارية',
          description: 'تصميم هوية العلامة التجارية لسلسلة فنادق فاخرة.'
        },
        {
          id: 4,
          subtitle: 'شركة معمارية',
          category: 'الهوية البصرية',
          description: 'نظام الهوية البصرية لشركة معمارية.'
        },
        {
          id: 5,
          subtitle: 'متحف تاريخي',
          category: 'هوية العلامة التجارية',
          description: 'تصميم هوية العلامة التجارية لمتحف تاريخي.'
        },
        {
          id: 6,
          subtitle: 'تكنولوجيا الصوت',
          category: 'تصميم الشعار',
          description: 'تصميم شعار لشركة تكنولوجيا الصوت.'
        }
      ]
    }
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: readonly Language[];
  translations: Translations;
  dir: 'ltr' | 'rtl';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Determine text direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Get browser language or from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language.split('-')[0] as Language;
    
    if (savedLanguage && languages.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else if (languages.includes(browserLanguage)) {
      setLanguage(browserLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  // Toggle between language options in sequence
  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex] as Language);
  };

  // Access nested translation keys
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English or just return the key
        let fallback: any = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage,
        t,
        availableLanguages: languages as readonly Language[],
        translations: translations[language],
        dir,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 