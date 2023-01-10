
export const state = {
	// 左侧边栏状态
	menuState: 0,
	// 国际化
	language: 'zh',
	// 默认激活菜单
	activeRoute: 'page1',
	// tabs
	tabsList: [
		{ title: '首页', path: '/page1', isCloseble: false }, 
		{ title: '首页', path: '/page2', isCloseble: true },
		{ title: '首页', path: '/page3', isCloseble: true },
		{ title: '首页', path: '/page4', isCloseble: true },
		{ title: '首页', path: '/page5', isCloseble: true },
		{ title: '首页', path: '/page6', isCloseble: true },
		{ title: '首页', path: '/page7', isCloseble: true },
		{ title: '首页', path: '/page8', isCloseble: true },
		{ title: '首页', path: '/page9', isCloseble: true },
		{ title: '首页', path: '/page10', isCloseble: true },
		{ title: '首页', path: '/page11', isCloseble: true },
		{ title: '首页', path: '/page12', isCloseble: true },
		{ title: '首页', path: '/page13', isCloseble: true },
		{ title: '首页', path: '/page14', isCloseble: true },
		{ title: '首页', path: '/page15', isCloseble: true },
		{ title: '首页', path: '/page16', isCloseble: true },
		{ title: '首页', path: '/page17', isCloseble: true },
	],
	// 字典列表
	menuList: [
		{
			path: 'page1',
			name: 'sf',
			meta: { icon: 'el-icon-location', title: 's首页sd' },
			children: [
				{
					path: 'page1',
					name: 'sf2',
					meta: { icon: 'el-icon-document', title: 's首页sd' },
					children: []
				}
			]
		},
		{
			path: 'page2',
			name: 'sf1',
			meta: { icon: 'el-icon-document', title: 's首页sd' },
			children: []
		},
	],
}
export default {
	state,
	getters: {
		app_state: (state) => state
	},
	actions:{
		APP_getDictListAction() {
      console.log("调用了 APP_getDictListAction()");
    }
	}
}
