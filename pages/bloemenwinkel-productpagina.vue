<template>
    <div class="bloemenwinkel-product-page">
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
              <span class="text-gray-600">❤️</span>
            </div>
            <div class="relative">
              <span class="text-gray-600">🛒</span>
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
            <div
              class="flex items-center text-[#2d5741] font-medium"
            >
              Assortiment
              <span class="ml-1">▼</span>
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
                <h3 class="font-medium text-lg mb-4 text-[#2d5741]">Categorieën</h3>
                <ul class="space-y-2">
                  <li v-for="category in categories" :key="category">
                    <div 
                      :class="[
                        'flex items-center', 
                        selectedCategory === category ? 'text-[#2d5741] font-medium' : 'text-gray-600 hover:text-[#2d5741]'
                      ]"
                      @click="setCategory(category)"
                      style="cursor: pointer;"
                    >
                      <span class="mr-1" v-if="selectedCategory === category">▶</span>
                      <span class="mr-1 opacity-0" v-else>▶</span>
                      {{ category }}
                    </div>
                  </li>
                </ul>
              </div>
                
              <div v-if="showProductTypeFilter" class="bg-white rounded-lg shadow-sm p-4 mb-6">
                <h3 class="font-medium text-lg mb-4 text-[#2d5741]">Product type</h3>
                <ul class="space-y-2">
                  <li v-for="subcat in availableSubcategories" :key="subcat.name">
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
                <h1 class="text-3xl font-bold text-[#2d5741] mb-2">Producten</h1>
                <p class="text-gray-600">Bekijk ons uitgebreide assortiment</p>
              </div>
              
              <!-- Sorting and Filters -->
              <div class="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-6">
                <div class="flex items-center mb-2 md:mb-0">
                  <span class="text-sm text-gray-600 mr-2">Sorteer op:</span>
                  <select class="border border-gray-300 rounded px-2 py-1 text-sm" @change="updateSortOption">
                    <option value="populariteit">Populariteit</option>
                    <option value="price-asc">Prijs: laag naar hoog</option>
                    <option value="price-desc">Prijs: hoog naar laag</option>
                    <option value="name">Nieuwste eerst</option>
                  </select>
                </div>
              </div>
              
              <!-- Products Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Dynamic Products -->
                <div v-for="product in filteredProducts" :key="product.id" class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      :src="product.image" 
                      :alt="product.name" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <span class="text-gray-400">❤️</span>
                    </button>
                    <div v-if="product.sale" class="absolute top-2 left-2 bg-[#e4004f] text-white text-xs px-2 py-1 rounded-full">
                      Aanbieding
                    </div>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">{{ product.name }}</h3>
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="text-[#e4004f] font-bold">{{ product.price.toFixed(2).replace('.', ',') }}</span>
                        <span v-if="product.originalPrice" class="text-gray-400 text-xs line-through ml-1">{{ product.originalPrice.toFixed(2).replace('.', ',') }}</span>
                      </div>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <span class="text-sm">🛒</span>
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
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <h2 class="text-xl font-bold text-[#2d5741] mb-2">Wees welkomen voor onze gratis prijsvragen!</h2>
              <p class="text-gray-600">Schrijf je in voor onze nieuwsbrief en ontvang exclusieve aanbiedingen en tuintips.</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Je e-mailadres" 
                class="flex-grow py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#2d5741]"
              />
              <button class="bg-[#2d5741] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">
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
                Maak het hier een stuk leuker met onze tuincentra groene vingers!
              </h2>
              <p class="text-gray-600 mb-6">
                Krijg je de beste tips en adviezen rechtstreeks op je telefoon. Download onze app en ontdek alle voordelen.
              </p>
              <div class="flex gap-4">
                <button class="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <AppleIcon class="h-6 w-6" />
                  <div class="text-left">
                    <span class="text-xs block">Download on the</span>
                    <span class="font-medium">App Store</span>
                  </div>
                </button>
                <button class="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
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
              <h3 class="font-bold text-lg mb-4">Blijf op de hoogte van de laatste trends</h3>
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
            <p>©  Bloemenwinkel. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
    definePageMeta({
    layout: "simulation",
    });

    import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

    // Products data
    const products = ref([
      { id: 1, name: 'Gemengd boeket', price: 24.50, image: '/bloemenwinkel/bloemenwinkel1.jpg', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 2, name: 'Roze boeket', price: 19.95, image: '/bloemenwinkel/boeket.jpg', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 3, name: 'Kleurrijk boeket', price: 29.95, image: '/bloemenwinkel/bloemenwinkel2.png', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 4, name: 'Selectie cactus', price: 4.95, image: '/bloemenwinkel/plant5.jpg', category: 'Planten', subcategory: 'Snijbloemen' },
      { id: 5, name: 'Cactus in pot', price: 7.95, image: '/bloemenwinkel/plant1.jpg', category: 'Planten', subcategory: 'Snijbloemen' },
      { id: 6, name: 'Boeket Veronica', price: 19.95, image: '/bloemenwinkel/boeket4.jpg', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 7, name: 'Boeket Rasa', price: 22.50, image: '/bloemenwinkel/boeket6.jpg', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 8, name: 'Veldboeket', price: 16.95, image: '/bloemenwinkel/boeket3.jpg', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 9, name: 'Witte rozen', price: 29.95, image: '/bloemenwinkel/boeket2.jpg', category: 'Bloemen', subcategory: 'Snijbloemen' },
      { id: 10, name: 'Lelies', price: 19.95, image: '/bloemenwinkel/lillies.jpg', category: 'Bloemen', subcategory: 'Snijbloemen' },
      { id: 11, name: 'Herfstboeket', price: 24.95, image: '/bloemenwinkel/boeket.jpg', category: 'Bloemen', subcategory: 'Boeketten' },
      { id: 12, name: 'Rattan lounge set', price: 824.95, image: '/bloemenwinkel/tuinmeubel1.jpg', category: 'Tuinmeubelen', subcategory: 'Droogbloemen' },
      { id: 13, name: 'Complete tuinset', price: 435.95, image: '/bloemenwinkel/tuinmeubel2.jpg', category: 'Tuinmeubelen', subcategory: 'Droogbloemen' },
      { id: 14, name: 'Vaas', price: 64.95, image: '/bloemenwinkel/vase.jpg', category: 'Potterie', subcategory: 'Droogbloemen' },
      { id: 15, name: 'Stoelenset Oslo', price: 73.95, image: '/bloemenwinkel/tuinmeubel.jpg', category: 'Tuinmeubelen', subcategory: 'Rouwbloemen' },
      { id: 16, name: 'Zonnebloemen', price: 9.99, image: '/bloemenwinkel/boeket5.jpg', category: 'Bloemen', subcategory: 'Snijbloemen', sale: true, originalPrice: 14.95 },
    ]);

    // Category and filter states
    const selectedCategory = ref('Alle producten');
    const selectedSubcategories = ref([]);
    const priceRange = ref({ min: 0, max: 1000 });
    const minPrice = ref(0);
    const maxPrice = ref(1000);
    const sortOption = ref('populariteit');
    const isDraggingMin = ref(false);
    const isDraggingMax = ref(false);
    const sliderTrack = ref(null);
    const minHandle = ref(null);
    const maxHandle = ref(null);
    const userHasAdjustedPrice = ref(false);
    const absolutePriceRange = ref({ min: 0, max: 1000 });
    
    // Calculate overall price range across all products
    const calculateAbsolutePriceRange = () => {
      const min = Math.floor(Math.min(...products.value.map(p => p.price)));
      const max = Math.ceil(Math.max(...products.value.map(p => p.price)));
      absolutePriceRange.value = { min, max };
      
      // Initialize price range values if they're at defaults
      if (priceRange.value.min === 0 && priceRange.value.max === 1000) {
        priceRange.value.min = min;
        priceRange.value.max = max;
        minPrice.value = min;
        maxPrice.value = max;
      }
    };
    
    // Calculate price range for current category
    const categoryPriceRange = computed(() => {
      const categoryProducts = products.value.filter(product => 
        selectedCategory.value === 'Alle producten' ||
        (product.category === selectedCategory.value &&
         (selectedSubcategories.value.length === 0 || 
          selectedSubcategories.value.includes(product.subcategory)))
      );
      
      if (categoryProducts.length === 0) return absolutePriceRange.value;
      
      const min = Math.floor(Math.min(...categoryProducts.map(p => p.price)));
      const max = Math.ceil(Math.max(...categoryProducts.map(p => p.price)));
      
      return { min, max };
    });
    
    // For slider calculations - use fixed range to prevent jumps in the UI
    const sliderBaseRange = computed(() => {
      // Use the absolute range for slider visualization to prevent UI jumps
      return absolutePriceRange.value;
    });
    
    // Calculate slider position percentages based on fixed absolute range
    const sliderPositions = computed(() => {
      const range = sliderBaseRange.value;
      const totalRange = range.max - range.min;
      
      // Avoid division by zero
      if (totalRange === 0) return { minPos: 0, maxPos: 100, width: 100 };
      
      // Calculate positions based on the fixed absolute range
      const minPos = ((priceRange.value.min - range.min) / totalRange) * 100;
      const maxPos = ((priceRange.value.max - range.min) / totalRange) * 100;
      
      return {
        minPos: Math.max(0, Math.min(100, minPos)),
        maxPos: Math.max(0, Math.min(100, maxPos)),
        width: Math.max(0, maxPos - minPos)
      };
    });
    
    // Show the current price range in the UI
    const displayMin = computed(() => priceRange.value.min);
    const displayMax = computed(() => priceRange.value.max);
    
    // Products filtered by category and subcategory before price filtering
    const productsBeforePriceFilter = computed(() => {
      return products.value.filter(product => {
        // Show all products when "Alle producten" is selected
        if (selectedCategory.value === 'Alle producten') {
          return true;
        }
        
        // Category filter
        if (selectedCategory.value && product.category !== selectedCategory.value) {
          return false;
        }
        
        // Subcategory filter
        if (selectedSubcategories.value.length > 0 && !selectedSubcategories.value.includes(product.subcategory)) {
          return false;
        }
        
        return true;
      });
    });
    
    // Filter products with price filtering
    const filteredProducts = computed(() => {
      let filtered = productsBeforePriceFilter.value.filter(product => {
        // Price range filter - always apply price filter
        if (product.price < priceRange.value.min || product.price > priceRange.value.max) {
          return false;
        }
        
        return true;
      });
      
      // Apply sorting
      switch(sortOption.value) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'populariteit':
        default:
          // Default sorting (already as defined in the products array)
          break;
      }
      
      return filtered;
    });
    
    // Watch for category changes to reset price range
    watch(selectedCategory, () => {
      if (!userHasAdjustedPrice.value) {
        resetPriceRange();
      }
    });
    
    // Set category with fixed adjustment to price range
    const setCategory = (category) => {
      selectedCategory.value = category;
      
      // Only reset price range if user hasn't adjusted manually
      if (!userHasAdjustedPrice.value) {
        resetPriceRange();
      }
    };
    
    // Update price range from category
    const resetPriceRange = () => {
      if (categoryPriceRange.value) {
        const range = categoryPriceRange.value;
        priceRange.value.min = range.min;
        priceRange.value.max = range.max;
        minPrice.value = range.min;
        maxPrice.value = range.max;
      }
    };
    
    // Toggle subcategory
    const toggleSubcategory = (subcategory) => {
      const index = selectedSubcategories.value.indexOf(subcategory);
      if (index === -1) {
        selectedSubcategories.value.push(subcategory);
      } else {
        selectedSubcategories.value.splice(index, 1);
      }
      
      // If user hasn't manually adjusted price, update to match new category range
      if (!userHasAdjustedPrice.value) {
        resetPriceRange();
      }
    };
    
    // Initialize on mounted
    onMounted(() => {
      calculateAbsolutePriceRange();
      resetPriceRange();
      
      const slider = document.querySelector('div[ref="sliderEl"]');
      if (slider) {
        sliderTrack.value = {
          width: slider.clientWidth,
          left: slider.getBoundingClientRect().left
        };
      }
    });
    
    // Slider drag events
    const startDragMin = (e) => {
      e.preventDefault();
      userHasAdjustedPrice.value = true;
      isDraggingMin.value = true;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', stopDrag);
    };
    
    const startDragMax = (e) => {
      e.preventDefault();
      userHasAdjustedPrice.value = true;
      isDraggingMax.value = true;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', stopDrag);
    };
    
    const stopDrag = () => {
      isDraggingMin.value = false;
      isDraggingMax.value = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', stopDrag);
      updatePriceRange();
    };
    
    // Mouse move handler for slider
    const onMouseMove = (e) => {
      if (!isDraggingMin.value && !isDraggingMax.value) return;
      
      if (!sliderTrack.value) {
        // Get the slider track element for position calculations
        const slider = document.querySelector('div[ref="sliderEl"]') || minHandle.value.parentElement;
        sliderTrack.value = {
          width: slider.clientWidth,
          left: slider.getBoundingClientRect().left
        };
      }
      
      // Calculate relative position (0-1)
      let relativePosition = (e.clientX - sliderTrack.value.left) / sliderTrack.value.width;
      
      // Ensure it's within 0-1 range
      relativePosition = Math.max(0, Math.min(1, relativePosition));
      
      // Convert to price value based on fixed range
      const range = sliderBaseRange.value;
      const priceValue = Math.round(range.min + relativePosition * (range.max - range.min));
      
      if (isDraggingMin.value) {
        // Don't let min exceed max
        const newMin = Math.min(priceValue, priceRange.value.max - 1);
        minPrice.value = newMin;
        priceRange.value.min = newMin;
      } else if (isDraggingMax.value) {
        // Don't let max go below min
        const newMax = Math.max(priceValue, priceRange.value.min + 1);
        maxPrice.value = newMax;
        priceRange.value.max = newMax;
      }
      
      // Always mark as user adjusted when dragging
      userHasAdjustedPrice.value = true;
    };
    
    // Clean up event listeners when component is unmounted
    onUnmounted(() => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    });
    
    // Update price range gets input values and updates the model
    const updatePriceRange = () => {
      userHasAdjustedPrice.value = true;
      priceRange.value.min = parseFloat(minPrice.value) || categoryPriceRange.value.min;
      priceRange.value.max = parseFloat(maxPrice.value) || categoryPriceRange.value.max;
    };

    // Update sort option
    const updateSortOption = (e) => {
      sortOption.value = e.target.value;
    };

    // Available categories
    const categories = [
      'Alle producten',
      'Bloemen',
      'Planten',
      'Potterie',
      'Tuinmeubelen'
    ];

    // Available subcategories
    const subcategories = [
      { name: 'Boeketten', count: 7 },
      { name: 'Snijbloemen', count: 5 },
      { name: 'Rouwbloemen', count: 2 },
      { name: 'Droogbloemen', count: 3 }
    ];

    // Reset filters
    const resetFilters = () => {
      resetPriceRange();
      userHasAdjustedPrice.value = false;
    };

    // Available subcategories based on current category selection
    const availableSubcategories = computed(() => {
      if (selectedCategory.value === 'Alle producten') {
        // Show all subcategories for "Alle producten"
        return subcategories;
      }
      
      // Get all subcategories that exist in the current category
      const subCatsInCategory = products.value
        .filter(p => p.category === selectedCategory.value)
        .map(p => p.subcategory);
      
      // Get unique subcategories
      const uniqueSubCats = [...new Set(subCatsInCategory)];
      
      // Return only subcategories that exist in the current category with their counts
      return subcategories.filter(sc => uniqueSubCats.includes(sc.name))
        .map(sc => ({
          ...sc,
          count: products.value.filter(p => 
            p.category === selectedCategory.value && 
            p.subcategory === sc.name
          ).length
        }));
    });
    
    // Determine if product type filter should be shown
    const showProductTypeFilter = computed(() => {
      return availableSubcategories.value.length > 0;
    });
  </script>
  
  <style scoped>
  /* Custom styles */
  .bloemenwinkel-product-page {
    font-family: 'Arial', sans-serif;
  }
  
  /* Hide scrollbar for the carousels */
  .flex.overflow-x-auto {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  .flex.overflow-x-auto::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* Custom checkbox styling */
  .form-checkbox {
    color: #2d5741;
  }
  </style>