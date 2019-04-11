<template>
  <div class="f-slides">
    <div class="f-slides-window">
      <div class="f-slides-wrapper">
        <slot></slot>
      </div>
      <div>
        <span
          v-for="index in childrenLength"
          :key="index"
          :class="{isSelected: selectedIndex === (index - 1)}"
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
    // this.playAutomatically();
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        this.$nextTick(() => {
         // 确保执行动画前，reverse已经生效
         vm.selected = selected;
        })
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
    playAutomatically() {
      const names = this.names;
      let index = names.indexOf(this.getSelected());
      const run = () => {
        this.reverse ? index-- : index++;
        if (index === -1) {
          index = names.length - 1;
        }
        if (index === names.length) {
          index = 0;
        }
        this.select(index);
        setTimeout(run, 2000);
      };
      setTimeout(run, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-slides {
  &-window {
    position: relative;
    overflow: hidden;
    .isSelected {
      background: red;
    }
  }
}
</style>



