<template>
  <div class="slider-container pr-5 pl-5">
    <!-- <div class="slider-header">
      <label :for="id" class="slider-label">{{ label }}</label>
      <span class="slider-value">{{ displayValue }}</span>
    </div> -->
    <div class="slider-track-container">
      <div class="slider-track">
        <div
          class="slider-track-fill"
          :style="{ width: `${percentage}%` }"
        ></div>
      </div>
      <input
        :id="id"
        type="range"
        class="slider-input"
        :min="min"
        :max="max"
        :step="step"
        v-model.number="localValue"
        @input="updateValue"
      />
    </div>
    <div class="slider-markers" v-if="showMarkers">
      <div
        v-for="marker in markers"
        :key="marker.value"
        class="marker-container"
        :style="{ left: `${((marker.value - min) / (max - min)) * 100}%` }"
      >
        <div class="marker-tick"></div>
        <div class="marker-label">{{ marker.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  label: {
    type: String,
    default: "Slider",
  },
  unit: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: () => `slider-${Math.random().toString(36).substring(2, 9)}`,
  },
  markers: {
    type: Array,
    default: () => [],
  },
  showMarkers: {
    type: Boolean,
    default: false,
  },
  formatValue: {
    type: Function,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const localValue = ref(props.modelValue);

onMounted(() => {
  localValue.value = props.modelValue;
});

const updateValue = () => {
  emit("update:modelValue", localValue.value);
  emit("change", localValue.value);
};

const percentage = computed(() => {
  return ((localValue.value - props.min) / (props.max - props.min)) * 100;
});

const displayValue = computed(() => {
  if (props.formatValue) {
    return props.formatValue(localValue.value);
  }
  return props.unit ? `${localValue.value}${props.unit}` : localValue.value;
});
</script>
<style scoped>
.slider-container {
  width: 200px;
  border: none;
}

.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.slider-label {
  font-weight: 500;
  color: #333;
  font-size: 0.95rem;
}

.slider-value {
  font-weight: 600;
  color: #00843d; /* Cardan green */
  font-size: 0.95rem;
}

.slider-track-container {
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
}

.slider-track {
  position: absolute;
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  z-index: 0;
}

.slider-track-fill {
  position: absolute;
  height: 100%;
  background-color: #00843d;
  border-radius: 3px;
  transition: width 0.1s ease;
  z-index: 1;
}

.slider-input {
  position: relative;
  width: 100%;
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  z-index: 2;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #00843d; /* Cardan green */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.slider-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #00843d; /* Cardan green */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.slider-input:focus {
  outline: none;
}

.slider-input:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px rgba(0, 132, 61, 0.2); /* Cardan green with opacity */
}

.slider-input:focus::-moz-range-thumb {
  box-shadow: 0 0 0 3px rgba(0, 132, 61, 0.2); /* Cardan green with opacity */
}

.slider-input::-webkit-slider-runnable-track,
.slider-input::-moz-range-track {
  background: transparent;
  border: none;
}

.slider-markers {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 4px;
}

.marker-container {
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-tick {
  width: 2px;
  height: 8px;
  background-color: #9ca3af;
}

.marker-label {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 4px;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .slider-track-container {
    height: 32px;
  }

  .slider-input::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
  }

  .slider-input::-moz-range-thumb {
    width: 18px;
    height: 18px;
  }
}
</style>
