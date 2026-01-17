'use client'

import Link from "next/link"
import ThemeSwitcher from "@/src/components/themes/ThemeSwitcher"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      <ThemeSwitcher />

      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kartik</span> 
        <span className="text-4xl">{' '}/kɑːrr.θɪk/</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
        Full Stack Developer crafting beautiful and functional web experiences
        </p>

        {/* About Section */}
        <div className="mb-8 max-w-3xl">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
          Hey, I am Kartik Murti<span className="italic"> --pronunciation on top if that helps :)</span>
        </p>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
          I believe that hard-work will always reward you, maybe not with what 
          you wanted or when you wanted it, but it will give you 
          what you <span className="font-bold">NEED</span>, when you <span className="font-bold">NEED</span> it.
        </p>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
          As of now, I am an ICT graduate from <span className="font-semibold">Western Sydney University</span> with a major in Multimedia Computing. 
          Experienced in building industry-standard web and mobile applications using modern technologies like 
          <span className="text-blue-600 dark:text-blue-400"> React, Next.js, Node.js,</span> and 
          <span className="text-blue-600 dark:text-blue-400"> PostgreSQL</span>.
        </p>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          As part of a capstone project, as a team we recently delivered <span className="font-semibold">MedLearn Pro</span>, 
          an e-learning platform for healthcare professionals, where I designed the onboarding features and contributed to 
          testing, project-management and collaborating in a cross-functional team.
        </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
        <Link
          href="projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="contact"
          className="px-6 py-3 border-2 border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 rounded-lg font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-50 dark:hover:text-zinc-900 transition-colors"
        >
          Get In Touch
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
}