<template>
  <div class="bloemenwinkel-homepage">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Logo -->
          <div class="logo flex items-center mb-4 md:mb-0">
            <NuxtLink to="/" class="flex flex-col items-center md:items-start">
              <div class="flex items-center">
                <div class="w-6 h-6 bg-[#a02279] mr-1"></div>
                <span class="text-[#2d5741] text-3xl font-bold"
                  >Bloemenwinkel</span
                >
              </div>
              <span class="text-[#2d5741] text-sm"
                >tuincentrum vol groene ideeën</span
              >
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
              <button
                class="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
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
        <ul
          class="flex flex-wrap items-center justify-between md:justify-start"
        >
          <li class="py-4 px-2 md:px-4 relative group">
            <NuxtLink
              to="/assortiment"
              class="flex items-center text-[#2d5741] font-medium"
            >
              Assortiment
              <ChevronDownIcon class="h-4 w-4 ml-1" />
            </NuxtLink>
          </li>
          <li class="py-4 px-2 md:px-4">
            <NuxtLink to="/inspiratie" class="text-[#2d5741] font-medium"
              >Inspiratie</NuxtLink
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <NuxtLink to="/folders" class="text-[#2d5741] font-medium"
              >Folders</NuxtLink
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <NuxtLink to="/aanbiedingen" class="text-[#e4004f] font-medium"
              >Aanbiedingen</NuxtLink
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <NuxtLink to="/cadeaukaarten" class="text-[#2d5741] font-medium"
              >Cadeaukaarten</NuxtLink
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <NuxtLink to="/vippas" class="text-[#2d5741] font-medium"
              >VIPpas</NuxtLink
            >
          </li>
          <li class="py-4 px-2 md:px-4">
            <NuxtLink to="/vacatures" class="text-[#2d5741] font-medium"
              >Vacatures</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-8 bg-[#fff9e6]">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Folder/Brochure -->
          <div class="md:w-2/3 bg-[#fff9e6] p-4 rounded-lg relative">
            <div class="relative">
              <img
                src="/"
                alt="Bloemenwinkel folder"
                class="w-full h-auto rounded-lg shadow-lg"
              />
              <div class="absolute bottom-4 right-4 flex flex-col items-end">
                <h3 class="text-[#e4004f] text-2xl font-medium mb-2">
                  Bekijk de folder
                </h3>
                <button class="bg-[#e4004f] text-white rounded-full p-2">
                  <ArrowRightIcon class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Promotions -->
          <div class="md:w-1/3 flex flex-col gap-4">
            <!-- Promotion 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md relative">
              <img
                src="/"
                alt="Elderly couple looking at plants"
                class="w-full h-auto"
              />
              <div
                class="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md"
              >
                <div class="text-center">
                  <span class="text-[#e4004f] text-3xl font-bold">2</span>
                  <sup class="text-[#e4004f] text-xl font-bold">99</sup>
                </div>
              </div>
            </div>

            <!-- Promotion 2 -->
            <div class="bg-[#f0f5f0] rounded-lg overflow-hidden shadow-md flex">
              <div class="w-1/2 p-4 flex flex-col justify-center">
                <img src="/" alt="VIPpas" class="w-full h-auto mb-2" />
                <h3 class="text-[#2d5741] font-medium">Alléén met je</h3>
                <p class="text-[#2d5741] text-xl font-bold">VIPPAS</p>
              </div>
              <div class="w-1/2 relative">
                <img
                  src="/"
                  alt="Gazonmax product"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute top-4 left-4 bg-[#e4004f] text-white rounded-full p-2 flex flex-col items-center"
                >
                  <span class="text-xl font-bold">20%</span>
                  <span class="text-xs">KORTING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Favorite Categories -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="text-center mb-6">
          <h2 class="text-[#2d5741] text-2xl font-bold">
            Favoriete categorieën
          </h2>
        </div>

        <div class="relative">
          <!-- Previous Button -->
          <button
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon class="h-6 w-6 text-[#2d5741]" />
          </button>

          <!-- Categories Carousel -->
          <div class="flex overflow-x-auto gap-4 py-4 px-8">
            <!-- Category 1 -->
            <div class="min-w-[250px] flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-md relative">
                <img
                  src="/"
                  alt="Hanging egg chair"
                  class="w-full h-48 object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 text-center"
                >
                  <h3 class="text-[#2d5741] font-medium">Tuinmeubelen</h3>
                </div>
              </div>
            </div>

            <!-- Category 2 -->
            <div class="min-w-[250px] flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-md relative">
                <img src="/" alt="BBQ grill" class="w-full h-48 object-cover" />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 text-center"
                >
                  <h3 class="text-[#2d5741] font-medium">Barbecues</h3>
                </div>
              </div>
            </div>

            <!-- Category 3 -->
            <div class="min-w-[250px] flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-md relative">
                <img
                  src="/"
                  alt="Houseplant"
                  class="w-full h-48 object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 text-center"
                >
                  <h3 class="text-[#2d5741] font-medium">Kamerplanten</h3>
                </div>
              </div>
            </div>

            <!-- Category 4 -->
            <div class="min-w-[250px] flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-md relative">
                <img
                  src="/"
                  alt="Puzzles and games"
                  class="w-full h-48 object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 text-center"
                >
                  <h3 class="text-[#2d5741] font-medium">Spellen</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <button
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon class="h-6 w-6 text-[#2d5741]" />
          </button>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-[#2d5741] text-2xl font-bold">Aanbiedingen</h2>
          <NuxtLink to="/aanbiedingen" class="text-[#2d5741] text-sm">
            Bekijk alle aanbiedingen
          </NuxtLink>
        </div>

        <div class="relative">
          <!-- Previous Button -->
          <button
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon class="h-6 w-6 text-[#2d5741]" />
          </button>

          <!-- Products Carousel -->
          <div class="flex overflow-x-auto gap-4 py-4 px-8">
            <!-- Product 1 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Concrete pot"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Decoratieve pot van...
                  </p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Betonnen pot
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">109,00</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Artificial tree"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Kunstplant in pot</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Kunstboom
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">9,99</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Ceramic pot"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Pot keramiek blauw</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Keramische pot
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">19,00</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 4 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Flowering plant"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Bloeiende tuinplant</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Viooltjes
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">8,99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <button
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon class="h-6 w-6 text-[#2d5741]" />
          </button>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-8 bg-[#f0f5f0]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <!-- Link 1 -->
          <div class="flex flex-col items-center">
            <div class="bg-[#f8d7d7] rounded-full p-6 mb-3">
              <FileTextIcon class="h-8 w-8 text-[#2d5741]" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">
              Folders
            </h3>
          </div>

          <!-- Link 2 -->
          <div class="flex flex-col items-center">
            <div class="bg-[#e8e1f4] rounded-full p-6 mb-3">
              <GiftIcon class="h-8 w-8 text-[#2d5741]" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">
              Cadeaukaart
            </h3>
          </div>

          <!-- Link 3 -->
          <div class="flex flex-col items-center">
            <div class="bg-[#ffeeb3] rounded-full p-6 mb-3">
              <NewspaperIcon class="h-8 w-8 text-[#2d5741]" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">Blog</h3>
          </div>

          <!-- Link 4 -->
          <div class="flex flex-col items-center">
            <div class="bg-[#d7f0dd] rounded-full p-6 mb-3">
              <CreditCardIcon class="h-8 w-8 text-[#2d5741]" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">VIPpas</h3>
          </div>

          <!-- Link 5 -->
          <div class="flex flex-col items-center">
            <div class="bg-[#d7f0dd] rounded-full p-6 mb-3">
              <StoreIcon class="h-8 w-8 text-[#2d5741]" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">
              Winkels
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="text-center mb-6">
          <h2 class="text-[#2d5741] text-2xl font-bold">Blogs</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Blog 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img
                src="/"
                alt="Indoor plants"
                class="w-full h-64 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-[#e4004f] text-white text-xs px-3 py-1 rounded-full"
              >
                Kamerplanten
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[#2d5741] font-bold text-xl mb-2">
                Fris je kamerplanten op
              </h3>
              <p class="text-gray-600 mb-4">
                Kamerplanten hebben ook in de winter zorg en aandacht nodig.
                Lees hier hoe je jouw groene vrienden fris en gezond houdt
                tijdens de koude maanden.
              </p>
              <button
                class="bg-[#2d5741] text-white px-4 py-2 rounded-full text-sm"
              >
                Lees meer
              </button>
            </div>
          </div>

          <!-- Blog 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img
                src="/"
                alt="Insect hotel"
                class="w-full h-64 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-[#e4004f] text-white text-xs px-3 py-1 rounded-full"
              >
                Tuintips
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[#2d5741] font-bold text-xl mb-2">
                11 tips voor een bijvriendelijke tuin
              </h3>
              <p class="text-gray-600 mb-4">
                Tuinplanten zijn niet alleen mooi voor het oog, maar ook
                belangrijk voor bijen en andere insecten. Ontdek hoe je jouw
                tuin bijvriendelijk maakt.
              </p>
              <button
                class="bg-[#2d5741] text-white px-4 py-2 rounded-full text-sm"
              >
                Lees meer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Products -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="text-center mb-6">
          <h2 class="text-[#2d5741] text-2xl font-bold">Populaire artikelen</h2>
        </div>

        <div class="relative">
          <!-- Previous Button -->
          <button
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon class="h-6 w-6 text-[#2d5741]" />
          </button>

          <!-- Products Carousel -->
          <div class="flex overflow-x-auto gap-4 py-4 px-8">
            <!-- Product 1 -->
            <div class="min-w-[280px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Garden furniture"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Soho 2-zits loungebank
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">1.499,00</span>
                    <span class="text-gray-400 line-through text-sm"
                      >1.699,00</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="min-w-[280px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Lounge set"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Baltimore 5-delig loungebank
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">1.199,00</span>
                    <span class="text-gray-400 line-through text-sm"
                      >1.399,00</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="min-w-[280px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Corner sofa"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Rio hoek loungebank</p>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">1.299,00</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 4 -->
            <div class="min-w-[280px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <button class="absolute top-2 right-2 z-10">
                  <HeartIcon class="h-5 w-5 text-gray-400" />
                </button>
                <img
                  src="/"
                  alt="Colorful cushions"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Kussen 45 x 45 gekleurd
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">24,99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <button
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon class="h-6 w-6 text-[#2d5741]" />
          </button>
        </div>
      </div>
    </section>

    <!-- App Promotion -->
    <section class="py-12 bg-[#f0f5f0]">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <img
              src="/"
              alt="Mobile app"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="md:w-1/2">
            <h2 class="text-[#2d5741] text-2xl font-bold mb-4">
              Maak het hier een stuk leuker met onze tuincentra groene vingers!
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
            <h3 class="font-bold text-lg mb-4">Vacatures</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink to="/vacatures" class="hover:underline"
                  >Alle vacatures</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/vacatures/verkoop" class="hover:underline"
                  >Verkoop medewerker</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/vacatures/kassa" class="hover:underline"
                  >Kassa medewerker</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/vacatures/logistiek" class="hover:underline"
                  >Logistiek medewerker</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/vacatures/management" class="hover:underline"
                  >Management</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h3 class="font-bold text-lg mb-4">Locaties Bloemenwinkel</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink to="/winkels/nuenen" class="hover:underline"
                  >Nuenen</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/winkels/valkenswaard" class="hover:underline"
                  >Valkenswaard</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/winkels/helmond" class="hover:underline"
                  >Helmond</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/winkels/eindhoven" class="hover:underline"
                  >Eindhoven</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h3 class="font-bold text-lg mb-4">Klantenservice</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink to="/contact" class="hover:underline"
                  >Contact</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/faq" class="hover:underline"
                  >Veelgestelde vragen</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/bezorging" class="hover:underline"
                  >Bezorging</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/retourneren" class="hover:underline"
                  >Retourneren</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/privacy" class="hover:underline"
                  >Privacy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/cookies" class="hover:underline"
                  >Cookies</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div>
            <h3 class="font-bold text-lg mb-4">VIPpas</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink to="/vippas" class="hover:underline"
                  >Voordelen</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/vippas/aanvragen" class="hover:underline"
                  >Aanvragen</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/vippas/voorwaarden" class="hover:underline"
                  >Voorwaarden</NuxtLink
                >
              </li>
            </ul>

            <h3 class="font-bold text-lg mt-6 mb-4">
              Blijf op de hoogte van de laatste trends
            </h3>
            <div class="flex space-x-3">
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
          <p>
            © {{ new Date().getFullYear() }} Bloemenwinkel. Alle rechten
            voorbehouden.
          </p>
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
.Bloemenwinkel-homepage {
  font-family: "Arial", sans-serif;
}

/* Hide scrollbar for the carousels */
.flex.overflow-x-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.flex.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
