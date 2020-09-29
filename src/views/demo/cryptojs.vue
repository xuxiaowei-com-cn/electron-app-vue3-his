<template>
  <div id="demo-cryptojs">
    <h2>CryptoJS</h2>
  </div>
</template>

<script>
export default {
  name: "CryptoJS",
  created() {
    console.log(this.$CryptoJS.MD5('徐晓伟').toString())
  }
}
</script>

<style scoped>

</style>