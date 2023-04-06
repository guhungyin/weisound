<script>
  import { RouterView } from 'vue-router';
  import LeftProductMenuBtn from './components/LeftProductMenuBtn.vue';
  import LeftProductMenuContact from './components/LeftProductMenuContact.vue';
  import NavBar from './components/NavBar.vue';
  import FooterBottom from './components/FooterBottom.vue';
  export default {
    methods:{
      scrollToTop() {
        window.scrollTo(0,0);
      }
    },
    components: {
      RouterView,
      LeftProductMenuBtn,
      LeftProductMenuContact,
      NavBar,
      FooterBottom
    }
  }
</script>

<template>
  <div class="alert alert-secondary cookie fade show d-flex justify-content-between align-items-center" role="alert">
    <div class="">
      <p>We use cookies to improve your user experience and for web traffic statistics purposes.</p>
      <p>By continuing to use this website, you agree to our use of cookies. Our Privacy & Cookie Policy contains more information on such use and explains how to disable cookies.</p>
    </div>
    <button type="button" class="btn btn-outline-secondary h-25" data-bs-dismiss="alert" aria-label="Close">I Accept</button>
  </div>
  <LeftProductMenuBtn></LeftProductMenuBtn>
  <NavBar></NavBar>
  <div class="wrap w-100">
    <RouterView></RouterView>
    <FooterBottom></FooterBottom>
  </div>
  <LeftProductMenuContact></LeftProductMenuContact>
</template>
<style>
  body{
    padding-top: 72px;
  }
  .cookie{
    position: fixed;
    width: 100%;
    z-index: 99;
    bottom: 0;
    right: 0;
    margin: 0;
    border-radius: 0;
  }
</style>