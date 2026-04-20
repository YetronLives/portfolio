'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

interface SkillItem {
  name: string;
  icon: string;
  /** Official logo with brand colors (skip invert filter on dark UI) */
  brand?: boolean;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: 'Languages & markup',
    items: [
      { name: 'TypeScript', icon: '/icons/skills/typescript.svg' },
      { name: 'JavaScript', icon: '/icons/skills/javascript.svg' },
      { name: 'C#', icon: '/icons/skills/csharp.svg' },
      { name: 'HTML5', icon: '/icons/skills/html5.svg' },
      { name: 'CSS', icon: '/icons/skills/css3.svg' },
    ],
  },
  {
    category: 'Apps & frameworks',
    items: [
      { name: 'React', icon: '/icons/skills/react.svg' },
      { name: 'Next.js', icon: '/icons/skills/nextdotjs.svg' },
      { name: 'React Native', icon: '/icons/skills/reactnative.svg', brand: true },
      { name: 'Expo', icon: '/icons/skills/expo.svg' },
      { name: 'Node.js', icon: '/icons/skills/nodedotjs.svg' },
      { name: 'ASP.NET', icon: '/icons/skills/dotnet.svg' },
    ],
  },
  {
    category: 'Data & backend services',
    items: [
      { name: 'Supabase', icon: '/icons/skills/supabase.svg' },
      { name: 'MongoDB', icon: '/icons/skills/mongodb.svg' },
      {
        name: 'Entity Framework',
        icon: '/icons/skills/microsoftsqlserver.svg',
      },
    ],
  },
  {
    category: 'Deploy, APIs & tooling',
    items: [
      { name: 'Vercel', icon: '/icons/skills/vercel.svg' },
      { name: 'OpenAI API', icon: '/icons/skills/openai.svg' },
      { name: 'Amadeus API', icon: '/icons/skills/amadeus.svg' },
      { name: 'Duffel API', icon: '/icons/skills/duffel.svg' },
      { name: 'Git', icon: '/icons/skills/git.svg' },
      { name: 'GitHub', icon: '/icons/skills/github.svg' },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <div className={styles.grid}>
          {skills.map((category) => (
            <div key={category.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsGrid}>
                {category.items.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <span className={styles.iconWrap}>
                      <Image
                        src={skill.icon}
                        alt=""
                        width={40}
                        height={40}
                        className={
                          skill.brand
                            ? styles.iconBrand
                            : styles.iconMono
                        }
                      />
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
