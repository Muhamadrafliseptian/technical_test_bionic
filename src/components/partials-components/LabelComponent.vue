<template>
    <label for="">
        {{ text }}
    </label>
</template>
<script>
export default {
    props: {
        text: {
            type: String
        }
    }
}
</script>