<template>
    <a class="productMenu text-white text-decoration-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <span class="text-light">Production</span>
    </a>
</template>
<style>
    .productMenu{
        cursor: pointer;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 40px;
        height: 100%;
        background-color: #333333;
        writing-mode: vertical-lr;
        letter-spacing: .2rem;
    }
    @media (max-width: 991px) {
        .offcanvas-start{width: 100%;}
    }
    @media (max-width: 991px) {
        .productMenu{
            width: 100%;
            height: 7%;
            top: 4.5em;
            background-color: #333333;
            writing-mode: inherit;
        }
    }
</style>