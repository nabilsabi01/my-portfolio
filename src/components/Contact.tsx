import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nabilsabi01@gmail.com',
      href: 'mailto:nabilsabi01@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+212 768891807',
      href: 'tel:+212768891807',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Beni Mellal, Maroc',
      href: null,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/nabilsabi01',
      href: 'https://github.com/nabilsabi01',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nabilsabi',
      href: 'https://linkedin.com/in/nabilsabi',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              Je suis disponible pour des opportunités de travail à distance ou en présentiel.
              N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass card-hover p-6 rounded-xl flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.icon !== Mail && info.icon !== Phone ? '_blank' : undefined}
                    rel={info.icon !== Mail && info.icon !== Phone ? 'noopener noreferrer' : undefined}
                    className="text-gray-800 hover:text-primary-600 transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-800 font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-xl">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-medium">Disponible pour de nouvelles opportunités</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}