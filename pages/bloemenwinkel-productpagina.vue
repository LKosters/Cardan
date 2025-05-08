<template>
    <div class="coppelmans-product-page">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <!-- Logo -->
            <div class="logo flex items-center mb-4 md:mb-0">
              <NuxtLink to="/" class="flex flex-col items-center md:items-start">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-[#a02279] mr-1"></div>
                  <span class="text-[#2d5741] text-3xl font-bold">coppelmans</span>
                </div>
                <span class="text-[#2d5741] text-sm">tuincentrum vol groene ideeën</span>
              </NuxtLink>
            </div>
            
            <!-- Search Bar -->
            <div class="search-bar w-full md:w-1/3 mb-4 md:mb-0">
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Waar ben je naar op zoek?" 
                  class="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#2d5741]"
                />
                <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <SearchIcon class="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
            
            <!-- User Actions -->
            <div class="user-actions flex items-center space-x-6">
              <NuxtLink to="/winkels" class="flex items-center text-sm">
                <MapPinIcon class="h-5 w-5 mr-1" />
                <span>Kies je winkel</span>
              </NuxtLink>
              <NuxtLink to="/login" class="flex items-center text-sm">
                <UserIcon class="h-5 w-5 mr-1" />
                <span>Inloggen</span>
              </NuxtLink>
              <NuxtLink to="/favorieten" class="relative">
                <HeartIcon class="h-5 w-5" />
              </NuxtLink>
              <NuxtLink to="/winkelwagen" class="relative">
                <ShoppingCartIcon class="h-5 w-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Main Navigation -->
      <nav class="bg-white border-t border-b border-gray-200">
        <div class="container mx-auto px-4">
          <ul class="flex flex-wrap items-center justify-between md:justify-start">
            <li class="py-4 px-2 md:px-4 relative group">
              <NuxtLink to="/assortiment" class="flex items-center text-[#2d5741] font-medium">
                Assortiment
                <ChevronDownIcon class="h-4 w-4 ml-1" />
              </NuxtLink>
            </li>
            <li class="py-4 px-2 md:px-4">
              <NuxtLink to="/inspiratie" class="text-[#2d5741] font-medium">Inspiratie</NuxtLink>
            </li>
            <li class="py-4 px-2 md:px-4">
              <NuxtLink to="/folders" class="text-[#2d5741] font-medium">Folders</NuxtLink>
            </li>
            <li class="py-4 px-2 md:px-4">
              <NuxtLink to="/aanbiedingen" class="text-[#e4004f] font-medium">Aanbiedingen</NuxtLink>
            </li>
            <li class="py-4 px-2 md:px-4">
              <NuxtLink to="/cadeaukaarten" class="text-[#2d5741] font-medium">Cadeaukaarten</NuxtLink>
            </li>
            <li class="py-4 px-2 md:px-4">
              <NuxtLink to="/vippas" class="text-[#2d5741] font-medium">VIPpas</NuxtLink>
            </li>
            <li class="py-4 px-2 md:px-4">
              <NuxtLink to="/vacatures" class="text-[#2d5741] font-medium">Vacatures</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      
      <!-- Breadcrumbs -->
      <div class="bg-gray-100 py-2">
        <div class="container mx-auto px-4">
          <div class="flex items-center text-sm text-gray-500">
            <NuxtLink to="/" class="hover:text-[#2d5741]">Home</NuxtLink>
            <ChevronRightIcon class="h-3 w-3 mx-1" />
            <NuxtLink to="/assortiment" class="hover:text-[#2d5741]">Assortiment</NuxtLink>
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
                    <NuxtLink to="/assortiment/bloemen" class="text-[#2d5741] font-medium flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1" />
                      Bloemen
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/assortiment/planten" class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Planten
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/assortiment/tuinplanten" class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Tuinplanten
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/assortiment/potterie" class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Potterie
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/assortiment/tuinmeubelen" class="text-gray-600 hover:text-[#2d5741] flex items-center">
                      <ChevronRightIcon class="h-4 w-4 mr-1 opacity-0" />
                      Tuinmeubelen
                    </NuxtLink>
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
                <h1 class="text-3xl font-bold text-[#2d5741] mb-2">Bloemen</h1>
                <p class="text-gray-600">Bekijk ons uitgebreide assortiment bloemen</p>
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
                <div class="flex items-center">
                  <span class="text-sm text-gray-600 mr-2">Toon:</span>
                  <select class="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>24 per pagina</option>
                    <option>48 per pagina</option>
                    <option>96 per pagina</option>
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
                      alt="Zomers boeket" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Zomers boeket</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">24,95</span>
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
                      alt="Gemengd boeket luxe" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Gemengd boeket luxe</h3>
                    <div class="flex justify-between items-center">
                      <span class="text-[#e4004f] font-bold">34,95</span>
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
                      src="/bloemenwinkel/kamerplant.jpg" 
                      alt="Boeket wit" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Boeket wit</h3>
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
                      src="/bloemenwinkel/plant3.jpg" 
                      alt="Boeket rood" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Boeket rood</h3>
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
                      src="/bloemenwinkel/plant2.jpg" 
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
                      src="/bloemenwinkel/plant4.jpg" 
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
                      src="/bloemenwinkel/kamerplant2.jpg" 
                      alt="Witte lelies" 
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute top-2 right-2 z-10">
                      <HeartIcon class="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div class="p-3">
                    <h3 class="text-[#2d5741] font-medium text-sm mb-1">Witte lelies</h3>
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
                      src="/bloemenwinkel/vase.jpg" 
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
                      src="/bloemenwinkel/scene1.jpg" 
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
              
              <!-- Pagination -->
              <div class="flex justify-center mt-8">
                <div class="flex items-center space-x-1">
                  <button class="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                    <ChevronLeftIcon class="h-4 w-4" />
                  </button>
                  <button class="px-3 py-1 rounded border border-[#2d5741] bg-[#2d5741] text-white">1</button>
                  <button class="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                  <button class="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                  <button class="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">4</button>
                  <button class="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                    <ChevronRightIcon class="h-4 w-4" />
                  </button>
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
              <h3 class="font-bold text-lg mb-4">Locaties Coppelmans</h3>
              <ul class="space-y-2 text-sm">
                <li><NuxtLink to="/winkels/nuenen" class="hover:underline">Nuenen</NuxtLink></li>
                <li><NuxtLink to="/winkels/valkenswaard" class="hover:underline">Valkenswaard</NuxtLink></li>
                <li><NuxtLink to="/winkels/helmond" class="hover:underline">Helmond</NuxtLink></li>
                <li><NuxtLink to="/winkels/eindhoven" class="hover:underline">Eindhoven</NuxtLink></li>
              </ul>
            </div>
            
            <!-- Column 2 -->
            <div>
              <h3 class="font-bold text-lg mb-4">Klantenservice</h3>
              <ul class="space-y-2 text-sm">
                <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
                <li><NuxtLink to="/faq" class="hover:underline">Veelgestelde vragen</NuxtLink></li>
                <li><NuxtLink to="/bezorging" class="hover:underline">Bezorging</NuxtLink></li>
                <li><NuxtLink to="/retourneren" class="hover:underline">Retourneren</NuxtLink></li>
                <li><NuxtLink to="/privacy" class="hover:underline">Privacy</NuxtLink></li>
                <li><NuxtLink to="/cookies" class="hover:underline">Cookies</NuxtLink></li>
              </ul>
            </div>
            
            <!-- Column 3 -->
            <div>
              <h3 class="font-bold text-lg mb-4">VIPpas</h3>
              <ul class="space-y-2 text-sm">
                <li><NuxtLink to="/vippas" class="hover:underline">Voordelen</NuxtLink></li>
                <li><NuxtLink to="/vippas/aanvragen" class="hover:underline">Aanvragen</NuxtLink></li>
                <li><NuxtLink to="/vippas/voorwaarden" class="hover:underline">Voorwaarden</NuxtLink></li>
              </ul>
            </div>
            
            <!-- Column 4 -->
            <div>
              <h3 class="font-bold text-lg mb-4">Blijf op de hoogte van de laatste trends</h3>
              <div class="flex space-x-3 mb-6">
                <a href="#" class="hover:text-gray-300">
                  <FacebookIcon class="h-6 w-6" />
                </a>
                <a href="#" class="hover:text-gray-300">
                  <InstagramIcon class="h-6 w-6" />
                </a>
                <a href="#" class="hover:text-gray-300">
                  <YoutubeIcon class="h-6 w-6" />
                </a>
                <a href="#" class="hover:text-gray-300">
                  <TwitterIcon class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-600 pt-6 text-center text-sm">
            <p>© {{ new Date().getFullYear() }} Coppelmans Tuincentra. Alle rechten voorbehouden.</p>
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
  .coppelmans-product-page {
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