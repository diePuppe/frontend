
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/ExpertsOverview.vue')
      },
      { path: '/settings',
        component: () => import('pages/Settings.vue')
      },
      {
        path: '/email',
        component: () => import('pages/Email.vue')
      },
      {
        path: '/delete',
        component: () => import('pages/ExpertDelete.vue')
      },
      {
        path: '/addexpert',
        component: () => import('pages/AddExpert.vue')
      }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
