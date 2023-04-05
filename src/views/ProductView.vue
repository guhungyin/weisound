<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    export default {
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/product/',
                colorUrl: 'https://api.weiisound.com/images/product/color/',
                isLoading: false,
                groupId: '',
                group2Id: '',
                groupIdName: '',
                group2IdName: '',
                subMenu: [],
                subProducts:[],
                product:[],
                imgLinkIn:[],
                colorArr: [],
                imgShowSrc:'',
                productId: '',
                productContentAll:{},
                productContent:{},
            }
        },
        components: {
            RouterLink,
            FooterContact,
        },
        methods: {
            getSubMenu(){
                this.$http.get(`${this.apiUrl}?group_id=${this.groupId}`)
                .then((res) => {
                Object.values(res.data.menu[this.groupId].sub).forEach(item => {
                    this.subMenu.push(item)
                    
                })
                this.groupIdName = res.data.menu[this.groupId].name;
                this.group2IdName = res.data.menu[this.groupId].sub[this.group2Id].name;
                })
            },
            getProductData(){
                this.isLoading = true;
                this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${this.group2Id}&id=${this.productId}`)
                .then(res => {
                    let ary = res.data.product;
                    ary.filter(item => {
                        if(item.id == this.productId)
                        return this.product = item
                    })
                    this.imgLinkIn = JSON.parse(this.product.link_in);
                    this.productContentAll = JSON.parse(this.product.content);
                    this.productContent = this.productContentAll["zh-tw"][0];
                    this.isLoading = false;
                    this.colorArr = this.imgLinkIn.reduce((acc,cur)=>  {acc.add(cur.color); return acc},new Set())

                })
            }
        },
        mounted(){
            this.isLoading = true;
            this.groupId = this.$route.query.group_id;
            this.group2Id = this.$route.query.group2_id;
            this.productId = this.$route.query.id;
            this.getSubMenu()
            this.getProductData()
        }
    }
</script>
<template>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/ProductsView" class="text-decoration-none text-dark">Production</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink :to="{path:'/ProductsListMenuView' , query:{group_id: this.groupId}}" class="text-decoration-none text-dark">{{this.groupIdName}}</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{this.product.name}}</li>
            </ol>
        </div>
    </nav>
    <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-delay="200" class="container my-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-12 mb-3">
                        <img class="img-fluid" :src="imgShowSrc" alt="">
                        <!-- <img :src="this.imgUrl + this.imgLinkIn[0].fileName" alt=""> -->
                    </div>
                    <div class="col-12">
                        <div class="list-group row flex-wrap flex-row">
                            <a class="list-group-item list-group-item-action col-3 mx-1 mb-1" data-bs-toggle="list" role="tab" aria-controls="list-home" v-for="item in this.imgLinkIn" :key="item" @click="imgShowSrc = this.imgUrl + item.fileName" :id="item.id">
                                <img id="src" class="img-fluid" :src="this.imgUrl + item.fileName" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pt-4">
                <h3>{{ this.product.name }}</h3>
                <div>
                    <p v-for="item in this.productContent" :key="item">{{ item }}</p>
                </div>
                <p class="color">color: 
                    <img v-for="color in this.colorArr" :key="color.color" class="ms-2" title="黑色" alt="" :src="`${this.colorUrl}${color}.jpg`">
                </p>
                <RouterLink to="/ContactView" class="btn btn-outline-secondary">Contact Us</RouterLink>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>

<style>
    /* 左側產品小圖 */
    .list-group-item{
        padding: 0;
        width: 5rem;
        height: 5rem;
        display: block;
        position: relative;
        transition: border-color .2s ease-in-out;
        border: 1px solid #e3e9ef;
        border-radius: 0.3125rem;
        text-decoration: none;
        overflow: hidden;}
    .list-group-item.video svg{
        color: #4b566b;
        opacity: 0.6;
        width: 40%;
        height: 40%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);}
    .list-group-item.video:hover svg{opacity: 1;}
    .list-group-item.video:hover{background-color: transparent;}
    .list-group-item+.list-group-item{border-width: 1px;}
    .list-group-item+.list-group-item.active{margin: 0;}
    .list-group-item.active{
        background-color: transparent;
        border-color: #4B74B9;}
    .list-group-item>img-fluid{
        display: block;
        width: 100%;
        transition: opacity .2s ease-in-out;
        opacity: .6;}
    .list-group-item.active>img-fluid,
    .list-group-item:hover>img-fluid{
        opacity: 1;}
    .color img{
        width: 1.5rem;
        height: 1.5rem;
    }
    /* 標題樣式 */
    h3{
        color: #4B74B9;
        font-weight: 800;}
    /* 顏色 */
    .color img-fluid{
        width: 1.5rem;
        height: 1.5rem;
    }
</style>