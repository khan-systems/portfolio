import { FormEvent, useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`New contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:junaidkhan.engineering@gmail.com?subject=${subject}&body=${body}`

    // Open mailto link
    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Have a project in mind? Let's discuss how I can help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Or email me directly at:</p>
            <a
              href="mailto:junaidkhan.engineering@gmail.com"
              className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              junaidkhan.engineering@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
