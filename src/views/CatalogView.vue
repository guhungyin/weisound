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
    data-aos-delay="200" class="container my-5 catalog">
        <div class="row row-cols-2 g-5">
            <div class="col-12 col-md-6">
                <a href="/edm/dm_2023.pdf" target="_blank" class="card edmCard text-decoration-none border-0">
                    <h2>2023 EDM</h2>
                    <img src="../assets/images/company/catalog/dm.jpg" alt="" class="card-img-top">
                </a>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style> 
    .catalogBanner{
        height: 50vh;
        background: url('../assets/images/company/catalog/bg-support.jpg') no-repeat center center / cover;
    }
    .edmCard{
        overflow: hidden;
    }
    .edmCard img{
        object-fit: cover;
        transition: all .3s ease-out;}
    .catalog a:hover::before{
        content: '';
        display: block;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0000002e;
    }
    .catalog a:hover img{
        transition: all .7s ease-in-out;
        transform: scale(1.1);
    }
    .edmCard h2{
        color: #FFF;
        position: absolute;
        top: 2%;
        left: 2%;
        z-index: 1;
    }
</style>