<script>
    import FooterContact from '../components/FooterContact.vue';
    export default {
        data() {
            return {
                apiUrl:'https://api.weiisound.com/api/product',
                imgUrl:'https://api.weiisound.com/uploads/productGroup/',
                menus: [],
                isLoading: false
            }
        },
        components: {
            FooterContact
        },
        methods: {
            getMenu() {
                this.isLoading = true;
                this.$http.get(this.apiUrl)
                .then((res)=>{
                    Object.values(res.data.menu).forEach(item => {
                        this.menus.push(item)
                    })
                    this.isLoading = false;
                })
                .catch((err)=>{
                    console.log(err.message);
                })
            }
        },
        mounted(){
            this.isLoading = true;
            this.getMenu();
        }
    }
</script>
<template>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <div class="bannerImg d-flex align-items-center justify-content-center flex-column productBanner">
        <h1 class="text-white fw-bold">PRODUCTION</h1>
    </div>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Production</li>
            </ol>
        </div>
    </nav>
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in"
    data-aos-duration="1000"
    data-aos-delay="200" class="container my-5 productsAll">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3 my-2" v-for="item in menus" :key="item.id">
                <RouterLink :to="{path:'/ProductsListMenuView',query:{group_id: item.id}}" class=" card text-decoration-none" :data-group=item.id>
                    <img :src="this.imgUrl+ item.link" class="card-img-top" alt="">
                    <div class="card-body position-relative">
                        <h6 class="card-title text-center fw-bold">{{ item.name }}</h6>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style>
    .productBanner{
        background: url('../assets/images/company/product/bg-productinfo.webp') no-repeat center center / cover;
    }
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
    .productsAll a .card-body::before{
        content: '';
        opacity: 0;
        background-color: #333333;
        width: 100%;
        height: 0%;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all .2s;
    }
    .productsAll a:hover .card-body::before{
        height: 100%;
        opacity: 1;
    }
    .productsAll a:hover .card-body h6{
        position: relative;
        z-index: 1;
        color: #FFF;
    }
</style>