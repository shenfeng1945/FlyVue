<template>
   <option :label="label">{{value}}</option>
</template>

<script>
export default {
    name: 'FlyOption',
    props: {
        value: {
            type: String | Number,
            required: true
        },
        label: {
            type: String | Number,
        }
    }
}
</script>

