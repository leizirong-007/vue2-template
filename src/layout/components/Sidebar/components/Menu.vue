<template>
	<div data-simplebar data-simplebar-auto-hide="false" class="layout-aside">
		<Simplebar :style="{ height: `calc(100vh - ${theme_state.navH})` }">
			<el-menu :default-active="app_state.activeRoute" :collapse="false" :unique-opened="false"
							 :collapse-transition="false" mode="vertical" router>
				<menu-item v-for="menu in app_state.menuList" :key="menu.path" :menu="menu"></menu-item>
			</el-menu>
		</Simplebar>
	</div>
</template>

<script>
import MenuItem from './MenuItem.vue'
import { mapGetters } from "vuex";

export default {
	components: { MenuItem },
	computed: {
		...mapGetters(["theme_state", "app_state"])
	}
}
</script>

<style lang="less">
.layout-aside {
	border-right: 1px solid var(--theme-border-color-1);

	.simplebar-placeholder {
		transition: 0.1s all;
	}

	.simplebar-vertical {
		width: 12px;
	}

	&:hover .simplebar-scrollbar::before {
		background-color: var(--theme-scorll-bg-color);
	}

	.simplebar-scrollbar::before {
		transition: 0.2s all;
		background-color: transparent;
	}

	.el-menu {
		background-color: transparent;
	}

	.el-submenu__title,
	.el-menu-item {
		color: var(--theme-text-color-1);
		transition: 0.4s all;
		user-select: none;

		>i {
			transition: 0.4s all;

		}
	}

	.el-menu-item.is-active {
		background-color: var(--theme-primary-color-3) !important;
	}

	.el-submenu.is-active,
	.el-menu-item.is-active {
		color: var(--theme-primary-color-1);

		.el-submenu__title {
			color: var(--theme-primary-color-1);

			>i {
				color: var(--theme-primary-color-1);

			}
		}
	}

	.el-submenu__title:focus,
	.el-submenu__title:hover {

		background-color: transparent;
		color: var(--theme-primary-color-1);

		>i {
			color: var(--theme-primary-color-1);

		}
	}

	.el-menu-item:focus,
	.el-menu-item:hover {
		background-color: transparent;
		color: var(--theme-primary-color-1);

		>i {
			color: var(--theme-primary-color-1);

		}
	}
}
</style>