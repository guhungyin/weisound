<script>
    import { RouterLink } from 'vue-router';

    export default {
        components: {
        RouterLink
        }
    }
</script>

<template>
    <section class="contact my-4 my-md-5 py-5 d-flex align-items-center justify-content-center flex-column">
        <div class="fw-bold my-5 text-white fs-1">CONTACT US</div>
        <RouterLink to="/ContactView" class="btn btn-outline-secondary my-5">
            <i class="ms-2"></i>
            <span class="text-white fs-6">前往填寫表單</span>
        </RouterLink>
    </section>
</template>