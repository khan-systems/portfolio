import metaData from '../data/meta.json'
import { MetaData } from '../types/meta'

const data = metaData as MetaData

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by startups and established companies to deliver high-impact results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
