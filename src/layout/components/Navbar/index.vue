<template>
	<div class="navbar-container" :style="{ height: theme_state.navH }">
		<div class="navbar-left">
			定时
		</div>
		<div class="navbar-right"
				 @click="$store.dispatch('SET_theme_state', { key: 'theme', value: theme_state.theme == 'dark' ? 'light' : 'dark' }), theme_state.theme == 'dark' ? $i18n.locale = 'zh' : $i18n.locale = 'en'">
			士大夫
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
const components = {
}
export default {
	components,
	computed: {
		...mapGetters(["theme_state"])
	}
}
</script>
<style lang="less">
.navbar-container {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid var(--theme-border-color-1);
	color: var(--theme-text-color-1);

	.navbar-left {
		flex: 1;

	}

	.navbar-right {
		flex: 1;
	}
}
</style>