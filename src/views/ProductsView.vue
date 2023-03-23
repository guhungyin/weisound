<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    import axios from 'axios'
    export default {
        data() {
            return {
                apiUrl:'https://api.weiisound.com/api/product',
                imgUrl:'https://api.weiisound.com/uploads/productGroup/',
                menus: []
            }
        },
        components: {
            RouterLink,
            FooterContact
        },
        methods: {
            getMenu() {
                axios.get(this.apiUrl)
                .then((res)=>{
                    
                    this.menus = res.data.menu;
                    console.log(this.menus);
                    // Object.values(res.data.menu).forEach(item => {
                    //     this.menus.push(item)
                    // })
                })
                .catch((err)=>{
                    console.log(err.message);
                })
            }
        },
        mounted(){
            this.getMenu();
        }
    }
</script>
<template> 
    <div class="banner d-flex align-items-center justify-content-center flex-column">
        <h1 class="mb-4 text-white fw-bold">PRODUCTS</h1>
    </div>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">首頁</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">製品情報</li>
            </ol>
        </div>
    </nav>
    <div class="container my-5 productsAll">
        <div class="row">
            <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-3 my-2" v-for="item in menus" :key="item.id" :id="item.id">
                <RouterLink :to="`/ProductsListView/${item.id}`" class="card text-decoration-none">
                    <img :src="this.imgUrl+ item.link" class="card-img-top" alt="">
                    <div class="card-body position-relative">
                        <h5 class="card-title text-center fw-bold">{{ item.name }}</h5>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>
<style>
    .banner{
        height: 50vh;
        background: url('../images/company/product/bg-productinfo.jpg') no-repeat center center / cover;
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
    .productsAll a:hover .card-body h5{
        position: relative;
        z-index: 1;
        color: #FFF;
    }
</style>