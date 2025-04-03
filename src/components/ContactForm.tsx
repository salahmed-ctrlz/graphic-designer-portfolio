import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { toast } = useToast();
  const { translations, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "DZ",
    phone: "",
    message: "",
  });

  // Get sorted list of countries
  const countries = getCountries().map(country => ({
    code: country,
    name: new Intl.DisplayNames([language], { type: 'region' }).of(country) || country,
    dialCode: `+${getCountryCallingCode(country)}`
  })).sort((a, b) => a.name.localeCompare(b.name));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers and basic phone number characters
      const sanitizedValue = value.replace(/[^\d+\-() ]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqappkee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${countries.find(c => c.code === formData.country)?.dialCode} ${formData.phone}`,
          message: formData.message,
          language: language
        }),
      });

      if (response.ok) {
        toast({
          title: translations.contact.form.successTitle,
          description: translations.contact.form.successMessage,
        });
        
        setFormData({
          name: "",
          email: "",
          country: "DZ",
          phone: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: translations.contact.form.errorTitle,
        description: translations.contact.form.errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div>
        <label htmlFor="name" className="sr-only">{translations.contact.form.nameLabel}</label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder={translations.contact.form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200 h-12 text-black"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="sr-only">{translations.contact.form.emailLabel}</label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder={translations.contact.form.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200 h-12 text-black"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="sr-only">{translations.contact.form.phoneLabel}</label>
        <div className="flex space-x-2">
          <div className="w-1/3">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full h-12 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-black appearance-none"
              aria-label={translations.contact.form.countryLabel}
            >
              {countries.map(({ code, name, dialCode }) => (
                <option key={code} value={code}>
                  {name} ({dialCode})
                </option>
              ))}
            </select>
          </div>
          <div className="w-2/3">
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder={translations.contact.form.phonePlaceholder}
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 h-12 text-black"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="sr-only">{translations.contact.form.messageLabel}</label>
        <Textarea
          id="message"
          name="message"
          placeholder={translations.contact.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200 min-h-[150px] text-black"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 h-auto text-lg font-helvetica bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50"
      >
        {isSubmitting ? translations.contact.form.sending : translations.contact.form.send}
      </Button>
    </form>
  );
};

export default ContactForm;
