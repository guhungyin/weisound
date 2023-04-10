<script>
    import FooterContact from '../components/FooterContact.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination,Autoplay } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default {
        data() {
            return {
                isLoading: false,
                modules: [Pagination,Autoplay]
            }
        },
        components: {
            FooterContact,
            Swiper,
            SwiperSlide
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
    <div class="movie">
        <video src="/video.mov" class="video" autoplay loop muted></video>  
    </div>   
    <swiper
        :spaceBetween="10"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :breakpoints="{
            0: {
            slidesPerView: 2,
            },
            768: {
            slidesPerView: 2,
            },
        }"
        :modules="modules"
        class="mySwiper my-2"
    >
        <swiper-slide>
            <img src="../assets/images/banner/pc/banner01.jpg" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/banner01.jpg" class="img-fluid d-md-none">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/pc/banner02.jpg" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/banner02.jpg" class="img-fluid d-md-none">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/pc/banner03.jpg" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/banner03.jpg" class="img-fluid d-md-none">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/pc/banner04.jpg" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/banner04.jpg" class="img-fluid d-md-none">
        </swiper-slide>
    </swiper>
    <!-- 服務項目 -->
    <section class="container serveBox my-4 my-md-5">
        <h1 class="text-center fw-bold mb-3 mb-md-5">SERVEICE ITEMS</h1>
        <div class="row row-cols-4 g-3">
            <div class="col-6 col-lg-3 serveContact" data-aos="flip-left">
                <div class="serveContent py-4">
                    <h4>OEM&ODM</h4>
                    <p>20 years Experience</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
            <div class="col-6 col-lg-3 serveContact" data-aos="flip-left">
                <div class="serveContent py-4">
                    <h4>ID</h4>
                    <p>Product Design</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
            <div class="col-6 col-lg-3 serveContact" data-aos="flip-left">
                <div class="serveContent py-4">
                    <h4>R&D</h4>
                    <p>Research and Development</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
            <div class="col-6 col-lg-3 serveContact" data-aos="flip-left">
                <div class="serveContent py-4">
                    <h4>OQ</h4>
                    <p>Guaranteed Quality Control</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- 公司介紹 -->
    <section data-aos="fade-up" class="container my-4 my-md-5">
        <router-link to="/ProfileView">
            <img src="../assets/images/company_pc.jpg" class="img-fluid d-none d-md-block" alt="">
            <img src="../assets/images/company_mobile.jpg" class="img-fluid d-md-none" alt="">
        </router-link>
    </section>
    <!-- 最新活動 -->
    <section data-aos="fade-up" class="container news">
        <h1 class="text-center fw-bold mb-3 mb-md-5">INFORMATION</h1>
        <table class="table align-middle">
            <tbody>
                <tr>
                    <td>
                        <span class="newTitle">NEW</span>
                    </td>
                    <td>2023.05.30 ~ 2023.06.02</td>
                    <td>Taiwan - COMPUTEX / Booth number: 0729A</td>
                </tr>
                <tr>
                    <td>
                        <span class="newTitle">NEW</span>
                    </td>
                    <td>2023.04.11 ~ 2023.04.14</td>
                    <td>Hong Kong - Global Sources / Booth number: 9E4A</td>
                </tr>
            </tbody>
        </table>
    </section>
    <FooterContact></FooterContact>
</template>
<style>
    .movie {
        position: relative;
        overflow: hidden;
    }
    .movie video{
        width: 100%;
        height: 100%;
    }
    .serveBox .serveContent{
        transition: .2s;
        text-align: center;
        background-color: #ECECEC;
    }
    .serveBox .serveContact:hover .serveContent{background-color: #4B74B9;}
    .serveBox .serveContent h4{
        font-weight: bold;
        color: #4B74B9;
    }
    .serveBox .serveContact:hover .serveContent h4,
    .serveBox .serveContact:hover .serveContent p{color: #FFF;}
    .serveBox .serveContent .iconImg{
        width: 50%;
        padding-bottom: 50%;
    }
    .serveBox .serveContact:nth-child(1) .iconImg{background: url('../assets/images/icon/iconConveyor.png') no-repeat center center /contain;}
    .serveBox .serveContact:nth-child(2) .iconImg{background: url('../assets/images/icon/iconSketch.png') no-repeat center center /contain;}
    .serveBox .serveContact:nth-child(3) .iconImg{background: url('../assets/images/icon/iconResearchAndDevelopment.png') no-repeat center center /contain;}
    .serveBox .serveContact:nth-child(4) .iconImg{background: url('../assets/images/icon/iconQuality.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(1) .iconImg{background: url('../assets/images/icon/iconConveyorOn.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(2) .iconImg{background: url('../assets/images/icon/iconSketchOn.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(3) .iconImg{background: url('../assets/images/icon/iconResearchAndDevelopmentOn.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(4) .iconImg{background: url('../assets/images/icon/iconQualityOn.png') no-repeat center center /contain;}
    .newTitle{
        padding: 0.25em 0.625em;
        font-size: 0.6em;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.175rem;
        background-color: #f34770;}
    .mySwiper img{border-radius: 5px;}
    @media (min-width: 768px) {
        .mySwiper img{border-radius: 10px;}
        .serveBox .serveContact:hover .serveContent{
            border-radius: 1rem;}
    }
</style>