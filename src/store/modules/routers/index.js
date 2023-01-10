export default {
  state: {
    a: "df"
  },

  //加前缀
  actions: {
    ROUTES_getMenuRoutes() { 
      return [
        {
          meta: {
            title: '用户管理',
            breadcrumb: [],
          },
          path: "sys/user/index",
          id: 28,
          pid: 12,
          children: [],
          name: "用户管理",
          url: "sys/user/index",
          type: 0,
          openStyle: 0,
          icon: "icon-user",
          authority: "",
          sort: 0,
          createTime: "2022-08-30 23:02:27",
          parentName: null
        }
      ]
    }
  },
  //加前缀
  mutations: {
    asd() {

    }
  },
  //加前缀
  getters: {
    as: state => state.a
  }
}