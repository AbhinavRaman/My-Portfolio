const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech (CSE)',
      institution: 'Bengal College of Engineering and Technology, Durgapur',
      score: '8.56 CGPA',
      year: '2024'
    },
    {
      degree: 'Senior Secondary',
      institution: 'R.J.R.R.S.D College, Madhubani',
      score: '62.4 %'
    },
    {
      degree: 'Secondary',
      institution: "St. Xavier's English High School, Jaynagar",
      score: '9.8 CGPA'
    }
  ]

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-text">
          Education
        </h2>
        
        <div className="bg-card-bg rounded-xl p-8 shadow-lg">
          <ul className="space-y-4 mb-8">
            {educationData.map((edu, index) => (
              <li key={index} className="text-muted text-lg leading-relaxed">
                <strong className="text-accent">{edu.degree}:</strong> {edu.institution} – {edu.score}
                {edu.year && ` [${edu.year}]`}
              </li>
            ))}
          </ul>
          
          <a 
            href="/Assets/Resume3.pdf" 
            target="_blank" 
            rel="noopener"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-accent-hover shadow-lg"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Education 