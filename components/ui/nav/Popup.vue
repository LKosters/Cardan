<template>
    <div class="bg-white rounded-t-[10px] absolute -translate-y-full p-[10px] flex flex-col items-center gap-[10px]">
        <div v-for="item in items" :key="item.icon" class="group/popup">
            <component :is="item.icon" />
            <div class="opacity-0 group-hover/popup:opacity-100 duration-300">
                <UiNavTooltip :id="item.tooltip" :text="item.tooltip" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface PopupItem {
    icon: any;
    tooltip: string;
}
const props = defineProps({
    items: {
        type: Array as () => PopupItem[],
        required: true,
        validator: (value: PopupItem[]) => {
            return value.every(item =>
                item.icon !== undefined &&
                typeof item.tooltip === 'string'
            );
        }
    },
});
</script>
