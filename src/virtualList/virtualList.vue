<template>
        <ul class="f-virtual-list">
            <li v-for="item of data" :key="item">{{item}}</li>
        </ul>
</template>

<script>
    export default {
        name: "FlyVirtualList",
        props: {
            data: {
                type: Array,
                default: () => [],
                required: true
            },
            height: {
                type: [Number, String],
                default: 100,
            },
            itemHeight: {
                type: [Number, String],
                default: 40,
            },
            tag: {
                type: String,
                default: 'ul'
            },
            itemTag: {
                type: String,
                default: 'li'
            },
            mode: {
                type: String,
                default: 'demand',
                validator: val => ['demand', 'lazy'].indexOf(val) > -1
            }
        },
        data(){
            return {
                renderList: [],
            }
        },
        methods: {
            initRenderList(){
                
            }
        },
        mounted() {
            this.data.length && this.initRenderList();
        }
    }
</script>

<style scoped lang="scss">
.f-virtual-list{
    li{
        height: 40px;
        border: 1px solid ;
    }
}
</style>