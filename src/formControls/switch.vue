<template>
    <div class="f-switch">
        <label class="f-switch-label">
            <input type="checkbox" class="f-switch-check" :checked="value" @change="onChangeInput">
            <span class="f-control-indicator" :class="{active: value}">
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'FlySwitch',
        props: {
            value: {
                type: Boolean
            }
        },
        methods: {
            onChangeInput(e){
                this.$emit('change', e.target.checked);
            }
        }
    }
</script>

<style scoped lang="scss">
    .f-switch{
        &-label{
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
            min-width: 1.75em;
            width: auto;
            height: 1em;
            background: rgba(167,182,194,.5);
            border-radius: 1.75em;
            &.active{
                background: #137cbd;
            }
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
        }
    }
</style>