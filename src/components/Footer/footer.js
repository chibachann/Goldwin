import * as React from "react"
import * as styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div>
        <h3 className={styles.footerSectionTitle}>Green Company</h3>
        <p className={styles.footerSectionText}>私たちは持続可能な未来を目指しています。</p>
      </div>
      <div>
        <h3 className={styles.footerSectionTitle}>連絡先</h3>
        <p className={styles.footerSectionText}>メール: contact@greencompany.com</p>
        <p className={styles.footerSectionText}>電話: 0123-456-789</p>
      </div>
      <div>
        <h3 className={styles.footerSectionTitle}>フォローする</h3>
        <a href="https://www.instagram.com/yourusername" className={styles.socialIcons}><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/yourusername" className={styles.socialIcons}><i className="fab fa-facebook-f"></i></a>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2024 Green Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
