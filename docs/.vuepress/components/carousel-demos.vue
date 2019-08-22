<template>
  <div class="docs-carousel">
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <p>适用广泛的基础用法</p>
    <f-card :source="basicCarouselSource">
      <div class="basic-slides">
      <div class="basic-slide">
        <p>默认 Hover 指示器触发</p>
        <f-slides
        :selected.sync="selected1"
        :autoPlay="false"
        trigger="hover"
        height="150px"
      >
        <f-slides-item name="1">
          <div class="box box1">Content 1</div>
        </f-slides-item>
        <f-slides-item name="2">
          <div class="box box2">Content 2</div>
        </f-slides-item>
        <f-slides-item name="3">
          <div class="box box3">Content 3</div>
        </f-slides-item>
      </f-slides>
      </div>
      <div class="line"></div>
      <div class="basic-slide">
        <p>Click 指示器触发</p>
        <f-slides
        :selected.sync="selected2"
        :autoPlay="true"
        trigger="click"
        height="150px"
      >
        <f-slides-item name="1">
          <div class="box box1">Content 1</div>
        </f-slides-item>
        <f-slides-item name="2">
          <div class="box box2">Content 2</div>
        </f-slides-item>
        <f-slides-item name="3">
          <div class="box box3">Content 3</div>
        </f-slides-item>
      </f-slides>
      </div>
      </div>
    </f-card>
    
    <h4>方向</h4>
    <p>默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。</p>
    <f-card :source="directionCarouselSource">
      <f-slides
        :selected.sync="selected3"
        :autoPlay="false"
        trigger="click"
        direction="vertical"
        height="150px"
      >
        <f-slides-item name="1">
          <div class="box box1">Content 1</div>
        </f-slides-item>
        <f-slides-item name="2">
          <div class="box box2">Content 2</div>
        </f-slides-item>
        <f-slides-item name="3">
          <div class="box box3">Content 3</div>
        </f-slides-item>
      </f-slides>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Slides from "@/components/carousel/slides";
import SlidesItem from "@/components/carousel/slides-item";
import { basicCarouselSource, directionCarouselSource } from "../static/carousel-demos";
export default {
  name: "CarouselDemos",
  components: {
    "f-init-docs": InitDocs,
    "f-card": ExampleCard,
    "f-slides": Slides,
    "f-slides-item": SlidesItem
  },
  data() {
    return {
      basicCarouselSource,
      directionCarouselSource,
      selected1: '1',
      selected2: '1',
      selected3: '1',
    };
  }
};
</script>

<style lang="scss" scoped>
.docs-carousel {
  .basic-slides {
    display: flex;
    .basic-slide {
      flex: 1;
      p {
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .line {
      width: 1px;
      background: #ebebeb;
      margin: 0 10px;
    }
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 100%;
  }
  .box1 {
    background: #48AFF0;
  }
  .box2 {
    background: #3dcc91;
  }
  .box3 {
    background: #ffb366;
  }
}
</style>


