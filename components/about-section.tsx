"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Zap } from "lucide-react"
// import profile from "../public/mypic.jpg"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div style={{ opacity }} className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div style={{ y }} className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              B.Tech student in Artificial Intelligence and Machine Learning at Aditya Engineering College (CGPA: 8.24/10.0). 
              Passionate about Generative AI, Multi-Agent Systems, and building intelligent applications that push the boundaries 
              of what's possible with artificial intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Experienced in LangGraph, AutoGen, CrewAI for multi-agent workflows, and advanced RAG pipelines. 
              I've optimized LLMs using LoRA/QLoRA fine-tuning, built production-ready AI systems, and delivered 
              measurable improvements in performance and accuracy across diverse domains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20">
                <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Clean Code</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-500/20">
                <Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">AI Innovation</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg border border-cyan-500/20">
                <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Performance</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-80 h-80 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-purple-500/30 flex items-center justify-center">
                <div className="text-6xl">
                  <img src="/mypic.jpg" className="rounded-full" alt="profile photo"/>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}