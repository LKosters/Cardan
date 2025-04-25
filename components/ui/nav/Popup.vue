<template>
    <div class="bg-white rounded-t-[10px] absolute -translate-y-full p-[10px] flex flex-col gap-[10px]">
        <div v-for="item in items" :key="item.icon" class="group/popup">
            <component :is="item.icon" />
            <div class="opacity-0 group-hover/popup:opacity-100 duration-300">
                <UiNavTooltip :text="item.tooltip" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    items: Object,
});
</script>
