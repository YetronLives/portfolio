'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Experience.module.css';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'GoDaddy',
    role: 'Software Development Engineer',
    period: 'January 2025 - Present',
    description: [
      'Implemented backend services in Go (GET, POST, PATCH), reducing ticket processing time by 70% and ensuring reliable data access for internal stakeholders',
      'Increased service reliability by developing unit tests with Mockery, achieving 95%+ test coverage for Lambda business logic',
    ],
    technologies: ['GoLang', 'AWS Lambda', 'CDK', 'C#', 'DynamoDB', 'Git', 'AWS DynamoDB', 'Claude Code'],
    logo: '/images/logos/godaddy.png'
  },
  {
    company: 'GoDaddy',
    role: 'Software Development Engineer Intern',
    period: 'Summer 2025',
    description: [
      'Built and deployed a serverless REST API on AWS (CDK, Lambda, DynamoDB, ALB), replacing manual Excel workflows and enabling scalable storage of 1,000+ partner tickets',
      'Implemented backend services in Go (GET, POST, PATCH), reducing ticket processing time by 70% and ensuring reliable data access for internal stakeholders',
      'Integrated Asherah encryption into DynamoDB, ensuring 100% secure storage of sensitive customer and partner data',
      'Increased service reliability by developing unit tests with Mockery, achieving 85%+ test coverage for Lambda business logic',
      'Improved API usability by documenting endpoints with Swagger, reducing developer onboarding by ~40%',
    ],
    technologies: ['AWS Lambda', 'CDK', 'C#', 'DynamoDB', 'Git'],
    logo: '/images/logos/godaddy.png'
  },
  {
    company: 'State Farm',
    role: 'Software Engineer Intern',
    period: 'Summer 2023 and Summer 2024',
    description: [
      'Utilized Angular Framework alongside HTML/CSS to update an internal website with content and new UI',
      'Used Typescript to update and maintain a REST API',
      'Researched on JWTs and updated authentication flow for services to support JWTs and created tests for API calls',
      'Created Jest unit tests to test Typescript code to ensure code quality',
      'Utilized Terraform to update AWS Infrastructure configurations (Secrets Managers, Lambda, ECS etc.)',
      'Trained a Machine Learning Model with AWS DeepRacer and placed in top 10 fastest models'
    ],
    technologies: ['Angular', 'Typescript', 'Jest', 'Terraform', 'AWS', 'Git'],
    logo: '/images/logos/statefarm.webp'
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const currentItemRefs = itemRefs.current;

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

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    currentItemRefs.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      currentItemRefs.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.companyInfo}>
                    <div className={styles.logoWrapper}>
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className={styles.logo}
                      />
                    </div>
                    <h3 className={styles.company}>{exp.company}</h3>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <h4 className={styles.role}>{exp.role}</h4>
                <ul className={styles.description}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 