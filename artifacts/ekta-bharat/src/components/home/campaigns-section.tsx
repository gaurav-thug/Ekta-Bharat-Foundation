import { motion } from "framer-motion";

export function CampaignsSection() {
  const campaigns = [
    {
      title: "Feed 1000 Families",
      desc: "Provide emergency monthly dry ration kits to families affected by natural disasters and severe poverty.",
      raised: 340000,
      goal: 500000,
      img: "food-support.png"
    },
    {
      title: "Build School in Rajasthan",
      desc: "Help us construct a 5-room primary school building in a remote desert village currently without educational infrastructure.",
      raised: 780000,
      goal: 1200000,
      img: "child-education.png"
    },
    {
      title: "Clean Water for 50 Villages",
      desc: "Fund the installation of deep borewells and RO plants to eradicate waterborne diseases in affected districts.",
      raised: 210000,
      goal: 400000,
      img: "clean-water.png"
    }
  ];

  return (
    <section id="campaigns" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Active Appeals</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Support Our Campaigns</h2>
            <p className="text-lg text-muted-foreground">
              Your urgent support is needed to reach our goals. Every rupee brings us closer to making these projects a reality.
            </p>
          </div>
          <button className="hidden md:block border-2 border-foreground text-foreground px-6 py-3 rounded-full font-semibold hover:bg-foreground hover:text-white transition-colors">
            View All Campaigns
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((camp, i) => {
            const progress = (camp.raised / camp.goal) * 100;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={`/images/${camp.img}`} alt={camp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-foreground rounded-full shadow-sm">
                    Tax Benefits Available
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">{camp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{camp.desc}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-foreground">₹{camp.raised.toLocaleString('en-IN')}</span>
                      <span className="text-muted-foreground">Goal: ₹{camp.goal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                    <p className="text-xs text-right mt-2 text-primary font-bold">{Math.round(progress)}% Funded</p>
                  </div>
                  
                  <button className="w-full bg-foreground hover:bg-primary text-white py-3 rounded-xl font-bold transition-colors">
                    Donate Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
