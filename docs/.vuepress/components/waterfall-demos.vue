<template>
  <div class="docs-waterFall">
    <f-init-docs></f-init-docs>
    <f-card :source="waterFallSource">
      <f-water-fall :imageLists="data" class="card" @scrollReachBottom="updateData">
        <template slot-scope="item">
         <img :src="item.item.src" style="width: 50px;" alt="">
         <div class="description">{{item.item.name}}</div>
        </template>
      </f-water-fall>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import WaterFall from '@/components/waterFall/waterFall';
export default {
  name: 'WaterFallDemos',
  components: {
    'f-init-docs': InitDocs,
    'f-card': ExampleCard,
    'f-water-fall': WaterFall,
  },
  data(){
    return {
      waterFallSource: {
        desc: '',
        code: ''
      },
      data: []
    }
  },
  created(){
    this.data = Array.from({length: 10}, () => {
             const path = Math.ceil(Math.random() * 18);
             return {
               src: require(`@/static/images/${path}.jpeg`),
               name: `图片${path}`
             }
          });
  },
  methods: {
    updateData(){
            setTimeout(() => {
               this.data = this.data.concat(Array.from({length: 10}, () => {     
                  const path = Math.ceil(Math.random() * 18);
                  return {
                     src: require(`@/static/images/${path}.jpeg`),
                     name: `图片${path}`
                  }
              }))
            }, 500)
          }
  }
}
</script>

<style lang="scss" scoped>
.description {
    display: block;
    padding: 0 16px;
    margin: 10px 0;
    line-height: 1.35em;
    overflow: hidden;
    word-wrap: break-word;
}
.card {
  height: 300px;
  overflow: auto;
}
</style>

