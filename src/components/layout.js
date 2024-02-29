import * as React from "react"
import Header from "./Header/header";
import Footer from "./Footer/footer";

import * as styles from "./layout.module.css"; // CSSモジュールのインポート

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main> {/* mainタグにクラスを適用 */}
            <Footer />
        </>
    );
};

export default Layout;