<script>
  import { RouterView } from 'vue-router';
  import LeftProductMenuBtn from './components/LeftProductMenuBtn.vue';
  import LeftProductMenuContact from './components/LeftProductMenuContact.vue';
  import NavBar from './components/NavBar.vue';
  import FooterBottom from './components/FooterBottom.vue';
  export default {
    data() {
      return {
        isLoading: true,
      }
    },
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
    },
    mounted() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }
</script>

<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
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
</style>