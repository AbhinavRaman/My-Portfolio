import { useEffect } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cookie Cooks UI Responsive',
      video: '/Assets/Cookie Cooks Project.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/2e7dd9cdaa35cc438c003126fa7430859e28f4c1/Tailwind-Project/src/index.html'
    },
    {
      id: 2,
      title: 'Amazon Landing Page UI',
      video: '/Assets/Amazon Landing Page.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/AmazonClone/cd53aca7ebfa58647cc2c8b4604bf425d7025c05/index.html'
    },
    {
      id: 3,
      title: 'Weather Web App Project',
      video: '/Assets/Weather Web App.mp4',
      link: 'https://rawcdn.githack.com/AbhinavRaman/Weather-Web-App/403b93ebaa74e9703f22f863a368531934414d63/index.html'
    },
    {
      id: 4,
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
    <section id="projects" className="py-16 px-6 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#111]">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-card-bg rounded-xl p-5 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <video 
                src={project.video} 
                muted 
                autoPlay 
                loop 
                className="w-full h-36 object-cover rounded-lg mb-4 bg-gray-200"
              />
              <p className="text-text text-center font-medium">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 