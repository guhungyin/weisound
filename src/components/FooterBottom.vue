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
            }
        },
        mounted(){
            this.getMenu();
        }
    }
</script>

<template>
    <footer data-aos="fade-up" class="container">
        <div class="row">
            <div class="col-6 col-sm">
                <h5 class="fw-bold mb-3">Information</h5>
                <ul class="list-unstyled">
                    <li>
                        <RouterLink to="/ProfileView" class="text-decoration-none text-dark">Overview</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/QualiyView" class="text-decoration-none text-dark">Quality Management</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/HistoryView" class="text-decoration-none text-dark">History of Us</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/CatalogView" class="text-decoration-none text-dark">Edm</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="col-6 col-sm">
                <h5 class="fw-bold mb-3">Production</h5>
                <ul class="list-unstyled me-md-4">
                    <li v-for="item in menus" :key="item.id">
                        <RouterLink :to="{path:'/ProductsListMenuView',query:{group_id: item.id}}" class="text-decoration-none text-dark">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="col-6 col-sm">
                <h5 class="fw-bold mb-3">Contact Us</h5>
                <ul class="list-unstyled">
                    <li>
                        <RouterLink to="/ContactView" class="text-decoration-none text-dark">86--89179228#816</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ContactView" class="text-decoration-none text-dark">86-769-89179228#812</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ContactView" class="text-decoration-none text-dark">info@wei-sound.com.cn</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="mt-md-4">
        <div class="d-flex flex-column align-items-center py-md-3">
            <img class="img-fluid my-4 my-md-5" src="../assets/images/logo.svg" alt="">
            <span class="mb-4 text-center">Copyright © 2023 WEI-SOUND All rights reserved.</span>
        </div>
    </footer>
</template>
<style>
    .contact{
        background: url('../assets/images/contact.jpg') no-repeat center / cover;
    }
</style>