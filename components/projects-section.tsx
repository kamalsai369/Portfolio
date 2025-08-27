"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Zap, Target, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Agentic MCP RAG Assistant",
    description:
      "AI-powered agriculture advisory system leveraging AutoGen multi-agent workflows, MCP integration, and Gemini API for intelligent farming recommendations.",
    image: "/ai-agriculture-assistant.svg",
    technologies: ["AutoGen", "MCP", "Gemini API", "RAG", "Flask", "React"],
    metrics: [
      { label: "Debug Reduction", value: "35%", icon: Clock },
      { label: "Accuracy", value: "95%", icon: Target },
    ],
    features: [
      "Multi-agent workflows with AutoGen",
      "RAG pipeline for crop, soil, and climate data",
      "Real-time reasoning and recommendations",
      "Structured error handling with Flask backend",
    ],
    github: "#",
    demo: "#",
    period: "May 2025 - Jun 2025",
  },
  {
    title: "Research Assistant",
    description: "Dual-backend architecture (LangGraph + Flask) with intelligent error handling for automated research tasks and mathematical computations.",
    image: "/research-assistant-ai.svg",
    technologies: ["LangGraph", "Flask", "Python", "Web Search", "Mathematical Tools"],
    metrics: [
      { label: "Development Efficiency", value: "60%", icon: TrendingUp },
      { label: "Dependencies", value: "10+", icon: Target },
    ],
    features: [
      "Dual-backend architecture design",
      "Modular tool integration",
      "Automated environment setup",
      "Persistent conversation memory with real-time indicators",
    ],
    github: "https://github.com/kamalsai369/LanggraphAssistant",
    demo: "#",
    period: "July 2025 - Aug 2025",
  },
  {
    title: "Movie Recommendation System",
    description: "Personalized movie recommendation platform leveraging multi-agent AI workflows (CrewAI + Gemini API) with scalable, modular design.",
    image: "/movie-recommendation-ai.svg",
    technologies: ["CrewAI", "Gemini API", "Flask", "React", "Multi-Agent AI"],
    metrics: [
      { label: "Response Speed", value: "60%", icon: TrendingUp },
      { label: "Accuracy", value: "92%", icon: Target },
    ],
    features: [
      "Multi-agent AI workflows with CrewAI",
      "Google Gemini LLMs integration",
      "Responsive React-based UI",
      "Rigorous error handling and prompt engineering",
    ],
    github: "https://github.com/kamalsai369/MovieRecommendationSystem",
    demo: "#",
    period: "Oct 2024 - Nov 2024",
  },
  {
    title: "DeepSeek AI Code Companion",
    description: "AI-powered coding assistant that enhances developer productivity with intelligent code generation, debugging, and explanation features.",
    image: "/code.png",
    technologies: ["DeepSeek LLM", "Code Analysis", "NLP", "Python", "AI Debugging"],
    metrics: [
      { label: "Task Reduction", value: "40%", icon: Clock },
      { label: "Error Resolution", value: "25%", icon: TrendingUp },
    ],
    features: [
      "Intelligent code generation and completion",
      "Automated debugging workflows",
      "Code explanations across multiple languages",
      "AI-powered suggestions for optimization",
    ],
    github: "https://github.com/kamalsai369/Deepseek-AI-Code-Companion",
    demo: "#",
    period: "Feb 2024 - Mar 2024",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-purple-500/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/40 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Metrics Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: metricIndex * 0.1 }}
                        className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1"
                      >
                        <metric.icon className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-white font-semibold">{metric.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.period && (
                    <p className="text-sm text-purple-400 mb-3 font-medium">{project.period}</p>
                  )}

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-1 text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="text-purple-400 mr-2 mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-md text-xs text-purple-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 flex-1 bg-transparent"
                    >
                      <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                        </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex-1"
                    >
                       <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                         </a>
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  animate={{
                    opacity: hoveredProject === index ? 0.1 : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
