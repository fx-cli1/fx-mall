<template>
  <div>
    <h1>发现12321</h1>
    <input type="text" ref="input" v-model="obj.a" />
    <pictureupload></pictureupload>

  </div>
</template>

<script>
import pictureupload from "@/components/Mine/PictureUpload.vue";

export default {
  data() {
    return {
      obj: {
        a: 200,
      },
    };
  },
  created() {
    this.obj.a = 500;
  },
  components: {
    pictureupload,
  },
  methods: {
   
  },
};
</script>

<style scoped>

</style>