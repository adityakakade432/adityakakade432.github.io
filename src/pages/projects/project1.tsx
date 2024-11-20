import { useRouter } from 'next/router';
import styles from '../../styles/Project.module.css';

const Project: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>Project Name</h1>
      <p>Blah Blah Blah</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default Project;