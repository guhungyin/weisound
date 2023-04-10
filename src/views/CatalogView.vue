<script>
    import FooterContact from '../components/FooterContact.vue';
    export default {
        data() {
            return {
                isLoading: false
            }
        },
        components: {
            FooterContact
        },
        mounted() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            },400)
        },
    }
</script>
<template>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <div class="d-flex align-items-center justify-content-center flex-column catalogBanner bannerImg">
        <h1 class="text-white fw-bold">EDM</h1>
    </div>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Edm</li>
            </ol>
        </div>
    </nav>
    <div class="container my-5 catalog">
        <div class="row row-cols-2 g-5">
            <div class="col-12 col-md-6" data-aos="fade-right">
                <div class="card border-0">
                    <a href="/edm/dm_2023.pdf" target="_blank" class="text-decoration-none overflow-hidden">
                        <img src="../assets/images/company/catalog/dm.jpg" class="card-img-top">
                        <h5 class="text-center text-body my-4">2023 EDM</h5>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style> 
    .catalogBanner{
        background: url('../assets/images/company/catalog/bg-support.webp') no-repeat center center / cover;
    }
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
</style>