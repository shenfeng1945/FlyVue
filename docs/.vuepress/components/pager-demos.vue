<template>
  <div class="docs-pager">
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <f-card :source="basicPagerSource">
      <p>页数较少时的效果</p>
      <f-pager :total-page="4" :current-page.sync="currentPage1" :onChange="onChange"></f-pager>
      <p>大于5页的效果</p>
      <f-pager :total-page="10" :current-page.sync="currentPage2" :onChange="onChange"></f-pager>
    </f-card>
    
    <h4>带有背景色的分页</h4>
    <f-card :source="bgPagerSource">
      <f-pager background :total-page="10" :current-page.sync="currentPage3"></f-pager>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Pager from '@/components/pager/pager';
import Switch from "@/components/formControls/switch";
import {basicPagerSource, bgPagerSource} from '../static/pager-demos';
export default {
  name: 'PagerDemos',
  components: {
    'f-init-docs': InitDocs,
    'f-card': ExampleCard,
    'f-pager': Pager,
    'f-switch': Switch,
  },
  data(){
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 5,
      basicPagerSource,
      bgPagerSource,
    }
  },
  methods: {
    onChange(val){
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>