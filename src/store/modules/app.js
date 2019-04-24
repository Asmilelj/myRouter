import Cookies from 'js-cookie'
import {otherRouterMap, constantRouterMap} from '../../router';
console.log('constantRouterMap',constantRouterMap)
const app = {
    state: {
      sidebar: !+Cookies.get('sidebarStat'),
      routers: constantRouterMap,
      currentPathArr: otherRouterMap,
      pageOpenedList: [{
        name: "access",
        path: "/access",
        title: "权限管理"
      }],
    },
    mutations: {
      SET_ROUTERS: (state, routers) => {
        state.routers = constantRouterMap.concat(routers);
      },
      SET_SIDEBAR: state => {
        Cookies.set('sidebarStat', state.sidebar ? 1 : 0);
        state.sidebar = !state.sidebar
      },
      SET_currentPathArr: (state, currentPathArr) => {
        state.currentPathArr = currentPathArr
      },
      addPageOpened: (state, tag) => {
        let flag = true;
        state.pageOpenedList.map((item, index) => {
          if (item.name === tag.name) {
            flag = false;
          }
        });
        if (flag) {
          state.pageOpenedList.push(tag);
        }
      },
      closeOnePageOpend: (state, name) => {
        state.pageOpenedList.map((item, index) => {
          if (item.name === name) {
            state.pageOpenedList.splice(index, 1);
          }
        });
      },
      clearAllPageTags: (state) => {
        state.pageOpenedList = [{
            name: "access",
            path: "/access",
            title: "权限管理"
        }];
      },
      clearOtherPageTags: (state, name) => {
        let newPageList = [];
        state.pageOpenedList.map((item, index) => {
          if (item.name === name || item.name === "access") {
            newPageList.push(item)
          }
        });
        state.pageOpenedList = newPageList;
      }
    },
    actions: {
      ChangeSidebar: ({commit}) => {
        commit('SET_SIDEBAR')
      },
      GenerateRoutes({commit}, data) {
        return new Promise(resolve => {
          commit('SET_ROUTERS', otherRouterMap);
          resolve();
        })
      },
      ChangeCurrentPathArr({commit}, data) {
        commit('SET_currentPathArr', data);
      }
    }
  }
  
  export default app