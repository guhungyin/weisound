<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';

    export default {
        components: {
            RouterLink,
            FooterContact
        }
    }
</script>
<template>
    <div class="banner d-flex align-items-center justify-content-center flex-column">
        <h1 class="mb-4 text-white fw-bold">ABOUT WEI-SOUND</h1>
    </div>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">首頁</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">公司概要</li>
            </ol>
        </div>
    </nav>
    <div data-aos="fade-up" class="container mt-3 pt-sm-5">
        <table class="table">
            <tbody>
                <tr>
                    <th class="col-lg-3">Company Name</th>
                    <td>Wei Sheng Technology Limited</td>
                </tr>
                <tr>
                    <th class="col-lg-3">Address</th>
                    <td>908, Yixing Business Square, NO.3, aimin Street, Tangxia Town, Dongguan City, Guangdong Province, China</td>
                </tr>
                <tr>
                    <th class="col-lg-3">Number of employees</th>
                    <td>120</td>
                </tr>
                <tr>
                    <th class="col-lg-3">Our Business</th>
                    <td>OED/ODM of Mobile Phone Accessories, Audio & Video Accessories, Automotive Accessories, Energy Storage & Disaster Prevention Accessories</td>
                </tr>
                <tr>
                    <th class="col-lg-3">Year of establishment</th>
                    <td>1999</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- 公司據點 -->
    <section data-aos="fade-up" class="container my-4 my-md-5">
        <h3 data-aos="fade-up" class="text-center fw-bold">公司據點</h3>
        <h1 data-aos="fade-up" class="text-center fw-bold mb-3 mb-md-5">STRONGHOLD</h1>
        <div data-aos="fade-up" class="row row-cols-3 g-3">
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center justify-content-center flex-column px-3 py-4">
                    <img class="img-fluid mb-4" src="images/icon/iconMap.png" alt="">
                    <h4 class="mb-4">HONGKONG</h4>
                    <p class="text-center mb-4">Room 405, 4F, 25 Wang Chiu Road, Kowloon Bay, Hong Kong</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center justify-content-center flex-column px-3 py-4">
                    <img class="img-fluid mb-4" src="images/icon/iconMap.png" alt="">
                    <h4 class="mb-4">TAIWAN</h4>
                    <p class="text-center mb-4">4F-6, No. 2, Sec. 2, Taiwan Blvd., West Dist., Taichung City 403403, Taiwan<br>886-4-22581618</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center justify-content-center flex-column px-3 py-4">
                    <img class="img-fluid mb-4" src="images/icon/iconMap.png" alt="">
                    <h4 class="mb-4">CHINA</h4>
                    <p class="text-center mb-4">908, Yixing Business Square, NO.3, aimin Street, Tangxia Town, Dongguan City, Guangdong Province, China</p>
                </div>
            </div>
        </div>
    </section>
    <FooterContact></FooterContact>
</template>
<style>
    .banner{
        height: 50vh;
        background: url('../../public/images/company/profile/bg-solution.jpg') no-repeat center center / cover;}
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
    .table th, .table td {
        padding: 1.2em;
    }
</style>