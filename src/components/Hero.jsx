import { useEffect, useRef } from 'react'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let w, h, points
    const POINTS = 32
    const LINE_DIST = 160
    const DOT_COLOR = '#38bdf8'
    const LINE_COLOR = 'rgba(56,189,248,0.18)'

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = document.querySelector('#home').offsetHeight
      points = Array.from({length: POINTS}, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // Draw lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINE_DIST) {
            ctx.strokeStyle = LINE_COLOR
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.stroke()
          }
        }
      }
      // Draw dots
      for (const p of points) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = DOT_COLOR
        ctx.fill()
      }
    }

    const animate = () => {
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      draw()
      requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-bg overflow-hidden">
      <canvas ref={canvasRef} className="hero-bg"></canvas>
      
      <div className="relative z-10 flex items-center gap-12 max-w-7xl w-full justify-center px-6 lg:flex-row flex-col lg:gap-12 gap-6 lg:text-left text-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-text m-0 leading-tight lg:pr-0 px-5">
            Hi,<br />I'm <span className="text-accent">Abhinav Raman</span>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold text-text m-0 mb-6 lg:pr-0 px-5">
            Web Developer
          </h2>
          <p className="text-muted text-lg leading-relaxed m-0 mb-8 text-justify max-w-2xl lg:pr-0 px-5">
            A passionate Computer Science graduate and aspiring web developer, with a knack for crafting interactive and responsive websites. I love turning ideas into digital experiences using HTML, CSS, JavaScript, and exploring the world of Python, Java, and ethical hacking.<br />
            I'm always curious, constantly learning, and ready to take on challenges that push my creativity and coding skills to the next level.
          </p>
        </div>
        
        <img 
          src="/Assets/My Photo.jpg" 
          alt="Abhinav Raman" 
          className="w-80 h-80 lg:w-80 lg:h-80 md:w-44 md:h-44 w-32 h-32 object-cover rounded-3xl hero-img-hexagon border-4 border-accent shadow-2xl shadow-accent/20 order-2 lg:order-none"
        />
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 1100px) {
          .hero-content {
            flex-direction: column;
            gap: 2.5rem;
            text-align: center;
          }
          .hero-img {
            margin: 0 auto;
          }
        }
        @media (max-width: 700px) {
          .hero-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .hero-img {
            order: 2;
            margin: 1.2rem auto 0 auto;
            display: block;
            width: 180px;
            height: 180px;
          }
          .hero-text {
            order: 1;
          }
          .hero {
            padding-bottom: 2.5rem;
          }
          .hero-text h1, .hero-text h2 {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }
          .hero-text p {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }
        }
        @media (max-width: 500px) {
          .hero-img {
            width: 120px;
            height: 120px;
            margin-top: 1.2rem;
          }
          .hero {
            padding-bottom: 2.2rem;
          }
          .hero-text h1, .hero-text h2 {
            padding-left: 0.7rem;
            padding-right: 0.7rem;
          }
          .hero-text p {
            padding-left: 0.7rem;
            padding-right: 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero 