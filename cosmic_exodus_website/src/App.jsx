import React from 'react'
import styles from './style';

import { Navbar, Blog, Button, Discord, Footer, Gameplay, Hero, Partners, Waitlist } from './components/';

const App = () =>
(
  <div id="root">
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar section  */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <Waitlist />
      </div>
      {/* Hero Section */}
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Gameplay />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Partners />
          {/* <Blog /> */}
          <Discord />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);


export default App