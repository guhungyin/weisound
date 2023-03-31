<script>
    import { RouterLink } from 'vue-router';
    export default {
        data() {
            return {
                apiUrl:'https://api.weiisound.com/api/product',
                imgUrl:'https://api.weiisound.com/uploads/productGroup/',
                menus: [],
                groupId: '',
                subMenu: []
            }
        },
        components: {
            RouterLink
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
            getMenu() {
                this.$http.get(this.apiUrl)
                .then((res)=>{
                    Object.values(res.data.menu).forEach(item => {
                        this.menus.push(item)
                    })
                })
                .catch((err)=>{
                    console.log(err.message);
                })
            },
            closeLeftMenu(){ // 關閉左選單
            }
        },
        mounted(){
            this.getMenu();
        }
    }
</script>

<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">產品列表</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="row g-3">
                <div class="col-6" v-for="item in menus" :key="item.id">
                    <RouterLink :to="{path:'/ProductsListMenuView',query:{group_id: item.id}}" class="text-decoration-none d-flex justify-content-center flex-column align-items-center" @click="closeLeftMenu()">
                        <img :src="this.imgUrl+ item.link" class="img-fluid" alt="">
                        <span class="text-center mt-3">{{ item.name }}</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>