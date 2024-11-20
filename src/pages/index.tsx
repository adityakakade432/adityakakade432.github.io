import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section id="landing" className={styles.landing}>
        <h1>Hi, I'm Aditya Kakade!!!</h1>
        <p>I'm a current Computer Science student and Software Engineer at Cornell University!</p>
        <a
          href="/resume.pdf"
          download="My_Resume.pdf"
          className={styles.downloadButton}
        >
          Download Resume
        </a>
      </section>


      {/* About Me Section */}
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>Blah Blah Blah</p>
      </section>

      {/* Work Experience Section */}
      <section id="work" className={styles.section}>
        <h2>Work Experience</h2>
        <div className={styles.cardContainer}>
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className={styles.card}>
              <h3>MITRE</h3>
              <p>Role: Software Engineer Intern</p>
              <p>Blah Blah Blah</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Experience Section */}
      <section id="projects" className={styles.section}>
        <h2>Project Experience</h2>
        <div className={styles.cardContainer}>
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className={styles.card}>
              <h3>Project Title</h3>
              <p>Blah Blah Blah.</p>
              <Link href={`/projects/project${idx + 1}`}>View Project</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;