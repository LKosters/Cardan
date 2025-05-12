<template>
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
                  >Bloemenwinkel</span
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

    <!-- Hero Section -->
    <section class="py-8 bg-[#fff9e6]">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Folder/Brochure -->
          <div class="md:w-2/3 bg-[#fff9e6] p-4 rounded-lg relative">
            <div class="relative">
              <img
                src="/bloemenwinkel/Folder-mockup-free-psd.jpg"
                alt="Bloemenwinkel folder"
                class="w-full h-auto rounded-lg shadow-lg"
              />
              <div class="absolute bottom-4 right-4 flex flex-col items-end">
                <h3 class="text-[#e4004f] text-2xl font-medium mb-2">
                  Bekijk de folder <span class="inline-block bg-[#e4004f] text-white rounded-full pl-2 pr-2 text-center">→</span>
                </h3>
                
              </div>
            </div>
          </div>

          <!-- Promotions -->
          <div class="md:w-1/3 flex flex-col gap-4">
            <!-- Promotion 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md relative">
              <img
                src="/bloemenwinkel/plant5.jpg"
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
                <img src="/bloemenwinkel/vippas.jpg" alt="VIPpas" class="w-full h-auto mb-2" />
                <h3 class="text-[#2d5741] font-medium">Alléén met je</h3>
                <p class="text-[#2d5741] text-xl font-bold">VIPPAS</p>
              </div>
              <div class="w-1/2 relative">
                <img
                  src="/bloemenwinkel/plant2.jpg"
                  alt="Gazonmax product"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute top-4 left-4 bg-[#e4004f] text-white rounded-full p-2 flex flex-col items-center"
                >
                  <span class="text-xl font-bold">20%</span>
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

          <!-- Categories Carousel -->
          <div class="flex overflow-x-auto gap-4 py-4 px-8">
            <!-- Category 1 -->
            <div class="min-w-[250px] flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-md relative">
                <img
                  src="/bloemenwinkel/tuinmeubel.jpg"
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
                <img src="/bloemenwinkel/bbq.jpg" alt="BBQ grill" class="w-full h-48 object-cover" />
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
                  src="/bloemenwinkel/kamerplant.jpg"
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
                  src="/bloemenwinkel/spel1.jpg"
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
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-[#2d5741] text-2xl font-bold">Aanbiedingen</h2>
          <div class="text-[#2d5741] text-sm">
            Bekijk alle aanbiedingen
          </div>
        </div>

        <div class="relative">
          <!-- Previous Button -->
          <div
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <span class="block w-6 h-6 text-[#2d5741] text-center">←</span>
          </div>

          <!-- Products Carousel -->
          <div class="flex overflow-x-auto gap-4 py-4 px-8">
            <!-- Product 1 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <img
                  src="/bloemenwinkel/vase.jpg"
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
                <img
                  src="/bloemenwinkel/plant3.jpg"
                  alt="Artificial tree"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Losse stekjes</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Stekjes
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">2,99</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <img
                  src="/bloemenwinkel/bloemenwinkel2.png"
                  alt="Ceramic pot"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Gevarieerde boeketten</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Sarah
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
                <img
                  src="/bloemenwinkel/plant1.jpg"
                  alt="Flowering plant"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Cactussen</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Cactus
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">3,99</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Product 5 -->
            <div class="min-w-[220px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <img
                  src="/bloemenwinkel/boeket.jpg"
                  alt="Ceramic pot"
                  class="w-full h-48 object-contain p-4"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Gevarieerde boeketten</p>
                  <h3 class="text-[#2d5741] font-medium text-sm mb-2">
                    Merel
                  </h3>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">19,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <div
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <span class="block w-6 h-6 text-[#2d5741] text-center">→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-8 bg-[#f0f5f0]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <!-- Link 1 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-3 w-24 h-24 rounded-full overflow-hidden">
              <img src="/bloemenwinkel/folder.jpg" alt="Folders" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">
              Folders
            </h3>
          </div>

          <!-- Link 2 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-3 w-24 h-24 rounded-full overflow-hidden">
              <img src="/bloemenwinkel/cadeaukaart.jpg" alt="Cadeaukaart" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">
              Cadeaukaart
            </h3>
          </div>

          <!-- Link 3 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-3 w-24 h-24 rounded-full overflow-hidden">
              <img src="/bloemenwinkel/blog.jpg" alt="Blog" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">Blog</h3>
          </div>

          <!-- Link 4 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-3 w-24 h-24 rounded-full overflow-hidden">
              <img src="/bloemenwinkel/vippas.jpg" alt="VIPpas" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-[#2d5741] font-medium uppercase text-sm">VIPpas</h3>
          </div>

          <!-- Link 5 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-3 w-24 h-24 rounded-full overflow-hidden">
              <img src="/bloemenwinkel/winkels.jpg" alt="Winkels" class="w-full h-full object-cover" />
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
                src="/bloemenwinkel/kamerplant2.jpg"
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
              <div
                class="bg-[#2d5741] text-white px-4 py-2 rounded-full text-sm inline-block"
              >
                Lees meer
              </div>
            </div>
          </div>

          <!-- Blog 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img
                src="/bloemenwinkel/scene1.jpg"
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
              <div
                class="bg-[#2d5741] text-white px-4 py-2 rounded-full text-sm inline-block"
              >
                Lees meer
              </div>
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
          <div
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <span class="block w-6 h-6 text-[#2d5741] text-center">←</span>
          </div>

          <!-- Products Carousel -->
          <div class="flex overflow-x-auto gap-4 py-4 px-8">
            <!-- Product 1 -->
            <div class="min-w-[280px] flex-shrink-0">
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <img
                  src="/bloemenwinkel/tuinmeubel2.jpg"
                  alt="Garden furniture"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Soho tuinset
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">499,00</span>
                    <span class="text-gray-400 line-through text-sm"
                      >699,00</span
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
                <img
                  src="/bloemenwinkel/tuinmeubel3.jpg"
                  alt="Lounge set"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Baltimore loungebank set
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
                <img
                  src="/bloemenwinkel/tuinmeubel4.jpg"
                  alt="Corner sofa"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">Rio loungebank</p>
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
                <img
                  src="/bloemenwinkel/kussen.jpg"
                  alt="Colorful cushions"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-500 text-xs mb-1">
                    Kussen gekleurd
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="text-[#e4004f] font-bold">24,99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <div
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <span class="block w-6 h-6 text-[#2d5741] text-center">→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- App Promotion -->
    <section class="py-12 bg-[#f0f5f0]">
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
              Krijg je de beste tips en adviezen rechtstreeks op je telefoon.
              Download onze app en ontdek alle voordelen.
            </p>
            <div class="flex gap-4">
              <div
                class="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <span class="text-xl">iOS</span>
                <div class="text-left">
                  <span class="text-xs block">Download on the</span>
                  <span class="font-medium">App Store</span>
                </div>
              </div>
              <div
                class="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <span class="text-xl">Android</span>
                <div class="text-left">
                  <span class="text-xs block">GET IT ON</span>
                  <span class="font-medium">Google Play</span>
                </div>
              </div>
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
                <div class="hover:underline"
                  >Alle vacatures</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Verkoop medewerker</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Kassa medewerker</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Logistiek medewerker</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Management</div
                >
              </li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h3 class="font-bold text-lg mb-4">Locaties Bloemenwinkel</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <div class="hover:underline"
                  >Nuenen</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Valkenswaard</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Helmond</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Eindhoven</div
                >
              </li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h3 class="font-bold text-lg mb-4">Klantenservice</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <div class="hover:underline"
                  >Contact</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Veelgestelde vragen</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Bezorging</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Retourneren</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Privacy</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Cookies</div
                >
              </li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div>
            <h3 class="font-bold text-lg mb-4">VIPpas</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <div class="hover:underline"
                  >Voordelen</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Aanvragen</div
                >
              </li>
              <li>
                <div class="hover:underline"
                  >Voorwaarden</div
                >
              </li>
            </ul>

            <h3 class="font-bold text-lg mt-6 mb-4">
              Blijf op de hoogte van de laatste trends
            </h3>
          </div>
        </div>

        <div class="border-t border-gray-600 pt-6 text-center text-sm">
          <p>
            © 2025 Bloemenwinkel. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
</template>

<script lang="ts" setup>
</script>
