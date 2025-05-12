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
            <div class="flex items-center text-sm">
              <span class="text-gray-600 mr-1">📍</span>
              <span>Kies je winkel</span>
            </div>
            <div class="flex items-center text-sm">
              <span class="text-gray-600 mr-1">👤</span>
              <span>Inloggen</span>
            </div>
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
          <li class="py-4 px-2 md:px-4">
            <div class="text-[#2d5741] font-medium"
              >Inspiratie</div
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <div class="text-[#2d5741] font-medium"
              >Folders</div
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <div class="text-[#e4004f] font-medium"
              >Aanbiedingen</div
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <div class="text-[#2d5741] font-medium"
              >Cadeaukaarten</div
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <div class="text-[#2d5741] font-medium"
              >VIPpas</div
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <div class="text-[#2d5741] font-medium"
              >Vacatures</div
            >
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
            <span class="text-[#2d5741] font-medium">Bloemen</span>
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
                  <li>
                    <div class="text-[#2d5741] font-medium flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1" />
                      Bloemen
                    </div>
                  </li>
                  <li>
                    <div class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Planten
                    </div>
                  </li>
                  <li>
                    <div class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Tuinplanten
                    </div>
                  </li>
                  <li>
                    <div class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Potterie
                    </div>
                  </li>
                  <li>
                    <div class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Tuinmeubelen
                    </div>
                  </li>
                </ul>
              </div>
              
              <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
                <h3 class="font-medium text-lg mb-4 text-[#2d5741]">Subcategorieën</h3>
                <ul class="space-y-2">
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox text-[#2d5741] rounded mr-2" />
                      <span>Boeketten (24)</span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox text-[#2d5741] rounded mr-2" />
                      <span>Snijbloemen (18)</span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox text-[#2d5741] rounded mr-2" />
                      <span>Rouwbloemen (12)</span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox text-[#2d5741] rounded mr-2" />
                      <span>Droogbloemen (8)</span>
                    </label>
                  </li>
                </ul>
              </div>
              
              <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
                <h3 class="font-medium text-lg mb-4 text-[#2d5741]">Prijs</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">€0</span>
                    <span class="text-sm text-gray-600">€150</span>
                  </div>
                  <div class="relative">
                    <div class="h-2 bg-gray-200 rounded-full">
                      <div class="absolute h-2 bg-[#2d5741] rounded-full" style="width: 70%; left: 10%"></div>
                      <div class="absolute h-4 w-4 bg-white border-2 border-[#2d5741] rounded-full -mt-1" style="left: 10%"></div>
                      <div class="absolute h-4 w-4 bg-white border-2 border-[#2d5741] rounded-full -mt-1" style="left: 80%"></div>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <div class="relative flex-1">
                      <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      <input type="number" value="15" class="w-full pl-8 pr-2 py-1 border border-gray-300 rounded" />
                    </div>
                    <div class="relative flex-1">
                      <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      <input type="number" value="120" class="w-full pl-8 pr-2 py-1 border border-gray-300 rounded" />
                    </div>
                  </div>
                </div>
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
                  <select class="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Populariteit</option>
                    <option>Prijs: laag naar hoog</option>
                    <option>Prijs: hoog naar laag</option>
                    <option>Nieuwste eerst</option>
                  </select>
                </div>
              </div>
              
              <!-- Products Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Product 1 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/bloemenwinkel1.jpg" 
                      alt="Gemengd boeket" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Gemengd boeket</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">24,50</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 2 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket.jpg" 
                      alt="Roze boeket" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Roze boeket</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">19,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 3 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/bloemenwinkel2.png" 
                      alt="Kleurrijk boeket" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Kleurrijk boeket</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">29,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 4 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/plant5.jpg" 
                      alt="cactus" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Selectie cactus</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">4,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 5 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/plant1.jpg" 
                      alt="Cactus in pot" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Cactus in pot</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">7,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 6 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket4.jpg" 
                      alt="Boeket wit" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Boeket Veronica</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">19,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 7 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket6.jpg" 
                      alt="Boeket rood" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Boeket Rasa</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">22,50</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 8 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket3.jpg" 
                      alt="Veldboeket" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Veldboeket</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">16,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 9 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket2.jpg" 
                      alt="Witte rozen" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Witte rozen</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">29,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 10 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/lillies.jpg" 
                      alt="Witte lelies" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Lelies</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">19,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 11 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket.jpg" 
                      alt="Herfstboeket" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Herfstboeket</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">24,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Product 12 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/tuinmeubel1.jpg" 
                      alt="rattan lounge set" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Rattan lounge set</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">824,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Product 11 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/tuinmeubel2.jpg" 
                      alt="Complete tuinset" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Complete tuinset</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">435,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Product 11 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/vase.jpg" 
                      alt="Vaas" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Vaas</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">64,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Product 11 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/tuinmeubel.jpg" 
                      alt="tuinmeubel" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Stoelenset Oslo</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">73,95</span>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Product 12 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div class="relative">
                    <img 
                      src="/bloemenwinkel/boeket5.jpg" 
                      alt="Zonnebloemen" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                    <div class="absolute top-2 left-2 bg-[#e4004f] text-white text-xs px-2 py-1 rounded-full">
                      Aanbieding
                    </div>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Zonnebloemen</h3>
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="text-[#e4004f] font-bold">9,99</span>
                        <span class="text-gray-400 text-xs line-through ml-1">14,95</span>
                      </div>
                      <button class="bg-[#2d5741] text-white rounded-full p-1">
                        <ShoppingCartIcon class="h-4 w-4" />
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