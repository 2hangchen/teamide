import Vue from 'vue'
import Router from 'vue-router'

import Toolbox from '@/views/Toolbox'
import Workspace from '@/views/Workspace'

import Manage from '@/views/manage/Index'
import ManageUserIndex from '@/views/manage/user/Index'

// push相同地址 会报错，使用该方式规避
let push = Router.prototype.push;
Router.prototype.push = function (location) {
  return push.call(this, location).catch(e => e);
};

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/toolbox',
      component: Toolbox
    },
    {
      path: '/workspace',
      component: Workspace
    },
    {
      path: '/manage',
      component: Manage
    },
    {
      path: '/manage/user',
      component: ManageUserIndex
    },
    {
      path: '/manage/user/index',
      component: ManageUserIndex
    },
  ]
})