import * as React from "react"
import { Link } from "gatsby";
import * as styles from './header.module.css';

import Search from '../../images/icons8-search.svg';
import Bookmark from '../../images/icons8-bookmark.svg';
import Box from '../../images/icons8-box.svg';
import Menu from '../../images/icons8-menu.svg';

const Icons = [
  { icon: Search, name: 'Search', to: '/search' }, // toプロパティを追加
  { icon: Bookmark, name: 'Bookmark', to: '/bookmark' }, // 各アイコンに遷移先を指定
  { icon: Box, name: 'Box', to: '/box' },
  { icon: Menu, name: 'Menu'},
];

const Header = () => (
  <header className={ styles.header }>   
      <Link to='/' className={styles.logoTitle}>GOLDWIN WEB STORE</Link> 

      <div className={styles.IconsContainer}>
        {Icons.map(({ icon: Icon, name, to }) => (
          <Link to={to} key={name}>
            <Icon className={styles.Icon} />
          </Link>
        ))}
      </div>
  </header>
);

export default Header;
