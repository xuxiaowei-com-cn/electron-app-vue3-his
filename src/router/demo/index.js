import Vant from '../../views/demo/vant.vue';
import Rsa from '../../views/demo/rsa.vue';
import CryptoJS from '../../views/demo/cryptojs.vue';

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

export {
  demoVant,
  demoRsa,
  demoCryptoJS,
};
