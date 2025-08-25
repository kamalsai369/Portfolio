"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skillCategories = [
  {
    title: "Agentic AI & LLMs",
    skills: [
      { name: "LangGraph", level: 92, icon: "🔗" },
      { name: "AutoGen", level: 88, icon: "🤖" },
      { name: "CrewAI", level: 85, icon: "👥" },
      { name: "GPT-4", level: 90, icon: "🧠" },
      { name: "Claude", level: 88, icon: "🔮" },
      { name: "Gemini", level: 92, icon: "💎" },
      { name: "LLaMA", level: 85, icon: "🦙" },
      { name: "Mistral", level: 82, icon: "🌪️" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "LangChain", level: 95, icon: "⛓️" },
      { name: "LCEL", level: 90, icon: "📝" },
      { name: "Transformers", level: 88, icon: "�" },
      { name: "TensorFlow", level: 85, icon: "🧠" },
      { name: "PyTorch", level: 87, icon: "🔥" },
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Git", level: 90, icon: "📊" },
      { name: "API Integration", level: 92, icon: "�" },
    ],
  },
  {
    title: "Database & Deployment",
    skills: [
      { name: "FAISS", level: 90, icon: "�️" },
      { name: "ChromaDB", level: 88, icon: "💾" },
      { name: "Pinecone", level: 85, icon: "🌲" },
      { name: "VectorDB", level: 87, icon: "�" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "Streamlit", level: 92, icon: "⚡" },
      { name: "GitHub Actions", level: 80, icon: "⚙️" },
      { name: "Context Management", level: 88, icon: "🧠" },
    ],
  },
  {
    title: "Tuning & Optimization",
    skills: [
      { name: "LoRA", level: 88, icon: "🔧" },
      { name: "QLoRA", level: 85, icon: "⚡" },
      { name: "PEFT", level: 82, icon: "🛠️" },
      { name: "Prompt Engineering", level: 95, icon: "💭" },
      { name: "Prompt Chaining", level: 90, icon: "�" },
      { name: "Function Calling", level: 88, icon: "�" },
      { name: "Tool Calling", level: 87, icon: "�" },
      { name: "RAG Pipelines", level: 92, icon: "📚" },
    ],
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-300">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        animate={{
                          scale: hoveredSkill === skill.name ? 1.05 : 1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
