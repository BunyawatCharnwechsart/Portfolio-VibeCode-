import Navbar from "@/components/Navbar";

export default function ContactMePage() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          Contact <span className="text-neon">Me</span>
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>

        <form className="mt-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-1.5 transition-colors duration-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-2.5 text-sm text-black dark:text-white outline-none focus:border-neon transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-1.5 transition-colors duration-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-2.5 text-sm text-black dark:text-white outline-none focus:border-neon transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-1.5 transition-colors duration-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-2.5 text-sm text-black dark:text-white outline-none focus:border-neon resize-none transition-colors duration-300"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-neon text-black font-semibold text-sm px-8 py-3 rounded-full hover:brightness-110 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
