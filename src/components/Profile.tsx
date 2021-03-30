import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../style/components/Profile.module.css';

export function Profile(){
    const{level}=useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62807696?s=460&u=d084a4a0eddae1ca39db604c8546cf64070bdd1a&v=4" alt='Bruno Oliveira'/>
        <div>
            <strong>Bruno Oliveira</strong>
            <p>
            <img src='icons/level.svg'alt='level'/>
            Level {level};
            </p>
            </div>
            </div>
    );
}