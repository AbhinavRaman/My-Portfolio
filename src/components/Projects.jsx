import { useEffect } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'LetssBlog',
      video: '/Assets/LetsBlog.mp4',
      link: 'https://letssblog.netlify.app/'
    },
    {
      id: 2,
      title: 'Cookie Cooks UI Responsive',
      video: '/Assets/Cookie Cooks Project.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/2e7dd9cdaa35cc438c003126fa7430859e28f4c1/Tailwind-Project/src/index.html'
    },
    {
      id: 3,
      title: 'Amazon Landing Page UI',
      video: '/Assets/Amazon Landing Page.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/AmazonClone/cd53aca7ebfa58647cc2c8b4604bf425d7025c05/index.html'
    },
    {
      id: 4,
      title: 'Weather Web App Project',
      video: '/Assets/Weather Web App.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/Weather-Web-App/403b93ebaa74e9703f22f863a368531934414d63/index.html'
    },
    {
      id: 5,
      title: 'Alarm Clock Project',
      video: '/Assets/Clock Project.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/68e6ae3c315fa4d8389c51b16d7b7d2f129a503a/Alarm-Clock-Project/index.html'
    }
  ]

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card')
    
    projectCards.forEach((card, index) => {
      card.style.cursor = 'pointer'
      card.style.transition = 'box-shadow 0.3s ease'
      
      card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'
      })
      
      card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none'
      })
      
      card.addEventListener('click', () => {
        window.open(projects[index].link, '_blank')
      })
    })

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mouseover', () => {})
        card.removeEventListener('mouseout', () => {})
        card.removeEventListener('click', () => {})
      })
    }
  }, [])

  return (
    <section id="projects" className="py-16 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text">
          Projects
        </h2>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent/50 hidden md:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                
                {/* Project Card */}
                <div 
                  className={`project-card bg-card-bg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <video 
                    src={project.video} 
                    muted 
                    autoPlay 
                    loop 
                    className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-200"
                  />
                  <h3 className="text-text text-center font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <div className="text-accent text-sm font-medium">
                    Project #{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 