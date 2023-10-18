<template>
    <button type="button" :class="'btn btn-' + color + ' btn-' + size">
        <div :class="'text-' + textColor">
            {{ label }}
        </div>
    </button>
</template>
<script>
export default{
    props: {
        color: {
            type: String,
        },
        size: {
            type: String,
        },
        label:{
            type: String,
        },
        textColor: {
            type: String,
        }
    }
}
</script>