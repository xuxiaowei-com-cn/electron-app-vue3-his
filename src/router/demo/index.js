import Vant from '../../views/demo/vant.vue';
import Rsa from '../../views/demo/rsa.vue';
import CryptoJS from '../../views/demo/cryptojs.vue';
import AntDesignVue from '../../views/demo/ant-design-vue.vue';

const demoVant = {
  path: '/demo/vant',
  name: 'Vant',
  component: Vant,
};

const demoRsa = {
  path: '/demo/rsa',
  name: 'Rsa',
  component: Rsa,
};

const demoCryptoJS = {
  path: '/demo/cryptojs',
  name: 'CryptoJS',
  component: CryptoJS,
};

const demoAntDesignVue = {
  path: '/demo/ant-design-vue',
  name: 'AntDesignVue',
  component: AntDesignVue,
};

export {
  demoVant,
  demoRsa,
  demoCryptoJS,
  demoAntDesignVue,
};
