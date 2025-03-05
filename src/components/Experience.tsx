import { Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Développeur Logiciel',
      company: 'Société Oways Rental Car',
      location: 'Souk Sebt',
      period: 'Mars 2022 - Mai 2022',
      description: 'Application de gestion de location de voitures',
      achievements: [
        'Développement d\'une application desktop pour la gestion des réservations',
        'Implémentation du système de paiement et de facturation',
        'Technologies: C#, .NET Framework, SQL Server',
      ],
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center gradient-text mb-16">Expérience professionnelle</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-4 group hover:border-blue-600 transition-all duration-300 ease-in-out"
                style={{ borderLeftColor: '#e6e6e6' }}
              >
                <div className={`absolute -left-4 top-0 w-8 h-8 ${exp.bgColor} ${exp.textColor} 
                                  rounded-full flex items-center justify-center 
                                  shadow-md group-hover:scale-110 transition-transform`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div className={`glass card-hover p-6 rounded-xl 
                                  transform transition-all hover:scale-[1.02] 
                                  ${exp.bgColor} bg-opacity-50`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Building className={`w-5 h-5 ${exp.textColor}`} />
                        <p className={`${exp.textColor} font-semibold`}>{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 mt-1">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <span className={`${exp.textColor} mt-2 md:mt-0 font-medium`}>{exp.period}</span>
                  </div>
                  <p className="text-gray-800 font-medium mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`w-2 h-2 ${exp.textColor} rounded-full mt-2 mr-3`}></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
