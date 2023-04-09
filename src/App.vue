<script>
  import { RouterView } from 'vue-router';
  import LeftProductMenuContact from './components/LeftProductMenuContact.vue';
  import NavBar from './components/NavBar.vue';
  import FooterBottom from './components/FooterBottom.vue';
  export default {
    data() {
      return {
        showScrollTop: false
      }
    },
    methods:{
      // 滾動事件處理方法
      handleScroll() {
        // 判斷頁面滾動高度是否超過指定值
        if (window.pageYOffset > 200) {
          this.showScrollTop = true;
        } else {
          this.showScrollTop = false;
        }
      },
      scrollToTop() {
        window.scrollTo(0,0);
      }
    },
    components: {
      RouterView,
      LeftProductMenuContact,
      NavBar,
      FooterBottom
    },
    mounted(){
      // 監聽滾動事件
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      // 移除滾動事件監聽器
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<template>
  <div class="alert alert-secondary cookie fade show d-flex justify-content-between align-items-center flex-column flex-md-row" role="alert">
    <div class="col-12 col-md-8">
      <p>We use cookies to improve your user experience and for web traffic statistics purposes.</p>
      <p>By continuing to use this website, you agree to our use of cookies. Our Privacy & Cookie Policy contains more information on such use and explains how to disable cookies.</p>
    </div>
    <button type="button" class="btn btn-outline-secondary h-25" data-bs-dismiss="alert" aria-label="Close">I Accept</button>
  </div>
  <NavBar></NavBar>
  <div class="wrap w-100">
    <RouterView></RouterView>
    <FooterBottom></FooterBottom>
  </div>
  <LeftProductMenuContact></LeftProductMenuContact>
  <button type="button" v-show="showScrollTop" @click="scrollToTop()" class="scroll_top_btn" id="scrollToTopBtn"></button>
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
.scroll_top_btn{
  background: url('./assets/images/icon/arrow-up-circle-fill.svg') no-repeat center center / contain;
  border: none;
  padding: 0;
    display: block;
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    width: 2.75rem;
    height: 2.75rem;
    transition: right 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55),opacity .3s;
    z-index: 5;}
    @media (max-width: 991px) {
      body{
        padding: 0;
        margin-top: 128px;
      }
    }
</style>