<template>
	<el-aside class="layout-sidebar" :style="{ width: theme_state.asideW }">
		<Logo v-if="theme_state.isLogoShow" />
		<Menu />
	</el-aside>
</template>

<script >
import { mapGetters } from "vuex";
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
const components = { Logo, Menu }

const computed = {
	...mapGetters(["app_state", "theme_state"])
}
export default {
	computed,
	components
}
</script>
