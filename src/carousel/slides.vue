<template>
  <div
    class="f-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="f-slides-window">
      <div class="f-slides-wrapper">
        <slot></slot>
      </div>
      <div class="dots">
        <span
          v-for="index in childrenLength"
          :key="index"
          :class="{active: selectedIndex === (index - 1)}"
          @click="select(index-1)"
        >
          {{index}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FlySlides",
  props: {
    selected: String,
    autoPlay: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: -1,
      timerId: null
    };
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected);
    },
    names() {
      return this.$children.map(vm => vm.name);
    }
  },
  mounted() {
    this.updateChildren();
    this.autoPlay && this.playAutomatically();
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (
            this.lastSelectedIndex === this.names.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.names.length - 1
          ) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          // 确保执行动画前，reverse已经生效
          vm.selected = selected;
        });
      });
    },
    select(index) {
      // 加载时记录上一次的index
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.autoPlay && this.playAutomatically();
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      const names = this.names;
      const run = () => {
        let index = names.indexOf(this.getSelected());
        this.reverse ? index-- : index++;
        if (index === -1) {
          index = names.length - 1;
        }
        if (index === names.length) {
          index = 0;
        }
        this.select(index);
        this.timerId = setTimeout(run, 2000);
      };
      this.timerId = setTimeout(run, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-slides {
  &-window {
    position: relative;
    overflow: hidden;
    .dots {
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      span {
        width: 1.2em;
        height: 1.2em;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: white;
        cursor: pointer;
        margin: 0 0.3em;
        color: black;
      }
      > .active {
        background: black;
        color: white;
      }
    }
  }
}
</style>



