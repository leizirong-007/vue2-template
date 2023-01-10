<template>
  <el-container :class="['layout-container', theme]">
    <Sidebar />
    <el-container style="background-color: var(--theme-gb-color-2);">
      <el-header class="layout-header" style="height: auto;">
        <Navbar />
        <Tabs v-if="true" />
      </el-header>
      <el-main data-simplebar data-simplebar-auto-hide="false" class="layout-main"
               :style="{ height: mainH, overflow: 'visible' }">
        <Simplebar>
          <div class="layout-main-view">
            <router-view v-slot="{ Component, route }">
              <keep-alive v-if="true" :include="[]">
                <component :is="Component" :key="route.name" />
              </keep-alive>
              <component :is="Component" v-else :key="route.name" />
            </router-view>
          </div>
        </Simplebar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/layout/components/Sidebar/index.vue'
import Navbar from '@/layout/components/Navbar/index.vue'
import Tabs from '@/layout/components/Tabs/index.vue'
import { mapGetters } from "vuex";

export default {
  components: { Sidebar, Navbar, Tabs },
  computed: {
    ...mapGetters(["theme_state"]),
    theme() {
      return this.theme_state.themes[this.theme_state.theme]
    },
    mainH() {
      return `calc(100vh - ${this.theme_state.navH} - ${this.theme_state.tabsH})`
    }
  }
}
</script>

<style lang="less">
.layout-container {
  .layout-sidebar {
    background-color: var(--theme-gb-color-2);
  }

  .el-header {
    padding: 0;
  }

  .layout-main {
    padding: 0 !important;
    width: 100%;
    background-color: var(--theme-gb-color-2);

    &:hover .simplebar-scrollbar::before {
      background-color: var(--theme-scorll-bg-color);
    }

    .simplebar-vertical {
      width: 11px;
      margin-right: 1px;
    }

    .simplebar-scrollbar::before {
      transition: 0.2s all;
      background-color: transparent;
    }

    .layout-main-view {
      background-color: var(--theme-gb-color-2);

      &>:first-child {
        margin: 20px;
      }
    }
  }
}
</style>