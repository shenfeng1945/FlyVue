<template>
    <div class="f-radio-group" :class="{'f-inline': inline}">
        <slot></slot>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    name: 'FlyRadioGroup',
    props: {
        value: [Number,String],
        name: {
            type: String,
            default: Math.random() + ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        inline: {
            type: Boolean,
            default: false
        },
        large: {
           type: Boolean,
           default: false
        },
        alignRight: {
           type: Boolean,
           default: false
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
           root: this,
           eventBus: this.eventBus
        }
    },
    mounted(){
        this.eventBus.$on('change', val => {
          this.$emit('change', val)
        })
    }
}
</script>

<style lang="scss" scoped>
  .f-inline {
      display: flex;
      align-items: center;
  }
</style>

