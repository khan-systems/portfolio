export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

export interface MetaData {
  testimonials: Testimonial[]
}
