<template>
  <div class="shoppingclass">
      <div v-for="item in list" :key="item.id">
          <img :src="item.imgsrc" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
.shoppingclass{
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #ccc;
}
.shoppingclass div{
    width: 20%;
}
.shoppingclass div img{
    width: 100%;
    height: 100%;
}
</style>