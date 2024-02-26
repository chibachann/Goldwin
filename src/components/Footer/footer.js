import * as React from "react"
import * as styles from "./footer.module.css"
import { Link } from "gatsby"

import FacebookIcon from "../../images/icons8-facebook.svg"
import InstagramIcon from "../../images/icons8-instagram.svg"
import LineIcon from "../../images/icons8-line.svg"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.leftSection}>
        <h2 className={styles.footerWebsiteTitle}>GOLDWIN WEB STORE</h2>
        <div className={styles.socialIconsContainer}>
          <InstagramIcon className={styles.socialIcon} />
          <LineIcon className={styles.socialIcon} />
          <FacebookIcon className={styles.socialIcon} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.subSection}>
          <h3 className={styles.footerSectionTitle}>探す</h3>
          <Link to="/brands" className={styles.footerLinkItem}> ブランド </Link>
          <Link to="/activities" className={styles.footerLinkItem}> アクティビティ </Link>
          <Link to="/mens" className={styles.footerLinkItem}>メンズ</Link>
          <Link to="/womens" className={styles.footerLinkItem}>レディース</Link>
          <Link to="/kids" className={styles.footerLinkItem}>キッズ</Link>
        </div>
        <div className={styles.subSection}>
          <h3 className={styles.footerSectionTitle}>もっと知る</h3>
          <Link to="/beginners" className={styles.footerLinkItem}>はじめての方へ</Link>
          <Link to="/shopping-guide" className={styles.footerLinkItem}>ショッピングガイド</Link>
          <Link to="/shop-list" className={styles.footerLinkItem}>ショップリスト</Link>
          <Link to="/styling" className={styles.footerLinkItem}>スタイリング</Link>
          <Link to="/shop-blog" className={styles.footerLinkItem}>ショップブログ</Link>
          <Link to="/about-materials" className={styles.footerLinkItem}>素材について</Link>
        </div>
        <div className={styles.subSection}>
          <h3 className={styles.footerSectionTitle}>関連情報</h3>
          <Link to="/environmental-initiatives" className={styles.footerLinkItem}>環境への取り組み</Link>
          <Link to="/about-us" className={styles.footerLinkItem}>会社概要</Link>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.footerLinks}>
        <Link to="/contact" className={styles.footerBottomLinkItem}>お問い合わせ</Link>
        <Link to="/terms" className={styles.footerBottomLinkItem}>利用規約</Link>
        <Link to="/privacy-policy" className={styles.footerBottomLinkItem}>プライバシーポリシー</Link>
        <Link to="/legal" className={styles.footerBottomLinkItem}>特定商取引法・古物営業法に基づく表示</Link>
      </div>
      <p>© 1996 2024 GOLDWIN INC.</p>
    </div>
  </footer>
);

export default Footer;
