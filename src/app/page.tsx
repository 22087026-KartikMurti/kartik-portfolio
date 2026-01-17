import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kartik</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
            Full Stack Developer crafting beautiful and functional web experiences
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border-2 border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 rounded-lg font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-50 dark:hover:text-zinc-900 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">
            Featured Projects
          </h2>
          {/* We'll add project cards here next */}
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Let's Work Together
          </h2>
          {/* We'll add contact form/links here next */}
        </div>
      </section>
    </div>
  );
}