<template>
  <div
    class="bg-white rounded-t-[10px] absolute -translate-y-[calc(100%)] flex flex-col items-center -translate-x-[50%] gap-5 pb-2 pt-5"
    role="menu"
    @focusin="$emit('focusin')"
    @focusout="$emit('focusout')"
  >
    <div
      v-for="(item, idx) in items"
      :key="item.icon"
      class="group/popup w-14 h-max flex items-center justify-center"
      role="menuitem"
      :tabindex="0"
      :aria-label="item.tooltip"
      @click="submitValue(item.value)"
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
const route = useRoute();
const router = useRouter();

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

const menuItemRefs = ref<(HTMLElement | null)[]>([]);

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
