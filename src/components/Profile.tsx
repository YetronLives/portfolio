'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Profile.module.css';
import SocialLinks from './SocialLinks';

export default function Profile() {
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
    <section ref={sectionRef} className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                className={styles.image}
                fill
                sizes="(max-width: 768px) 300px, 500px"
                priority
                quality={90}
              />
              <div className={styles.imageOverlay} />
            </div>
            <SocialLinks />
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Hi, I&apos;m <span className={styles.highlight}>Constant!</span>
            </h1>
            <div className={styles.education}>
              <p className={styles.school}>
                <span className={styles.schoolName}>Software Engineer at GoDaddy</span>
                <span className={styles.degree}>
                  Bachelor of Science in Software Engineering
                </span>
                <span className={styles.minor}>
                  Minor in Mathematics · Kennesaw State University
                </span>
              </p>
            </div>
            <p className={styles.subtitle}>
              Full-stack developer passionate about creating efficient and functional web applications and systems
            </p>
            <div className={styles.buttons}>
              <a href="#projects" className={styles.button}>
                View Projects
              </a>
              <a href="/files/CNRes-Oct25.pdf" className={`${styles.button} ${styles.outline}`} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
              <a href="#contact" className={`${styles.button} ${styles.outline}`}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 