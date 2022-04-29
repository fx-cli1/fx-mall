<template>
  <div>
    <imgSwiper />
    这是 {{this.id}}页面
  </div>
</template>

<script>
import imgSwiper from "../components/Detail/imgSwiper.vue"
export default {
  components:{
    imgSwiper
  },
  data(){
    return{
      id:""
    }
  },
  methods:{

  },
  created(){
    this.id=this.$route.params.id
  }
}
</script>

<style>

</style>