<template>
    <div>
        <h4>基础用法</h4>
        <f-card :source="basicSource">
            <f-progress-indicator></f-progress-indicator>
            <p>Progress Indicator</p>
        </f-card>
    </div>
</template>

<script>
    import ExampleCard from "@/docs-components/exampleCard";
    import ProgressIndicator from '@/components/progressIndicator/progressIndicator';
    export default {
        name: "IndicatorDemos",
        components: {
            'f-progress-indicator': ProgressIndicator,
            'f-card': ExampleCard
        },
        data(){
            return {
                basicSource: {
                    desc: '',
                    code: `
<template>
    <f-progress-indicator></f-progress-indicator>
    <p>Progress Indicator</p>
</template>
                    `
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>