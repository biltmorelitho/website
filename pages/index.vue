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
        <section class="gap-5">
          <div class="flex flex-col items-center">
            <img class="h-[180px]" src="/lg-logo.png" alt="Biltmore Litho Logo" />
            <h1 class="font-bold mt-4 text-center text-5xl max-sm:text-5xl">Biltmore Litho</h1>
          </div>
          <p class="max-w-[440px] text-black text-center text-2xl">
            "At Biltmore Litho, excellence is our foundation. We deliver exceptional personal service, timely results, premium quality, and competitive pricing. Our commitment to you is absolute: if any error occurs, we'll rectify it immediately with a priority reprint at no cost—no questions asked."
          </p>

          <nuxt-link to="https://papco.dcpromosite.com/p/catalog" target="_blank" rel="noopener noreferrer">
            <button class="button" role="button">View Promotional</button>
          </nuxt-link>
        </section>

        <section>
          <h2 class="mt-10 mb-4 text-5xl font-bold text-center">Services</h2>

          <ul class="text-3xl text-black text-center">
            <li>Business Cards</li>
            <li>Brochures</li>
            <li>Newsletters</li>
            <li>Stationery</li>
            <li>Booklets</li>
            <li>Pamphlets</li>
            <li>Digital & Offset Printing</li>
            <li>Continuous & NCR Forms</li>
          </ul>
        </section>

        <section>
          <div class="relative">
            <h2 class="mt-10 mb-4 text-5xl font-bold text-center">Contact</h2>
            <ul class="text-black text-center mt-4 text-3xl max-sm:text-2xl">
              <li>biltmorelitho@gmail.com</li>
              <li class="pt-2">3612 North 7th Street </li>
              <li>Phoenix, Arizona 85014</li>
              <li class="pt-2">Phone: 602 263-5637</li>
              <li>Fax: 602 263-8141</li>
            </ul>
          </div>
        </section>

        <section>
          <button class="rotate-[7deg] flex flex-col justify-between card text-xs text-black cursor-pointer z-10 bg-[#f4f1eb] h-[200px] w-[350px] pt-3 p-2 shadow-custom hover:shadow-custom-hover transition-shadow duration-400">
            <div class="flex items-center justify-between gap-1 text-2xl">
              <div class="text-xs">biltmorelitho.com</div>
              <div class="text-xs">602 263-5637</div>
            </div>

            <div class="flex flex-col items-center">
              <img height="50" width="61" src="/logo.png" alt="Biltmore Litho Logo" />
              <b class="text-primary text-xl">Biltmore Litho</b>
            </div>
            
            <div>3612 North 7th Street Phoenix, Arizona 85014</div>
          </button>
        </section>
      </main>
    </div>
  </div>
</template>

<style>
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

</script>
