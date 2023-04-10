<script>
import { RouterLink } from 'vue-router';
import LeftProductMenuBtn from './LeftProductMenuBtn.vue';
export default {
    data() {
        return {
            isNavbarCollapsed: false
        }
    },
    components: {
        RouterLink,
        LeftProductMenuBtn
    },
    watch: {
        $route() {
            const navbar = document.querySelector('#navbarNav')
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show')
            }
        }
    },
    mounted(){
    }
}
</script>
<template>
    <header class="position-fixed w-100">
        <nav class="navbar navbar-expand-lg navbar-light position-relative">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">
                    <img class="logo" src="../assets/images/logo.svg" alt="">
                </RouterLink>
                <button class="navbar-toggler border-0 px-0" onclick="return false;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown mega-dropdown">
                            <a class="nav-link fw-bold dropdown-toggle" href="#" role="button" id="dropdownCompanyLink" data-bs-toggle="dropdown" aria-expanded="false">Information</a>
                            <div class="dropdown-menu mega-dropdown-menu" aria-labelledby="dropdownCompanyLink">
                                <h2 class="d-none d-lg-block text-center mb-4 fw-bold">COMPANY</h2>
                                <div class="row">
                                    <div class="col-lg">
                                        <RouterLink to="/ProfileView" class="text-decoration-none position-relative">Overview</RouterLink>
                                    </div>
                                    <div class="col-lg">
                                        <RouterLink to="/QualiyView" class="text-decoration-none position-relative">Quality Management</RouterLink>
                                    </div>
                                    <div class="col-lg">
                                        <RouterLink to="/HistoryView" class="text-decoration-none position-relative">History</RouterLink>
                                    </div>
                                    <div class="col-lg">
                                        <RouterLink to="/CatalogView" class="text-decoration-none position-relative">Edm</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/ProductsView" class="nav-link fw-bold">Production</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/ContactView" class="nav-link fw-bold">Contact Us</RouterLink>
                        </li>
                        <!-- <li class="nav-item dropdown mega-dropdown">
                            <a class="nav-link fw-bold dropdown-toggle" href="#" role="button" id="dropdownLanguageLink" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                            <div class="dropdown-menu mega-dropdown-menu" aria-labelledby="dropdownLanguageLink">
                                <h2 class="d-none d-lg-block text-center mb-4 fw-bold">LANGUAGE</h2>
                                <div class="row">
                                    <div class="col-lg">
                                        <a href="/?locale=zh-tw" class="text-decoration-none position-relative">中文繁體</a>
                                    </div>
                                    <div class="col-lg">
                                        <a href="/?locale=zh-cn" class="text-decoration-none position-relative">简体中文</a>
                                    </div>
                                    <div class="col-lg">
                                        <a href="/?locale=en-us" class="text-decoration-none position-relative">English</a>
                                    </div>
                                    <div class="col-lg">
                                        <a href="/?locale=ja-us" class="text-decoration-none position-relative">日本語</a>
                                    </div>
                                    <div class="col-lg">
                                        <a href="/?locale=es-es" class="text-decoration-none position-relative">español</a>
                                    </div>
                                </div>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
        <LeftProductMenuBtn></LeftProductMenuBtn>
    </header>
</template>
<style>
    header{
        z-index: 2;
        top: 0;}
    .navbar-toggler:focus {
        color: rgb(0 0 0 / 0%);}
    .navbar-toggler:focus, .navbar-toggler:hover {text-decoration: none;}
    .navbar{
        padding: 0 2em;
        background-color: #fff;
        width: 100%;
        z-index: 999;
        box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.08);}
    .navbar-nav {padding-left: 1rem;}
    .navbar .nav-item{line-height: 3.5em;}
    .dropdown-toggle::after {
        display: inline-block;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
    }
    @media screen and (min-width: 992px) {
        .mega-dropdown {
            position: unset;
        }
        .dropdown .dropdown-menu {
            display: block;
            visibility: hidden;
            opacity: 0;
            transform: translateY(3px);
            border: none;
            border-top: 3px solid #4D75B7;
            border-radius: 0;
            transition: all .2s ease-in;
        }
        .dropdown:hover > .dropdown-menu {
            transform: scaleY(1);
            opacity: 1;
            visibility: visible;
        }
        .dropdown-menu[data-bs-popper]{
            top: 4.3em;
            margin: 0;
        }
        .dropdown h2 {
            font-size: 3.5em;
        }
        .dropdown .subtitle {
            font-size: 1.2em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 2em;
        }
        .mega-dropdown-menu {
            width: 100%;
            padding: 2em 5em 5em;
            top: 4.3em;
            left: 0;
            box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.08);
        }
    }
    .mega-dropdown-menu a {
        display: block;
        color: #333;
        text-decoration: none;
        position: relative;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
        padding: 0 .5em;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        width: 100%;
        height: 100%;
    }
    .mega-dropdown-menu a::before {
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
    .mega-dropdown-menu a:hover::before {
        width: 100%;
    }

    @media (max-width: 991px) {
        .navbar {
            padding: 1em 1em;
        }
        .navbar-nav {
            margin-top: 1em;
        }
        .dropdown-menu{
            border: none;
            border-radius: initial;
            box-shadow: none;
            border-left: 1px solid rgb(0 0 0 / 30%);
            padding-left: 1em;
        }
        .mega-dropdown-menu a{
            border: none;
        }
    }
</style>