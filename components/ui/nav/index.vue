<template>
  <nav
    ref="navRoot"
    class="bg-secondary-alt w-max fixed bottom-14 left-0 right-0 mx-auto rounded-[10px] px-[35px] py-[7px] shadow-lg"
    role="navigation"
    aria-label="Main navigation"
    @focusin="onNavFocusIn"
    @focusout="onNavFocusOut"
  >
    <ul class="flex items-center gap-2">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="hover:bg-white rounded-b-[10px] duration-300 cursor-pointer"
        :aria-haspopup="item.items ? 'true' : undefined"
        :aria-expanded="activeIndex === index ? 'true' : 'false'"
        :tabindex="0"
        :aria-label="item.items ? 'Open menu' : 'Navigation item'"
        role="menuitem"
        @keydown="onKeyDown($event, index)"
        @focus="activeIndex = index"
        @blur="null"
        @mouseenter="activeIndex = index"
        @mouseleave="activeIndex = null"
        @click="onItemClick(index)"
        :ref="(el) => (popupRefs[index] = el as HTMLElement | null)"
      >
        <transition name="fade" mode="out-in">
          <div
            v-if="item.items && activeIndex === index"
            class="transition-opacity duration-300"
          >
            <UiNavPopup
              :items="item.items"
              :autoFocus="focusedNavIndex === index"
              :key="
                focusedNavIndex === index ? 'focus' + index : 'nofocus' + index
              "
              @focusin="onNavFocusIn"
              @focusout="onNavFocusOut"
            />
          </div>
        </transition>
        <component :is="item.icon" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
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
  },
  {
    icon: IconPicker,
  },
  {
    icon: IconSetting,
  },
];

const activeIndex = ref<number | null>(null);
const popupRefs: Ref<(HTMLElement | null)[]> = ref([]);
const focusedNavIndex = ref<number | null>(null);
const popupHasFocus = ref(false);
const navRoot = ref<HTMLElement | null>(null);
const focusCount = ref(0);
const selectedOption = ref<{ icon: any, tooltip?: string } | null>(null);

function onKeyDown(e: KeyboardEvent, index: number) {
  if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
    if (navItems[index].items) {
      e.preventDefault();
      activeIndex.value = index;
      focusedNavIndex.value = index;
    } else {
      activeIndex.value = index;
      focusedNavIndex.value = null;
    }
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    activeIndex.value = (index + 1) % navItems.length;
    focusedNavIndex.value = null;
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    activeIndex.value = (index - 1 + navItems.length) % navItems.length;
    focusedNavIndex.value = null;
  } else if (e.key === "Escape") {
    activeIndex.value = null;
    focusedNavIndex.value = null;
  }
}

function onItemClick(index: number) {
  if (navItems[index].items) {
    activeIndex.value = activeIndex.value === index ? null : index;
    focusedNavIndex.value = index;
  } else {
    activeIndex.value = index;
    focusedNavIndex.value = null;
    selectedOption.value = navItems[index];
  }
}

function onNavFocusIn() {
  focusCount.value++;
}

function onNavFocusOut() {
  setTimeout(() => {
    focusCount.value--;
    if (focusCount.value <= 0) {
      activeIndex.value = null;
      focusedNavIndex.value = null;
    }
  }, 0);
}

onMounted(() => {
  document.addEventListener("focusin", handleGlobalFocusIn);
});
onBeforeUnmount(() => {
  document.removeEventListener("focusin", handleGlobalFocusIn);
});

function handleGlobalFocusIn(e: FocusEvent) {
  const nav = navRoot.value;
  if (!nav) return;
  if (!nav.contains(e.target as Node)) {
    activeIndex.value = null;
    focusedNavIndex.value = null;
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
