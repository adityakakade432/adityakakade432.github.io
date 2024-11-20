import { useRouter } from 'next/router';
import styles from '../../styles/Project.module.css';

const Project: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>Project Title</h1>
      <p>Blah BLah Blah</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default Project;