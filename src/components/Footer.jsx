import { useState } from 'react'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    {
      href: 'https://github.com/AbhinavRaman',
      icon: 'fa-brands fa-github',
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/abhinavraman26/',
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn'
    },
    {
      href: 'https://www.hackerrank.com/profile/abhinavraman102',
      icon: 'fa-brands fa-hackerrank',
      label: 'HackerRank'
    },
    {
      href: 'https://leetcode.com/u/abhi_23raman/',
      icon: 'fa-solid fa-code',
      label: 'LeetCode'
    }
  ]

  return (
    <footer id="contact" className="bg-footer-bg text-footer-text border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-10 items-start justify-between">
          {/* Contact Info */}
          <div className="min-w-56">
            <h2 className="text-xl font-semibold mb-4 text-accent">
              Contact
            </h2>
            <p className="text-footer-muted mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:abhinavraman102@gmail.com" className="text-accent hover:underline">
                abhinavraman102@gmail.com
              </a>
            </p>
            <p className="text-footer-muted mb-4">
              <strong>Location:</strong> India
            </p>
            
            {/* Social Links */}
            <div className="flex gap-5 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-footer-muted text-2xl transition-colors duration-200 hover:text-accent"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 min-w-64 flex-1 max-w-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-600 rounded-lg text-sm bg-[#222] text-white resize-none focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-600 rounded-lg text-sm bg-[#222] text-white resize-none focus:outline-none focus:border-accent"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-600 rounded-lg text-sm bg-[#222] text-white resize-none focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-accent text-white border-none rounded-lg px-4 py-3 text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-accent-hover"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center text-footer-muted text-sm mt-8">
          <small>&copy; 2024 Abhinav Raman. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer 