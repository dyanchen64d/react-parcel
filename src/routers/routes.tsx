import OsoiLogList from '@src/pages/db/osoiLogList/index';
import {User} from "@src/pages/setting/user";
import Welcome from '@src/pages/welcome';
import {Role} from "@src/pages/setting/role";
import {Permission} from "@src/pages/setting/permission";
import {OnlineUserIndex} from "@src/pages/user/pv";
import {OnlineUserDetail} from "@src/pages/user/pv/detail";
import {ServiceIndex} from "@src/pages/microservice/service";
import {ServiceDetail} from "@src/pages/microservice/service/detail";
import {ServiceList} from "@src/pages/microservice/service/list";
import TodoListViewWrapper from '@src/pages/todolist';
import RequestList from '@src/pages/microservice/request';

const routes = [
  {
    path:'/osoiLogList',
    component:OsoiLogList
  },
  {
    path:'/user',
    component:User
  },
  {
    path:'/visitor',
    component:Welcome
  },
  {
    path:'/visitor',
    component:Welcome
  },
  {
    path:'/role',
    component:Role
  },
  {
    path:'/permission',
    component:Permission
  },
  {
    path:'/onlineUser',
    component:OnlineUserIndex,
    routes:[
      {
        path:'/onlineUser/:id',
        component:OnlineUserDetail
      }
    ]
  },
  {
    path:'/service',
    component:ServiceIndex,
    routes:[
      {
        path: '/service/detail/:id',
        component: ServiceDetail
      },
      {
        path: '/service/list',
        component: ServiceList
      }
    ]
  },
  {
    path:'/requestlist',
    component:RequestList
  },
  {
    path:'/todolist',
    component:TodoListViewWrapper
  }
]

export default routes;