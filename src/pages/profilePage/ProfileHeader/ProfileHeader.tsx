import styles from "./style.module.css";

export function ProfileHeader() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeUser}>Привет, Аманда</h1>
        <time className={styles.dateTime}>Вт, 23 Фев 2025</time>
      </div>

      <div className={styles.headerActions}>
        <input
          type="search"
          placeholder="Search"
          className={styles.search}
          aria-label="Search"
        />
        <button
          className={styles.notificationButton}
          aria-label="Notifications"
        >
          <span className={styles.notificationIcon} />
        </button>
        <button className={styles.profileButton} aria-label="Profile menu">
          <img
            src="../../../../public/face.png"
            alt="Profile face"
            className={styles.profileImage}
          />
        </button>
      </div>
    </header>
  );
}
