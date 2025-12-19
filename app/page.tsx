"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Music, Code, Award, Briefcase, GraduationCap, Mail, Github, Linkedin, Globe, ChevronDown } from "lucide-react"

type Language = "pt" | "en"

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      education: "Formação",
      skills: "Habilidades",
      awards: "Conquistas",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      title: "Estudante de Engenharia de Software",
      subtitle: "Desenvolvedor Front-end • Músico • Professor",
      cta: "Ver Projetos",
    },
    about: {
      title: "Sobre Mim",
      text: "Músico desde os 4 anos de idade, tendo passado por diversas orquestras em Goiânia e participado de shows, novelas e eventos estaduais, municipais e federais. Iniciei minha carreira em Engenharia de Software no final de 2024, após concluir o Ensino Médio. Desde então, cursei na Unievangélica e desenvolvi diversas habilidades que impulsionaram minhas experiências profissionais.",
    },
    experience: {
      title: "Experiência Profissional",
      jobs: [
        {
          title: "Desenvolvedor Front-end",
          company: "LIB - desenvolvedores",
          period: "Atualmente",
          description:
            "Desenvolvedor de um pequeno negócio fundado por mim e mais dois colaboradores. Desenvolvemos geralmente Sites, já fizemos para uma grande escola em Goiânia (Basileu França), e uma escola em Anápolis (escola evangélica Shalom).",
        },
        {
          title: "Professor de Informática",
          company: "ABID",
          period: "2025",
          description:
            "Ensinei crianças carentes de escola pública a utilizar computadores de forma básica e funcional. Promovi orientações sobre segurança digital, incentivando práticas de proteção no uso da internet.",
        },
        {
          title: "Professor de Música",
          company: "Arowwai Industries",
          period: "2025",
          description:
            "Ministrei aulas de teoria musical e violoncello, promovendo a compreensão dos fundamentos da linguagem musical e incentivando a prática instrumental.",
        },
      ],
    },
    education: {
      title: "Formação",
      items: [
        {
          degree: "Bacharelado em Engenharia de Software",
          institution: "Unievangélica",
          period: "2025-2028",
          status: "Cursando (3º período)",
        },
        {
          degree: "Ensino Médio",
          institution: "COPE",
          period: "2022-2024",
          status: "Concluído",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      technical: "Técnicas",
      soft: "Soft Skills",
      languages: "Idiomas",
      techList: [
        "HTML & CSS",
        "Python",
        "Git & GitHub",
        "Full Stack (em andamento)",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      softList: [
        "Liderança acadêmica",
        "Trabalho em equipe",
        "Comunicação clara",
        "Pensamento crítico",
        "Flexibilidade",
        "Sede para o Aprendizado",
      ],
      langList: ["Português - Nativo", "Inglês - Avançado", "Espanhol - Iniciante"],
    },
    awards: {
      title: "Conquistas",
      items: [
        {
          title: "2º Lugar - Olimpíada de IA Aplicada UFG",
          description:
            "Conquistei o segundo lugar na Olimpíada de Inteligência Artificial Aplicada da UFG, realizada na Campus Party. Premiação: R$ 3.000 + intercâmbio para Inglaterra (previsto para 2026), custeado pelo Governo de Goiás.",
          year: "2025",
        },
      ],
    },
    courses: {
      title: "Cursos",
      list: [
        "Inteligência Artificial (40h) - UFG",
        "Python (40h) - UFG",
        "Git e GitHub - Rocketseat",
        "HTML e CSS - Curso em vídeo",
        "Full Stack (200h) - Rocketseat",
        "Python - Fundação Bradesco",
        "Qualificação Profissional Técnico musical (260h) - Basileu França",
        "Qualificação Profissional Técnico em Performance musical (160h) - Basileu França",
      ],
    },
    contact: {
      title: "Vamos Conversar",
      description: "Estou sempre aberto a novos projetos e oportunidades. Entre em contato!",
      location: "Anápolis/Goiânia (GO) - Brasil",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      awards: "Awards",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Software Engineering Student",
      subtitle: "Front-end Developer • Musician • Teacher",
      cta: "View Projects",
    },
    about: {
      title: "About Me",
      text: "Musician since age 4, having performed with various orchestras in Goiânia and participated in shows, soap operas, and state, municipal, and federal events. I began my Software Engineering career at the end of 2024, after completing high school. Since then, I've been studying at Unievangélica and developing various skills that have driven my professional experiences.",
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Front-end Developer",
          company: "LIB - desenvolvedores",
          period: "Currently",
          description:
            "Developer in a small business founded by me and two other collaborators. We generally develop websites, having worked for a large school in Goiânia (Basileu França) and a school in Anápolis (Shalom Evangelical School).",
        },
        {
          title: "Computer Science Teacher",
          company: "ABID",
          period: "2025",
          description:
            "Taught underprivileged children from public schools to use computers in a basic and functional way. Promoted guidance on digital security, encouraging protective practices in internet use.",
        },
        {
          title: "Music Teacher",
          company: "Arowwai Industries",
          period: "2025",
          description:
            "Taught music theory and cello classes, promoting understanding of musical language fundamentals and encouraging instrumental practice.",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Bachelor's in Software Engineering",
          institution: "Unievangélica",
          period: "2025-2028",
          status: "Ongoing (3rd semester)",
        },
        {
          degree: "High School",
          institution: "COPE",
          period: "2022-2024",
          status: "Completed",
        },
      ],
    },
    skills: {
      title: "Skills",
      technical: "Technical",
      soft: "Soft Skills",
      languages: "Languages",
      techList: [
        "HTML & CSS",
        "Python",
        "Git & GitHub",
        "Full Stack (in progress)",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      softList: [
        "Academic Leadership",
        "Teamwork",
        "Clear Communication",
        "Critical Thinking",
        "Flexibility",
        "Eagerness to Learn",
      ],
      langList: ["Portuguese - Native", "English - Advanced", "Spanish - Beginner"],
    },
    awards: {
      title: "Achievements",
      items: [
        {
          title: "2nd Place - UFG Applied AI Olympiad",
          description:
            "Achieved second place in the UFG Applied Artificial Intelligence Olympiad, held at Campus Party. Prize: R$ 3,000 + exchange program to England (scheduled for 2026), funded by the Government of Goiás.",
          year: "2025",
        },
      ],
    },
    courses: {
      title: "Courses",
      list: [
        "Artificial Intelligence (40h) - UFG",
        "Python (40h) - UFG",
        "Git and GitHub - Rocketseat",
        "HTML and CSS - Curso em vídeo",
        "Full Stack (200h) - Rocketseat",
        "Python - Bradesco Foundation",
        "Professional Technical Qualification in Music (260h) - Basileu França",
        "Professional Technical Qualification in Musical Performance (160h) - Basileu França",
      ],
    },
    contact: {
      title: "Let's Talk",
      description: "I'm always open to new projects and opportunities. Get in touch!",
      location: "Anápolis/Goiânia (GO) - Brazil",
    },
  },
}

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("pt")
  const t = translations[lang]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-foreground">
              Igor Ferreira
            </a>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.education}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>

            <Button variant="outline" size="sm" onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="gap-2">
              <Globe className="h-4 w-4" />
              {lang === "pt" ? "EN" : "PT"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg text-muted-foreground mb-2">{t.hero.greeting}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
              Igor Ferreira
            </h1>
            <p className="text-xl sm:text-2xl text-accent-foreground mb-6 text-balance">{t.hero.title}</p>
            <p className="text-lg text-muted-foreground mb-8">{t.hero.subtitle}</p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                {t.nav.contact}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/igorcelloferreira" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">{t.about.title}</h2>
          <Card className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.text}</p>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">{t.experience.title}</h2>
          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-accent rounded-lg">
                    {index === 0 ? (
                      <Code className="h-6 w-6 text-accent-foreground" />
                    ) : index === 1 ? (
                      <Briefcase className="h-6 w-6 text-accent-foreground" />
                    ) : (
                      <Music className="h-6 w-6 text-accent-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-accent-foreground font-medium mb-3">{job.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">{t.education.title}</h2>
          <div className="grid gap-6">
            {t.education.items.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-accent rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="text-accent-foreground font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.status}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t.skills.technical}</h3>
              <ul className="space-y-2">
                {t.skills.techList.map((skill, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {skill}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t.skills.soft}</h3>
              <ul className="space-y-2">
                {t.skills.softList.map((skill, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {skill}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t.skills.languages}</h3>
              <ul className="space-y-2">
                {t.skills.langList.map((lang, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {lang}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">{t.awards.title}</h2>
          {t.awards.items.map((award, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-accent rounded-lg">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">{award.title}</h3>
                    <span className="text-sm text-muted-foreground">{award.year}</span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">{t.courses.title}</h2>
          <Card className="p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {t.courses.list.map((course, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-accent-foreground mt-1">✓</span>
                  <p className="text-muted-foreground">{course}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">{t.contact.description}</p>
          <Card className="p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-accent-foreground" />
                <a
                  href="mailto:igorcelloferreira@gmail.com"
                  className="text-lg text-foreground hover:text-accent-foreground transition-colors"
                >
                  igorcelloferreira@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="h-5 w-5 text-accent-foreground" />
                <span className="text-muted-foreground">{t.contact.location}</span>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/igorcelloferreira"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/igorcelloferreira"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Igor Ferreira. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  )
}
