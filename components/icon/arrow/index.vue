<template>
<svg fill="currentColor" :height="size" :width="size" viewBox="0 0 24 24"><path d="M20.994 5.013a1.245 1.245 0 0 1 1.408 1.056l1.585 11.095a1.245 1.245 0 1 1-2.465.352l-1.16-8.118-5.668 7.557a1.246 1.246 0 0 1-.996.498H1.245a1.245 1.245 0 0 1 0-2.49h11.83l5.295-7.06-8.12 1.16a1.245 1.245 0 0 1-.35-2.465l11.095-1.585Z"></path></svg>
</template>

<script lang="ts" setup>
const props = defineProps({
    size: {
        type: Number,
        default: 24
    }
})
</script>
