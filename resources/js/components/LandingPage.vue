<template>
  <div>
    <Header v-if="!isMobile" />
    <NavBar v-if="!isMobile" />
    <NavBarMobile v-if="isMobile" />
    <About />
    <Support />
    <Price />
    <PowerfullLimit />
    <PaketInclude />
    <SupportLaravel />
    <Module />
    <SupportLinux />
    <ShareLink />
    <CallUs />
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import About from './About';
import Support from './Support';
import Price from './Price';
import PowerfullLimit from './PowerfullLimit';
import PaketInclude from './PaketInclude';
import SupportLaravel from './SupportLaravel';
import Module from './Module';
import SupportLinux from './SupportLinux';
import ShareLink from './ShareLink';
import CallUs from './CallUs';
import Footer from './Footer';

export default {
  components: {
    Header,
    NavBar,
    NavBarMobile,
    About,
    Support,
    Price,
    PowerfullLimit,
    PaketInclude,
    SupportLaravel,
    Module,
    SupportLinux,
    ShareLink,
    CallUs,
    Footer
  },

  computed: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
}
</script>