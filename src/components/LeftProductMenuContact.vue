<script>
    import { RouterLink } from 'vue-router';
    // import * as bootstrap from 'bootstrap'
    export default {
        data() {
            return {
                apiUrl:'https://api.weiisound.com/api/product',
                imgUrl:'https://api.weiisound.com/uploads/productGroup/',
                menus: [],
                groupId: '',
                subMenu: [],
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
            closeLeftMenu(){
                const myOffcanvas = document.getElementById("LeftMenu")
                myOffcanvas.addEventListener('click', function () {
                    myOffcanvas.classList.remove('show')
                })
            }
        },
        mounted(){
            this.getMenu();
        },
        // watch: {
        //     '$route': {
        //         handler() {
        //             const myOffcanvas = document.getElementById("LeftMenu")
        //             myOffcanvas.addEventListener('click', function () {
        //                 myOffcanvas.classList.remove('show')
        //             })
        //         },
        //     },
        // }
    }
</script>

<template>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="LeftMenu">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="LeftMenuLabel">Product List</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="row g-3">
                <div class="col-6" v-for="item in menus" :key="item.id">
                    <RouterLink :to="{path:'/ProductsListMenuView',query:{group_id: item.id}}" class="text-decoration-none d-flex justify-content-center flex-column align-items-center" @click="closeLeftMenu()">
                        <img :src="this.imgUrl + item.link" class="img-fluid" alt="">
                        <span class="text-center mt-3">{{ item.name }}</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>