import { motion } from "framer-motion";
import { BookOpen, Droplet, HeartPulse, Users, Utensils, Wheat } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function AboutSection() {
  const focusAreas = [
    { icon: <Users className="w-8 h-8" />, title: "Women Empowerment", desc: "Skill training and micro-finance for rural women to achieve financial independence." },
    { icon: <BookOpen className="w-8 h-8" />, title: "Child Education", desc: "Providing access to quality education, study materials, and learning centers." },
    { icon: <Utensils className="w-8 h-8" />, title: "Food Support", desc: "Nutritional drives and mid-day meals to combat malnutrition in vulnerable areas." },
    { icon: <HeartPulse className="w-8 h-8" />, title: "Healthcare", desc: "Free medical camps, hygiene awareness, and essential healthcare access." },
    { icon: <Droplet className="w-8 h-8" />, title: "Clean Water", desc: "Installing borewells and water purification systems in drought-prone villages." },
    { icon: <Wheat className="w-8 h-8" />, title: "Community Development", desc: "Building sustainable infrastructure and local leadership for self-reliance." }
  ];

  return (
    <>
      {/* Why Ekta */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/why-ekta.png" alt="Hopeful mother and child" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary text-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                <h4 className="text-4xl font-bold mb-2">15+</h4>
                <p className="text-secondary-foreground/90 font-medium">Years of dedicated service to the nation's most vulnerable.</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Ekta Bharat?</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Bridging the Gap Between India and Bharat.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Despite rapid economic growth, millions in rural India still lack access to basic necessities. Poverty, inequality, and lack of opportunity continue to hold back our nation's true potential.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ekta Bharat Foundation exists to change this narrative. We believe in holistic, community-led development that empowers individuals to lift themselves out of poverty.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Data-driven interventions targeted at the lowest socio-economic strata.",
                  "Community ownership for sustainable, long-term impact.",
                  "Complete transparency and ethical utilization of funds.",
                  "Partnerships with local governance for scalable solutions."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Focus Areas</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Our interventions are designed to address the root causes of poverty through a multi-dimensional approach to community development.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {focusAreas.map((area, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{area.desc}</p>
                <a href="#campaigns" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interventions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">On The Ground</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Interventions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "women-empowerment.png", title: "Women Skill Development" },
              { img: "child-education.png", title: "Child Education Support" },
              { img: "food-support.png", title: "Food & Nutrition Drives" },
              { img: "healthcare.png", title: "Rural Health Camps" },
              { img: "clean-water.png", title: "Clean Water Infrastructure" },
              { img: "community.png", title: "Community Welfare Programs" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer"
              >
                <img src={`/images/${item.img}`} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="h-1 w-12 bg-primary rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Discover how we are creating lasting impact in this area.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
