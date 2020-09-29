import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';
import demoVant from './demo';

const routes = [
  homeRoutes,
  aboutRoutes,
  demoVant,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
