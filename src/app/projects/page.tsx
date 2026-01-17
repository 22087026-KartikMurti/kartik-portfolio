import Link from "next/link"

/* 
 * TODO:
 * 
 * Add valid links for both projects and github links
 * 
 */
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Home Page
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          A collection of my recent work and side projects
        </p>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                Blog App
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                A blog app I created as my very first project as an assignment during my time in Western Sydney University.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  Postgres
                </span>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="https://blog-app-web-jade.vercel.app/" 
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Project →
                </Link>
                <Link 
                  href="https://github.com/22087026-KartikMurti/Blog-App" 
                  className="text-zinc-600 dark:text-zinc-400 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                AI Task-Manager
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Simple task manager with CRUD operations integrated with AI with the aim of having a JARVIS-like (From Iron-Man) assistant for managing tasks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                  Node.js
                </span>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </Link>
                <Link 
                  href="https://github.com/22087026-KartikMurti/AI-Lifehub" 
                  className="text-zinc-600 dark:text-zinc-400 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}