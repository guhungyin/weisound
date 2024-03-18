<script>
    import FooterContact from '../components/FooterContact.vue';
    export default {
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/product/',
                data:{},
                isLoading: false,
                groupIdName: '',
                subMenu: [],
                products:[],
                dataInformation:{},
                groupId: '',
                group2Id: '',
                page: '',
                totalPage: ''
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
            this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${group2Id}&page=${this.page}`)
            .then(res => {
              this.data = res.data;
              this.dataInformation = res.data;
              this.products = res.data.product;
              this.groupId = this.dataInformation.group_id;
              this.group2Id = this.dataInformation.group2_id;
              this.page = res.data.page;
              this.totalPage = res.data.totalPage;
            })
          },
          // 手機板選單 - 抓取按鈕分類內的產品
          getProductsMobile(e){
            const selectedValue = e.target.value;
            this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${selectedValue}&page=${this.page}`)
            .then(res => {
              this.dataInformation = res.data;
              this.products = res.data.product;
              this.groupId = this.dataInformation.group_id;
              this.group2Id = selectedValue;
              this.page = res.data.page;
              this.totalPage = res.data.totalPage;
            })
          },
          // 分頁
          changePages (pageItem){
            this.page = pageItem;
            this.getProductsPc(this.group2Id);
            // 點擊頁碼後移動到上方
            window.scrollTo({
              top: 400,
              behavior: 'smooth'
            })
          }
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
  <section class="container mobileSelect mb-3">
    <select class="form-select" @change="getProductsMobile">
      <option selected>Select an option</option>
      <option v-for="item in subMenu" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
  </section>
  <div class="container">
    <div class="row">
      <div class="col-3 pcSelect">
        <a class="d-block px-2 py-3 text-decoration-none border-bottom" v-for="item in subMenu" :key="item.id" :id="item.id" @click="getProductsPc(item.id)">{{ item.name }}</a>
      </div>
      <div class="col-12 col-md-9">
        <div v-if="products.length" >
          <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3 mb-3">
            <div class="col" v-for="product in products" :key="product.id" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="500" data-aos-delay="200">
              <RouterLink :to="{path:'/ProductView', query:{group_id: this.groupId ,group2_id: this.group2Id , page:this.page , id: product.id}}" class="text-decoration-none position-relative">
                <div class="card h-100">
                  <img :src="this.imgUrl + product.link" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h6 class="card-title">{{ this.groupIdName }}</h6>
                    <h5 class="card-text fw-bold">{{ product.name }}</h5>
                  </div>
                </div>
                <span v-if="product.new === '1'" class="position-absolute iconNew">NEW</span>
                <span v-else class="position-absolute d-none"></span>
              </RouterLink>
            </div>
          </div>
          <nav aria-label="Page navigation" >
            <ul class="pagination justify-content-center">
              <li v-for="pageItem in totalPage" :key="pageItem" class="page-item mx-2" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="700" data-aos-delay="200">
                <a class="page-link" href="#" @click.prevent="changePages(pageItem)">{{ pageItem }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div v-else class="text-center mt-5">Currently, there are no products in the list</div>
      </div>
    </div>
  </div>
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
  .pcSelect a{
    cursor: pointer;
    color: #000;
    transition: all .2s ease-in-out;
  }
  .pcSelect a:hover{
    background-color: #000;
    color: #FFF;
  }
  .productsItem h6{
    font-size: 0.75rem;
    color: #7d879c;}
  .productsItem h5{
    color: #373f50;
    font-size: 0.875rem;
  }
  .productsItem .iconNew{
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