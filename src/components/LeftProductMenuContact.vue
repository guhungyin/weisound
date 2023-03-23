<template>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="productMenu" aria-labelledby="productMenuLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">產品列表</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="row g-3">
                <div class="col-6">
                    <a href="./productsCable.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Cable</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsRadio.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Radio</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsCharger.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Charger</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsClockRadio.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Clock radio</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsEarphone.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Earphone</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsPower.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Power</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsSpeaker.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Speaker</span>
                    </a>
                </div>
                <div class="col-6">
                    <a href="./productsStudy.html" class="text-decoration-none d-flex justify-content-center flex-column align-items-center">
                        <img src="../../public/images/img.png" class="img-fluid" alt="">
                        <span class="mt-3">Study</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
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
        letter-spacing: .7rem;
    }
    @media (max-width: 991px) {
        .offcanvas-start{width: 100%;}
    }
</style>