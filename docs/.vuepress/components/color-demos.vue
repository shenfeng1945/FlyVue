<template>
  <div>
    <h4>Gray scale</h4>
    <p>Black, white and everything in between. The gray scale should be used for the main UI frame: containers, headers, sections, boxes, etc.</p>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in grayColorBlack" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in grayColorWhite" :key="i"></f-color-card>
      </div>
    </div>
    <br />
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in darkGrayColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in grayColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in lightGrayColor" :key="i"></f-color-card>
      </div>
    </div>
    
    <h4>Core colors</h4>
    <p>Core colors are reserved for user interface design. Use these to help call attention to specific UI elements, such as buttons, callouts, icons, etc. </p>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in blueColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in greenColor" :key="i"></f-color-card>
      </div>
    </div>
    <br>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in orangeColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in redColor" :key="i"></f-color-card>
      </div>
    </div>
    
    <h4>Extended colors</h4>
    <p>Extended colors should typically be reserved for data visualizations: any time you need to represent data of some sort, you can use these. </p>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in vermilionColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in roseColor" :key="i"></f-color-card>
      </div>
    </div>
    <br>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in violetColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in indigoColor" :key="i"></f-color-card>
      </div>
    </div>
    <br>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in cobaltColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in turquoiseColor" :key="i"></f-color-card>
      </div>
    </div>
    <br>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in forestColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in limeColor" :key="i"></f-color-card>
      </div>
    </div>
    <br>
    <div class="f-lists">
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in goldColor" :key="i"></f-color-card>
      </div>
      <div class="f-color-card-list">
        <f-color-card :source="item" class="card" v-for="(item,i) in sepialColor" :key="i"></f-color-card>
      </div>
    </div>
  </div>
</template>

<script>
import ColorCard from "@/docs-components/colorCard";

export default {
  name: "ColorDemos",
  components: {
    "f-color-card": ColorCard
  },
  data() {
    return {
      grayColorBlack: [{ name: "@black", hex: "#10161A" }],
      grayColorWhite: [{ name: "@white", hex: "#FFFFFF", color: "#10161A" }],
      darkGrayColor: [
        {name: '@dark-gray1', hex: '#182026'},
        {name: '@dark-gray2', hex: '#202b33'},
        {name: '@dark-gray3', hex: '#293742'},
        {name: '@dark-gray4', hex: '#30404d'},
        {name: '@dark-gray5', hex: '#394b59'},
      ],
      grayColor: [
        {name: '@gray1', hex: '#5c7080'},
        {name: '@gray2', hex: '#738694', color: '#10161A'},
        {name: '@gray3', hex: '#8a9ba8', color: '#10161A'},
        {name: '@gray4', hex: '#a7b6c2', color: '#10161A'},
        {name: '@gray5', hex: '#bfccd6', color: '#10161A'},
      ],
      lightGrayColor: [
        {name: '@light-gray1', hex: '#ced9e0', color: '#10161A'},
        {name: '@light-gray2', hex: '#d8e1e8', color: '#10161A'},
        {name: '@light-gray3', hex: '#e1e8ed', color: '#10161A'},
        {name: '@light-gray4', hex: '#ebf1f5', color: '#10161A'},
        {name: '@light-gray5', hex: '#f5f8fa', color: '#10161A'},
      ],
      blueColor: [
        { name: "@blue1", hex: "#0E5A8A" },
        { name: "@blue2", hex: "#106BA3" },
        { name: "@blue3", hex: "#137CBD" },
        { name: "@blue4", hex: "#2B95D6", color: '#10161A'},
        { name: "@blue5", hex: "#48AFF0", color: '#10161A' }
      ],
      greenColor: [
        { name: "@green1", hex: "#0a6640" },
        { name: "@green2", hex: "#0d8050" },
        { name: "@green3", hex: "#0f9960", color: '#10161A' },
        { name: "@green4", hex: "#15b371", color: '#10161A' },
        { name: "@green5", hex: "#3dcc91", color: '#10161A' }
      ],
      orangeColor: [
        { name: "@orange1", hex: "#a66321" },
        { name: "@orange2", hex: "#bf7326", color: '#10161A' },
        { name: "@orange3", hex: "#d9822b", color: '#10161A' },
        { name: "@orange4", hex: "#f29d49", color: '#10161A' },
        { name: "@orange5", hex: "#ffb366", color: '#10161A' },
      ],
      redColor: [
        { name: "@red1", hex: "#a82a2a" },
        { name: "@red2", hex: "#c23030", color: '#10161A' },
        { name: "@red2", hex: "#db3737", color: '#10161A' },
        { name: "@red2", hex: "#f55656", color: '#10161A' },
        { name: "@red2", hex: "#ff7373", color: '#10161A' },
      ],
      vermilionColor: [
        { name: "@vermilion1", hex: "#9e2b0e" },
        { name: "@vermilion2", hex: "#b83211" },
        { name: "@vermilion3", hex: "#d13913" },
        { name: "@vermilion4", hex: "#eb532d", color: '#10161A' },
        { name: "@vermilion5", hex: "#ff6e4a", color: '#10161A' },
      ],
      roseColor: [
        { name: "@rose1", hex: "#a82255" },
        { name: "@rose2", hex: "#c22762" },
        { name: "@rose3", hex: "#db2c6f" },
        { name: "@rose4", hex: "#f5498b", color: '#10161A' },
        { name: "@rose5", hex: "#ff66a1", color: '#10161A' },
      ],
      violetColor: [
        { name: "@violet1", hex: "#5c255c" },
        { name: "@violet2", hex: "#752f75" },
        { name: "@violet3", hex: "#8f398f" },
        { name: "@violet4", hex: "#a854a8" },
        { name: "@violet5", hex: "#c274c2", color: '#10161A' },
      ],
      indigoColor: [
        { name: "@indigo1", hex: "#5642a6" },
        { name: "@indigo2", hex: "#634dbf" },
        { name: "@indigo3", hex: "#7157d9" },
        { name: "@indigo4", hex: "#9179f2", color: '#10161A' },
        { name: "@indigo5", hex: "#ad99ff", color: '#10161A' },
      ],
      cobaltColor: [
        { name: "@cobalt1", hex: "#1f4b99" },
        { name: "@cobalt2", hex: "#2458b3" },
        { name: "@cobalt3", hex: "#2965cc" },
        { name: "@cobalt4", hex: "#4580e6", color: '#10161A' },
        { name: "@cobalt5", hex: "#669eff", color: '#10161A' },
      ],
      turquoiseColor: [
        { name: "@turquoise1", hex: "#008075" },
        { name: "@turquoise2", hex: "#00998c", color: '#10161A' },
        { name: "@turquoise2", hex: "#00b3a4", color: '#10161A' },
        { name: "@turquoise2", hex: "#14ccbd", color: '#10161A' },
        { name: "@turquoise2", hex: "#2ee6d6", color: '#10161A' },
      ],
      forestColor: [
        { name: "@forest1", hex: "#1d7324" },
        { name: "@forest1", hex: "#238c2c" },
        { name: "@forest2", hex: "#29a634", color: '#10161A' },
        { name: "@forest2", hex: "#43bf4d", color: '#10161A' },
        { name: "@forest2", hex: "#62d96b", color: '#10161A' },
      ],
      limeColor: [
        { name: "@lime1", hex: "#728c23", color: '#10161A' },
        { name: "@lime2", hex: "#87a629", color: '#10161A' },
        { name: "@lime3", hex: "#9bbf30", color: '#10161A' },
        { name: "@lime4", hex: "#b6d94c", color: '#10161A' },
        { name: "@lime5", hex: "#d1f26d", color: '#10161A' },
      ],
      goldColor: [
        { name: "@gold1", hex: "#a67908", color: '#10161A' },
        { name: "@gold2", hex: "#bf8c0a", color: '#10161A' },
        { name: "@gold3", hex: "#d99e0b", color: '#10161A' },
        { name: "@gold4", hex: "#f2b824", color: '#10161A' },
        { name: "@gold5", hex: "#ffc940", color: '#10161A' },
      ],
      sepialColor: [
        { name: "@sepial1", hex: "#63411e" },
        { name: "@sepial2", hex: "#7d5125" },
        { name: "@sepial3", hex: "#96622d" },
        { name: "@sepial4", hex: "#b07b46", color: '#10161A' },
        { name: "@sepial5", hex: "#c99765", color: '#10161A' },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.f-lists {
  display: flex;
  .f-color-card-list:not(:first-child) {
    margin-left: 24px;
  }
  .f-color-card-list {
    flex: 1;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      0 2px 4px rgba(16, 22, 26, 0.1), 0 8px 24px rgba(16, 22, 26, 0.2);
    .card:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .card:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
}
</style>


