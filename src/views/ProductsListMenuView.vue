<script>
    import FooterContact from '../components/FooterContact.vue';
    export default {
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/product/',
                isLoading: false,
                groupIdName: '',
                subMenu: [],
                products:[],
                dataInformation:{},
                groupId: '',
                group2Id: ''
            }
        },
        components: {
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
              this.isLoading = false;
            })
          },
          // 電腦板選單 - 抓取按鈕分類內的產品
          getProductsPc(group2Id){
            this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${group2Id}`)
            .then(res => {
              this.dataInformation = res.data;
              this.products = res.data.product;
              this.groupId = this.dataInformation.group_id
              this.group2Id = this.dataInformation.group2_id
            })
          },
          // 手機板選單 - 抓取按鈕分類內的產品
          getProductsMobile(e){
            const selectedValue = e.target.value;
            this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${selectedValue}`)
            .then(res => {
              this.dataInformation = res.data;
              this.products = res.data.product;
              this.groupId = this.dataInformation.group_id
              this.group2Id = selectedValue
            })
          },
        },
        mounted() {
          this.isLoading = true;
          this.groupId = this.$route.query.group_id;
          this.getSubMenu()
        },
        watch: {
          '$route.query.group_id': {
            handler() {
              this.isLoading = true;
              this.subMenu = [];
              this.groupId = this.$route.query.group_id;
              this.getSubMenu();
              this.products = [];
            },
          },
        }
    }
</script>

<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="d-flex align-items-center justify-content-center flex-column ProductsListMenu">
      <h1 class="text-white fw-bold mb-0">{{this.groupIdName}}</h1>
  </div>
  <nav class="breadcrumb-box mb-5" aria-label="breadcrumb">
    <div class="container">
        <ol class="breadcrumb py-3">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/ProductsView" class="text-decoration-none text-dark">Production</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{this.groupIdName}}</li>
        </ol>
    </div>
  </nav>
  <section class="container pcSelect" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-delay="200">
    <div class="row row-cols-4 g-3 my-5">
      <div class="col-12 col-sm-6 col-lg-3 my-2" v-for="item in subMenu" :key="item.id" :id="item.id" data-aos="zoom-in">
        <button type="button" class="btn text-decoration-none d-flex justify-content-between py-3 border-bottom border-0" @click="getProductsPc(item.id)">{{ item.name }}</button>
      </div>
    </div>
  </section>
  <section class="container mobileSelect">
    <select class="form-select" @change="getProductsMobile">
      <option selected>Select an option</option>
      <option v-for="item in subMenu" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
  </section>
  <section  class="container my-5 productsItem">
    <div v-if="products.length" class="row row-cols-4 g-3">
      <div class="col-6 col-lg-4 col-xl-3 col-xxl-2" v-for="product in products" :key="product.id" data-aos="flip-left">
        <RouterLink :to="{path:'/ProductView', query:{group_id: this.groupId ,group2_id: this.group2Id , id: product.id}}" class="text-decoration-none position-relative">
          <div class="card">
            <img :src="this.imgUrl + product.link" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="card-title">{{ this.groupIdName }}</h6>
              <h5 class="card-text fw-bold">{{ product.name }}</h5>
            </div>
          </div>
          <span v-if="product.new === '1'" class="position-absolute">NEW</span>
          <span v-else class="position-absolute d-none"></span>
        </RouterLink>
      </div>
    </div>
    <div v-else class="text-center">Currently, there are no products in the list</div>
  </section>
  <FooterContact></FooterContact>
</template>
<style>
  .ProductsListMenu{
    height: 30vh;
    background-color: #878787;
  }
  .breadcrumb-box{
    box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
  }
  .pcSelect button {
    border-radius: 0;
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
  .pcSelect button::before{
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
  .pcSelect button:hover::before{
    width: 100%;
  }

  .productsItem h6{
    font-size: 0.75rem;
    color: #7d879c;}
  .productsItem h5{
    color: #373f50;
    font-size: 0.875rem;
  }
  .productsItem span{
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
  @media (min-width: 768px) {
    .mobileSelect{display: none;}
  }
  @media (max-width: 767px) {
    .pcSelect{display: none;}
  }
</style>