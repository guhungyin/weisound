<script>
    export default {
        data() {
            return {
                contactUrl:'https://api.weiisound.com/api/storeContact',
                isLoading: false,
                form:{
                    name:'',
                    email:'',
                    phone:'',
                    country:'',
                    subject:'',
                    message:''
                }
            }
        },
        methods:{
            sendMessage(){
                this.$http.post(this.contactUrl)
                .then(res => {
                    console.log(res);
                })
            }
        },
        mounted() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            },400)
        },
    }
</script>

<template>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <div class="d-flex align-items-center justify-content-center flex-column contactBanner bannerImg">
        <h1 class="text-white fw-bold">CONTACT US</h1>
    </div>
    <nav class="breadcrumb-box" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb py-3">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-dark">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
        </div>
    </nav>
    <section  class="container pt-grid-gutter my-5">
        <div class="row row-cols-4 g-3">
        <div class="col-12 col-xl-3 col-sm-6 mb-3" data-aos="flip-left">
            <div class="card h-100 py-lg-2">
            <div class="card-body text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-3 bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <h3 class="h6 mb-2">Service Office</h3>
                <ul class="list-unstyled fs-sm text-muted">
                    <li>4F.-6, No. 2, Sec. 2, Taiwan Blvd., West Dist., Taichung City 403403, Taiwan (R.O.C.)</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="col-12 col-xl-3 col-sm-6 mb-3" data-aos="flip-left">
            <div class="card h-100 py-lg-2">
            <div class="card-body text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-3 bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                <h3 class="h6 mb-3">Business Hours</h3>
                <ul class="list-unstyled fs-sm text-muted mb-0">
                    <li>Monday - Friday: 8 AM - 7 PM</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="col-12 col-xl-3 col-sm-6 mb-3" data-aos="flip-left">
            <div class="card h-100 py-lg-2">
            <div class="card-body text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-3 bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <h3 class="h6 mb-3">Phone</h3>
                <ul class="list-unstyled fs-sm mb-0">
                    <li>
                        <a class="nav-link-style text-decoration-none" href="tel:+886422581618">886-4-22581618</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="col-12 col-xl-3 col-sm-6 mb-3" data-aos="flip-left">
            <div class="card h-100 py-lg-2">
            <div class="card-body text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-3 bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <h3 class="h6 mb-3">E-mail</h3>
                <ul class="list-unstyled fs-sm mb-0">
                <a class="nav-link-style text-decoration-none" href="mailto:+108044357260">info@wei-sound.com.cn</a>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section  class="container contactus_box my-5">
        <div class="row row-cols-2 g-3">
            <div class="col-12 col-lg-6 iframe-full-height-wrap" data-aos="fade-right">
                <iframe class="iframe-full-height" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.3355420680725!2d120.672894571452!3d24.148186613811585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8f8d25faa1%3A0x4f3f724a21ebbd57!2zNDAz5Y-w5Lit5biC6KW_5Y2A6Ie654Gj5aSn6YGT5LqM5q61MuiZnw!5e0!3m2!1szh-TW!2stw!4v1686124810457!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-12 col-lg-6 px-4 px-xl-5 py-5" data-aos="fade-left">
                <form class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label class="form-label" for="cf-name">Name<span class="text-danger">*</span></label>
                            <input class="form-control" type="text" id="cf-name" placeholder="Your name goes here" required="" v-model="form.name">
                            <div class="invalid-feedback">Your name goes here!</div>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="cf-email">E-mail address<span class="text-danger">*</span></label>
                            <input class="form-control" type="email" id="cf-email" placeholder="Your e-mail address goes here" required="" v-model="form.email">
                            <div class="invalid-feedback">Your e-mail address goes here!</div>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="cf-phone">Phone</label>
                            <input class="form-control" type="text" id="cf-phone" placeholder="Your phone number goes here" required="" v-model="form.phone">
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="cf-subject">Country/City<span class="text-danger">*</span></label>
                            <input class="form-control" type="text" id="cf-subject" placeholder="Your phone number goes here" v-model="form.country">
                            <div class="invalid-feedback">Your phone number goes here!</div>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="cf-subject">Subject<span class="text-danger">*</span></label>
                            <input class="form-control" type="text" id="cf-subject" placeholder="Please enter the subject here" v-model="form.subject">
                            <div class="invalid-feedback">Please enter the subject here!</div>
                        </div>
                        <div class="col-12">
                            <label class="form-label" for="cf-message">Description<span class="text-danger">*</span></label>
                            <textarea class="form-control" id="cf-message" rows="6" placeholder="Please describe here" required="" v-model="form.message"></textarea>
                            <div class="invalid-feedback">Please describe here!</div>
                            <button class="btn btn-secondary mt-4" type="submit" @click="sendMessage()">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style>
    .contactBanner{
        background: url('../assets/images/company/contact/bg-support.webp') no-repeat center center / cover;
    }
    .breadcrumb-box{
        box-shadow: 0 0 15px 10px rgb(0 0 0 / 8%);
    }
    .card-body svg{
        width: 1.5rem;
        height: 1.5rem;
        color: #4C74B9;}
    .card-body h3{
        color: #373f50;
        font-weight: bold;}
    .card-body a{color: #4b566b;}
    .card-body a:hover{color: #4C74B9;}
    .card-body ul{font-size: 0.875rem;}
    .iframe-full-height-wrap {
        position: relative;
        min-height: 18rem;
        overflow: hidden;
    }
    .iframe-full-height {
        width: 100%;
        height: 100%;
    }
</style>