<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/productGroup/',
                refName: '',
                subData: []
            }
        },
        computed: {

        },
        watch: {

        },
        components: {
            RouterLink,
            FooterContact
        },
        methods: {
          // 取得網址資料
          getRefName(){
            this.refName = this.$router.params.refName
            console.log(this.subId);
            this.getSubData()
          },
          // getSubData(id){
          //   axios.get(this.apiUrl)
          //   .then(res => {
          //     console.log(res);
          //     this.subData = res.data.menu
          //   })
          // }
        },
        mounted(){
          this.getRefName()
        }
    }
</script>

<template>
  <div class="banner d-flex align-items-center justify-content-center flex-column">
    <h1 class="mb-4 text-white fw-bold">{{this.refName}}</h1>
  </div>
  <nav class="breadcrumb-box mb-5" aria-label="breadcrumb">
    <div class="container">
        <ol class="breadcrumb py-3">
            <li class="breadcrumb-item">
                <a href="index.html" class="text-decoration-none text-dark">首頁</a>
            </li>
            <li class="breadcrumb-item">
                <a href="./productsAll.html" class="text-decoration-none text-dark">製品情報</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">CABLE</li>
        </ol>
    </div>
  </nav>
  <section class="container products">
    <div class="row row-cols-4 g-3 my-5">
        <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-3 my-2">
          <RouterLink  class="text-decoration-none d-flex justify-content-between py-3 border-bottom">
              <span>USB A TO USB TYPE-C</span>
              <span class="material-icons">navigate_next</span>
          </RouterLink>
        </div>
    </div>
  </section>
  <section class="container my-5 productsItem">
    <div class="row row-cols-4 g-3">
        <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2">
          <RouterLink class="text-decoration-none position-relative">
            <div class="card">
                <img :src="this.imgUrl" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">Car Related Electronics</h6>
                    <h5 class="card-text fw-bold">RK-AA17G1</h5>
                </div>
            </div>
            <i class="position-absolute">NEW</i>
          </RouterLink>
        </div>
    </div>
  </section>
  <FooterContact></FooterContact>
</template>
<style>
  .banner{
    height: 30vh;
    background-color: #878787;
  }
  .breadcrumb-box{
    box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
  }
  .products a {
    display: block;
    color: #333;
    text-decoration: none;
    position: relative;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    padding: 0 0.5em;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    height: 100%;
  }
  .products a::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    display: block;
    margin-left: -0.5em;
    background-color: #ececec;
    z-index: -1;
    transition: .2s;
  }
  .products a:hover::before{
    width: 100%;
  }

  .productsItem h6{
    font-size: 0.75rem;
    color: #7d879c;}
  .productsItem h5{
    color: #373f50;
    font-size: 0.875rem;
  }
  .productsItem i{
    padding: 0.25em 0.625em;
    font-size: 0.6em;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.175rem;
    box-shadow: 0 0.5rem 1.125rem -0.275rem rgb(243 71 112 / 90%);
    background-color: #f34770;
    top: 0.5rem;
    left: 0.5rem;
  }
</style>