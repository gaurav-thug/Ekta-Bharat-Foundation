import { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { FileText, Building2, CheckCircle, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function GetInvolvedSection() {
  const { toast } = useToast();
  
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "Thank you for showing interest. Our team will contact you shortly.",
      className: "bg-secondary text-white border-none",
    });
    (e.target as HTMLFormElement).reset();
  };

  const pieData = [
    { name: "Field Programs", value: 70, color: "#138808" }, // Green
    { name: "Admin", value: 15, color: "#1a237e" }, // Navy
    { name: "Awareness", value: 10, color: "#FF6B1A" }, // Saffron
    { name: "Emergency Fund", value: 5, color: "#94a3b8" }, // Gray
  ];

  return (
    <>
      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-border">
            <div className="hidden lg:block relative">
              <img src="/images/volunteer.png" alt="Volunteers" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90"></div>
            </div>
            
            <div className="p-8 md:p-12 lg:pl-0 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Take Action</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Join as a Volunteer</h2>
              <p className="text-muted-foreground mb-8">
                Become a part of our nationwide network of change-makers. Whether on the ground or digitally, your time can transform lives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {["Field Volunteer", "Digital Volunteer", "Campus Ambassador"].map((role, i) => (
                  <div key={i} className="bg-muted p-4 rounded-xl text-center">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold">{role}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none" />
                  <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none" />
                  <select required className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option value="">Select Role</option>
                    <option value="field">Field Volunteer</option>
                    <option value="digital">Digital Volunteer</option>
                    <option value="campus">Campus Ambassador</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-xl font-bold transition-colors">
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section id="csr" className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-6">Partner With Us for Social Impact</h2>
            <p className="text-white/70 text-lg">
              Fulfill your Corporate Social Responsibility mandates through impactful, measurable, and transparent grassroots projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { tier: "Bronze", desc: "Project sponsorship & quarterly reporting", color: "bg-[#CD7F32]" },
              { tier: "Silver", desc: "Custom initiatives & employee engagement", color: "bg-[#C0C0C0]" },
              { tier: "Gold", desc: "Strategic long-term partnership & board advisory", color: "bg-[#FFD700]" }
            ].map((tier, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${tier.color}`}></div>
                <h3 className="text-2xl font-bold text-white mb-4">{tier.tier} Partner</h3>
                <p className="text-white/60 mb-6">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-8">Trusted By</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="text-2xl font-bold font-serif italic">CorpLogo {i}</div>
              ))}
            </div>
            <button className="mt-16 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Become a CSR Partner
            </button>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">We Believe in Complete Transparency</h2>
            <p className="text-lg text-muted-foreground">
              Every donation is accounted for. We maintain the highest standards of financial integrity and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "80G Tax Exemption Certificate",
                "FCRA Registration",
                "Annual Report 2023-24",
                "Annual Report 2022-23"
              ].map((doc, i) => (
                <div key={i} className="border border-border p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-primary hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground">{doc}</h4>
                  <button className="text-sm font-bold text-primary hover:underline mt-auto">
                    Download PDF
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 p-8 rounded-3xl border border-border">
              <h3 className="text-xl font-bold text-foreground text-center mb-8">Donation Usage Breakdown</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => `${value}%`}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
