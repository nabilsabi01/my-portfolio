import { Server, Database, GitBranch, Layout, Layers, Settings } from 'lucide-react';

export default function Skills() {
  const skills = {
    'Frontend': {
      icon: Layout,
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'TailwindCSS',
        'Angular', 'React', 'Angular Material', 'PrimeNG', 'Chart.js',
      ],
    },
    'Backend': {
      icon: Server,
      skills: [
        'Java', 'Spring Core', 'Spring Boot', 'Spring MVC', 'JEE', 'C#', 'ASP.NET',
        'Microservices', 'API Gateway', 'JPA', 'Hibernate', 'JDBC', 'Flyway', 'MapStruct',
        'JUnit', 'Mockito',
      ],
    },
    'Database': {
      icon: Database,
      skills: ['MySQL', 'SQL Server'],
    },
    'DevOps': {
      icon: GitBranch,
      skills: ['Docker', 'Jenkins', 'SonarQube', 'CI/CD'],
    },
    'Modélisation': {
      icon: Layers,
      skills: ['UML', 'Merise'],
    },
    'Outils': {
      icon: Settings,
      skills: [
        'Git', 'GitHub', 'Jira', 'Trello', 'VS Code', 'IntelliJ IDEA', 'Visual Studio',
        'Android Studio', 'Postman', 'Swagger UI', 'Figma', 'Photoshop',
      ],
    },
  };

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Compétences techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, { icon: Icon, skills }]) => (
            <div key={category} className="glass card-hover p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs px-2.5 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}