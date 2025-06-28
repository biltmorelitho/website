<template>
  <div>
    <div class="bg-background text-primary font-sans transition-main text-xl">
      <Header />

      <Head>
        <Title>Biltmore Litho</Title>
        <Meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <Meta name="description" content="Printing Business that offers services such as Business Cards, Brochures, Newsletters, Stationery, Continuous & NCR Forms, Booklets, Pamphlets, Digital & Offset Printing." />
        <Meta name="keywords" content="BiltmoreLitho, Papco, Business Cards, Brochures, Newsletters, Stationery, Continuous & NCR Forms, Booklets, Pamphlets, Digital & Offset Printing, Solomon, Padilla, Arizona, Phoenix" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <section class="mt-4 gap-5">
          <div class="flex flex-col items-center">
            <img class="h-[180px]" src="/lg-logo.png" alt="Biltmore Litho Logo" />
            <h1 class="font-bold mt-4 text-center text-5xl max-sm:text-5xl">Biltmore Litho</h1>
          </div>
          <p class="max-w-[440px] text-black text-center text-2xl">
            "At Biltmore Litho, excellence is our foundation. We deliver exceptional personal service, timely results, premium quality, and competitive pricing. Our commitment to you is absolute: if any error occurs, we'll rectify it immediately with a priority reprint at no cost—no questions asked."
          </p>
        </section>

        <section>
          <h2 class="mt-10 mb-4 text-5xl font-bold text-center">Services</h2>

          <ul class="text-3xl text-black text-center pb-8">
            <li>Business Cards</li>
            <li>Brochures</li>
            <li>Newsletters</li>
            <li>Stationery</li>
            <li>Booklets</li>
            <li>Pamphlets</li>
            <li>Digital & Offset Printing</li>
            <li>Continuous & NCR Forms</li>
          </ul>

          <nuxt-link to="https://papco.dcpromosite.com/p/catalog" target="_blank" rel="noopener noreferrer">
            <button class="button" role="button">View Promotional</button>
          </nuxt-link>
        </section>

        <section>
          <div class="relative">
            <h2 class="mt-10 mb-4 text-5xl font-bold text-center">Contact</h2>
            <ul class="text-black text-center mt-4 text-3xl max-sm:text-2xl">
              <li>biltmorelitho@gmail.com</li>
              <li class="pt-2">3612 North 7th Street </li>
              <li>Phoenix, Arizona 85014</li>
              <li class="pt-2">602 263-5637</li>
            </ul>
          </div>
        </section>

        <section>
          <button class="rotate-[7deg] flex flex-col justify-between card text-xs text-black cursor-pointer z-10 bg-[#f4f1eb] h-[200px] w-[350px] pt-3 p-2 shadow-custom hover:shadow-custom-hover transition-shadow duration-400">
            <div class="w-full flex items-center justify-between gap-1 text-2xl">
              <div class="text-xs">biltmorelitho.com</div>
              <div class="text-xs">602 263-5637</div>
            </div>

            <div class="w-full flex flex-col items-center">
              <img height="50" width="61" src="/logo.png" alt="Biltmore Litho Logo" />
              <b class="text-primary text-xl">Biltmore Litho</b>
            </div>
            
            <div class="w-full text-center">3612 North 7th Street Phoenix, Arizona 85014</div>
          </button>
        </section>

        <div class="text-3xl font-bold fixed right-[-30px] bottom-40 rotate-[-90deg] select-none transition-main text-dim-700 hover:text-dim-950 dark:text-dim-400 dark:hover:text-dim-200 max-sm:right-[-20px]">
          <span v-if="activeSection < offsets.length - 1" class="p-1 cursor-pointer" @click="scrollToSection(activeSection + 1, true)">
            <Icon name="grommet-icons:form-previous" /> Scroll Down
          </span>
          <span v-else class="p-1 cursor-pointer" @click="scrollToSection(0, true)">
            Scroll To Top <Icon name="grommet-icons:form-next" />
          </span>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
body {
  overflow: hidden;
}

section {
  @apply h-screen flex flex-col items-center justify-center max-w-[calc(100vw-50px)] mx-auto;
}

.button {
  background-color: #FFFFFF;
  border: 2px solid #D1D5DB;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 1.25rem 1.5rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:hover {
  background-color: rgb(249,250,251);
}

.button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button:focus-visible {
  box-shadow: none;
}
</style>

<script setup>
const store = useStore()
let inMove = false
const moveDelay = 400
let activeSection = ref(0)
let offsets = ref([])
let loadComponents = ref(false)
let touchStartY = 0

//Adds seo en language to the html element
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

onMounted(() => {
  calculateSectionOffsets()
  window.addEventListener('DOMMouseScroll', handleMouseWheelDOM);  // Mozilla Firefox
  window.addEventListener('mousewheel', handleMouseWheel, { passive: false }); // Other browsers
  window.addEventListener('touchstart', touchStart, { passive: false }); // mobile devices
  window.addEventListener('touchmove', touchMove, { passive: false }); // mobile devices
})

onBeforeUnmount(() => {
  window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox
  window.removeEventListener('mousewheel', handleMouseWheel, { passive: false });  // Other browsers
  window.removeEventListener('touchstart', touchStart); // mobile devices
  window.removeEventListener('touchmove', touchMove); // mobile devices
})

 /**
 * Calculates the absolute offsets of each section on the page and pushes it into the offsets array
 */
function calculateSectionOffsets() {
  let sections = document.getElementsByTagName('section')
  let length = sections.length
  
  for(let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop
    offsets.value.push(sectionOffset)
  }
}

/**
 * Handle the 'mousewheel' event for other browsers
 */
function handleMouseWheel(e) {
  if (e.wheelDelta < 30 && !inMove)
    moveUp()
  else if (e.wheelDelta > 30 && !inMove)
    moveDown()

  e.preventDefault()
  return false
}

/**
 * Handle the 'DOMMouseScroll' event for Firefox
*/
function handleMouseWheelDOM(e) {
  if (e.detail > 0 && !inMove) {
    moveUp()
  } else if (e.detail < 0 && !inMove) {
    moveDown()
  }
  
  return false
}

function moveDown() {
  inMove = true
  activeSection.value--
    
  if(activeSection.value < 0) 
    activeSection.value = 0
    
  scrollToSection(activeSection.value, true)
}

function moveUp() {
  inMove = true
  activeSection.value++
    
  if(activeSection.value > offsets.value.length - 1) 
    activeSection.value = offsets.value.length - 1
    
  scrollToSection(activeSection.value, true)
}

/**
 * Scrolls to the passed section id if the section exists and the delay is over
*/
function scrollToSection(id, force = false) {
  if(inMove && !force) 
    return false
  
  activeSection.value = id
  inMove = true
  // if(!hasBeenSeen.value.includes(id)) {
  //   hasBeenSeen.value.push(id)
  // }

  loadComponents.value = true
  
  // get section and scroll into view if it exists
  let section = document.getElementsByTagName('section')[id]
  if(section) {
    document.getElementsByTagName('section')[id].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', 'scroll-behavior': '(0.88,0,0.265,1)' })
  }
  
  setTimeout(() => {
    inMove = false
  }, moveDelay)
}

/**
 * Handles the 'touchstart' event on mobile devices
*/
function touchStart(e) {
  e.preventDefault()

  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  })
  
  e.target.dispatchEvent(clickEvent)
  touchStartY = e.touches[0].clientY
}

/**
 * Handles the 'touchmove' event on mobile devices
*/
function touchMove(e) {
  if(inMove) 
    return false
  e.preventDefault()
  
  const currentY = e.touches[0].clientY
  
  if(touchStartY < currentY)
    moveDown()
  else
    moveUp()
  
  touchStartY = 0
  return false
}
</script>
