"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Machine Learning",
    issuer: "IIT Madras",
    date: "2024",
    description:
      "Advanced machine learning concepts, algorithms, and practical implementations from India's premier institute.",
    badge: "🎓",
    skills: ["Machine Learning", "Deep Learning", "Python", "Statistics"],
    credentialId: "NPTEL24CS38S367400138",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs38/Course/NPTEL24CS38S36740013830772110.pdf",
  },
  {
    title: "Oracle Generative AI Certified Professional",
    issuer: "Oracle",
    date: "2024",
    description:
      "Comprehensive certification covering generative AI fundamentals, model training, and enterprise applications.",
    badge: "🏆",
    skills: ["Generative AI", "Oracle Cloud", "AI Ethics", "Model Deployment"],
    credentialId: "100682863OCI2024GAIOCP",
    link: "#",
  },
  {
    title: "Deep Learning with TensorFlow",
    issuer: "EdX",
    date: "2023",
    description: "Hands-on deep learning course covering neural networks, CNNs, RNNs, and advanced architectures.",
    badge: "🧠",
    skills: ["TensorFlow", "Keras", "Neural Networks", "Computer Vision"],
    credentialId: "468efedbee2c4d9e80d38904b4d4fdee",
    link: "https://www.credly.com/badges/9152956e-7ba9-41ab-9263-5997a4a8b692/public_url",
  },
  {
    title: "Deep Learning with Keras",
    issuer: "EdX",
    date: "2023",
    description: "Specialized deep learning course focusing on Keras framework and practical neural network implementations.",
    badge: "🔥",
    skills: ["Keras", "Deep Learning", "Neural Networks", "Model Training"],
    credentialId: "EDX-KERAS-2023",
    link: "#",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "EdX",
    date: "2023",
    description: "Foundational Java programming course covering OOP concepts, data structures, and algorithms.",
    badge: "☕",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"],
    credentialId: "EDX-JAVA-2023",
    link: "#",
  },
  {
    title: "Machine Learning with Python",
    issuer: "EdX",
    date: "2023",
    description: "Practical machine learning course using Python, scikit-learn, and data analysis libraries.",
    badge: "🐍",
    skills: ["Python", "Scikit-learn", "Data Analysis", "Machine Learning"],
    credentialId: "EDX-ML-PYTHON-2023",
    link: "#",
  },
  {
    title: "Dell Technologies GEN AI Professional",
    issuer: "Dell Technologies",
    date: "2024",
    description:
      "Enterprise-focused generative AI certification covering business applications and implementation strategies.",
    badge: "💼",
    skills: ["Enterprise AI", "Business Strategy", "AI Implementation", "Data Management"],
    credentialId: "MXCRM36RP1EQ15K3",
    link: "#",
  },
  {
    title: "Oracle MySQL 8.0 Database Developer",
    issuer: "Oracle",
    date: "2024",
    description: "Database development certification covering MySQL 8.0 features, optimization, and advanced queries.",
    badge: "🗄️",
    skills: ["MySQL", "Database Design", "SQL Optimization", "Data Management"],
    credentialId: "ORACLE-MYSQL-2024",
    link: "#",
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{cert.badge}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-purple-300 font-medium text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-1 text-yellow-400" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-md text-xs text-yellow-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Verify
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
