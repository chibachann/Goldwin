import * as React from "react";
import * as styles from "./footer.module.css";
import { Link } from "gatsby";

import FacebookIcon from "../../images/icons8-facebook.svg";
import InstagramIcon from "../../images/icons8-instagram.svg";
import LineIcon from "../../images/icons8-line.svg";

const socialIcons = [
  { icon: InstagramIcon, name: 'Instagram' },
  { icon: LineIcon, name: 'Line' },
  { icon: FacebookIcon, name: 'Facebook' },
];

const linkSections = [
  {
    title: '探す',
    links: [
      { to: '/brands', text: 'ブランド' },
      { to: '/activities', text: 'アクティビティ' },
      { to: '/mens', text: 'メンズ' },
      { to: '/womens', text: 'レディース' },
      { to: '/kids', text: 'キッズ' },
    ],
  },
  {
    title: 'もっと知る',
    links: [
      { to: '/beginners', text: 'はじめての方へ' },
      { to: '/shopping-guide', text: 'ショッピングガイド' },
      { to: '/shop-list', text: 'ショップリスト' },
      { to: '/styling', text: 'スタイリング' },
      { to: '/shop-blog', text: 'ショップブログ' },
      { to: '/about-materials', text: '素材について' },
    ],
  },
  {
    title: '関連情報',
    links: [
      { to: '/environmental-initiatives', text: '環境への取り組み' },
      { to: '/about-us', text: '会社概要' },
    ],
  },
];

const contactLinks = [
  { to: '/contact', text: 'お問い合わせ' },
  { to: '/terms', text: '利用規約' },
  { to: '/privacy-policy', text: 'プライバシーポリシー' },
  { to: '/legal', text: '特定商取引法・古物営業法に基づく表示' },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.leftSection}>
        <Link to='/' className={styles.footerWebsiteTitle}>GOLDWIN WEB STORE</Link>
        <div className={styles.socialIconsContainer}>
          {socialIcons.map(({ icon: Icon, name }) => (
            <Icon key={name} className={styles.socialIcon} />
          ))}
        </div>
      </div>
      <div className={styles.rightSection}>
        {linkSections.map((section) => (
          <div key={section.title} className={styles.subSection}>
            <h3 className={styles.footerSectionTitle}>{section.title}</h3>
            {section.links.map(link => (
              <Link key={link.to} to={link.to} className={styles.footerLinkItem}>{link.text}</Link>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.footerLinks}>
        {contactLinks.map(link => (
          <Link key={link.to} to={link.to} className={styles.footerBottomLinkItem}>{link.text}</Link>
        ))}
      </div>
      <p>© 1996 2024 GOLDWIN INC.</p>
    </div>
  </footer>
);

export default Footer;
