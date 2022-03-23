<template>
  <div>
    <h1>发现</h1>
    <input type="text" ref="input" v-model="obj.a" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 200,
      },
    };
  },
  created() {
    this.obj.a=500;
  },
};
</script>

<style>
</style>