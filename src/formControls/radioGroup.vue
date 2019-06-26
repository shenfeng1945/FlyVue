<template>
    <div class="f-radio-group">
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

</style>

