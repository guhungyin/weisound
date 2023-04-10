<script>
    import { RouterLink } from 'vue-router';

    export default {
        components: {
        RouterLink
        }
    }
</script>
<template>
    <section class="contact my-4 my-md-5 d-flex align-items-center justify-content-center flex-column">
        <div class="fw-bold my-5 text-white fs-1">CONTACT US</div>
        <RouterLink to="/ContactView" class="btn btn-outline-secondary my-5">Press to Fill Out the Form</RouterLink>
    </section>
</template>
<style>
    .contact{
        height: 50vh;
    }
    .contact a:hover span{color: #FFF;}
</style>