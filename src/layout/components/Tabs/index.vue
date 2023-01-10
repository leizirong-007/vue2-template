<template>
	<div class="tabs-container" :style="{ height: theme_state.tabsH }">
		<div class="tabs-item">
			<el-tabs v-model="activeTabName" type="border-card" @tab-click="tabClick" @tab-remove="tabRemove">
				<el-tab-pane v-for="tab in app_state.tabsList" :key="tab.path" :label="tab.title" :name="tab.path"
										 :closable="tab.isCloseble">
				</el-tab-pane>
			</el-tabs>
		</div>
		<el-dropdown class="tabs-action" trigger="click" placement="bottom-end" @command="onClose">
			<div class="el-icon-arrow-down el-icon--right"></div>
			<template slot="dropdown">
				<el-dropdown-menu>
					<el-dropdown-item :icon="'Close'" command="close">{{ $t('app.close') }}</el-dropdown-item>
					<el-dropdown-item :icon="'CircleClose'" command="closeOthers">{{ $t('app.close') }}</el-dropdown-item>
					<el-dropdown-item :icon="'CircleCloseFilled'" command="closeAll">{{ $t('app.close') }}</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script >
import { mapGetters } from "vuex";
const computed = {
	...mapGetters(["theme_state", "app_state"])
}


export default {
	computed,
	data() {
		return {
			activeTabName: ''
		}
	},
	methods: {
		tabClick() {

		},
		tabRemove() {

		},
		onClose() {

		}

	}
}
</script>

<style lang="less" scoped>
.tabs-container {
	display: flex;
	position: relative;
	z-index: 6;
	height: 40px;
	border-bottom: 2px solid var(--theme-border-color-1);

	.tabs-item {
		transition: left 0.3s;
		flex-grow: 1;
		overflow: hidden;

		::v-deep {
			.el-tabs {
				background-color: transparent;
				border: none;
				height: 100%;



				.el-tabs__header {
					background-color: transparent;
					border: none;
					height: 100%;
				}

				.el-tabs__nav,
				.el-tabs__nav-scroll,
				.el-tabs__nav-wrap {
					height: 100%;

				}

				.el-tabs__item {
					color: var(--theme-text-color-1);
					border-right: 1px solid var(--theme-border-color-1) !important;
					user-select: none;
					transition: none;
					transition: .2s background-color, .2s color;
					margin: 0;
					height: 100%;
					display: inline-flex;
					align-items: center;
					padding: 0 12px 0 10px;

					&:focus {
						box-shadow: none;
						border-radius: none;
					}

					&:hover {
						&::before {
							color: var(--theme-primary-color);
						}

					}

					&::before {
						content: "●";
						margin-right: 8px;
						font-size: 16px;
						color: #ddd;
						transition: .2s color;
					}

					.el-icon-close {
						transition: none;
						transition: .4s background-color;
						margin-top: 2px;
					}

					&.is-active {
						background-color: transparent;
						color: var(--theme-primary-color);
						border-left-color: transparent;
						background-color: var(--theme-primary-color-4);

						&::before {
							color: var(--theme-primary-color);
						}
					}

				}

				.el-tabs__content {
					display: none;

				}

				.el-tabs__nav-next,
				.el-tabs__nav-prev {
					height: 100%;
					width: 20px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.el-tabs__nav-prev {
					border-right: 1px solid var(--theme-border-color-1);

				}

				.el-tabs__nav-next {
					margin-left: -10px;

					&::before {
						content: "";
						height: 100%;
						width: 1px;
						background-color: var(--theme-gb-color-2);
						position: absolute;
						top: 0;
						left: -1px;
						border-left: 1px solid var(--theme-border-color-1);
						z-index: 99;
					}
				}

			}
		}
	}
}

.tabs-action {
	height: 100%;
	line-height: 40px;
	box-sizing: border-box;
	align-items: center;
	padding: 0;
	cursor: pointer;
	color: #666;
	border-left: 1px solid var(--theme-border-color-1);
	width: 40px;

	.el-icon-arrow-down {
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
}
</style>
