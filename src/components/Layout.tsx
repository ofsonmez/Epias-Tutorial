import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/diskette-save.svg";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Layout = ({ title = "Epiaş System", children }: Props) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <header>
          <h3>EPİAŞ</h3>
          <div className="header-1">
            <ReactLogo style={{ width: 30 }} />
            <p>Çalışma Alanı 1</p>
            <button className="rounded-circle">AY</button>
            <p>Merhaba, Aydın</p>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-1">
            <h5>ENERJİ PİYASALARI İŞLETME A.Ş.</h5>
            <h5>V.1.0</h5>
          </div>
          <div className="footer-2"></div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
