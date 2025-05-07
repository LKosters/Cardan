<template>
  <div
    class="bg-white rounded-t-[10px] absolute -translate-y-full p-[10px] flex flex-col items-center gap-[10px]"
    role="menu"
    @focusin="$emit('focusin')"
    @focusout="$emit('focusout')"
  >
    <div
      v-for="(item, idx) in items"
      :key="item.icon"
      class="group/popup"
      role="menuitem"
      :tabindex="0"
      :aria-label="item.tooltip"
      @keydown="onKeyDown($event, idx)"
      @click="submitValue(item.tooltip)"
      :ref="(el) => (menuItemRefs[idx] = el as HTMLElement | null)"
    >
      <component :is="item.icon" />
      <div class="opacity-0 group-hover/popup:opacity-100 duration-300">
        <UiNavTooltip :id="`tooltip-${idx}`" :text="item.tooltip" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "nuxt/app";

interface PopupItem {
  icon: any;
  tooltip: string;
}
const props = defineProps({
  items: {
    type: Array as () => PopupItem[],
    required: true,
    validator: (value: PopupItem[]) => {
      return value.every(
        (item) => item.icon !== undefined && typeof item.tooltip === "string",
      );
    },
  },
  autoFocus: Boolean,
});

const emit = defineEmits(["filter", "focusin", "focusout"]);

const menuItemRefs = ref<(HTMLElement | null)[]>([]);

const route = useRoute();
const router = useRouter();

watch(
  () => props.autoFocus,
  (val) => {
    if (val) {
      nextTick(focusFirstMenuItem);
    }
  },
);

onMounted(() => {
  if (props.autoFocus) {
    focusFirstMenuItem();
  }
});

function focusFirstMenuItem() {
  if (menuItemRefs.value[0]) {
    menuItemRefs.value[0].focus();
  }
}

function onKeyDown(e: KeyboardEvent, idx: number) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    // handle activation logic here if needed
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    const next = (idx + 1) % props.items.length;
    focusMenuItem(next);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    const prev = (idx - 1 + props.items.length) % props.items.length;
    focusMenuItem(prev);
  } else if (e.key === "Escape") {
    (e.target as HTMLElement).blur();
  }
}

function focusMenuItem(idx: number) {
  if (menuItemRefs.value[idx]) {
    menuItemRefs.value[idx]?.focus();
  }
}

function submitValue(value: string) {
  router.push({
    query: {
      ...route.query,
      filter: value.toLowerCase().replace(/\s+/g, "-"),
    },
  });
}
</script>
