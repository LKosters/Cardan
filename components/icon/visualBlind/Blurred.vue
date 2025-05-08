<template>
  <svg
    width="23"
    height="17"
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.53613 8.822C1.46712 8.61459 1.46712 8.39041 1.53613 8.183C2.92313 4.01 6.86013 1 11.5001 1C16.1381 1 20.0731 4.007 21.4631 8.178C21.5331 8.385 21.5331 8.609 21.4631 8.817C20.0771 12.99 16.1401 16 11.5001 16C6.86213 16 2.92613 12.993 1.53613 8.822Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g filter="url(#filter0_f_2_2)">
      <path
        d="M11.5 12.875C14.2636 12.875 16.5039 10.9162 16.5039 8.5C16.5039 6.08375 14.2636 4.125 11.5 4.125C8.73642 4.125 6.49609 6.08375 6.49609 8.5C6.49609 10.9162 8.73642 12.875 11.5 12.875Z"
        stroke="black"
        stroke-width="1.5"
      />
    </g>
    <path
      d="M16.5039 8.5C16.5039 9.66032 15.9767 10.7731 15.0383 11.5936C14.0999 12.4141 12.8271 12.875 11.5 12.875C10.1729 12.875 8.90012 12.4141 7.9617 11.5936C7.02329 10.7731 6.49609 9.66032 6.49609 8.5C6.49609 7.33968 7.02329 6.22688 7.9617 5.40641C8.90012 4.58594 10.1729 4.125 11.5 4.125C12.8271 4.125 14.0999 4.58594 15.0383 5.40641C15.9767 6.22688 16.5039 7.33968 16.5039 8.5Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <filter
        id="filter0_f_2_2"
        x="2.74609"
        y="0.375"
        width="17.5078"
        height="16.25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="1.5"
          result="effect1_foregroundBlur_2_2"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts" setup>
const uniqueId = `blurredIcon_${Math.random().toString(36).substr(2, 9)}`;
</script>
