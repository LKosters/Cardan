<template>
  <div
    v-if="tutorialStep < 5"
    class="bg-black/70 w-full h-full absolute top-0 left-0 z-[2] fixed"
  ></div>
  <nav
    ref="navRoot"
    class="z-10 bg-secondary-alt w-max fixed bottom-14 left-0 right-0 mx-auto rounded-[10px] px-[35px] py-[7px] shadow-lg"
    role="navigation"
    aria-label="Main navigation"
  >
    <UiNavTutorial @step="updateTutorialStep" />
    <ul
      :class="{ 'pointer-events-none': tutorialStep < 5 }"
      class="flex items-center gap-2"
    >
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="duration-300 nav-item hover:bg-white border border-2 border-transparent rounded-b-[10px] cursor-pointer size-15 flex items-center justify-center relative"
        :class="{
          '!border-t-0': item.items || item.intensity,
          '!rounded-[10px]': item.link || item.clear,
          selected: selectedItemIndex === index,
        }"
        :aria-haspopup="item.items ? 'true' : undefined"
        :aria-expanded="false"
        :tabindex="0"
        :aria-label="item.items ? 'Open menu' : 'Navigation item'"
        role="menuitem"
        ref="`navItem${index}`"
        @mouseenter="selectItem(index)"
        @mouseleave="
          () => {
            if (tutorialStep >= 5) {
              hoveredItemIndex = null;
              selectedItemIndex = null;
            }
          }
        "
      >
        <div
          v-if="item.items"
          class="popup-container"
          ref="`popupContainer${index}`"
        >
          <UiNavPopup
            :items="item.items"
            :tutorial-step="tutorialStep"
            class="popup"
          />
        </div>
        <a v-if="item.link" :href="item.link">
          <component :is="item.icon" />
        </a>
        <button class="cursor-pointer" v-else-if="item.clear" @click="clear()">
          <component :is="item.icon" />
        </button>
        <button class="cursor-pointer" v-else-if="item.intensity">
          <div
            class="popup-container bg-white rounded-r-[10px] absolute flex flex-col items-center -translate-y-[calc(300%-20px)] -translate-x-[50%] -rotate-90"
          >
            <UiSlider v-model="sliderValue" />
          </div>
          <component :is="item.icon" />
        </button>
        <component v-else :is="item.icon" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const sliderValue = ref(50);
const hoveredItemIndex = ref<number | null>(null);
const selectedItemIndex = ref<number | null>(0);

const tutorialStep = ref(0);

import IconSwatch from "~/components/icon/swatch/index.vue";
import IconEye from "~/components/icon/eye/index.vue";
import IconCardan from "~/components/icon/cardan/index.vue";
import IconPicker from "~/components/icon/picker/index.vue";
import IconSetting from "~/components/icon/setting/index.vue";
import IconColorBlindBlueYellow from "~/components/icon/colorBlind/BlueYellow.vue";
import IconColorBlindPinkBlue from "~/components/icon/colorBlind/PinkBlue.vue";
import IconVisualBlindChoker from "../../icon/visualBlind/Choker.vue";
import IconVisualBlindBlurred from "../../icon/visualBlind/Blurred.vue";
import IconVisualBlindStains from "../../icon/visualBlind/Stains.vue";
import IconClear from "../../icon/clear/index.vue";

const navItems = [
  {
    icon: IconSwatch,
    items: [
      {
        icon: IconColorBlindBlueYellow,
        tooltip: "Blauw Geel",
        value: "Blue Yellow",
      },
      {
        icon: IconColorBlindPinkBlue,
        tooltip: "Roze Blauw",
        value: "Pink Blue",
      },
    ],
  },
  {
    icon: IconEye,
    items: [
      {
        icon: IconVisualBlindChoker,
        tooltip: "Kokervisie",
        value: "Choker",
      },
      {
        icon: IconVisualBlindBlurred,
        tooltip: "Wazig zicht",
        value: "Blurred",
      },
      {
        icon: IconVisualBlindStains,
        tooltip: "Vlekken zicht",
        value: "Stains",
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
    intensity: true,
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

const invokeIntensity = () => {
  router.push({
    query: {
      ...route.query,
      intensity: sliderValue.value,
    },
  });
};

const selectItem = (index: number) => {
  if (tutorialStep.value >= 5) {
    selectedItemIndex.value = index;
  }
};

watch(sliderValue, (value) => {
  invokeIntensity();
});

onMounted(() => {
  navItems.forEach((item, index) => {
    const navItem = document.querySelector(
      `.nav-item:nth-child(${index + 1})`,
    ) as HTMLElement;
    const popupContainer = document.querySelector(
      `.popup-container:nth-child(${index + 1})`,
    ) as HTMLElement;
    if (navItem && popupContainer) {
      navItem.addEventListener("mouseenter", () => {
        if (tutorialStep.value >= 5) {
          hoveredItemIndex.value = index;
          popupContainer.style.opacity = "1";
          popupContainer.style.visibility = "visible";
          popupContainer.style.pointerEvents = "auto";
        }
      });
      navItem.addEventListener("mouseleave", () => {
        if (tutorialStep.value >= 5) {
          hoveredItemIndex.value = null;
          popupContainer.style.opacity = "0";
          popupContainer.style.visibility = "hidden";
          popupContainer.style.pointerEvents = "none";
        }
      });
      navItem.addEventListener("click", () => {
        selectItem(index);
      });
    }
  });
});

const updateTutorialStep = (step: number) => {
  tutorialStep.value = step;
  selectedItemIndex.value = step;
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

.nav-item.selected .popup-container {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.nav-item.selected {
  background-color: white !important;
  border: 2px solid #008743 !important;
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
