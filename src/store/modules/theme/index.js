
export const state = {
	//主题
	theme: 'dark',
	//可切换主题
	themes: {
		dark: 'theme-dark',
		light: 'theme-light',
	},
	//是否需要logo
	isLogoShow: true,
	//侧边栏宽度
	asideW: '230px', 
	//顶部导航卡高度
	navH: '60px',
	//顶部tabs栏高度
	tabsH: '38px',
	//是否显示tabs
	isTabsShow: true,
	//主要颜色
	primaryColor: '#409eff',

}
export default {
	state,
	getters: {
		theme_state: (state) => state
	},
	actions: {
		SET_theme_state({ state }, { key, value }) {
			state[key] = value
			console.log(state);
		}
	},
	//加前缀
	mutations: {
		asd() {

		}
	}
}