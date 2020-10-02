<template>
  <div id="demo-ant-design-vue">
    <h2>ant-design-vue</h2>
    <a-button>Default</a-button>
    <br>
    <br>
    <a-button type="link" href="https://github.com/xuxiaowei-com-cn" target="_blank">
      <GithubOutlined :style="{fontSize: '30px'}"/>
    </a-button>
  </div>
</template>

<script>
import { GithubOutlined } from '@ant-design/icons-vue';
export default {
  name: "AntDesignVue",
  components: {
    GithubOutlined,
  },
}
</script>

<style lang="scss">
#demo-ant-design-vue {
  .ant-btn-link {
    color: inherit;
  }
}
</style>