import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Développeur Web & Mobile Java/Angular',
      school: 'École Numérique Ahmed AL HANSALI / Simplon Maghreb',
      period: 'Janvier 2024 - Octobre 2024',
      description:
        'Formation intensive en développement full stack avec expertise en Spring Boot, Angular, et Docker.',
      icon: GraduationCap,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      degree: 'Diplôme Technicien Spécialisé en Développement Informatique',
      school: 'Institut Spécialisé de Technologie Appliquée Souk Sebt',
      period: 'Septembre 2020 - Septembre 2022',
      description:
        'Formation spécialisée en programmation, bases de données, et gestion de projets logiciels.',
      icon: BookOpen,
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      degree: 'Baccalauréat en Sciences Physiques',
      school: 'Lycée Al Khawarizmi Souk Sebt',
      period: 'Septembre 2019 - Juin 2020',
      description:
        'Baccalauréat scientifique avec spécialisation en sciences physiques.',
      icon: Award,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center gradient-text mb-16">
          Parcours Académique
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-4 group hover:border-blue-600 transition-all duration-300 ease-in-out"
                style={{ borderLeftColor: '#e6e6e6' }}
              >
                <div className={`absolute -left-4 top-0 w-8 h-8 ${edu.bgColor} ${edu.textColor} 
                                  rounded-full flex items-center justify-center 
                                  shadow-md group-hover:scale-110 transition-transform`}>
                  <edu.icon className="w-4 h-4" />
                </div>
                <div className={`glass card-hover p-6 rounded-xl 
                                  transform transition-all hover:scale-[1.02] 
                                  ${edu.bgColor} bg-opacity-50`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {edu.degree}
                      </h3>
                      <p className={`${edu.textColor} font-semibold`}>
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}