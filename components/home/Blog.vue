<template>
  <div class="blog">
    <div class="container-small">
      <div class="blog__header">
        <h2 class="blog__title">{{ latest_posts.title }}</h2>
        <nuxt-link class="link-arrow" to="/blog"> <span>{{ latest_posts.button_text }}</span>
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14.7891" r="14" fill="#FF8D00"></circle>
            <path d="M12 9.78906L17 15.2891L12 20.7891" stroke="white" stroke-width="2"></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="blog__wrap">
        <div class="blog__item">
          <a href="https://immobiliaresegalerba.it/genova-primo-semestre-2022/" class="blog__img">
            <img src="https://immobiliaresegalerba.it/wp-content/cache/thumb/0a/e55a9a9c927e20a_372x246.png" alt=""
                 loading="lazy" class="aligncenter" width="372" height="246"> </a>
          <div class="blog__data"><strong>mercato immobiliare</strong></div>
          <h3 class="blog__item-title">
            <a href="https://immobiliaresegalerba.it/genova-primo-semestre-2022/">Genova: bilancio immobiliare del primo
              semestre 2022</a>
          </h3>
          <!--<div class="blog__text">--><!--</div>-->
          <!--<div class="blog__author">Di <strong>--><!--</strong></div>-->
        </div>
        <div class="blog__item">
          <a href="https://immobiliaresegalerba.it/mercato-immobiliare-e-entroterra/" class="blog__img">
            <img src="https://immobiliaresegalerba.it/wp-content/cache/thumb/9a/7d5eff2fe0bd89a_372x246.png" alt=""
                 loading="lazy" class="aligncenter" width="372" height="246"> </a>
          <div class="blog__data"><strong>mercato immobiliare</strong></div>
          <h3 class="blog__item-title">
            <a href="https://immobiliaresegalerba.it/mercato-immobiliare-e-entroterra/">Mercato immobiliare: la sfida
              del recupero dell’entroterra.</a>
          </h3>
          <!--<div class="blog__text">--><!--</div>-->
          <!--<div class="blog__author">Di <strong>--><!--</strong></div>-->
        </div>
        <div class="blog__item">
          <a href="https://immobiliaresegalerba.it/quando-si-considera-pertinenziale-il-posto-auto/" class="blog__img">
            <img src="https://immobiliaresegalerba.it/wp-content/cache/thumb/9f/3214b6da8496f9f_372x246.png" alt=""
                 loading="lazy" class="aligncenter" width="372" height="246"> </a>
          <div class="blog__data"><strong>Compravendita</strong></div>
          <h3 class="blog__item-title">
            <a href="https://immobiliaresegalerba.it/quando-si-considera-pertinenziale-il-posto-auto/">Quando si
              considera pertinenziale il posto auto?</a>
          </h3>
          <!--<div class="blog__text">--><!--</div>-->
          <!--<div class="blog__author">Di <strong>--><!--</strong></div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  props: {
    latest_posts: {
      type: Object,
      default: () => {
      },
    },
  },
}
</script>
<style lang="scss">
</style>
