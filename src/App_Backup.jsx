import React, { useState, useEffect } from 'react';
import { Shield, Code, FileText, Award, Mail, Linkedin, Github, ExternalLink, Download, Check, Briefcase } from 'lucide-react';

const Portfolio = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'GRC Specialist | MBA Candidate | Documentation Expert';
  const [showCursor, setShowCursor] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  
  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Download resume function
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Nrup_Rawal_Resume_GRC.pdf';
    link.download = 'Nrup_Rawal_Resume_GRC.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const opacity = Math.max(0, 1 - scrollY / 200);

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden font-['Inter']" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Large Gradient Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Frosted Glass Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            NR
          </div>
          <div className="flex gap-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-300 hover:text-white transition-colors font-medium cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">Nrup Rawal</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-xl">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">Available for Opportunities</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Bridging Technical Security &
            </span>
            <br />
            <span className="text-white">Business Strategy</span>
          </h1>

          <div className="h-8 mb-8">
            <p className="text-2xl text-slate-300 font-medium">
              {typedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </p>
          </div>

          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I translate complex security protocols into actionable business strategies. Specializing in ISO 27001 compliance, Azure security governance, and audit readiness.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-semibold shadow-xl flex items-center gap-2 hover:bg-white/15 transition-all cursor-pointer"
            >
              View Work
              <Briefcase size={18} />
            </a>
            <button
              onClick={downloadResume}
              className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-slate-300 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer shadow-xl"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              The Translator Between "Ops" and "Execs"
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-white/10 transition-all">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Effective cybersecurity isn't just about firewalls; it's about governance. With a background in Computer Engineering and current MBA studies at National Forensic Sciences University, I possess a dual fluency: I can configure Microsoft Entra ID policies and draft the executive risk report explaining why they matter.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently serving as a Documentation Specialist at Synoptek, I streamline audit readiness and process standardization for enterprise clients. My goal is simple: to build security frameworks that enable business growth rather than stifling it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Shield, title: 'GRC Focus', desc: 'ISO 27001 & Compliance' },
              { icon: Code, title: 'Technical Edge', desc: 'Azure & Cloud Security' },
              { icon: FileText, title: 'Documentation', desc: 'Audit-Ready SOPs' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all"
              >
                <item.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400"></div>

            {/* Experience Items */}
            <TimelineItem
              date="Jul 2025 – Present"
              role="Documentation Specialist"
              company="Synoptek"
              focus="Governance & Process Standardization"
              achievement="Engineered standardized SOP frameworks that reduced audit preparation time. Managed knowledge repositories ensuring 100% alignment with compliance protocols."
            />

            <TimelineItem
              date="Jul 2024 – Jun 2025"
              role="Associate Support Engineer"
              company="Synoptek"
              focus="Cloud & Identity Security"
              achievement="Hands-on management of Microsoft Entra ID and L1 security incidents. Resolved identity access management (IAM) tickets with a focus on minimizing downtime while maintaining least-privilege access."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <div className="space-y-12">
            {/* Project Aegis */}
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full mb-4">
                    <Shield size={16} className="text-blue-400" />
                    <span className="text-blue-400 text-xs font-medium">ISO 27001:2022</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Project Aegis: ISO 27001 GRC Simulation</h3>
                  <p className="text-slate-400 text-lg">A comprehensive mock implementation of ISO 27001:2022</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'Gap Analysis',
                    desc: 'Conducted a simulated audit to identify compliance voids against Annex A controls.'
                  },
                  {
                    title: 'Risk Quantification',
                    desc: 'Built a dynamic Risk Register (Heat Map) prioritizing assets by business value.'
                  },
                  {
                    title: 'Policy Development',
                    desc: 'Authored a complete Human Resource Security Policy compliant with Clause 7.'
                  },
                  {
                    title: 'Outcome',
                    desc: 'Produced a C-Suite readiness deck demonstrating a 40% reduction in theoretical risk exposure.'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all"
                  >
                    <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check size={20} />
                    <span className="font-semibold">40% Risk Reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Shield size={20} />
                    <span className="font-semibold">Full Annex A Coverage</span>
                  </div>
                </div>
                <a
                  href="https://github.com/nrup-rawal/Project-Aegis-ISO27001-Framework"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl hover:bg-white/15 transition-all font-semibold shadow-xl"
                >
                  <Github size={20} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2: Secure Cloud Infrastructure */}
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full mb-4">
                    <Code size={16} className="text-purple-400" />
                    <span className="text-purple-400 text-xs font-medium">Red Team & Blue Team</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Secure Cloud Infrastructure & Python Pentest Toolkit</h3>
                  <p className="text-slate-400 text-lg">A "Defense-in-Depth" implementation pairing a hardened private cloud with a custom offensive toolkit</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                  To understand the full lifecycle of a cyber attack, I architected a secured private cloud environment and simultaneously developed the tools to compromise it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Infrastructure Design',
                      desc: 'Deployed a virtualized corporate network using VMware, segregated into victim and attacker subnets via pfSense firewalls.'
                    },
                    {
                      title: 'Defense Implementation',
                      desc: 'Configured Active Directory for Identity Management, Security Onion for Intrusion Detection (IDS), and Splunk Universal Forwarder for centralized log analysis (SIEM).'
                    },
                    {
                      title: 'Offensive Tool Development',
                      desc: 'Wrote a custom CLI tool ("Nrup\'s Pen") in Python using libraries like Scapy and Requests. Features include automated port scanning, SQL injection detection, packet sniffing, and password cracking.'
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all"
                    >
                      <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 mb-6 shadow-lg">
                <h4 className="text-xl font-semibold mb-4 text-white">Tech Stack</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">Infrastructure</p>
                    <p className="text-slate-400 text-sm">VMware, Windows Server 2019 (AD), pfSense</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">Security Ops</p>
                    <p className="text-slate-400 text-sm">Splunk, Security Onion (Suricata/Zeek), Kali Linux</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">Development</p>
                    <p className="text-slate-400 text-sm">Python (Scapy, Socket, Hashcat integration)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check size={20} />
                    <span className="font-semibold">Full Attack Lifecycle</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Shield size={20} />
                    <span className="font-semibold">Custom Pentest Tool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Skills & Tools
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard
              title="Governance & Risk"
              skills={[
                'ISO 27001:2022',
                'NIST CSF',
                'Risk Assessment',
                'Heat Maps',
                'Gap Analysis',
                'Audit Readiness'
              ]}
            />
            <SkillCard
              title="Technical Security"
              skills={[
                'Microsoft Entra ID',
                'Azure AD',
                'Conditional Access',
                'AZ-500',
                'Azure Security',
                'Active Directory',
                'Intrusion Detection (IDS)',
                'SIEM'
              ]}
            />
            <SkillCard
              title="Tools & Technologies"
              skills={[
                'Confluence',
                'ServiceNow',
                'Splunk',
                'Security Onion',
                'VMware',
                'pfSense',
                'Python',
                'Kali Linux'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-white">MBA in Cybersecurity Management</h4>
                  <p className="text-slate-400">National Forensic Sciences University (NFSU)</p>
                  <p className="text-blue-400 text-sm">Expected 2027</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">B.Tech in Computer Engineering</h4>
                  <p className="text-slate-400">Ganpat University</p>
                  <p className="text-blue-400 text-sm">2024</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
              <div className="space-y-3">
                <div className="bg-white/5 backdrop-blur-lg border border-white/20 p-3 rounded-xl flex items-start gap-3">
                  <Award className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">Azure Security Engineer Associate (AZ-500)</p>
                    <p className="text-sm text-slate-400">Scheduled Feb 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">ISC2 Certified in Cybersecurity (CC)</p>
                    <p className="text-sm text-slate-400">Certified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <p className="font-semibold text-white">Google Cybersecurity</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-slate-400">Certified</p>
                      <a 
                        href="https://coursera.org/share/50bc7a2982f742d0df20e2755bfbd2f7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 underline"
                      >
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Ready to secure your infrastructure?
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Let's discuss how I can help strengthen your organization's security posture.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:contact@nruprawal.com"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-semibold text-lg shadow-xl hover:bg-white/15 transition-all"
            >
              <Mail size={24} />
              contact@nruprawal.com
            </a>

            <div className="flex gap-6">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nrup-rawal' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/nrup-rawal' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 text-slate-300 rounded-2xl hover:bg-white/10 transition-all shadow-xl"
                >
                  <social.icon size={20} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2026 Nrup Rawal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ date, role, company, focus, achievement }) => {
  return (
    <div className="relative pl-20 pb-16">
      {/* Timeline Dot */}
      <div className="absolute left-6 top-0 w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-slate-950 shadow-xl"></div>

      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all">
        <div className="text-blue-400 text-sm font-medium mb-2">{date}</div>
        <h3 className="text-2xl font-bold mb-1 text-white">{role}</h3>
        <p className="text-slate-400 mb-2">{company}</p>
        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-blue-400 text-xs font-semibold mb-4">
          {focus}
        </div>
        <p className="text-slate-300 leading-relaxed">{achievement}</p>
      </div>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ title, skills }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className={`bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl transition-all h-full ${isHovered ? 'bg-white/10' : ''}`}>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <div className="space-y-2">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span className="text-slate-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
