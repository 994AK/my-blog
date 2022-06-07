import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navs } from 'config/index';
import { Button } from 'antd';
import styles from './index.module.scss';
import Login from 'components/Login';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();

  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleWriteAnEssay = () => {};

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
    console.log(123);
  };

  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>YuHua-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <a className={pathname === nav?.value ? styles.active : ''}>
              {nav?.label}
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleWriteAnEssay}>写文章</Button>
        <Button onClick={handleLogin} type='primary'>
          登陆
        </Button>
      </section>

      <Login isShow={isShowLogin} onClose={handleClose}></Login>
    </div>
  );
};

export default Navbar;
