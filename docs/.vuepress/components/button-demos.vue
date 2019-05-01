<template>
    <div>
        <f-button>默认按钮</f-button>
        <f-button type="primary">sdf</f-button>
    </div>
</template>
<script>
    import Button from "../../../src/button/button";

    export default {
        components: {
            "f-button": Button
        }
    };
</script>

