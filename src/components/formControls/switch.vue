<template>
    <div class="f-switch">
        <label class="f-switch-label" :class="{disabled}">
            <input type="checkbox" class="f-switch-check" :checked="value" @change="onChangeInput" :disabled="disabled">
            <span class="f-control-indicator" :class="{active: value,large}" :style="getStyle">
            </span>
            <span v-if="value" style="margin-left: .3em">{{activeText}}</span>
            <span v-else style="margin-left: .3em">{{inactiveText}}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'FlySwitch',
        props: {
            value: {
                type: Boolean
            },
            width: {
                type: [Number,String],
                default: 30
            },
            activeColor: {
                type: String,
                default: '#137cbd'
            },
            inactiveColor: {
                type: String,
                default: 'rgba(167,182,194,.5)'
            },
            activeText: {
               type: String,
               default: 'On'
            },
            inactiveText: {
               type: String,
               default: 'Off'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            large: {
                type: Boolean,
                default: false
            }
        },
        computed: {
           getStyle(){
                return {
                    width: `${this.width}px`,
                    background: this.value ? this.activeColor : this.inactiveColor
                }
            } 
        },
        methods: {
            onChangeInput(e){
                this.$emit('change', e.target.checked);
            },
        }
    }
</script>

<style scoped lang="scss">
    .f-switch{
        &-label{
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          &.disabled{
              cursor: not-allowed;
          }
        }
        &-check{
            position: absolute;
            top: 0;left: 0;
            opacity: 0;
            z-index: -1;
        }
        .f-control-indicator{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            min-width: 1.75em;
            width: auto;
            height: 1em;
            border-radius: 1.75em;
            transition: background-color .3s;
            &::before{
                display: block;
                position: absolute;
                content: '';
                width: calc(1em - 4px);
                height: calc(1em - 4px);
                border-radius: 50%;
                background: white;
                margin: 2px;
                left: 0;
                transition: left .3s;
            }
            &.active::before{
                left: calc(100% - 1em);
            }
            &.large{
                height: 1.25em;
                &::before{
                  width: 1em;
                  height: 1em;
                }
                &.active::before{
                  left: calc(100% - 1.2em);
                }
            }
        }
    }
</style>