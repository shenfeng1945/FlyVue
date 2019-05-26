<template>
    <div class="f-scroll" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div ref="child" class="f-scroll-inner" :style="{transform: `translateY(${contentTranslateY}px)`}">
            <slot></slot>
        </div>
        <div class="f-scroll-track" v-show="scrollBarVisible">
                <div class="f-scroll-bar" ref="scrollBar"
                     @mousedown="onMouseDownScrollBar"
                     :style="{transform: `translateY(${barTranslateY})`}"
                >
                    <div class="f-scroll-bar-inner"></div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'FlyScroll',
        data(){
            return {
              scrollBarVisible: true,
                contentTranslateY: 0,
                barTranslateY: 0,
                mouseStartPositionBarX: undefined,
                mouseStartPositionBarY: undefined,
                mouseChangePositionBarX: undefined,
                mouseChangePositionBarY: undefined,

            }
        },
        mounted() {
            let parent = this.$refs.parent;
            let child = this.$refs.child;
            let translateY = 0;
            let {height: parentHeight} = parent.getBoundingClientRect();
            let {height: childHeight} = child.getBoundingClientRect();
            parent.addEventListener('wheel', e => {
                let { deltaY } = e;
                let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom} = window.getComputedStyle(parent);
                let maxTranslateY = childHeight - parentHeight + (parseInt(borderTopWidth) + parseInt(borderBottomWidth) + parseInt(paddingTop) + parseInt(paddingBottom));
                translateY -= deltaY;
                if(translateY > 0){
                    translateY = 0
                }else if(translateY < -maxTranslateY){
                    translateY = -maxTranslateY;
                }
                this.contentTranslateY = translateY;
                this.updateScrollBar(parentHeight,childHeight)
            });
            this.updateScrollBar(parentHeight,childHeight)
        },
        methods: {
            listenDocument(){
                document.addEventListener('mousemove', e => {
                    this.mouseChangePositionBarX = e.clientX - this.mouseStartPositionBarX;
                    this.mouseChangePositionBarY = e.clientY - this.mouseStartPositionBarY;
                });
                document.addEventListener('mouseup', e => {
                    this.mouseStartPositionBarX = e.clientX;
                    this.mouseStartPositionBarY = e.clientY;
                })
            },
            onMouseDownScrollBar(e){
                this.mouseStartPositionBarX = e.clientX;
                this.mouseStartPositionBarY = e.clientY;
            },
            updateScrollBar(parentHeight,childHeight){
                let barHeight = parentHeight * parentHeight / childHeight;
                let scrollHeight = this.contentTranslateY ? (parentHeight * this.contentTranslateY/ childHeight) : 0;
                this.$refs.scrollBar.style.height = barHeight + 'px';
                this.$refs.scrollBar.style.transform = `translateY(${-scrollHeight}px)`
            },
            onMouseEnter(){
                // this.scrollBarVisible = true;
            },
            onMouseLeave(){
                // this.scrollBarVisible = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .f-scroll{
        border: 1px solid red;
        overflow: hidden;
        position: relative;
        &-inner{ transition: transform 0.05s ease; }
        &-track{ position: absolute; top: 0;right: 0; height: 100%; width: 14px; border-left: 1px solid #e8e7e8; background: #fafafa; opacity: 0.9; }
        &-bar{ position: absolute; top: -1px; left: 50%; height: 40px; width: 8px; margin-left: -4px; padding: 4px 0; }
        &-bar-inner{ height: 100%; border-radius: 4px; background: #c2c2c2; &:hover{background: #7d7d7d} }
    }
</style>