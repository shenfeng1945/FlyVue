<template>
    <div class="f-scroll" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousewheel="onMouseWheel">
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
                scrollBarVisible: false,
                shouldExistScroll: true,
                contentTranslateY: 0,
                barTranslateY: 0,
                barStartTranslateY: 0,
                mouseStartPositionBarY: 0,
                scrollBarMousing: false,
                parentHeight: undefined,
                childHeight: undefined,
            }
        },
        mounted() {
            this.parentHeight = this.$refs.parent.getBoundingClientRect().height;
            this.childHeight = this.$refs.child.getBoundingClientRect().height;
            if(this.parentHeight < this.childHeight){
                this.updateScrollBar();
                this.listenDocument();
            }else{
                this.shouldExistScroll = false;
            }
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
                    this.mouseStartPositionBarY = e.clientY;
                    this.barStartTranslateY = this.barTranslateY;
                });
                document.addEventListener('selectstart', e => {
                    if(this.scrollBarMousing){
                        e.preventDefault()
                    }
                })
            },
            onMouseWheel(e){
                if(!this.shouldExistScroll) return;
                let { deltaY } = e;
                let translateY = this.contentTranslateY;
                let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom} = window.getComputedStyle(this.$refs.parent);
                let maxTranslateY = this.childHeight - this.parentHeight + (parseInt(borderTopWidth) + parseInt(borderBottomWidth) + parseInt(paddingTop) + parseInt(paddingBottom));
                translateY -= deltaY;
                if(translateY > 0){
                    translateY = 0
                }else if(translateY < -maxTranslateY){
                    translateY = -maxTranslateY;
                }
                this.contentTranslateY = translateY;
                this.updateScrollBar()
            },
            onMouseDownScrollBar(e){
                this.scrollBarMousing = true;
                this.mouseStartPositionBarY = e.clientY;
            },
            updateScrollBar(){
                const {parentHeight,childHeight, contentTranslateY} = this;
                let barHeight = parentHeight * parentHeight / childHeight;
                this.barStartTranslateY = contentTranslateY ? (-parentHeight * contentTranslateY/ childHeight) : 0;
                this.$refs.scrollBar.style.height = barHeight + 'px';
                this.barTranslateY = this.barStartTranslateY;
            },
            onMouseEnter(){
                if(this.shouldExistScroll){
                    this.scrollBarVisible = true;
                }
            },
            onMouseLeave(){
                if(!this.scrollBarMousing){
                //    this.scrollBarVisible = false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .f-scroll{
        overflow: hidden;
        position: relative;
        &-inner{ transition: transform 0.05s ease; }
        &-track{ position: absolute; top: 0;right: 0; height: 100%; width: 14px; border-left: 1px solid #e8e7e8; background: #fafafa; opacity: 0.9; }
        &-bar{ position: absolute;box-sizing: border-box; top: -1px; left: 50%; height: 40px; width: 8px; margin-left: -4px; padding: 4px 0; }
        &-bar-inner{ height: 100%; border-radius: 4px; background: #c2c2c2; &:hover{background: #7d7d7d} }
    }
</style>