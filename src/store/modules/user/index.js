export default {
  state: {
    // 用户信息
		user: {
			id: '',
			username: '',
			avatar: ''
		},
		// 权限列表
		authorityList: [],
    token: ""
  },
  //加前缀
  actions: {
    USER_getUserInfoAction() {
      console.log("调用了 USER_getUserInfoAction()");
    },
    USER_getAuthorityListAction() {
      console.log("调用了 USER_getAuthorityListAction()");
    },

  },
  //加前缀
  mutations: {
    asd() {

    }
  },
  //加前缀
  getters: {
    user_state: ({ state }) => state
  }
}