'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("https://formspree.io/f/xgvzndwv", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  });

  if (res.ok) {
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  } else {
    alert("Something went wrong. Please try again later.");
  }
};
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.navCon}>
        <a className={styles.navlink} href="#home">Home</a>
        <a className={styles.navlink} href="#projects">Projects</a>
        <a className={styles.navlink} href="#about">About </a>
        <a className={styles.navlink} href="#contact">Contact</a>
        </div>
        <div style={{marginRight: 40}}>
          <h3 className={styles.navlink}>T.I</h3>
        </div>
      </nav>

      <main className={styles.main}>
        <section id="home" className={styles.section}>
          <h1 className={styles.heading}>Tredis Ingram</h1>
          <h1 className={styles.tagline}>Software Developer </h1>
          <p className={styles.tagDesc}>I build web and mobile applications with a unique touch</p>
        </section>


      
    <section id="about" className={styles.section}>
  <div className={styles.aboutContainer}>
  
    {/* Left: About Me Text */}
    <div>
    <h1 className={styles.secondHeader}>ABOUT ME</h1>
    <div className={styles.aboutText}>
      <p>
        Hello! I'm <span className={styles.bold}>Tredis Ingram</span>, a passionate and dedicated <span className={styles.bold}>software developer</span> with a focus on building sleek, performant web and mobile apps. I specialize in turning ideas into high-quality user experiences.
      </p>
      <br />
      <p>
        I have <span className={styles.bold}>3+ years of experience</span> working with technologies such as React, TypeScript, Firebase, and Node.js. I thrive on solving technical challenges and continuously learning to stay sharp in this fast-paced industry.
      </p>
      <br />
      <p>
        <span className={styles.bold}>My goal</span> is to develop apps that not only look and feel great, but also deliver value with clean design and functionality.
      </p>
    </div>
</div>
    {/* Right: Skill Bubbles */}
    <div>
    <h1 className={styles.secondHeader}>SKILLS</h1>
    
    <div className={styles.skillsGrid}>
      {[
        "HTML", "CSS", "JavaScript", "C++", "TypeScript", "React",
        "Next.js", "Firebase", "Node.js", "RESTful API", "Redux"
      ].map(skill => (
        <span key={skill} className={styles.skillBubble}>{skill}</span>
      ))}
    </div>
    </div>

  </div>
</section>

<section id="projects" className={styles.section}>
  <h2 className={styles.subheading}>Projects</h2>
  <div className={styles.projectsGrid}>
    {[
      {
        title: 'Somatics Fit',
        image: '/projects/somafit.png', 
        github: 'https://github.com/tcoldx/somaticsFrontend',
      },
      {
        title: 'Crypto Book',
        image: '/projects/crypto.png',
        github: 'https://github.com/tcoldx/crypto-book',
      },
      {
        title: 'Chat Roomz',
        image: '/projects/chatroomz.png',
        github: 'https://github.com/tcoldx/Chat-Roomz-Client',
      },
    ].map((project, idx) => (
      <a
        key={idx}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectCard}
      >
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
        <h3 className={styles.projectTitle}>{project.title}</h3>
      </a>
    ))}
  </div>
</section>


       <section id="contact" className={styles.contactSection}>
      <div className={styles.left}>
        <h2>Contact Me</h2>
        <p>
          Have a question, project idea, or just want to connect? Fill out the form and I’ll get back to you soon.
        </p>

        <p style={{marginTop: 40}}><span className={styles.email}>Email:</span> t.tredis@gmail.com</p>
      </div>

      {!submitted ? (<form onSubmit={handleSubmit} className={styles.right}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form> ) : (
        <p className={styles.success}>Submission successful, Thanks!</p>
      )}
    </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Son Tredis</p>
      </footer>
    </div>
  );
}
