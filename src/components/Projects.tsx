import { Github, ExternalLink, Server } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      title: 'Plateforme de Location Immobilière',
      description: 'Application web complète de gestion immobilière avec authentification avancée et gestion des utilisateurs',
      fullDescription: 'Développement d\'une plateforme robuste incluant authentification sécurisée, gestion des utilisateurs, et intégration de services cloud.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?fit=crop&w=800&q=80',
      technologies: ['Angular 17', 'Spring Boot', 'Spring Security', 'JWT', 'Docker'],
      github: 'https://github.com/nabilsabi01/real-estate-rental-backend.git',
      demo: '#',
      period: 'Juillet - Octobre 2024',
      type: 'Web Full Stack'
    },
    {
      title: 'Gestion de Cinéma',
      description: 'Application web de gestion des séances et réservations avec conception UML détaillée',
      fullDescription: 'Conception de système de réservation de cinéma avec modélisation UML complète et implémentation de fonctionnalités complexes.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fit=crop&w=800&q=80',
      technologies: ['JEE', 'Hibernate', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/nabilsabi01/cinema-ticket-megarama.git',
      demo: '#',
      period: 'Avril - Mai 2024',
      type: 'Web Backend'
    },
    {
      title: 'Oways Rental Car',
      description: 'Application desktop de gestion de location de voitures avec interface utilisateur personnalisée',
      fullDescription: 'Solution desktop complète pour la gestion de location de véhicules avec interface utilisateur riche et fonctionnalités avancées.',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?fit=crop&w=800&q=80',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'Guna UI'],
      github: 'https://github.com/nabilsabi01/rental-car-management.git',
      demo: '#',
      period: 'Mars - Mai 2022',
      type: 'Desktop Application'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Projets personnels & professionnels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group"
              onMouseEnter={() => setActiveProject(project.title)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-card overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover 
                               transform transition-all duration-300 
                               group-hover:scale-105 
                               group-hover:brightness-75"
                  />
                  {activeProject === project.title && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 
                                    flex items-center justify-center 
                                    transition-all duration-300">
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
                        >
                          <Github className="w-6 h-6 text-gray-800" />
                        </a>
                        {project.demo !== '#' && (
                          <a 
                            href={project.demo} 
                            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
                          >
                            <ExternalLink className="w-6 h-6 text-gray-800" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 h-16 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 h-12">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Server className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}