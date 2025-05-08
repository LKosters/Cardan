<template>
  <nav
    ref="navRoot"
    class="bg-secondary-alt w-max fixed bottom-14 left-0 right-0 mx-auto rounded-[10px] px-[35px] py-[7px] shadow-lg"
    role="navigation"
    aria-label="Main navigation"
  >
    <ul class="flex items-center gap-2">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-item hover:bg-white rounded-b-[10px] duration-300 cursor-pointer size-14 flex items-center justify-center relative"
        :class="{ 'hover:!bg-transparent': item.link || !item.items }"
        :aria-haspopup="item.items ? 'true' : undefined"
        :aria-expanded="false"
        :tabindex="0"
        :aria-label="item.items ? 'Open menu' : 'Navigation item'"
        role="menuitem"
      >
        <div v-if="item.items" class="popup-container">
          <UiNavPopup :items="item.items" class="popup" />
        </div>
        <a v-if="item.link" :href="item.link">
          <component :is="item.icon" />
        </a>
        <button
          class="cursor-pointer"
          v-else-if="item.clear"
          @click="clear()"
        >
          <component :is="item.icon" />
        </button>
        <component v-else :is="item.icon" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

import IconSwatch from "~/components/icon/swatch/index.vue";
import IconEye from "~/components/icon/eye/index.vue";
import IconCardan from "~/components/icon/cardan/index.vue";
import IconPicker from "~/components/icon/picker/index.vue";
import IconSetting from "~/components/icon/setting/index.vue";
import IconColorBlindBlueYellow from "~/components/icon/colorBlind/BlueYellow.vue";
import IconColorBlindPinkBlue from "~/components/icon/colorBlind/PinkBlue.vue";
import IconVisualBlindChoker from "~/components/icon/visualBlind/Choker.vue";
import IconVisualBlindBlurred from "~/components/icon/visualBlind/Blurred.vue";
import IconVisualBlindStains from "~/components/icon/visualBlind/Stains.vue";
import IconClear from "~/components/icon/clear/index.vue";

const navItems = [
  {
    icon: IconSwatch,
    items: [
      {
        icon: IconColorBlindBlueYellow,
        tooltip: "Blue Yellow",
      },
      {
        icon: IconColorBlindPinkBlue,
        tooltip: "Pink Blue",
      },
    ],
  },
  {
    icon: IconEye,
    items: [
      {
        icon: IconVisualBlindChoker,
        tooltip: "Choker",
      },
      {
        icon: IconVisualBlindBlurred,
        tooltip: "Blurred",
      },
      {
        icon: IconVisualBlindStains,
        tooltip: "Stains",
      },
    ],
  },
  {
    icon: IconCardan,
    link: "/kies-website",
  },
  {
    icon: IconClear,
    clear: true,
  },
  {
    icon: IconSetting,
  },
];

const clear = () => {
  // remove param filter from url
  router.push({
    query: {
      ...route.query,
      filter: undefined,
    },
  });
};
</script>

<style scoped>
.popup-container {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  pointer-events: none;
}

.nav-item:hover .popup-container {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.popup {
  margin-bottom: 8px;
}
</style>
