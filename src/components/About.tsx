import { 
  Brain, Users, Clock, 
  RefreshCw
} from 'lucide-react';

export default function About() {
  const softSkills = [
    {
      icon: Brain,
      title: 'Résolution de problèmes',
      description: 'Approche analytique et méthodique des défis techniques',
    },
    {
      icon: Users,
      title: 'Travail d\'équipe',
      description: 'Collaboration efficace en environnement Agile',
    },
    {
      icon: Clock,
      title: 'Gestion du temps',
      description: 'Organisation et respect des délais des projets',
    },
    {
      icon: RefreshCw,
      title: 'Adaptabilité',
      description: 'Apprentissage rapide des nouvelles technologies',
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">À propos de moi</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">

Je suis un développeur Full Stack junior passionné par la technologie et le développement web. Spécialisé en Java, Spring Boot, Angular, C# et .NET, j'ai obtenu un diplôme de Technicien Spécialisé en Développement Informatique à l'OFPPT et suivi un bootcamp intensif en Développement Web et Web Mobile (Java/Angular) à l'École Numérique Ahmed Al Hansali, en partenariat avec Simplon. Au fil de ma formation, j'ai acquis des compétences solides en conception, développement et déploiement d'applications web, en appliquant les bonnes pratiques du développement logiciel, les méthodologies Agile et les outils DevOps. J'aime relever des défis techniques et apprendre continuellement pour améliorer mes compétences. Je suis actuellement à la recherche de nouvelles opportunités pour contribuer à des projets innovants et évoluer dans un environnement dynamique.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {softSkills.map((skill) => (
            <div
              key={skill.title}
              className="glass card-hover p-6 rounded-xl group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full 
                             flex items-center justify-center mb-4 mx-auto
                             group-hover:bg-blue-100 transition-all">
                <skill.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
