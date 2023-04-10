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
    <!-- banner -->
    <div class="d-flex align-items-center justify-content-center flex-column qualityBanner bannerImg">
        <h1 class="mb-4 text-white fw-bold">QUALITY MANAGEMENT</h1>
    </div>
    <!-- Breadcrumb -->
    <div>
        <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Quality Management</li>
            </ol>
        </div>
    </nav>
    </div>
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in"
    data-aos-duration="1000"
    data-aos-delay="200" class="container my-5 content">
        <h2 class="title text-center fw-bold">Wei-Sound's constant business philosophy for years--<br>Highest Level of Quality, Cutting-Edge Design, Professional Service<br>Wei-Sound always regards quality as the most crucial part of our entrepreneurship.<br>Don't worry! I'll take care of it.
        </h2>
        <div class="row">
            <div class="col-12 col-lg-8 mx-auto">
                <ol class="my-5">
                    <li class="my-2">A strict standard of inspection: No tolerance for defective.</li>
                    <li class="my-2">First order or as clients demand: 100% inspection service provided.</li>
                    <li class="my-2">Professional and full-experienced QA team that controls the quality of every product.</li>
                    <li class="my-2">Constant education training to maintain the professional ability of all the staff, and QA team.</li>
                    <li class="my-2">All the product follows regulation worldwide. Only deliver when having every necessary certification.</li>
                </ol>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style>
    .qualityBanner{
        background: url('../assets/images/company/management/management.jpg') no-repeat center center / cover;
    }
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
    .content .title{
        line-height: 1.8;
    }
    .content ol li{font-size: 120%;}
    @media (max-width: 767px) {
        .content .title{
            line-height: 1.5;
            font-size: 1.3rem;}
        .content ol li{font-size: 100%;}
    }
</style>