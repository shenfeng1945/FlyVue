<template>
    <div class="f-scroll" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div ref="child" class="f-scroll-inner" :style="{transform: `translateY(${contentTranslateY}px)`}">
            <slot></slot>
        </div>
        <div class="f-scroll-track" v-show="scrollBarVisible">
                <div class="f-scroll-bar" ref="scrollBar"
                     @mousedown="onMouseDownScrollBar"
                     :style="{transform: `translateY(${barTranslateY}px)`}"
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
                barStartTranslateY: 0,
                mouseStartPositionBarX: undefined,
                mouseStartPositionBarY: 0,
                mouseChangePositionBarX: undefined,
                mouseChangePositionBarY: undefined,
                scrollBarMousing: false,
                parentHeight: undefined,
                childHeight: undefined,

            }
        },
        mounted() {
            this.listenDocument();
            let parent = this.$refs.parent;
            let child = this.$refs.child;
            let {height: parentHeight} = parent.getBoundingClientRect();
            this.parentHeight = parentHeight;
            let {height: childHeight} = child.getBoundingClientRect();
            this.childHeight = childHeight;
            parent.addEventListener('wheel', e => {
                let { deltaY } = e;
                let translateY = this.contentTranslateY;
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
                    if(!this.scrollBarMousing){return}
                    let changeBarTranslateY = e.clientY - this.mouseStartPositionBarY;
                    let barTranslateY = this.barStartTranslateY + changeBarTranslateY;
                    let maxBarTranslateY = this.parentHeight - this.$refs.scrollBar.getBoundingClientRect().height;
                    if(barTranslateY < 0){
                        this.barTranslateY = 0
                    }else if(barTranslateY > maxBarTranslateY){
                        this.barTranslateY = maxBarTranslateY;
                    }else{
                        this.barTranslateY = barTranslateY;
                    }
                    this.contentTranslateY = -this.barTranslateY * this.childHeight / this.parentHeight
                });
                document.addEventListener('mouseup', e => {
                    this.scrollBarMousing = false;
                    this.mouseStartPositionBarX = e.clientX;
                    this.mouseStartPositionBarY = e.clientY;
                    this.barStartTranslateY = this.barTranslateY;
                });
                document.addEventListener('selectstart', e => {
                    if(this.scrollBarMousing){
                        e.preventDefault()
                    }
                })
            },
            onMouseDownScrollBar(e){
                this.scrollBarMousing = true;
                this.mouseStartPositionBarX = e.clientX;
                this.mouseStartPositionBarY = e.clientY;
            },
            updateScrollBar(parentHeight,childHeight){
                let barHeight = parentHeight * parentHeight / childHeight;
                this.barStartTranslateY = this.contentTranslateY ? (-parentHeight * this.contentTranslateY/ childHeight) : 0;
                this.$refs.scrollBar.style.height = barHeight + 'px';
                this.barTranslateY = this.barStartTranslateY;
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