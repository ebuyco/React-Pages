import React from 'react';
import Theme from '../styles/Global';
import HomepageStyle from '../styles/HomepageStyle';
import Header from '../subcomponent/Header';
import Banner from '../subcomponent/GiftBanner';
import Occasion from '../subcomponent/Occasion';
import PromoBanner from '../subcomponent/PromoBanner';
import Blog from '../subcomponent/Blog';
import Footer from '../subcomponent/Footer';

const App = () => (
  <Theme>
    <HomepageStyle>
      <Header />
      <Banner />
      <Occasion />
      <PromoBanner />
      <Blog />
      <Footer />
    </HomepageStyle>
  </Theme>
);

export default App;
