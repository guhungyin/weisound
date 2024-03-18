<script>
    import FooterContact from '../components/FooterContact.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { EffectFade,Pagination,Autoplay } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default {
        data() {
            return {
                isLoading: false,
                modules: [EffectFade,Pagination,Autoplay]
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
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/banner/pc/mainBanner/mainBanner_01.jpg" class="d-none d-md-block w-100" alt="...">
                <img src="../assets/images/banner/mobile/mainBanner/mainBanner_01.jpg" class="w-100 d-md-none">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/banner/pc/mainBanner/mainBanner_02.jpg" class="d-none d-md-block w-100" alt="...">
                <img src="../assets/images/banner/mobile/mainBanner/mainBanner_02.jpg" class="w-100 d-md-none">
            </div>
            <div class="carousel-item">
                <router-link to="/ProductView?group_id=25&group2_id=115&page=1&id=350">
                    <img src="../assets/images/banner/pc/mainBanner/mainBanner_03.jpg" class="d-none d-md-block w-100" alt="...">
                    <img src="../assets/images/banner/mobile/mainBanner/mainBanner_03.jpg" class="w-100 d-md-none">
                </router-link>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/banner/pc/mainBanner/mainBanner_04.jpg" class="d-none d-md-block w-100" alt="...">
                <img src="../assets/images/banner/mobile/mainBanner/mainBanner_04.jpg" class="w-100 d-md-none">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/banner/pc/mainBanner/mainBanner_05.jpg" class="d-none d-md-block w-100" alt="...">
                <img src="../assets/images/banner/mobile/mainBanner/mainBanner_05.jpg" class="w-100 d-md-none">
            </div>
        </div>
        <button class="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
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
        class="mySwiper my-2 homeView"
    >
        <swiper-slide>
            <img src="../assets/images/banner/pc/serviceBanner/banner01.webp" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/serviceBanner/banner01.webp" class="img-fluid d-md-none">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/pc/serviceBanner/banner02.webp" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/serviceBanner/banner02.webp" class="img-fluid d-md-none">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/pc/serviceBanner/banner03.webp" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/serviceBanner/banner03.webp" class="img-fluid d-md-none">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner/pc/serviceBanner/banner04.webp" class="img-fluid d-none d-md-block">
            <img src="../assets/images/banner/mobile/serviceBanner/banner04.webp" class="img-fluid d-md-none">
        </swiper-slide>
    </swiper>
    <!-- 服務項目 -->
    <section class="container serveBox my-5">
        <h1 class="text-center fw-bold mb-3 mb-md-5">SERVICE ITEMS</h1>
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
            <img src="../assets/images/company_pc.webp" class="img-fluid d-none d-md-block" alt="">
            <img src="../assets/images/company_mobile.webp" class="img-fluid d-md-none" alt="">
        </router-link>
    </section>
    <!-- 最新活動 -->
    <section data-aos="fade-up" class="container news">
        <h1 class="text-center fw-bold mb-3 mb-md-5">INFORMATION</h1>
        <div class="row row-cols-6 g-3">
            <div class="col-12 col-md-6">
                <div class="card">
                    <img src="../assets/images/banner/mobile/mainBanner/mainBanner_02.jpg" class="card-img-top" alt="Hong Kong - Global Sources 2024">
                    <div class="card-body">
                        <h5 class="card-title d-flex align-items-center">TAIWAN - COMPUTEX<span class="newTitle ms-3">NEW</span></h5>
                        <p class="card-text">2024.06.04 ~ 2024.06.07<br>Booth number: Q0729</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <img src="../assets/images/banner/mobile/mainBanner/mainBanner_01.jpg" class="card-img-top" alt="Hong Kong - Global Sources 2024">
                    <div class="card-body">
                        <h5 class="card-title d-flex align-items-center">Hong Kong - Global Sources<span class="newTitle ms-3">NEW</span></h5>
                        <p class="card-text">2024.04.11 ~ 2024.04.14<br>Booth number: 9L05</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <Swiper
                        :spaceBetween="10"
                        :centeredSlides="true"
                        :loop="true"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false,
                        }"
                        :pagination="{
                            clickable: true,
                        }"
                        slidesPerView="1"
                        :modules="modules"
                        class="mySwiper w-100 newsBanner"
                    >
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_01.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_02.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_03.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_04.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_06.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_07.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_09.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_10.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/taiwan/20230530/img_12.jpg" class="card-img-top" alt="TAIWAN - COMPUTEX">
                        </swiper-slide>
                    </Swiper>
                    <div class="card-body">
                        <h5 class="card-title d-flex align-items-center">TAIWAN - COMPUTEX</h5>
                        <p class="card-text">2023.05.30 ~ 2023.06.02<br>Booth number: N0729a</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <swiper
                        :spaceBetween="10"
                        :centeredSlides="true"
                        :loop="true"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false,
                        }"
                        :pagination="{
                            clickable: true,
                        }"
                        slidesPerView="1"
                        :modules="modules"
                        class="mySwiper w-100 newsBanner"
                    >
                        <swiper-slide>
                            <img src="../assets/images/news/hongKong/20230411/img_01.jpg" class="card-img-top" alt="Hong Kong - Global Sources 2023">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/hongKong/20230411/img_02.jpg" class="card-img-top" alt="Hong Kong - Global Sources 2023">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/hongKong/20230411/img_03.jpg" class="card-img-top" alt="Hong Kong - Global Sources 2023">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/images/news/hongKong/20230411/img_04.jpg" class="card-img-top" alt="Hong Kong - Global Sources 2023">
                        </swiper-slide>
                    </swiper>
                    <div class="card-body">
                        <h5 class="card-title d-flex align-items-center">Hong Kong - Global Sources</h5>
                        <p class="card-text">2023.04.11 ~ 2023.04.14<br>Booth number: 9E24</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterContact></FooterContact>
</template>
<style>
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
    .mySwiper.homeView img{border-radius: 5px;}
    .mySwiper.homeView.swiper-horizontal{overflow: initial;}
    .mySwiper.homeView .homeView.swiper-horizontal>.swiper-pagination-bullets,
    .mySwiper.homeView .swiper-pagination-bullets.swiper-pagination-horizontal{bottom: -2rem;}
    .mySwiper.homeView .swiper-pagination-bullet-active{background: #4B74B9;}
    @media (min-width: 768px) {
        .mySwiper.homeView img{border-radius: 10px;}
        .serveBox .serveContact:hover .serveContent{
            border-radius: 1rem;}
    }
</style>