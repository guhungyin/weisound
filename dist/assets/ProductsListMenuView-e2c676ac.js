import{_ as I,F as y,r as p,o as s,c as i,a as r,b as t,t as d,w as _,d as c,g,f as m}from"./index-60480932.js";const v={data(){return{apiUrl:"https://api.weiisound.com/api/product",imgUrl:"https://api.weiisound.com/uploads/product/",isLoading:!1,groupIdName:"",subMenu:[],products:[],dataInformation:{},groupId:"",group2Id:""}},components:{FooterContact:y},methods:{getSubMenu(){this.$http.get(`${this.apiUrl}?group_id=${this.groupId}`).then(a=>{Object.values(a.data.menu[this.groupId].sub).forEach(e=>{this.subMenu.push(e)}),this.groupIdName=a.data.menu[this.groupId].name,this.isLoading=!1})},getProductsPc(a){this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${a}`).then(e=>{this.dataInformation=e.data,this.products=e.data.product,this.groupId=this.dataInformation.group_id,this.group2Id=this.dataInformation.group2_id})},getProductsMobile(a){const e=a.target.value;this.$http.get(`${this.apiUrl}?group_id=${this.groupId}&group2_id=${e}`).then(u=>{this.dataInformation=u.data,this.products=u.data.product,this.groupId=this.dataInformation.group_id,this.group2Id=e})}},mounted(){this.isLoading=!0,this.groupId=this.$route.query.group_id,this.getSubMenu()},watch:{"$route.query.group_id":{handler(){this.subMenu=[],this.groupId=this.$route.query.group_id,this.getSubMenu(),this.products=[]}}}},x={class:"d-flex align-items-center justify-content-center flex-column ProductsListMenu"},w={class:"text-white fw-bold mb-0"},k={class:"breadcrumb-box mb-5","aria-label":"breadcrumb"},M={class:"container"},L={class:"breadcrumb py-3"},P={class:"breadcrumb-item"},V={class:"breadcrumb-item"},$={class:"breadcrumb-item active","aria-current":"page"},C={class:"container pcSelect","data-aos":"fade-zoom-in","data-aos-easing":"ease-in","data-aos-duration":"1000","data-aos-delay":"200"},N={class:"row row-cols-4 g-3 my-5"},S=["id"],U=["onClick"],F={class:"container mobileSelect"},q=t("option",{selected:""},"Select an option",-1),j=["value"],B={class:"container my-5 productsItem"},E={key:0,class:"row row-cols-4 g-3"},z={class:"card"},R=["src"],D={class:"card-body"},H={class:"card-title"},O={class:"card-text fw-bold"},T={key:0,class:"position-absolute"},W={key:1,class:"position-absolute d-none"},A={key:1,class:"text-center"};function G(a,e,u,J,n,l){const b=p("VueLoading"),h=p("RouterLink"),f=p("FooterContact");return s(),i(c,null,[r(b,{active:n.isLoading,"onUpdate:active":e[0]||(e[0]=o=>n.isLoading=o)},null,8,["active"]),t("div",x,[t("h1",w,d(this.groupIdName),1)]),t("nav",k,[t("div",M,[t("ol",L,[t("li",P,[r(h,{to:"/",class:"text-decoration-none text-dark"},{default:_(()=>[m("Home")]),_:1})]),t("li",V,[r(h,{to:"/ProductsView",class:"text-decoration-none text-dark"},{default:_(()=>[m("Production")]),_:1})]),t("li",$,d(this.groupIdName),1)])])]),t("section",C,[t("div",N,[(s(!0),i(c,null,g(n.subMenu,o=>(s(),i("div",{class:"col-12 col-sm-6 col-lg-3 my-2",key:o.id,id:o.id,"data-aos":"zoom-in"},[t("button",{type:"button",class:"btn text-decoration-none d-flex justify-content-between py-3 border-bottom border-0",onClick:K=>l.getProductsPc(o.id)},d(o.name),9,U)],8,S))),128))])]),t("section",F,[t("select",{class:"form-select",onChange:e[1]||(e[1]=(...o)=>l.getProductsMobile&&l.getProductsMobile(...o))},[q,(s(!0),i(c,null,g(n.subMenu,o=>(s(),i("option",{key:o.id,value:o.id},d(o.name),9,j))),128))],32)]),t("section",B,[n.products.length?(s(),i("div",E,[(s(!0),i(c,null,g(n.products,o=>(s(),i("div",{class:"col-6 col-lg-4 col-xl-3 col-xxl-2",key:o.id,"data-aos":"flip-left"},[r(h,{to:{path:"/ProductView",query:{group_id:this.groupId,group2_id:this.group2Id,id:o.id}},class:"text-decoration-none position-relative"},{default:_(()=>[t("div",z,[t("img",{src:this.imgUrl+o.link,class:"card-img-top",alt:"..."},null,8,R),t("div",D,[t("h6",H,d(this.groupIdName),1),t("h5",O,d(o.name),1)])]),o.new==="1"?(s(),i("span",T,"NEW")):(s(),i("span",W))]),_:2},1032,["to"])]))),128))])):(s(),i("div",A,"Currently, there are no products in the list"))]),r(f)],64)}const X=I(v,[["render",G]]);export{X as default};
