<script>
    import { RouterLink } from 'vue-router';
    import FooterContact from '../components/FooterContact.vue';
    export default {
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/productGroup/',
                groupId: '',
                subMenu: []
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
          })
        }
      },
      mounted(){
        this.groupId = this.$route.params.group_id;
        this.getSubMenu()
      }
    }
</script>

<template>
  <div class="banner d-flex align-items-center justify-content-center flex-column">
    <!-- <h1 class="mb-4 text-white fw-bold">{{this.keyData.name}}</h1> -->
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
            <li class="breadcrumb-item active" aria-current="page">CABLE</li>
        </ol>
    </div>
  </nav>
  <section class="container products">
    <div class="row row-cols-4 g-3 my-5">
      <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-3 my-2" v-for="item in subMenu" :key="item.id" :id="item.id">
        <RouterLink :to="`/ProductsListMenuView/${this.groupId}/ProductsListContentView/${item.id}`"  class="text-decoration-none d-flex justify-content-between py-3 border-bottom">
            <span>{{ item.name }}</span>
            <!-- <span class="material-icons">navigate_next</span> -->
        </RouterLink>
      </div>
    </div>
  </section>
  <section class="container my-5 productsItem">
    <router-view></router-view>
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