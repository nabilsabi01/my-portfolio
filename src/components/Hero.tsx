import { 
  Github, 
  Linkedin, 
  FileDown, 
  Code2, 
  Rocket, 
  Briefcase,
  CircleDot
} from 'lucide-react';
import { useState } from 'react';
import Profil from '../../public/assets/profil.png'

export default function Hero() {
  const [] = useState(true);
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv-nabil-sabi.pdf';
    link.download = 'CV-Nabil-Sabi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -left-10 top-1/2 w-72 h-72 bg-primary-300 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full animate-fade-in">
                <CircleDot className="w-4 h-4 mr-2 animate-pulse" />
                <span className="text-sm font-medium">
                  Disponible pour opportunités
                </span>
              </div>

              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full animate-fade-in">
                <Code2 className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  Développeur Full Stack
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nabil <span className="text-primary-600">Sabi</span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Développeur Web Full Stack Java/Angular
                </h2>
                <p className="text-lg text-gray-600">
                  À la recherche d'une opportunité en tant que{" "}
                  <span className="text-primary-600 font-medium">
                    Développeur Full Stack
                  </span>
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <span>Stage Pré-embauche / CDI</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contact"
                className="group btn-primary flex items-center space-x-2 w-full sm:w-auto text-center"
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                <span>Me Contacter</span>
              </a>

              <button
                onClick={handleDownloadCV}
                className="group btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span>Télécharger CV</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <a
                href="https://github.com/nabilsabi01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/nabilsabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative animate-float">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 animate-spin-slow"></div>
                <div className="absolute inset-[3px] rounded-full overflow-hidden border-4 border-white bg-white shadow-2xl">
                  <img
                    src={Profil}
                    alt="Nabil Sabi"
                    className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Availability Card - Now at the bottom right */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl transform hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute inset-0 animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Disponible Immédiatement
                    </p>
                    <p className="text-xs text-green-600">
                      Stage Pré-embauche / CDI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}