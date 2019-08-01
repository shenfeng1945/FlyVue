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
        <f-card :source="divideGrid">
            <f-row class="f-row" gutter="20">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>
        
        <h4>混合布局</h4>
        <p>通过基础的1/24分栏任一扩展组合形成较为复杂的混合布局。</p>
        <f-card :source="hybridGrid">
            <f-row gutter="20" class="f-row">
                <f-col span="16"> <div class="grid-content"></div> </f-col>
                <f-col span="8"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row gutter="20" class="f-row">
                <f-col span="8"> <div class="grid-content"></div> </f-col>
                <f-col span="8"> <div class="grid-content"></div> </f-col>
                <f-col span="4"> <div class="grid-content"></div> </f-col>
                <f-col span="4"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row gutter="20" class="f-row">
                <f-col span="4"> <div class="grid-content"></div> </f-col>
                <f-col span="16"> <div class="grid-content"></div> </f-col>
                <f-col span="4"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>
        
        <h4>分栏偏移</h4>
        <p>支持偏移的指定栏树。</p>
        <f-card :source="offsetGrid">
            <f-row gutter="20" class="f-row">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6" offset="6"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row gutter="20" class="f-row">
                <f-col span="6" offset="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6" offset="6"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>
        
        <h4>对齐方式</h4>
        <p>通过左、中和右对齐对分栏进行灵活布局。</p>
        <f-card :source="alignGrid">
            <f-row class="f-row" align="left">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row class="f-row" align="center">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
            </f-row>
            <f-row class="f-row" align="right">
                <f-col span="6"> <div class="grid-content"></div> </f-col>
                <f-col span="6"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>
        
        <h4>响应式布局</h4>
        <p>针对ipad、窄PC、PC和宽PC这四个尺寸做了响应式布局。</p>
        <f-card :source="responseGrid">
            <f-row class="f-row">
                <f-col span="12" :widePc="{span: 14}" :pc="{span: 16}" :narrowPc="{span: 18}" :ipad="{span: 20}"> <div class="grid-content"></div> </f-col>
                <f-col span="12" :widePc="{span: 10}" :pc="{span: 8}" :narrowPc="{span: 6}" :ipad="{span: 4}"> <div class="grid-content"></div> </f-col>
            </f-row>
        </f-card>
    </div>
</template>

<script>
    import ExampleCard from '@/docs-components/exampleCard';
    import InitDocs from '@/docs-components/initDocs';
    import {basicGrid, divideGrid, hybridGrid, offsetGrid, alignGrid, responseGrid} from "../static/grid-demos";
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
                divideGrid,
                hybridGrid,
                offsetGrid,
                alignGrid,
                responseGrid,
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