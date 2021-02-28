import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){

    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jokleber85.png" />
            <div>
                <strong>John Kleber</strong>
                <p>
                    <img src="icons/level.svg" alt="lever" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}