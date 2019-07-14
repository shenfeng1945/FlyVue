<template>
        <ul class="f-virtual-list">
            <li v-for="item of data" :key="item">{{item}}</li>
        </ul>
</template>

<script>
    const ITEM_MIN_HEIGHT = 20;
    const VIEWPORT_MIN_HEIGHT = 100;
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
            const ih = parseInt(this.itemHeight, 10);
            const isPercent = this.height.indexOf('%') > -1;
            let vh = parseInt(this.height, 10);
            if(isPercent){
                vh = this.height;
            }else{
                vh = (Number.isNaN(vh) || vh < VIEWPORT_MIN_HEIGHT) ? VIEWPORT_MIN_HEIGHT : vh;
            }

            return {
                renderList: [],
                isPercent,
                scrollTop: 0,

                ih: (Number.isNaN(ih) || ih < ITEM_MIN_HEIGHT) ? ITEM_MIN_HEIGHT : ih,

                contentHeight: NaN,
            }
        },
        methods: {
            initRenderList(){
                this.contentHeight = Math.ceil(this.data.length * this.ih);
                if(this.mode === 'demand'){
                    this.renderList = this.getDemandList()
                }
            },
            getDemandList(){
                let list = [];
                const from = Math.ceil(this.scrollTop / this.contentHeight);
                return list
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