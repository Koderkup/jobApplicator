import styles from "./style.module.css";

export function ProfileForm() {
  return (
    <form className={styles.profileForm}>
      <div className={styles.formRow}>
        <input
          type="text"
          placeholder="Имя"
          className={styles.formInput}
          aria-label="First name"
        />
        <input
          type="text"
          placeholder="Фамилия"
          className={styles.formInput}
          aria-label="Last name"
        />
      </div>

      <div className={styles.formLabels}>
        <label htmlFor="gender">Пол</label>
        <label htmlFor="country">Страна</label>
      </div>

      <div className={styles.formRow}>
        <select
          id="gender"
          className={styles.formInput}
          aria-label="Select gender"
        >
          <option>Выберети пол</option>
          <option>Мужской</option>
          <option>Женский</option>
        </select>
        <select
          id="country"
          className={styles.formInput}
          aria-label="Select country"
        >
          <option>Страна</option>
        </select>
      </div>

      <div className={styles.formLabels}>
        <label htmlFor="language">Язык</label>
        <label htmlFor="timezone">Временная зона</label>
      </div>

      <div className={styles.formRow}>
        <select
          id="language"
          className={styles.formInput}
          aria-label="Select language"
        >
          <option>Ваш язык</option>
        </select>
        <select
          id="timezone"
          className={styles.formInput}
          aria-label="Select timezone"
        >
          <option>Временная зона</option>
        </select>
      </div>
    </form>
  );
}
