import Rsa from '../../views/demo/rsa.vue';
import CryptoJS from '../../views/demo/cryptojs.vue';
import AntDesignVue from '../../views/demo/ant-design-vue.vue';
import Img from '../../views/demo/img.vue';

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

const demoImg = {
  path: '/demo/img',
  name: 'Img',
  component: Img,
};

export {
  demoRsa,
  demoCryptoJS,
  demoAntDesignVue,
  demoImg,
};
