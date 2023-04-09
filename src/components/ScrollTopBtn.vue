<script>
  import { RouterLink } from 'vue-router';
  export default {
    components: {
      RouterLink
    }
  }
</script>

<template>
  <RouterLink @click="$scrollToTop()" class="scroll_top_btn on">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
    </svg>
  </RouterLink>
</template>

<style>
  .scroll_top_btn{
      display: block;
      position: fixed;
      right: -4.125rem;
      bottom: 1.25rem;
      width: 2.75rem;
      height: 2.75rem;
      transition: right 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55),opacity .3s;
      color: #fff;
      opacity: 0;
      z-index: 1025;
      background-color: #FFF;
      border-radius: 50%;}
  .scroll_top_btn.on{
      right: 1.25rem;
      opacity: 1;}
  .scroll_top_btn svg{
      width: 100%;
      height: 100%;
      color: rgba(43,52,69,.25);}
</style>