<script>
    import { RouterLink } from 'vue-router';
    export default {
        props: ['group_id'],
        data() {
            return {
                apiUrl: 'https://api.weiisound.com/api/product',
                imgUrl: 'https://api.weiisound.com/uploads/product/',
                groupId: '',
                group2Id: '',
                subMenu: [],
                subProducts:[]
            }
        },
        components: {
            RouterLink,
        },
        methods: {
          getSubProducts(){
            this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${this.group2Id}`)
            .then(res => {
              
              Object.values(res.data.product).forEach(item => {
                  this.subProducts.push(item)
              })
              console.log(this.subProducts);
            })
          }
        },
      mounted(){
        this.groupId = this.$route.params.group_id;
        this.group2Id = this.$route.params.group2_id;
        console.log('groupId:',this.groupId);
        console.log('group2Id:',this.group2Id);
        this.getSubProducts()
      }
    }
</script>

<template>
  <section class="container my-5 productsItem">
    <div class="row row-cols-4 g-3">
      <div data-aos="fade-up" class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2" v-for="item in subProducts" :key="item.id">
        <RouterLink :to="`/ProductView/${item.id}`" class="text-decoration-none position-relative">
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