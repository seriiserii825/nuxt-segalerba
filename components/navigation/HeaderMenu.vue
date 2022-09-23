<template>
  <div class="header__menu menu">
    <div class="menu__icon icon-menu">
      <span></span> <span></span> <span></span>
    </div>
    <nav class="menu__body">
      <ul id="js-main-menu" class="menu__list">
        <li
          id="menu-item-105"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-102 current_page_item menu-item-105"
        >
          <nuxt-link to="/" aria-current="page">Home</nuxt-link>
        </li>
        <li
          id="menu-item-98"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"
        >
          <nuxt-link to="/immobili">Immobili</nuxt-link>
        </li>
        <li
          id="menu-item-302"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-302"
        >
          <nuxt-link to="/servizi">Servizi</nuxt-link>
        </li>
        <li
          id="menu-item-301"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-301"
        >
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li
          id="menu-item-300"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-300"
        >
          <nuxt-link to="/chi-siamo">Chi siamo</nuxt-link>
        </li>
        <li
          id="menu-item-93"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"
        >
          <nuxt-link to="/contatti">Contatti</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderMenu'
};
</script>
