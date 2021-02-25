import styles from "../styles/components/Profile.module.css";

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jokleber85.png" />
            <div>
                <strong>John Kleber</strong>
                <p>
                    <img src="icons/level.svg" alt="lever" />
                    Level 1
                </p>
            </div>
        </div>
    );
}