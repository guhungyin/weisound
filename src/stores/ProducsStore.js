import { defineStore } from "pinia";
export default defineStore('producsStore', {
// data , methods , computed
// state , actions , getters
  state: () => ({
    apiUrl: 'https://api.weiisound.com/api/product', // 產品資料 API
    groupIdImgUrl: 'https://api.weiisound.com/uploads/productGroup/', // 產品大分類圖片 API
    productImgUrl: 'https://api.weiisound.com/uploads/product/', // 產品圖片 + 產品名稱 API
    productColorImgUrl: 'https://api.weiisound.com/images/product/color/', // 產品顏色圖片 API
    groupId: '',
    group2Id: '',
    subMenu:[],
    products: [],
    productId: '',
    product: []
  }),
  actions: {

  },
  getters: {

  }

})