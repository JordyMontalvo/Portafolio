import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Open default mailto link as backup so the user's message is immediately actionable
    const mailtoUrl = `mailto:jordyjosephmontalvo@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#05080e] transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Initiate Collaboration
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Whether you need enterprise Shopify architecture, full-stack development, or performance consulting, let's discuss your roadmap.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-obsidian-900/70 border border-slate-200/70 dark:border-slate-800/80 shadow-sm space-y-6">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:jordyjosephmontalvo@gmail.com"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-obsidian-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">Email</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      jordyjosephmontalvo@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/51978509234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-obsidian-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">WhatsApp / Phone</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      +51 978 509 234
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl">
                  <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-obsidian-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Lima, Peru (GMT-5 / Remote)
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Online Profiles
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/JordyMontalvo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-lg bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jordy-joseph-montalvo-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-lg bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5"
            >
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Thank you! Your email client has been prepared. I typically respond within 24 hours.</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-obsidian-850 text-slate-900 dark:text-white text-sm"
                    placeholder="Alex Parker"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-obsidian-850 text-slate-900 dark:text-white text-sm"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                  Subject / Scope
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-obsidian-850 text-slate-900 dark:text-white text-sm"
                  placeholder="E-Commerce Architecture / Full-Stack Project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-obsidian-850 text-slate-900 dark:text-white text-sm resize-none"
                  placeholder="Tell me about the goals, timeline, and current technical architecture..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;