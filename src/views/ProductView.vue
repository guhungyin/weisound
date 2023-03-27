<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    export default {
        props: ['group_id'],
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/product/',
                colorUrl: 'https://api.weiisound.com/images/product/color/',
                groupId: '',
                group2Id: '',
                groupIdName: '',
                group2IdName: '',
                subMenu: [],
                subProducts:[],
                product:[],
                productId: '',
                imgInName: [],
                imgIn:[]
            }
        },
        components: {
            RouterLink,
            FooterContact
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
                this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${this.group2Id}&id=${this.productId}`)
                .then(res => {
                    // this.product = res.data.product[0];
                    // let arr = this.product.link_inl;
                    console.log(res.data);
                    const arry = res.data.product[0].link_in;
                    console.log(arry);



                    // console.log(this.product.link_in.split(' '));
                })
            }
        },
        mounted(){
            this.groupId = this.$route.params.group_id;
            this.group2Id = this.$route.params.group2_id;
            this.productId = this.$route.params.productId;
            console.log('groupId:',this.groupId);
            console.log('group2Id:',this.group2Id);
            console.log('productId:',this.productId);
            this.getSubMenu();
            this.getProductData();
        }
    }
</script>
<template>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">首頁</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/ProductsView" class="text-decoration-none text-dark">製品情報</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink :to="`/ProductsListMenuView/${this.groupId}`" class="text-decoration-none text-dark">{{this.groupIdName}}</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink :to="`/${this.groupId}/ProductsListContentView/${this.group2Id}`" class="text-decoration-none text-dark">{{this.group2IdName}}</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{this.product.name}}</li>
            </ol>
        </div>
    </nav>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-12">
                        <div class="tab-content" id="nav-tabContent">
                            <a href="./images/product/1.jpg" class="tab-pane fade show active" id="list-home" role="tabpanel" data-lightbox="product_big_img" aria-labelledby="list-home-list">
                                <img class="img-fluid" :src="this.imgUrl + this.product.link" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="list-group row flex-wrap flex-row" id="list-tab" role="tablist">
                            <a  class="list-group-item list-group-item-action col-3 mx-1 mb-1 active"
                                id="list-home-list"
                                data-bs-toggle="list"
                                href="#list-home"
                                role="tab"
                                aria-controls="list-home"
                                >
                                <img class="img-fluid" :src="this.imgUrl + this.product.link" alt="">
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="col-12 col-md-6 pt-4">
                <h3>{{ this.product.name }}</h3>
                <p class="color">顏色: 
                    <img class="ms-2" title="黑色" src="./images/color/black.jpg" alt="">
                    <img class="ms-2" title="白色" src="./images/color/white.jpg" alt="">
                </p>
                <RouterLink to="/ContactView" class="btn btn-outline-secondary">立即詢價</RouterLink>
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