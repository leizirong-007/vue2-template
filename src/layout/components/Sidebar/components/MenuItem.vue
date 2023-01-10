<template>
	<el-submenu v-if="menu.children && menu.children.length > 0" :index="menu.path">
		<template #title>
			<i :class="menu.meta.icon"></i>
			<span>{{ menu.meta.title }}</span>
		</template>
		<menu-item v-for="sub in menu.children" :key="sub.path" :menu="sub"></menu-item>
	</el-submenu>
	<el-menu-item v-else :index="menu.path">
		<i :class="menu.meta.icon"></i>
		<template #title>{{ menu.meta.title }}</template>
	</el-menu-item>
</template>

<script>
export default {
	name: 'MenuItem',
	props: {
		menu: {
			type: Object,
			required: true
		}
	}
}
</script>
