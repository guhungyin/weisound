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
    <div class="d-flex align-items-center justify-content-center flex-column qualityBanner">
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
        <h2 class="title text-center fw-bold">威陞科技有限公司多年不變的經營理念：<br>最高品質、創新設計、專業服務<br>威陞始終將產品品質視為經營公司最重要的一環。<br>Don't worry! I'll take care of it.
        </h2>
        <div class="row">
            <div class="col-12 col-lg-7 mx-auto">
                <ol class="my-5">
                    <li class="my-2">嚴格的檢驗標準，對於不良品零容忍。</li>
                    <li class="my-2">首次訂單或客戶要求，可提供100%全檢服務。</li>
                    <li class="my-2">專業及經驗豐富的品管團隊，嚴格把關每項產品。</li>
                    <li class="my-2">定期教育訓練，確保全體員工、品保團隊的專業水平。</li>
                    <li class="my-2">所有產品皆符合各國法規要求，獲取每項認證後方可出貨。</li>
                </ol>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style>
    .qualityBanner{
        height: 50vh;
        background: url('../images/company/management/management.jpg') no-repeat center center / cover;
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