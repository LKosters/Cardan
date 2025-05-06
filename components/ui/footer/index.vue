<template>
  <footer class="w-full">
    <div class="bg-primary text-white py-12 px-2 md:px-4 relative overflow-hidden">
      <!-- Background SVG -->
      <div class="absolute inset-0 pointer-events-none">
        <svg width="450" height="450" viewBox="0 0 688 684" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-0">
          <g opacity="0.06">
            <path d="M255.27 789.313C371.566 789.313 465.842 695.036 465.842 578.74C465.842 462.444 371.566 368.168 255.27 368.168C138.974 368.168 44.6973 462.444 44.6973 578.74C44.6973 695.036 138.974 789.313 255.27 789.313Z" fill="white"/>
            <path d="M595.629 486.743C711.925 486.743 806.202 392.466 806.202 276.171C806.202 159.875 711.925 65.5981 595.629 65.5981C479.333 65.5981 385.057 159.875 385.057 276.171C385.057 392.466 479.333 486.743 595.629 486.743Z" fill="white"/>
            <path d="M136.244 635.65H266.432C280.046 635.65 293.21 636.101 303.971 625.039C305.273 623.738 306.374 622.236 307.575 620.835C316.084 610.874 324.593 600.964 333.102 591.003C401.474 511.119 469.796 431.234 538.169 351.35C558.24 327.925 578.261 304.5 598.332 281.076C589.773 284.629 581.264 288.133 572.705 291.687H714.805C733.775 291.687 751.944 275.019 751.043 255.449C750.143 235.878 735.127 219.21 714.805 219.21H584.618C571.003 219.21 557.839 218.76 547.078 229.822C545.777 231.123 544.675 232.625 543.474 234.026C534.965 243.987 526.456 253.897 517.947 263.858C449.575 343.742 381.253 423.626 312.881 503.511C292.809 526.935 272.788 550.36 252.717 573.785C261.276 570.231 269.785 566.727 278.344 563.174H136.244C117.274 563.174 99.1048 579.841 100.006 599.412C100.907 618.983 115.923 635.65 136.244 635.65Z" fill="#654F6F"/>
          </g>
        </svg>
      </div>
      <div class="container mx-auto relative">
        <!-- Logo and certifications -->
        <div class="mb-12">
          <div class="flex items-center gap-[1.5rem]">
            <div class="text-sm font-bold flex items-center">
              <NuxtImg src="/logo/logo_white.png" alt="Cardan logo" />
            </div>
            <div class="flex items-center gap-2">
              <!-- <NuxtImg src="/certifications/drempelvrij-2ster.svg" alt="Drempelvrij 2 sterren" /> -->
              <NuxtImg
                class="size-[36px]"
                src="/certifications/ddai-geaccrediteerd.png"
                alt="Ddai geaccrediteerd"
              />
              <NuxtImg
                class="size-[36px]"
                src="/certifications/iso-9001-gecertificeerd.png"
                alt="ISO 9001 gecertificeerd"
              />
            </div>
          </div>
        </div>

        <!-- Footer columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 w-[80%]">
          <!-- Column 1 -->
          <div>
            <h3 class="font-bold text-sm mb-4">Digitale Toegankelijkheid</h3>
            <ul class="space-y-[1rem]">
              <li>
                <NuxtLink to="#" class="hover:underline"> Diensten </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline"> Branches </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline"> De WCAG </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline"> Blog </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline">
                  Inschrijven nieuwsbrief
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h3 class="font-bold text-sm mb-4">Cardan</h3>
            <ul class="space-y-[1rem]">
              <li>
                <NuxtLink to="#" class="hover:underline">
                  Over Cardan
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline">
                  Onze mensen
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline"> Vacatures </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h3 class="font-bold text-sm mb-4">Contact</h3>
            <ul class="space-y-[1rem]">
              <li>
                Mail ons op
                <NuxtLink
                  to="mailto:contact@cardan.com"
                  class="font-bold hover:underline"
                >
                  contact@cardan.com
                </NuxtLink>
              </li>
              <li>
                Of bel naar
                <NuxtLink to="#" class="font-bold hover:underline">
                  +31 (0)88 500 4070
                </NuxtLink>
              </li>
              <li>
                Burgemeester Brokxlaan 32
                <br />
                5041 SB Tilburg
              </li>
            </ul>

            <!-- Social media icons -->
            <div class="flex gap-4 mt-8">
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 text-purple-800 hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.376 20h3.644v-6.028a2.413 2.413 0 0 1 .12-.876c.137-.382.39-.713.724-.948a2.015 2.015 0 0 1 1.146-.365c1.318 0 1.846.99 1.846 2.442V20H20.5v-6.19c0-3.317-1.798-4.86-4.196-4.86-1.965 0-2.828 1.083-3.308 1.82h.024V9.203H9.376c.048 1.013 0 10.795 0 10.795V20Zm-2.018 0V9.205H3.715V20h3.643ZM5.536 7.73c1.271 0 2.062-.83 2.062-1.865C7.575 4.806 6.808 4 5.562 4S3.5 4.806 3.5 5.865c0 1.036.79 1.866 2.014 1.866l.022-.001Z"
                    fill="#654F6F"
                  ></path>
                </svg>
                <span class="sr-only">LinkedIn</span>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 text-purple-800 hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2c-2.715 0-3.056.012-4.122.06-1.065.05-1.792.218-2.428.465a4.897 4.897 0 0 0-1.77 1.153A4.909 4.909 0 0 0 2.525 5.45c-.248.636-.417 1.363-.465 2.428C2.013 8.943 2 9.284 2 12s.012 3.056.06 4.122c.05 1.065.218 1.792.465 2.427a4.899 4.899 0 0 0 1.153 1.772 4.896 4.896 0 0 0 1.771 1.154c.636.247 1.363.416 2.428.465 1.066.048 1.407.06 4.123.06s3.056-.012 4.122-.06c1.065-.049 1.792-.218 2.429-.465a4.892 4.892 0 0 0 1.77-1.154 4.909 4.909 0 0 0 1.154-1.771c.246-.636.415-1.363.465-2.427.047-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123c-.05-1.065-.22-1.792-.465-2.427a4.908 4.908 0 0 0-1.154-1.772 4.887 4.887 0 0 0-1.771-1.153c-.637-.247-1.365-.416-2.43-.465-1.066-.048-1.406-.06-4.122-.06H12Zm-.896 1.802H12c2.67 0 2.986.01 4.04.058.976.044 1.505.207 1.857.344.467.181.8.398 1.15.748.35.35.566.683.748 1.15.137.352.3.881.344 1.856.048 1.054.059 1.371.059 4.04s-.01 2.985-.059 4.04c-.044.974-.207 1.504-.344 1.856a3.091 3.091 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.352.138-.881.3-1.856.345-1.054.048-1.371.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.208-1.858-.345a3.098 3.098 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.351-.3-.88-.345-1.855-.047-1.055-.057-1.371-.057-4.042 0-2.67.01-2.985.057-4.04.045-.974.208-1.503.345-1.856.181-.467.398-.8.748-1.15.35-.35.683-.567 1.15-.748.353-.138.882-.3 1.857-.345.923-.042 1.28-.054 3.144-.056v.002Zm6.235 1.66a1.2 1.2 0 1 0 0 2.401 1.2 1.2 0 0 0 0-2.4ZM12 6.866a5.136 5.136 0 1 0 0 10.271 5.136 5.136 0 0 0 0-10.271Zm0 1.802a3.333 3.333 0 1 1 0 6.666 3.333 3.333 0 0 1 0-6.666Z"
                    fill="#654F6F"
                  ></path>
                </svg>
                <span class="sr-only">Instagram</span>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 text-purple-800 hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.595 4.76a2.755 2.755 0 0 1 1.945 1.945C22.998 8.42 23 12 23 12s0 3.58-.46 5.296a2.755 2.755 0 0 1-1.945 1.945C18.88 19.7 12 19.7 12 19.7s-6.88 0-8.595-.46a2.755 2.755 0 0 1-1.945-1.945C1 15.58 1 12 1 12s0-3.58.46-5.295A2.755 2.755 0 0 1 3.405 4.76C5.12 4.3 12 4.3 12 4.3s6.88 0 8.595.46ZM15.513 12l-5.715 3.3V8.701l5.715 3.3Z"
                    fill="#654F6F"
                  ></path>
                </svg>
                <span class="sr-only">YouTube</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <UiFooterCopyright />
  </footer>
</template>

<script setup lang="ts">
</script>
