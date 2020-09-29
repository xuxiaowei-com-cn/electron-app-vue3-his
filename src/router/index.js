import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';
import { demoVant, demoRsa } from './demo';
import { userLog } from '../log';

const routes = [
  homeRoutes,
  aboutRoutes,
  demoVant,
  demoRsa,
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
