<template>
    <Field class="form-control form-control-sm" :type="Tipe" :placeholder="placeholder" aria-label=".form-control-sm example"/>
</template>
<script>
import {Field} from 'vee-validate'
export default {
    components: {
        Field
    },
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