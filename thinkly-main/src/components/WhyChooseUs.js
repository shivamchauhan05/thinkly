import {
  FolderGit2,
  Clock,
  Users,
  Award,
  HeartHandshake
} from 'lucide-react'

import { FaLinkedin } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: 'Industry Projects',
    icon: FolderGit2,
    description: 'Work on real-world projects from top companies'
  },
  {
    id: 2,
    title: 'Flexible Schedule',
    icon: Clock,
    description: 'Learn at your own pace, anywhere anytime'
  },
  {
    id: 3,
    title: 'Mentorship',
    icon: Users,
    description: 'Guidance from industry experts'
  },
  {
    id: 4,
    title: 'Certificates',
    icon: Award,
    description: 'Earn recognized certificates'
  },
  {
    id: 5,
    title: 'LinkedIn Recognition',
    icon: FaLinkedin,
    description: 'Get your skills validated professionally'
  },
  {
    id: 6,
    title: 'Community Support',
    icon: HeartHandshake,
    description: 'Join a network of passionate learners'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Us
          </h2>

          <p className="text-blue-700 max-w-2xl mx-auto">
            What makes Thinkly.co the perfect launchpad for your career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-blue-700 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}