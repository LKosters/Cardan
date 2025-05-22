<template>
    <div class="absolute w-screen overflow-x-hidden">
        <div class="relative container">
    <svg class="absolute -right-[750px] top-0 -z-10" width="931" height="169" viewBox="0 0 931 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M937.004 55.0002H138.004C126.958 55.0002 118.004 46.0459 118.004 35.0002V20.0002C118.004 8.95455 126.958 0.000244141 138.004 0.000244141H937.004V55.0002Z" fill="#E6F7EA"/>
<path d="M166.006 41.8843L47.4326 160.458C42.715 165.175 35.0664 165.175 30.3489 160.458L8.54168 138.65C3.82415 133.933 3.82415 126.284 8.54168 121.567L127.115 2.99341L166.006 41.8843Z" fill="#E6F7EA"/>
</svg>





<div class="flex justify-end py-40 mr-[116px]">
    <img class="size-[360px] rounded-full" :src="image" alt="Image" />
</div>
<svg class="absolute bottom-0 -left-[320px] -z-10" width="1168" height="169" viewBox="0 0 1168 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00195312 113.999H1030C1041.05 113.999 1050 122.953 1050 133.999V148.999C1050 160.045 1041.05 168.999 1030 168.999H0.00195312V113.999Z" fill="#E7E3E8"/>
<path d="M1002 127.115L1120.57 8.54167C1125.29 3.82414 1132.94 3.82414 1137.66 8.54168L1159.46 30.3488C1164.18 35.0664 1164.18 42.715 1159.46 47.4326L1040.89 166.006L1002 127.115Z" fill="#E7E3E8"/>
</svg>


   </div> 
    </div>
   
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});

</script>
