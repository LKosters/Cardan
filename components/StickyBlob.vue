<template>
  <div 
    ref="blobElement"
    class="fixed z-10 pointer-events-none flex justify-center items-center cursor-move"
    :style="{ 
      top: `${position.y}px`, 
      left: `${position.x}px`,
      width: '18vw',
      height: '18vw',
      transition: isDragging ? 'none' : 'transform 0.05s linear'
    }"
    @mousedown="startDrag"
    @touchstart="startDrag">
    <img src="/blob.png" alt="Icoon blob ontdek jezelf" class="w-full h-full object-contain" />
    <div class="absolute flex flex-col items-center justify-center text-center p-4 mr-2 pointer-events-auto">
      <div class="font-bold text-white blob-text-size">Ontdek jezelf</div>
      <div class="text-white mb-2 blob-text-size-small">Ervaar een website als een persoon met een beperking.</div>
      <a :href="linkUrl" target="_blank" rel="noopener noreferrer" 
          class="bg-white text-white p-2 rounded-full no-underline transition-all duration-200 
                hover:bg-gray-200 hover:scale-105 blob-button-size">
        <IconArrow class="fill-secondary"/>
      </a>
    </div>
  </div>
</template>

<script setup>
import IconArrow from '~/components/icon/arrow/index.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  linkUrl: {
    type: String,
    default: 'https://example.com'
  }
});

// Element reference
const blobElement = ref(null);

// Position and physics state
const position = ref({ x: 0, y: 0 });
const velocity = ref({ x: 0, y: 0 });
const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });
const lastPosition = ref({ x: 0, y: 0 });
const lastTimestamp = ref(0);
const animationFrame = ref(null);

// Load saved position or use default position
onMounted(() => {
  const savedPosition = localStorage.getItem('blobPosition');
  if (savedPosition) {
    position.value = JSON.parse(savedPosition);
  } else {
    // Default position (right side, middle of viewport)
    position.value = {
      x: window.innerWidth - 150,
      y: window.innerHeight / 2
    };
  }
  
  lastPosition.value = { ...position.value };

  // Add global event listeners
  window.addEventListener('mousemove', handleDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchmove', handleDrag, { passive: false });
  window.addEventListener('touchend', stopDrag);
});

// Remove event listeners when component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleDrag);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', handleDrag);
  window.removeEventListener('touchend', stopDrag);
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }
});

// Start dragging
const startDrag = (event) => {
  // Stop any ongoing animation
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }
  
  // Stop event propagation and prevent default for touch events
  event.stopPropagation();
  if (event.cancelable && event.type === 'touchstart') {
    event.preventDefault();
  }
  
  isDragging.value = true;
  velocity.value = { x: 0, y: 0 };
  
  // Get mouse or touch position
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;
  
  // Calculate offset from current position
  dragOffset.value = {
    x: clientX - position.value.x,
    y: clientY - position.value.y
  };
  
  lastPosition.value = { ...position.value };
  lastTimestamp.value = Date.now();
  
  // Make whole blob draggable
  if (blobElement.value) {
    blobElement.value.style.pointerEvents = 'auto';
  }
};

// Handle dragging with better performance
const handleDrag = (event) => {
  if (!isDragging.value) return;
  
  // Prevent scrolling on touch devices
  if (event.cancelable && event.type === 'touchmove') {
    event.preventDefault();
  }
  
  // Get mouse or touch position
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;
  
  // Update position based on mouse/touch position and initial offset
  const newX = clientX - dragOffset.value.x;
  const newY = clientY - dragOffset.value.y;
  
  // Calculate velocity (for throw effect)
  const now = Date.now();
  const elapsed = now - lastTimestamp.value;
  
  if (elapsed > 0) {
    velocity.value = {
      x: (newX - lastPosition.value.x) / elapsed * 20, // Scale for better throw effect
      y: (newY - lastPosition.value.y) / elapsed * 20
    };
    
    lastPosition.value = { x: newX, y: newY };
    lastTimestamp.value = now;
  }
  
  position.value = { x: newX, y: newY };
};

// Stop dragging and apply momentum
const stopDrag = () => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  
  // Reset pointer events
  if (blobElement.value) {
    blobElement.value.style.pointerEvents = 'none';
  }
  
  // Apply momentum (throw effect)
  if (Math.abs(velocity.value.x) > 0.1 || Math.abs(velocity.value.y) > 0.1) {
    animateThrow();
  } else {
    // Save position if not throwing
    savePosition();
  }
};

// Animate the throw with physics
const animateThrow = () => {
  const friction = 0.95; // Friction coefficient (lower = more friction)
  const minVelocity = 0.5; // Minimum velocity before stopping
  
  const animate = () => {
    // Apply velocity to position
    position.value.x += velocity.value.x;
    position.value.y += velocity.value.y;
    
    // Apply friction to slow down
    velocity.value.x *= friction;
    velocity.value.y *= friction;
    
    // Get window boundaries with some padding
    const padding = 50;
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;
    const minX = padding - blobElement.value?.offsetWidth / 2 || 0;
    const minY = padding - blobElement.value?.offsetHeight / 2 || 0;
    
    // Bounce off edges with reduced velocity
    if (position.value.x > maxX) {
      position.value.x = maxX;
      velocity.value.x *= -0.7;
    } else if (position.value.x < minX) {
      position.value.x = minX;
      velocity.value.x *= -0.7;
    }
    
    if (position.value.y > maxY) {
      position.value.y = maxY;
      velocity.value.y *= -0.7;
    } else if (position.value.y < minY) {
      position.value.y = minY;
      velocity.value.y *= -0.7;
    }
    
    // Continue animation if velocity is above threshold
    if (Math.abs(velocity.value.x) > minVelocity || Math.abs(velocity.value.y) > minVelocity) {
      animationFrame.value = requestAnimationFrame(animate);
    } else {
      // Save final position
      savePosition();
    }
  };
  
  // Start animation
  animationFrame.value = requestAnimationFrame(animate);
};

// Save position to localStorage
const savePosition = () => {
  localStorage.setItem('blobPosition', JSON.stringify(position.value));
};
</script>

<style scoped>
.blob-text-size {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}

.blob-text-size-small {
  font-size: clamp(0.625rem, 1vw, 0.875rem);
}

.blob-button-size {
  font-size: clamp(0.75rem, 1vw, 1rem);
}
</style> 