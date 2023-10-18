<template>
    <input class="form-control form-control-sm" :type="Tipe" :placeholder="placeholder" aria-label=".form-control-sm example">
</template>
<script>
export default {
    props: {
        Tipe:{
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String
        }
    }
}
</script>