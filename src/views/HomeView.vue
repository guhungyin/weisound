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
        :spaceBetween="30"
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
            slidesPerView: 1,
            },
            768: {
            slidesPerView: 2,
            },
        }"
        :modules="modules"
        class="mySwiper my-4"
    >
        <swiper-slide>
            <img src="../assets/images/banner/banner01.jpg" class="img-fluid">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/banner02.jpg" class="img-fluid">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/banner03.jpg" class="img-fluid">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/banner04.jpg" class="img-fluid">
        </swiper-slide>
    </swiper>
    <!-- 服務項目 -->
    <section class="container serveBox my-4 my-md-5" data-aos="fade-up">
        <h1 class="text-center fw-bold mb-3 mb-md-5">SERVEICE ITEMS</h1>
        <div class="row row-cols-4 g-3">
            <div class="col-12 col-md-6 col-lg-3 serveContact">
                <div class="serveContent py-4">
                    <h4>OEM&ODM</h4>
                    <p>20 years Experience</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 serveContact">
                <div class="serveContent py-4">
                    <h4>ID</h4>
                    <p>Product Design</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 serveContact">
                <div class="serveContent py-4">
                    <h4>R&D</h4>
                    <p>Research and Development</p>
                    <div class="iconImg mx-auto"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 serveContact">
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
        <a href="">
            <img src="../assets/images/company.jpg" class="img-fluid" alt="">
        </a>
    </section>
    <!-- 最新活動 -->
    <section class="container news" data-aos="fade-up">
        <h1 class="text-center fw-bold mb-3 mb-md-5">INFORMATION</h1>
        <div class="">
            <div class=" mb-4 new">
                <span class="d-flex justify-content-center ps-5 ">2023.05.30 - 06.02<p class="mx-3 mb-0">|</p> Taiwan - COMPUTEX / Booth number : 0729A</span>
            </div>
            <div class=" mb-4 new">
                <span class="d-flex justify-content-center ps-5 ">2023.04.11 - 04.14<p class="mx-3 mb-0">|</p> Hong Kong - Global Sources / Booth number : 9E4A</span>
            </div>
        </div>
    </section>
    <FooterContact></FooterContact>
</template>
<style>
    .movie {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    .movie video{
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -1;
        background-size: cover;
    }
    .mySwiper img{border-radius: 10px;}
    .serveBox .serveContent{
        transition: .2s;
        text-align: center;
        background-color: #ECECEC;
    }
    .serveBox .serveContact:hover .serveContent{
        border-radius: 1rem;
        background-color: #4B74B9;}
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
</style>