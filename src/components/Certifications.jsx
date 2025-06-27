import { useEffect } from 'react'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'JavaScript (Basic) HackerRank Certificate',
      image: '/Assets/JavaScript (Basic) certificate HackerRank.png'
    },
    {
      id: 2,
      title: 'Web Development Training Certificate (Internshala)',
      image: '/Assets/Web Development Training - Certificate of Completion_page-0001.jpg'
    }
  ]

  useEffect(() => {
    const certCards = document.querySelectorAll('.cert-card')
    
    certCards.forEach((card) => {
      card.style.cursor = 'pointer'
      card.style.transition = 'box-shadow 0.3s ease'
      
      card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'
      })
      
      card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none'
      })
      
      card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').getAttribute('src')
        if (imgSrc) window.open(imgSrc, '_blank')
      })
    })

    return () => {
      certCards.forEach(card => {
        card.removeEventListener('mouseover', () => {})
        card.removeEventListener('mouseout', () => {})
        card.removeEventListener('click', () => {})
      })
    }
  }, [])

  return (
    <section id="certifications" className="py-16 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-text">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="cert-card bg-card-bg rounded-xl p-6 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full max-w-48 h-32 object-cover rounded-lg mb-4 bg-gray-200"
              />
              <span className="text-muted text-center font-medium">
                {cert.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications 