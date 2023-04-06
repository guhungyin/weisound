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
    <div class="d-flex align-items-center justify-content-center flex-column catalogBanner">
        <h1 class="mb-4 text-white fw-bold">EDM</h1>
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
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in"
    data-aos-duration="1000"
    data-aos-delay="200" class="container my-5 content">
        <div class="row row-cols-2">
            <div class="col-6 edmCard">
                <a href="../../public/edm/dm_2023.pdf" target="_blank">
                <img src="../../public/images/company/catalog/dm.jpg" alt="" class="img-fluid">
            </a>
            </div>
            
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style> 
    .catalogBanner{
        height: 50vh;
        background: url('../images/company/catalog/bg-support.jpg') no-repeat center center / cover;
    }
    .edmCard{
        overflow: hidden;
    }
    .edmCard img{
        object-fit: cover;
        transition: all .3s ease-out;}
    a:hover img{
        transition: all .7s ease-in-out;
        transform: scale(1.1);
    }
</style>