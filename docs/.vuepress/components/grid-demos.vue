<template>
    <div>
        <f-init-docs></f-init-docs>
        <h4>基础布局</h4>
        <p>使用单一分栏创建基础的栅格布局。</p>
        <f-card :source="basicGrid">
            <f-row class="f-row">
                <f-col span="24"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row class="f-row">
                <f-col span="12"> <div class="grid-content"></div> </f-col>
                <f-col span="12"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row class="f-row">
                <f-col span="8"> <div class="grid-content"></div> </f-col>
                <f-col span="8"> <div class="grid-content"></div> </f-col>
                <f-col span="8"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row class="f-row">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>

        <h4>分栏布局</h4>
        <p>分栏之间存在间隔</p>
        <f-card :source="divideLayout">
            <f-row class="f-row" gutter="20">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>
    </div>
</template>

<script>
    import ExampleCard from '@/docs-components/exampleCard';
    import InitDocs from '@/docs-components/initDocs';
    import {basicGrid, divideLayout} from "../static/grid-demos";
    import Row from "@/components/grid/row";
    import Col from "@/components/grid/col";

    export default {
        name: "GridDemos",
        components: {
            'f-card': ExampleCard,
            'f-init-docs': InitDocs,
            'f-row': Row,
            'f-col': Col
        },
        data(){
            return {
                basicGrid,
                divideLayout
            }
        }
    }
</script>

<style scoped lang="scss">
.f-row {
    margin-bottom: 24px;
    & > div:nth-child(2n+1) .grid-content{
        background: #8a9ba8;
    }
    & > div:nth-child(2n) .grid-content{
        background: #bfccd6;
    }
    .grid-content{
        border-radius: 4px;
        min-height: 36px;
    }
}

</style>