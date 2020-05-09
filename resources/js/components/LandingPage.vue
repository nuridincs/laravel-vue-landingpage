<template>
  <div>
    <Header />
    <NavBar />
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
  }
}
</script>