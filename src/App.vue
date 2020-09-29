<template>
  <div id="app-vue">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/demo/vant">Vant</router-link>
      |
      <router-link to="/demo/rsa">RSA</router-link>
      |
      <router-link to="/demo/cryptojs">CryptoJS</router-link>
      |
      <router-link to="/demo/ant-design-vue">AntDesignVue</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>

#app-vue {
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
