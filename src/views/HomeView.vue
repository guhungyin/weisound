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
    <div class="movie">
        <video src="images/video.mov" class="video" autoplay loop muted></video>  
    </div>
    <div data-aos="fade-up" id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../public/images/banner/banner01.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../public/images/banner/banner01.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../public/images/banner/banner01.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>     
    <!-- 服務項目 -->
    <section class="container serveBox my-4 my-md-5" data-aos="fade-up">
        <h3 class="text-center fw-bold">服務項目</h3>
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
            <img src="../../public/images/company.jpg" class="img-fluid" alt="">
        </a>
    </section>
    <!-- 最新活動 -->
    <section class="container news" data-aos="fade-up">
        <h3 class="text-center fw-bold">最新活動</h3>
        <h1 class="text-center fw-bold mb-3 mb-md-5">INFORMATION</h1>
        <div class="">
            <div class=" mb-4 new">
                <span class="d-flex justify-content-center ps-5 ">2023.05.30 - 06.02<p class="mx-3 mb-0">|</p> Taiwan - COMPUTEX / Booth number : 0729A</span>
            </div>
            <div class=" mb-4 new">
                <span class="d-flex justify-content-center ps-5 ">2023.04.11 - 04.14<p class="mx-3 mb-0">|</p> Hong Kong - Global Sources / Booth number : 11J</span>
            </div>
            <div class=" mb-4">
                <span class="d-flex justify-content-center ps-5 ">2023.01.30 - 02.06<p class="mx-3 mb-0">|</p> Taiwan - COMPUTEX / Booth number : 0729A</span>
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
    .serveBox .serveContact:nth-child(1) .iconImg{background: url('../../public/images/icon/iconConveyor.png') no-repeat center center /contain;}
    .serveBox .serveContact:nth-child(2) .iconImg{background: url('../../public/images/icon/iconSketch.png') no-repeat center center /contain;}
    .serveBox .serveContact:nth-child(3) .iconImg{background: url('../../public/images/icon/iconResearchAndDevelopment.png') no-repeat center center /contain;}
    .serveBox .serveContact:nth-child(4) .iconImg{background: url('../../public/images/icon/iconQuality.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(1) .iconImg{background: url('../../public/images/icon/iconConveyorOn.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(2) .iconImg{background: url('../../public/images/icon/iconSketchOn.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(3) .iconImg{background: url('../../public/images/icon/iconResearchAndDevelopmentOn.png') no-repeat center center /contain;}
    .serveBox .serveContact:hover:nth-child(4) .iconImg{background: url('../../public/images/icon/iconQualityOn.png') no-repeat center center /contain;}
</style>