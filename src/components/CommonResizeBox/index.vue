<template>
  <div ref="parentNode" class="autoBox-warp">
    <div ref="target" :class="targetClass" class="autoBox-container"
      :style="{ width: width + 'px', height: height + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>
  
<script >
import { Resize } from "./index";
export default {
  props: {
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 1080
    },
    mode: {
      type: Number,
      default: 0
    },
    alignType: {
      type: String,
      default: 'middle'
    }
  },
  data() {
    return {
      resizeParams: null
    }
  },
  computed: {
    targetClass() {
      let classStr = ''
      switch (this.alignType) {
        case 'middle':
          classStr += 'autoBox-container-align-middle '
          break;
        case 'top':
          classStr += 'autoBox-container-align-top '
          break;
      }
      switch (this.mode) {
        case 0:
          classStr += 'autoBox-container-scale '
          break;
        case 1:

          classStr += 'autoBox-container-scale '
          break;
        case 2:
          classStr += 'autoBox-container-default '
          break;
      }
      return classStr
    }
  },
  watch: {
    mode: {
      handler() {
        this.$nextTick(() => {
          this.dispose()
          this.init()
        })
      },
      immediate: true
    }
  },
  methods: {
    init() {
      if (this.mode == 2) return;
      const ResizeOption = {
        parentNode: this.$refs.parentNode.parentNode,
        target: this.$refs.target,
        width: this.width,
        height: this.height,
        mode: this.mode,
        alignType: this.alignType
      }
      this.resizeParams = Resize(ResizeOption)
      switch (this.mode) {
        case 0:
          this.resizeParams.stretch()
          break;
        case 1:
          this.resizeParams.ratio()
          break;
        default:
          this.resizeParams.stretch();
          break;
      }
      this.resizeParams.parentResize();
    },
    dispose() {
      this.resizeParams?.unWindowResize();
    }
  },
  beforeDestroy() {
    this.resizeParams.unWindowResize();
  },
}
</script>

<style lang='less' scoped>
.autoBox-warp {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;

  .autoBox-container {
    box-sizing: border-box;
  }

  .autoBox-container-scale {
    position: absolute;
    transform-origin: left top;
    transition: transform 0.2s ease-in-out;
  }

  .autoBox-container-default {
    transform: none !important;
    top: 0 !important;
    left: 0 !important;
  }

  .autoBox-container-align-top {
    top: 0;
    left: 50%;
  }

  .autoBox-container-align-middle {
    top: 50%;
    left: 50%;
  }
}
</style>