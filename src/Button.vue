<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon :name="icon"></g-icon>
        <div class="content">
          <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
   props: {
       icon: {},
       iconPosition: {
           type: String,
           default: 'left',
           validator(value){
              return value === 'left' || value === 'right';
           }
       }
   }
}
</script>
<style lang="scss" scoped>
 .g-button{
     font-size: var(--font-size);
     height: var(--button-height);
     padding: 0 1em;
     border-radius: var(--border-radius);
     border: 1px solid var(--border-color);
     display: inline-flex;
     justify-content: center;
     align-items: center;
     vertical-align: middle;
     background-color: var(--button-bg);
     > .icon {
         order: 1;
         margin-left: 0;
         margin-right: .3em;
     }
     > .content{
         order: 2;
     }
     &:hover{
       border-color: var(--border-color-hover);
     }
     &:focus{
       outline: none;
     }
     &:active{
         background-color: var(--button-active-bg);
     }
     &.icon-right{
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: .3em;
        }
        > .content{
            order: 1;
        }
     }
 }
</style>


