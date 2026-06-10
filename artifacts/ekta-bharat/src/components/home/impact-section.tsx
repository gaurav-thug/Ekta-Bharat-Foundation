import { motion } from "framer-motion";
import { AnimatedCounter } from "../ui/animated-counter";

export function ImpactSection() {
  const impacts = [
    { label: "Women Supported", value: 12400 },
    { label: "Children Educated", value: 8700 },
    { label: "Food Kits Distributed", value: 45000 },
    { label: "Health Camps Organized", value: 320 },
    { label: "Volunteers Joined", value: 2100 },
    { label: "Villages Reached", value: 180 },
  ];

  return (
    <>
      {/* Impact Numbers */}
      <section id="impact" className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {impacts.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4">
                <span className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">
                  <AnimatedCounter value={item.value} />+
                </span>
                <span className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section id="stories" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Real Impact</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Stories of Change</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border group hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={`/images/story-1.png`} alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">Skill Development</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">Sunita's Journey to Independence</h3>
                  <p className="text-sm text-muted-foreground mb-4">Village Phagi, Rajasthan</p>
                  <p className="text-foreground/80 mb-6 italic">
                    "Before joining the tailoring center, I depended entirely on daily wage labor. Today, I run my own boutique and employ three other women from my village."
                  </p>
                  <button className="text-primary font-semibold hover:underline">Read Full Story</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Moments That Matter</h2>
            <p className="text-white/70 text-lg">Glimpses of hope, resilience, and transformation from across the country.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "women-empowerment.png",
              "child-education.png",
              "food-support.png",
              "healthcare.png",
              "clean-water.png",
              "community.png"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl overflow-hidden group ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img src={`/images/${img}`} alt="Gallery" className="w-full h-full object-cover aspect-square md:aspect-auto min-h-[250px] group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                    +
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
