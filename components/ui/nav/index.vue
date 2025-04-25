<template>
    <div class="bg-secondary-alt w-max fixed bottom-14 left-0 right-0 mx-auto rounded-[10px] px-[35px] py-[7px]">
        <div class="flex items-center gap-2">
            <div v-for="(item, index) in navItems" :key="index" class="hover:bg-white rounded-b-[10px] duration-300 group cursor-pointer">
                <div class="opacity-0 group-hover:opacity-100 duration-300">
                    <UiNavPopup :items="item.items" />
                </div>
                <component :is="item.icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconSwatch from '~/components/icon/swatch/index.vue'
import IconEye from '~/components/icon/eye/index.vue'
import IconCardan from '~/components/icon/cardan/index.vue'
import IconPicker from '~/components/icon/picker/index.vue'
import IconSetting from '~/components/icon/setting/index.vue'
import IconColorBlindBlueYellow from '~/components/icon/colorBlind/BlueYellow.vue'
import IconColorBlindPinkBlue from '~/components/icon/colorBlind/PinkBlue.vue'
import IconVisualBlindChoker from '~/components/icon/visualBlind/Choker.vue'
import IconVisualBlindBlurred from '~/components/icon/visualBlind/Blurred.vue'
import IconVisualBlindStains from '~/components/icon/visualBlind/Stains.vue'

const navItems = [
    {
        icon: IconSwatch,
        items: [
            {
                icon: IconColorBlindBlueYellow,
                tooltip: 'Blue Yellow',
            },
            {
                icon: IconColorBlindPinkBlue,
                tooltip: 'Pink Blue',
            },
        ]
    },
    {
        icon: IconEye,
        items: [
            {
                icon: IconVisualBlindChoker,
                tooltip: 'Choker',
            },
            {
                icon: IconVisualBlindBlurred,
                tooltip: 'Blurred',
            },
            {
                icon: IconVisualBlindStains,
                tooltip: 'Stains',
            },
        ],
    },
    {
        icon: IconCardan,
    },
    {
        icon: IconPicker,
    },
    {
        icon: IconSetting,
    },
];
</script>
