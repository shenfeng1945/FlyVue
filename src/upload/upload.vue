<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FlyUpload',
    props: {
        name: {
            type: String,
            required: true
        },
        accept: {
            type: String,
            default: 'image/*'
        },
        action: {
            type: String,
            required: true
        },
        // 生成图片的Url
        fileList: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


