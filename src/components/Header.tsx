function Header() {
  const calendlyLink = 'https://calendly.com/junaidkhan-engineering/60-min-architecture-audit'
  const mailtoLink = 'mailto:junaidkhan.engineering@gmail.com?subject=Architecture Session Booking'

  return (
    <header className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frontend architecture that scales with your business
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            I help companies build fast, maintainable React applications through expert
            architecture consulting and hands-on implementation.
          </p>
          <a
            href={calendlyLink}
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            aria-label="Book a 60-minute architecture session"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 60-minute architecture session
          </a>
          <p className="mt-4 text-primary-200 text-sm">
            Or email me at{' '}
            <a href={mailtoLink} className="underline hover:text-white">
              junaidkhan.engineering@gmail.com
            </a>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
