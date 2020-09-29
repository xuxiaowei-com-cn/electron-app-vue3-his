import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';
import {
  demoRsa, demoCryptoJS, demoAntDesignVue,
} from './demo';
import { userLog } from '../log';

const routes = [
  homeRoutes,
  aboutRoutes,
  demoRsa,
  demoCryptoJS,
  demoAntDesignVue,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  userLog.info(`访问路径：${to.path}`);
  next();
});

export default router;
