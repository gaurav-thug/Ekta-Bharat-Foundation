import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We will get back to you as soon as possible.",
      className: "bg-foreground text-white border-none",
    });
    (e.target as HTMLFormElement).reset();
  };

  const blogs = [
    {
      title: "Ekta Bharat Foundation Launches New Skilling Program in UP",
      date: "Oct 12, 2023",
      img: "women-empowerment.png",
      excerpt: "Over 500 women enrolled in our newly launched technical and vocational training center in Lucknow."
    },
    {
      title: "500 Children Get Free Books in Madhya Pradesh",
      date: "Sep 28, 2023",
      img: "child-education.png",
      excerpt: "Our education drive reached tribal districts, providing essential study materials for the academic year."
    },
    {
      title: "Health Camp Reaches 1,200 Families in Rural Bihar",
      date: "Sep 15, 2023",
      img: "healthcare.png",
      excerpt: "A team of 40 volunteer doctors provided free checkups, medicines, and eye care in remote villages."
    }
  ];

  return (
    <>
      {/* Blog Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Latest Updates</span>
              <h2 className="text-4xl font-serif font-bold text-foreground">News & Blog</h2>
            </div>
            <button className="hidden md:block text-primary font-bold hover:underline">View All</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border group cursor-pointer">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={`/images/${blog.img}`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-3">{blog.date}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{blog.excerpt}</p>
                  <span className="text-primary font-semibold text-sm">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">We'd Love to Hear From You</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Have questions about our programs, donations, or partnerships? Our team is ready to assist you.
              </p>

              <div className="bg-muted p-8 rounded-3xl flex items-center justify-center min-h-[250px] mb-8 relative overflow-hidden group">
                {/* Fake map placeholder */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10"></div>
                <div className="bg-white p-4 rounded-full shadow-lg z-10 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
              </div>

              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Your Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Subject</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-input focus:ring-2 focus:ring-primary outline-none bg-muted/30 resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-colors">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
