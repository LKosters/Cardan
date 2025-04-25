<template>
    <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg" :aria-labelledby="`${uniqueId}_title`" role="img">
<path d="M10.5361 17.822C10.4671 17.6146 10.4671 17.3904 10.5361 17.183C11.9231 13.01 15.8601 10 20.5001 10C25.1381 10 29.0731 13.007 30.4631 17.178C30.5331 17.385 30.5331 17.609 30.4631 17.817C29.0771 21.99 25.1401 25 20.5001 25C15.8621 25 11.9261 21.993 10.5361 17.822Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g :filter="`url(#filter0_f_${uniqueId})`">
<path d="M20.5 21.875C23.2636 21.875 25.5039 19.9162 25.5039 17.5C25.5039 15.0838 23.2636 13.125 20.5 13.125C17.7364 13.125 15.4961 15.0838 15.4961 17.5C15.4961 19.9162 17.7364 21.875 20.5 21.875Z" stroke="black" stroke-width="1.5"/>
</g>
<path d="M25.5039 17.5C25.5039 18.6603 24.9767 19.7731 24.0383 20.5936C23.0999 21.4141 21.8271 21.875 20.5 21.875C19.1729 21.875 17.9001 21.4141 16.9617 20.5936C16.0233 19.7731 15.4961 18.6603 15.4961 17.5C15.4961 16.3397 16.0233 15.2269 16.9617 14.4064C17.9001 13.5859 19.1729 13.125 20.5 13.125C21.8271 13.125 23.0999 13.5859 24.0383 14.4064C24.9767 15.2269 25.5039 16.3397 25.5039 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter :id="`filter0_f_${uniqueId}`" x="11.7461" y="9.375" width="17.5078" height="16.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_47_298"/>
</filter>
</defs>
</svg>
</template>

<script lang="ts" setup>
const uniqueId = `blurredIcon_${Math.random().toString(36).substr(2, 9)}`
</script>
