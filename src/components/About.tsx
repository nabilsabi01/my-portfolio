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
Développeur Full Stack | Java | Spring Boot | Angular | C# | .NET – À la recherche de nouvelles opportunités Je suis un développeur Full Stack passionné et junior, spécialisé en Java, Spring Boot, Angular, C# et .NET. Diplômé en Développement Informatique (Technicien Spécialisé) de l'OFPPT, j'ai également suivi un bootcamp intensif en Développement Web et Web Mobile (Java/Angular) à l'École Numérique Ahmed Al Hansali, en partenariat avec Simplon. Ma formation m'a permis d'acquérir de solides bases techniques dans la conception et le développement d'applications front-end et back-end, en appliquant les méthodologies Agile et les pratiques DevOps. Je suis motivé à continuer d'apprendre et à relever de nouveaux défis au sein d'une équipe dynamique. Je suis actuellement à la recherche de nouvelles opportunités pour contribuer à des projets innovants et développer davantage mes compétences. N'hésitez pas à me contacter pour échanger sur une éventuelle collaboration.</p>
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
