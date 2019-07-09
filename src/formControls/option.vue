<template>
   <option :label="label">{{value}}</option>
</template>

<script>
export default {
    name: 'FlyOption',
    props: {
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
        }
    }
}
</script>

