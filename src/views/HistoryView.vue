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
    <div class="d-flex align-items-center justify-content-center flex-column historyBanner bannerImg">
    </div>
    <!-- Breadcrumb -->
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">History</li>
            </ol>
        </div>
    </nav>
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in"
    data-aos-duration="1000"
    data-aos-delay="200" class="container my-5">
        <table class="table align-middle">
            <thead class="table-light">
                <tr>
                    <th class="col-lg-2 col-2 text-center fw-bold">YEAR</th>
                    <th class="fw-bold">Events</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center">1999</td>
                    <td>STP. First electronic factory was founded in Dongguan, China.</td>
                </tr>
                <tr>
                    <td class="text-center">2010</td>
                    <td>MAY. Get the certification of ISO9001、ISO14001.</td>
                </tr>
                <tr>
                    <td class="text-center">2012</td>
                    <td>
                        <p>1. MAR. Establish the spot in Hong Kong.</p>
                        <p>2. APR. HKTDC</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2013</td>
                    <td>
                        <p>1. APR. HKTDC</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2014</td>
                    <td>
                        <p>1. APR. HKTDC</p>
                        <p>2. AGU. Establish China Hunan Cable Factory.</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2015</td>
                    <td>
                        <p>1. JAN. CES</p>
                        <p>2. APR. HKTDC</p>
                        <p>3. JUN. COMPUTEX</p>
                        <p>4. OCT. Global Sources</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2016</td>
                    <td>
                        <p>1. JAN. CES</p>
                        <p>2. MAR. Get the certification of BSCI</p>
                        <p>3. APR. HKTDC</p>
                        <p>4. JUN. COMPUTEX</p>
                        <p>5. OCT. Global Sources</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2017</td>
                    <td>
                        <p>1. JAN. CES</p>
                        <p>3. APR. HKTDC</p>
                        <p>4. JUN. COMPUTEX</p>
                        <p>5. OCT. Global Sources</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2018</td>
                    <td>
                        <p>1. JAN. CES</p>
                        <p>3. APR. HKTDC</p>
                        <p>4. JUN. COMPUTEX</p>
                        <p>5. OCT. Global Sources</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2019</td>
                    <td>
                        <p>1. JAN. CES</p>
                        <p>3. APR. HKTDC</p>
                        <p>4. JUN. COMPUTEX</p>
                        <p>5. OCT. Global Sources</p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2021</td>
                    <td>Establish the spot in Taiwan.</td>
                </tr>
                <tr>
                    <td class="text-center">2023</td>
                    <td>
                        <p>1. APR. Global Sources</p>
                        <p>2. MAR. COMPUTEX</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <FooterContact></FooterContact>
</template>
<style>
    .historyBanner{
        background: url('../assets/images/company/history/bg-history.webp') no-repeat center center / cover;
    }
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
    .table th, .table td {
        padding: 1.2em;
    }
</style>