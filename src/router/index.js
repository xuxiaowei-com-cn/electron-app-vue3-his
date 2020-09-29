import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';

const routes = [
  homeRoutes,
  aboutRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
