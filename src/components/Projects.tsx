'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Exposr',
    description:
      'iOS and Android travel app for verified visits, travel stats, and social features—follows, groups, and place-tagged posts—plus trip planning with flight search via providers such as Amadeus and Duffel. Includes Metro, a floating AI assistant for on-the-go help. Supabase for auth, data, and storage; push via Expo among other integrations.',
    image: '/images/exposr.png',
    technologies: [
      'Expo',
      'React Native',
      'TypeScript',
      'Supabase',
      'Amadeus',
      'Duffel API',
      'AI (Metro)',
    ],
    link: 'https://github.com/YetronLives/MetronXposure',
    demo: 'https://exposr-dot-com.vercel.app/',
  },
  {
    title: 'Metron',
    description: 'App that allows users to manage their finance',
    image: '/images/metron.png',
    technologies: ['Next.js', 'Typescript', 'Node.js', 'Supabase', 'ChatGPT 4o Mini', 'Vercel'],
    link: 'https://github.com/YetronLives/Metron',
    demo: 'https://metronfinances.vercel.app/'
  },
  {
    title: 'ColorStack at KSU',
    description: 'Using React.js to develop a website for my college\'s ColorStack Chapter to provide easy access to resources and information.',
    image: '/images/ColorstackAtKSU.jpg',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'MongoDB'],
    link: 'https://github.com/colorstacksu/Betasite',
    demo: 'https://colorstacksu.vercel.app/'
  },
  {
    title: 'ManageMe.io',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: '/images/ManageMeIO.png',
    technologies: ['ASP.NET', 'C#', 'HTML/CSS', 'Entity Framework', 'MongoDB'],
    link: 'https://github.com/YetronLives/SPM-project-copy',
    demo: 'https://spm-project-copy.onrender.com/'
  },
//   {
//     title: 'AI Image Generator',
//     description: 'An AI-powered image generation tool that creates unique artwork based on text prompts.',
//     image: '/projects/aigenerator.jpg',
//     technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
//     link: 'https://github.com/yourusername/ai-generator',
//     demo: 'https://ai-generator-demo.com',
//   },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} className={`${styles.link} ${styles.demo}`} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 