import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Children studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 font-medium tracking-wide mb-6"
          >
            Empowering Rural India
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            United We Rise,<br />
            <span className="text-primary">India We Build.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            Reaching the forgotten corners of the country to uplift women, educate children, and build resilient communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector("#campaigns")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              Donate Now
            </button>
            <button
              onClick={() => document.querySelector("#volunteer")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Join as Volunteer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
