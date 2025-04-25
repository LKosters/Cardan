<template>
    <div class="bg-white rounded-[10px] px-[10px] py-[5px] absolute w-max translate-x-[45px] -translate-y-full">
        {{ text }}
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
 text: String,
});
</script>
