<template>
  <div class="font-arial">
    <div>
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <!-- Logo -->
            <div class="logo flex items-center mb-4 md:mb-0">
              <div class="flex flex-col items-center md:items-start">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-[#a02279] mr-1"></div>
                  <span class="text-[#2d5741] text-3xl font-bold"
                    ><a href="/bloemenwinkel">Bloemenwinkel</a></span
                  >
                </div>
                <span class="text-[#2d5741] text-sm"
                  >tuincentrum vol groene ideeën</span
                >
              </div>
            </div>

            <!-- Search Bar -->
            <div class="search-bar w-full md:w-1/3 mb-4 md:mb-0">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Waar ben je naar op zoek?"
                  class="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#2d5741]"
                  disabled
                />
                <div
                  class="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <span class="text-gray-400">zoek</span>
                </div>
              </div>
            </div>

            <!-- User Actions -->
            <div class="user-actions flex items-center space-x-6">
              <div class="relative">
                <IconHeart :size="16" />
              </div>
              <div class="relative">
                <IconCart :size="16" class="text-black" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Navigation -->
      <nav class="bg-white border-t border-b border-gray-200">
        <div class="container mx-auto px-4">
          <ul
            class="flex flex-wrap items-center justify-between md:justify-start"
          >
            <li class="py-4 px-2 md:px-4 relative group">
              <div class="flex items-center text-[#2d5741] font-medium">
                Assortiment
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Breadcrumbs -->
      <div class="bg-gray-100 py-2">
        <div class="container mx-auto px-4">
          <div class="flex items-center text-sm text-gray-500">
            <div class="hover:text-[#2d5741]">Home</div>
            <ChevronRightIcon class="h-3 w-3 mx-1" />
            <div class="hover:text-[#2d5741]">Assortiment</div>
            <ChevronRightIcon class="h-3 w-3 mx-1" />
            <span class="text-[#2d5741] font-medium">Producten</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <main class="py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar Filters -->
            <div class="lg:w-1/4">
              <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
                <h3 class="font-medium text-lg mb-4 text-[#2d5741]">
                  Categorieën
                </h3>
                <ul class="space-y-2">
                  <li v-for="category in categories" :key="category">
                    <div
                      :class="[
                        'flex items-center',
                        selectedCategory === category
                          ? 'text-[#2d5741] font-medium'
                          : 'text-gray-600 hover:text-[#2d5741]',
                      ]"
                      @click="setCategory(category)"
                      style="cursor: pointer"
                    >
                      <span class="mr-1" v-if="selectedCategory === category">
                        <IconTriangle :size="12" />
                      </span>
                      <span class="mr-1 opacity-0" v-else>
                        <IconTriangle :size="12" />
                      </span>
                      {{ category }}
                    </div>
                  </li>
                </ul>
              </div>

              <div
                v-if="showProductTypeFilter"
                class="bg-white rounded-lg shadow-sm p-4 mb-6"
              >
                <h3 class="font-medium text-lg mb-4 text-[#2d5741]">
                  Product type
                </h3>
                <ul class="space-y-2">
                  <li
                    v-for="subcat in availableSubcategories"
                    :key="subcat.name"
                  >
                    <label class="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        class="form-checkbox text-[#2d5741] rounded mr-2"
                        :checked="selectedSubcategories.includes(subcat.name)"
                        @change="toggleSubcategory(subcat.name)"
                      />
                      <span>{{ subcat.name }} ({{ subcat.count }})</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Product Listing -->
            <div class="lg:w-3/4">
              <div class="mb-6">
                <h1 class="text-3xl font-bold text-[#2d5741] mb-2">
                  Producten
                </h1>
                <p class="text-gray-600">Bekijk ons uitgebreide assortiment</p>
              </div>

              <!-- Sorting and Filters -->
              <div
                class="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-6"
              >
                <div class="flex items-center mb-2 md:mb-0">
                  <span class="text-sm text-gray-600 mr-2">Sorteer op:</span>
                  <select
                    class="border border-gray-300 rounded px-2 py-1 text-sm"
                    @change="updateSortOption"
                  >
                    <option value="populariteit">Populariteit</option>
                    <option value="price-asc">Prijs: laag naar hoog</option>
                    <option value="price-desc">Prijs: hoog naar laag</option>
                    <option value="name">Nieuwste eerst</option>
                  </select>
                </div>
              </div>

              <!-- Products Grid -->
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                <!-- Dynamic Products -->
                <div
                  v-for="product in filteredProducts"
                  :key="product.id"
                  class="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div class="relative">
                    <img
                      :src="product.image"
                      :alt="product.name"
                      class="w-full h-48 object-cover"
                    />
                    <div
                      v-if="product.sale"
                      class="absolute top-2 left-2 bg-[#e4004f] text-white text-xs px-2 py-1 rounded-full"
                    >
                      Aanbieding
                    </div>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">
                      {{ product.name }}
                    </h3>
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="text-[#e4004f] font-bold">{{
                          product.price.toFixed(2).replace(".", ",")
                        }}</span>
                        <span
                          v-if="product.originalPrice"
                          class="text-gray-400 text-xs line-through ml-1"
                          >{{
                            product.originalPrice.toFixed(2).replace(".", ",")
                          }}</span
                        >
                      </div>
                      <button class="bg-[#2d5741] text-white rounded-full p-2">
                        <IconCart :size="12" class="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Newsletter -->
      <section class="py-8 bg-[#f0f5f0]">
        <div class="container mx-auto px-4">
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-lg shadow-sm"
          >
            <div>
              <h2 class="text-xl font-bold text-[#2d5741] mb-2">
                Wees welkomen voor onze gratis prijsvragen!
              </h2>
              <p class="text-gray-600">
                Schrijf je in voor onze nieuwsbrief en ontvang exclusieve
                aanbiedingen en tuintips.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Je e-mailadres"
                class="flex-grow py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#2d5741]"
              />
              <button
                class="bg-[#2d5741] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Aanmelden
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- App Promotion -->
      <section class="py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/2">
              <img
                src="/bloemenwinkel/app.jpg"
                alt="Mobile app"
                class="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div class="md:w-1/2">
              <h2 class="text-[#2d5741] text-2xl font-bold mb-4">
                Maak het hier een stuk leuker met onze tuincentra groene
                vingers!
              </h2>
              <p class="text-gray-600 mb-6">
                Krijg je de beste tips en adviezen rechtstreeks op je telefoon.
                Download onze app en ontdek alle voordelen.
              </p>
              <div class="flex gap-4">
                <button
                  class="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <AppleIcon class="h-6 w-6" />
                  <div class="text-left">
                    <span class="text-xs block">Download on the</span>
                    <span class="font-medium">App Store</span>
                  </div>
                </button>
                <button
                  class="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <SmartphoneIcon class="h-6 w-6" />
                  <div class="text-left">
                    <span class="text-xs block">GET IT ON</span>
                    <span class="font-medium">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-[#2d5741] text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <!-- Column 1 -->
            <div>
              <h3 class="font-bold text-lg mb-4">Locaties bloemenwinkel</h3>
              <ul class="space-y-2 text-sm">
                <li><div class="hover:underline">Nuenen</div></li>
                <li><div class="hover:underline">Valkenswaard</div></li>
                <li><div class="hover:underline">Helmond</div></li>
                <li><div class="hover:underline">Eindhoven</div></li>
              </ul>
            </div>

            <!-- Column 2 -->
            <div>
              <h3 class="font-bold text-lg mb-4">Klantenservice</h3>
              <ul class="space-y-2 text-sm">
                <li><div class="hover:underline">Contact</div></li>
                <li><div class="hover:underline">Veelgestelde vragen</div></li>
                <li><div class="hover:underline">Bezorging</div></li>
                <li><div class="hover:underline">Retourneren</div></li>
                <li><div class="hover:underline">Privacy</div></li>
                <li><div class="hover:underline">Cookies</div></li>
              </ul>
            </div>

            <!-- Column 3 -->
            <div>
              <h3 class="font-bold text-lg mb-4">VIPpas</h3>
              <ul class="space-y-2 text-sm">
                <li><div class="hover:underline">Voordelen</div></li>
                <li><div class="hover:underline">Aanvragen</div></li>
                <li><div class="hover:underline">Voorwaarden</div></li>
              </ul>
            </div>

            <!-- Column 4 -->
            <div>
              <h3 class="font-bold text-lg mb-4">
                Blijf op de hoogte van de laatste trends
              </h3>
              <div class="flex space-x-3 mb-6">
                <div class="hover:text-gray-300">
                  <FacebookIcon class="h-6 w-6" />
                </div>
                <div class="hover:text-gray-300">
                  <InstagramIcon class="h-6 w-6" />
                </div>
                <div class="hover:text-gray-300">
                  <YoutubeIcon class="h-6 w-6" />
                </div>
                <div class="hover:text-gray-300">
                  <TwitterIcon class="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-600 pt-6 text-center text-sm">
            <p>© Bloemenwinkel. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
const products = ref([
  {
    id: 1,
    name: "Gemengd boeket",
    price: 24.5,
    image: "/bloemenwinkel/bloemenwinkel1.jpg",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 2,
    name: "Roze boeket",
    price: 19.95,
    image: "/bloemenwinkel/boeket.jpg",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 3,
    name: "Kleurrijk boeket",
    price: 29.95,
    image: "/bloemenwinkel/bloemenwinkel2.png",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 4,
    name: "Selectie cactus",
    price: 4.95,
    image: "/bloemenwinkel/plant5.jpg",
    category: "Planten",
    subcategory: "Cactus",
  },
  {
    id: 5,
    name: "Cactus in pot",
    price: 7.95,
    image: "/bloemenwinkel/plant1.jpg",
    category: "Planten",
    subcategory: "Cactus",
  },
  {
    id: 6,
    name: "Boeket Veronica",
    price: 19.95,
    image: "/bloemenwinkel/boeket4.jpg",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 7,
    name: "Boeket Rasa",
    price: 22.5,
    image: "/bloemenwinkel/boeket6.jpg",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 8,
    name: "Veldboeket",
    price: 16.95,
    image: "/bloemenwinkel/boeket3.jpg",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 9,
    name: "Witte rozen",
    price: 29.95,
    image: "/bloemenwinkel/boeket2.jpg",
    category: "Bloemen",
    subcategory: "Snijbloemen",
  },
  {
    id: 10,
    name: "Lelies",
    price: 19.95,
    image: "/bloemenwinkel/lillies.jpg",
    category: "Bloemen",
    subcategory: "Snijbloemen",
  },
  {
    id: 11,
    name: "Herfstboeket",
    price: 24.95,
    image: "/bloemenwinkel/boeket.jpg",
    category: "Bloemen",
    subcategory: "Boeketten",
  },
  {
    id: 12,
    name: "Rattan lounge set",
    price: 824.95,
    image: "/bloemenwinkel/tuinmeubel1.jpg",
    category: "Tuinmeubelen",
    subcategory: "Loungeset",
  },
  {
    id: 13,
    name: "Complete tuinset",
    price: 435.95,
    image: "/bloemenwinkel/tuinmeubel2.jpg",
    category: "Tuinmeubelen",
    subcategory: "Tuinset",
  },
  {
    id: 14,
    name: "Vaas",
    price: 64.95,
    image: "/bloemenwinkel/vase.jpg",
    category: "Potterie",
    subcategory: "Buitenpotten",
  },
  {
    id: 15,
    name: "Stoelenset Oslo",
    price: 73.95,
    image: "/bloemenwinkel/tuinmeubel.jpg",
    category: "Tuinmeubelen",
    subcategory: "Stoelen",
  },
  {
    id: 16,
    name: "Zonnebloemen",
    price: 9.99,
    image: "/bloemenwinkel/boeket5.jpg",
    category: "Bloemen",
    subcategory: "Snijbloemen",
    sale: true,
    originalPrice: 14.95,
  },
  {
    id: 17,
    name: "Kaartspel",
    price: 9.99,
    image: "/bloemenwinkel/spel1.jpg",
    category: "Spellen",
    subcategory: "Spellen",
  },
  {
    id: 18,
    name: "BBQ Gerta",
    price: 7.99,
    image: "/bloemenwinkel/bbq.jpg",
    category: "BBQ",
    subcategory: "BBQ",
    sale: true,
    originalPrice: 9.95,
  },
]);

// Category and filter states
const selectedCategory = ref("Alle producten");
const selectedSubcategories = ref<string[]>([]);
const sortOption = ref("populariteit");

// Filter products with category and subcategory filtering
const filteredProducts = computed(() => {
  let filtered = products.value.filter((product) => {
    // Show all products when "Alle producten" is selected
    if (selectedCategory.value === "Alle producten") {
      // Apply subcategory filter if any subcategories are selected
      if (selectedSubcategories.value.length > 0) {
        return selectedSubcategories.value.includes(product.subcategory);
      }
      return true;
    }

    // Category filter
    if (product.category !== selectedCategory.value) {
      return false;
    }

    // Subcategory filter - only apply if subcategories are selected
    if (
      selectedSubcategories.value.length > 0 &&
      !selectedSubcategories.value.includes(product.subcategory)
    ) {
      return false;
    }

    return true;
  });

  // Apply sorting
  switch (sortOption.value) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "populariteit":
    default:
      // Default sorting (already as defined in the products array)
      break;
  }

  return filtered;
});

// Set category and reset subcategory selection when changing category
const setCategory = (category: string) => {
  selectedCategory.value = category;
  selectedSubcategories.value = []; // Reset subcategory selection when changing category
};

// Toggle subcategory
const toggleSubcategory = (subcategory: string) => {
  const index = selectedSubcategories.value.indexOf(subcategory);
  if (index === -1) {
    selectedSubcategories.value.push(subcategory);
  } else {
    selectedSubcategories.value.splice(index, 1);
  }
};

// Update sort option
const updateSortOption = (e: Event) => {
  sortOption.value = (e.target as HTMLSelectElement).value;
};

// Available categories
const categories = [
  "Alle producten",
  "Bloemen",
  "Planten",
  "Potterie",
  "Tuinmeubelen",
  "Spellen",
  "BBQ",
];

// Dynamic calculation of all available subcategories from product data
const allSubcategories = computed(() => {
  const subcats = new Map();

  products.value.forEach((product) => {
    if (!subcats.has(product.subcategory)) {
      subcats.set(product.subcategory, 0);
    }
    subcats.set(product.subcategory, subcats.get(product.subcategory) + 1);
  });

  return Array.from(subcats).map(([name, count]) => ({ name, count }));
});

// Reset filters
const resetFilters = () => {
  selectedCategory.value = "Alle producten";
  selectedSubcategories.value = [];
};

// Available subcategories based on current category selection
const availableSubcategories = computed(() => {
  if (selectedCategory.value === "Alle producten") {
    // Show all subcategories for "Alle producten"
    return allSubcategories.value;
  }

  // Get all products in the selected category
  const productsInCategory = products.value.filter(
    (p) => p.category === selectedCategory.value,
  );

  // Count occurrences of each subcategory within the selected category
  const subcatCounts = new Map();
  productsInCategory.forEach((product) => {
    if (!subcatCounts.has(product.subcategory)) {
      subcatCounts.set(product.subcategory, 0);
    }
    subcatCounts.set(
      product.subcategory,
      subcatCounts.get(product.subcategory) + 1,
    );
  });

  // Convert to array of objects with name and count properties
  return Array.from(subcatCounts).map(([name, count]) => ({ name, count }));
});

// Determine if product type filter should be shown
const showProductTypeFilter = computed(() => {
  return availableSubcategories.value.length > 0;
});
</script>
