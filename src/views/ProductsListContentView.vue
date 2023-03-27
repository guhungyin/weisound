<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    export default {
        props: ['group_id'],
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/product/',
                groupId: '',
                group2Id: '',
                groupIdName: '',
                group2IdName: '',
                subMenu: [],
                subProducts:[]
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
          getSubProducts(){
            this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${this.group2Id}`)
            .then(res => {
              Object.values(res.data.product).forEach(item => {
                  this.subProducts.push(item)
              })
            })
          }
        },
      mounted(){
        this.groupId = this.$route.params.group_id;
        this.group2Id = this.$route.params.group2_id;
        console.log('groupId:',this.groupId);
        console.log('group2Id:',this.group2Id);
        this.getSubMenu()
        this.getSubProducts()
      }
    }
</script>

<template>
  <div class="banner d-flex align-items-center justify-content-center flex-column">
      <h1 class="text-white fw-bold">{{this.group2IdName}}</h1>
  </div>
  <nav class="breadcrumb-box mb-5" aria-label="breadcrumb">
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
            <li class="breadcrumb-item active" aria-current="page">{{this.group2IdName}}</li>
        </ol>
    </div>
  </nav>
  <section class="container my-5 productsItem">
    <div class="row row-cols-4 g-3">
      <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2" v-for="item in subProducts" :key="item.id">
        <RouterLink :to="`/${this.groupId}/ProductsListContentView/${this.groupId}/ProductView/${item.id}`" class="text-decoration-none position-relative">
          <div class="card">
              <img :src="this.imgUrl + item.link" class="card-img-top" alt="...">
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