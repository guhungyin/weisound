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
    <div class="d-flex align-items-center justify-content-center flex-column aboutBanner">
        <h1 class="mb-4 text-white fw-bold">ABOUT WEI-SOUND</h1>
    </div>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Overview</li>
            </ol>
        </div>
    </nav>
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in"
    data-aos-duration="1000"
    data-aos-delay="200" class="container mt-3 pt-sm-5">
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
    <section data-aos="fade-zoom-in"
    data-aos-easing="ease-in"
    data-aos-duration="1000"
    data-aos-delay="200" class="container my-4 my-md-5">
        <h1 class="text-center fw-bold mb-3 mb-md-5">STRONGHOLD</h1>
        <div class="row row-cols-3 g-3">
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center justify-content-center flex-column px-3 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="mb-3 bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
                    <h4 class="mb-4">HONGKONG</h4>
                    <p class="text-center mb-4">Room 405, 4F, 25 Wang Chiu Road, Kowloon Bay, Hong Kong</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center justify-content-center flex-column px-3 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="mb-3 bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
                    <h4 class="mb-4">TAIWAN</h4>
                    <p class="text-center mb-4">4F-6, No. 2, Sec. 2, Taiwan Blvd., West Dist., Taichung City 403403, Taiwan<br>886-4-22581618</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center justify-content-center flex-column px-3 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="mb-3 bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
                    <h4 class="mb-4">CHINA</h4>
                    <p class="text-center mb-4">908, Yixing Business Square, NO.3, aimin Street, Tangxia Town, Dongguan City, Guangdong Province, China</p>
                </div>
            </div>
        </div>
    </section>
    <FooterContact></FooterContact>
</template>
<style>
    .aboutBanner{
        height: 50vh;
        background: url('../assets/images/company/profile/bg-solution.jpg') no-repeat center center / cover;}
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
    .table th, .table td {
        padding: 1.2em;
    }
</style>