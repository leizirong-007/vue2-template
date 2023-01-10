import { SessionStorage, Storage } from '@/utils/storage'
import CacheKey from '@/utils/cache/key'
import { state } from '@/store/modules/theme'

/**
 * Cache 缓存实例
 * @method getToken 设置缓存
 * @method setToken 设置缓存
 * @method getSidebarOpened 设置缓存
 * @method setSidebarOpened 设置缓存
 * @method getToken 设置缓存
 * @method getToken 设置缓存
 */
class Cache {
	getToken = () => {
		return Storage.getItem(CacheKey.TokenKey) || ''
	}

	setToken = (value) => {
		Storage.setItem(CacheKey.TokenKey, value)
	}

	getSidebarOpened = () => {
		return Storage.getItem(CacheKey.SidebarOpenedKey) || false
	}

	setSidebarOpened = (value) => {
		Storage.setItem(CacheKey.SidebarOpenedKey, value)
	}

	getLanguage = () => {
		return Storage.getItem(CacheKey.LangKey) || 'zh-CN'
	}

	setLanguage = (value) => {
		Storage.setItem(CacheKey.LangKey, value)
	}

	getComponentSize = ()=> {
		return Storage.getItem(CacheKey.ComponentSizeKey) || 'default'
	}

	setComponentSize = (value) => {
		Storage.setItem(CacheKey.ComponentSizeKey, value)
	}

	getTheme = () => {
		return SessionStorage.getItem(CacheKey.ThemeKey)  || state
	}

	setTheme = (value) => {
		SessionStorage.setItem(CacheKey.ThemeKey, value)
	}

	removeTheme = () => {
		SessionStorage.removeItem(CacheKey.ThemeKey)
	}
}

export default new Cache()
