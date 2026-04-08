export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-20 text-center dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Our Experience</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Modern condos, luxury villas, and premium penthouses across Cambodia.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="w-64 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="text-2xl font-bold">🏢 10+ Projects</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Residential developments</p>
          </div>
          <div className="w-64 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="text-2xl font-bold">🤝 Trusted Agents</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Professional consultation</p>
          </div>
          <div className="w-64 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="text-2xl font-bold">⭐ Happy Clients</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Satisfied homeowners</p>
          </div>
        </div>
      </div>
    </section>
  );
}