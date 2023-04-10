<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { FreeMode,Thumbs,Autoplay,EffectFade,Pagination,Navigation } from 'swiper'
    import 'swiper/css'
    import "swiper/css/effect-fade";
    import 'swiper/css/pagination';
    import 'swiper/css/grid';
    import "swiper/css/free-mode";
    import "swiper/css/thumbs";
    import "swiper/css/navigation";
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
                newColorArray: [],
                imgShowSrc:'',
                productId: '',
                productContentAll:{},
                productContent:{},
                thumbsSwiper: null
            }
        },
        components: {
            RouterLink,
            FooterContact,
            Swiper,
            SwiperSlide
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
                    // 刪除0jpg
                    const newArray = Array.from(this.imgLinkIn.reduce((acc,cur) => {acc.add(cur.color); return acc},new Set()))
                    newArray.forEach((element,index) => {
                        if (element.includes("0")) {
                            newArray.splice(index, 1);
                        }
                    })
                    this.colorArr = newArray;
                })
            },
            setThumbsSwiper(swiper) {
                this.thumbsSwiper = swiper;
            }
        },
        mounted(){
            this.isLoading = true;
            this.groupId = this.$route.query.group_id;
            this.group2Id = this.$route.query.group2_id;
            this.productId = this.$route.query.id;
            this.getSubMenu()
            this.getProductData()
        },
        computed: {
            modules() {
                return [FreeMode, Thumbs,Autoplay,EffectFade,Pagination,Navigation];
            }
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
                <div class="mb-3">
                    <swiper
                        :effect="'fade'"
                        :loop="true"
                        :spaceBetween="10"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules"
                        class="mySwiper2"
                    >
                        <swiper-slide v-for="item in this.imgLinkIn" :key="item">
                            <img :src="this.imgUrl + item.fileName" class="img-fluid"/>
                        </swiper-slide>
                    </swiper>
                </div>
                <swiper
                    @swiper="setThumbsSwiper"
                    :slidesPerView="3"
                    :breakpoints="{
                        480: {
                        slidesPerView: 4,
                        },
                        768: {
                        slidesPerView: 5,
                        },
                        976: {
                        slidesPerView: 4,
                        },
                        1440: {
                        slidesPerView: 5,
                        },
                    }"
                    :spaceBetween="30"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="item in this.imgLinkIn" :key="item" class="btn list-group-item mb-2">
                        <img :src="this.imgUrl + item.fileName" class="img-fluid"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="col-12 col-md-6 pt-4">
                <h3>{{ this.product.name }}</h3>
                <div>
                    <p v-for="item in this.productContent" :key="item">{{ item }}</p>
                </div>
                <p class="color">color: 
                    <img v-for="color in this.colorArr" :key="color" class="ms-2" :src="`${this.colorUrl}${color}.jpg`">
                </p>
                <RouterLink to="/ContactView" class="btn btn-outline-secondary">Contact Us</RouterLink>
            </div>
        </div>
    </div>
    <FooterContact></FooterContact>
</template>

<style>
    /* 左側產品小圖 */
    .swiper-wrapper{padding: 0;}
    .list-group-item{
        display: block;
        position: relative;
        transition: border-color .2s ease-in-out;
        border: none;
        border-radius: 0.3125rem;
        text-decoration: none;
        overflow: hidden;}
    .swiper-slide{
        display: flex;
        justify-content: center;
    }
    .swiper img{
        object-position: center;
        object-fit: cover;}
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
    .swiper-button-prev{
        left: 0!important;
        background: linear-gradient(to left,transparent,rgb(255 255 255 / 66%) 30%,#ffffff);}
    .swiper-button-next{
        right: 0!important;
        background: linear-gradient(to right,transparent,rgb(255 255 255 / 66%) 30%,#ffffff);}
    .swiper-button-next::after,
    .swiper-button-prev::after{
        content:'';
        width: 32px;
        height: 32px;}
    .swiper-button-prev::after{
        background: url('../assets/images/icon/arrow-left-circle-fill.svg') no-repeat center center / contain;}
    .swiper-button-next::after{
        background: url('../assets/images/icon/arrow-right-circle-fill.svg') no-repeat center center / contain;}
    .swiper-button-prev,
    .swiper-button-next{
        width: 5vw!important;
        height: 100%!important;
        top: 22px!important;
    }
    @media (min-width: 768px) {
        .productSwiper>.swiper-button-prev,
        .productSwiper>.swiper-button-next{
            width: 5vw!important;
            height: 100%!important;
        }
    }
</style>