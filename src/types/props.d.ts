import React from 'react';

// CSS Properties
type CSSProperties = React.CSSProperties;

// HTML attributes based on HTML element types
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

// Common UI component props
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: CSSProperties;
}

// Layout props
interface LayoutProps extends BaseComponentProps {
  as?: React.ElementType;
}

// Card component props
interface CardProps extends DivProps {
  variant?: 'default' | 'destructive' | 'outline';
  isHoverable?: boolean;
}

// Button component extended props
interface ExtendedButtonProps extends ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Heading component props
interface HeadingProps extends DivProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

// Image component props
interface ExtendedImageProps extends ImageProps {
  fallback?: string;
  fallbackStrategy?: 'onError' | 'lazy';
  isLazy?: boolean;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

// Form component props
interface FormControlProps extends DivProps {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

// Interactive elements props
interface TooltipProps extends BaseComponentProps {
  content: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
}

// Animation props
interface MotionProps extends BaseComponentProps {
  animate?: any;
  initial?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
  whileFocus?: any;
  whileDrag?: any;
}

// Grid layout props
interface GridProps extends DivProps {
  templateColumns?: string;
  templateRows?: string;
  gap?: string | number;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  autoRows?: string;
  autoColumns?: string;
}

// Flex layout props
interface FlexProps extends DivProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  gap?: string | number;
}

// Translation types
interface SocialDescriptions {
  instagram: string;
  behance: string;
  linkedin: string;
  facebook: string;
  whatsapp: string;
}

interface ContactForm {
  successTitle: string;
  successMessage: string;
  errorTitle: string;
  errorMessage: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  countryLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  sending: string;
  send: string;
}

interface Contact {
  title: string;
  subtitle: string;
  quickContactTitle: string;
  connectTitle: string;
  visit: string;
  form: ContactForm;
  socialDescriptions: SocialDescriptions;
}

interface About {
  title: string;
  portraitAlt: string;
  backgroundTitle: string;
  backgroundText: string;
  philosophyTitle: string;
  philosophyText: string;
  processTitle: string;
  processText: string;
  servicesTitle: string;
  services: string[];
}

interface Home {
  heroTitle: string;
  heroName: string;
  exploreButton: string;
  processTitle: string;
  processDescription: string;
  testimonialsTitle: string;
}

interface ProjectDetail {
  notFound: string;
  client: string;
  year: string;
  imageAlt: string;
  previous: string;
  next: string;
  projects: Array<{
    id: number;
    subtitle: string;
    category?: string;
    description?: string;
  }>;
}

interface SelectedWork {
  title: string;
  subtitle: string;
  ctaButton: string;
  ctaTitle: string;
  ctaText: string;
  projects: Array<{
    id: number;
    subtitle: string;
  }>;
}

interface TrustedAgencies {
  title: string;
  description: string;
  goToSlide: string;
}

interface Navigation {
  home: string;
  about: string;
  contact: string;
  selectedWork: string;
  logos: string;
}

interface Footer {
  marqueeText: string;
  contactTitle: string;
  connectTitle: string;
  legalTitle: string;
  copyright: string;
  rightsReserved: string;
}

interface Translations {
  nav: Navigation;
  footer: Footer;
  contact: Contact;
  about: About;
  selectedWork: SelectedWork;
  trustedAgencies: TrustedAgencies;
  home: Home;
  projectDetail: ProjectDetail;
  language: string;
}

export type {
  CSSProperties,
  DivProps,
  ButtonProps,
  InputProps,
  TextareaProps,
  AnchorProps,
  FormProps,
  ImageProps,
  BaseComponentProps,
  LayoutProps,
  CardProps,
  ExtendedButtonProps,
  HeadingProps,
  ExtendedImageProps,
  FormControlProps,
  TooltipProps,
  MotionProps,
  GridProps,
  FlexProps,
  Translations,
  SocialDescriptions,
  ContactForm,
  Contact,
  About,
  Home,
  ProjectDetail,
  SelectedWork,
  TrustedAgencies,
  Navigation,
  Footer,
}; 