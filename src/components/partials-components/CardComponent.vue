<template>
    <div class="card shadow border-success rounded">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div class="card-title">
                    {{ Title }}
                </div>
                <div class="card-text">
                    <slot name="button"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Title: {
            type: String
        },
        Text: {
            type: String
        }
    }
}
</script>