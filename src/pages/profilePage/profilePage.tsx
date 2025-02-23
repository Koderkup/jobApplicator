import styles from "./style.module.css";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { UserProfile } from "./UserProfile/UserProfile";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import { EmailSection } from "./EmailSection/EmailSection";

const profilePage = () => {
 return (
   <div className={styles.container}>
     <main className={styles.profilesetting}>
       <aside className={styles.sidebar}>
         <div className={styles.sidebarContent} />
       </aside>

       <section className={styles.mainContent}>
         <ProfileHeader />

         <article className={styles.profileCard}>
           <img
             src="../../../public/profile_banner.png"
             alt="Profile banner"
             className={styles.profileBanner}
           />

           <div className={styles.profileContent}>
             <UserProfile />
             <ProfileForm />
             <EmailSection />
           </div>
         </article>
       </section>
     </main>
   </div>
 );
};

export default profilePage;

