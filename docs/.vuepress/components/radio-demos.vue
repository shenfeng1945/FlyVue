<template>
    <div class="f-radio-demos">
        <f-init-docs></f-init-docs>
        <f-card-group>
            <p>Determine lunch</p>
            <f-radio-group v-model="radio" @change="radio = $event" :disabled="disabledValue" :inline="inlineValue" :large="largeValue">
                <f-radio label="Soup">Soup</f-radio>
                <f-radio label="Salad">Salad</f-radio>
                <f-radio label="Sandwich">Sandwich</f-radio>
            </f-radio-group>
            <template slot="props">
              <h5 class="f-heading">Props</h5>
              <f-switch v-model="disabledValue" @change="disabledValue = $event">Disabled</f-switch>
              <f-switch v-model="inlineValue" @change="inlineValue = $event">Inline</f-switch>
              <f-switch v-model="largeValue" @change="largeValue = $event">Large</f-switch>
            </template>
        </f-card-group>
    </div>
</template>

<script>
    import ExampleCard from '@/docs-components/exampleCard';
    import InitDocs from '@/docs-components/initDocs';
    import {singleGroupRadio} from '../static/radio-demos';
    import Radio from '@/components/formControls/radio';
    import RadioGroup from '@/components/formControls/radioGroup';
    import ExampleGroupCard from '@/docs-components/exampleGroupCard';
    import Switch from '@/components/formControls/switch';
    export default {
        name: "RadioDemos",
        components: {
            'f-card': ExampleCard,
            'f-init-docs': InitDocs,
            'f-radio': Radio,
            'f-radio-group': RadioGroup,
            'f-card-group': ExampleGroupCard,
            'f-switch': Switch
        },
        data(){
            return {
                singleGroupRadio,
                radio: undefined,
                disabledValue: false,
                inlineValue: false,
                largeValue: false
            }
        }
    }
</script>

<style scoped lang="scss">
.f-heading {
    color: #182026;
    font-weight: 600;
    margin: 0 0 10px;
    padding: 0;
    font-size: 16px;
}
</style>