import { defineStore } from "pinia";
export default defineStore('ProducsStore', {
// state , actions , getters
  state: () => ({
    apiUrl: 'https://api.weiisound.com/api/product',
    groupId: '',
    menuData: [],
    subProducts:[]
  }),
  actions: {
    getUrlId(){
      console.log(this.$route.params.group_id);
      this.groupId = this.$route.params.group_id;
      this.$http.get(`${this.apiUrl}?group_id=${this.groupId}`)
      .then((res) => {
        console.log(res);
      })
    }
  },
  getters: {

  }

})