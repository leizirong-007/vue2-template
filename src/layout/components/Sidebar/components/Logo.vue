<template>
	<div v-if="app_state.menuState == 0 || app_state.menuState == 2" class="sidebar-logo"
			 :style="{ height: theme_state.navH }">
		<el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
		<span class="logo-title"> {{ $t('app.title') }}</span>
	</div>
	<div v-else class="sidebar-logo" :style="{ height: theme_state.navH }">
		<el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
	</div>
</template>

<script >
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["theme_state","app_state"])
	}
}
</script>

<style lang="less">
.sidebar-logo {
	border-bottom: 1px solid var(--theme-border-color-1);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	.logo-title {
		padding-left: 10px;
		color: var(--theme-primary-color);
		font-size: var(--theme-color-size-title-2);
		font-weight: var(--theme-color-weight-title);
	}
}
</style>