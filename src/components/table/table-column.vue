<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'FlyTableColumn',
        props: {
            text: String,
            field: String,
            width: [String,Number],
            sortable: {
                type: Boolean,
                default: false
            }
        }
    }
</script>