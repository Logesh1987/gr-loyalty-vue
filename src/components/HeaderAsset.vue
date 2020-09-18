<template>
  <div class="loyalUserHead">
    <img :src="path" alt />
  </div>
</template>

<script>
export default {
  name: "HeaderAsset",
  props: {
    path: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loyalUserHead {
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
  }
}
</style>
