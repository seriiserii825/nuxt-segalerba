<template>
  <header class="header">
    <div class="header__top">
      <div class="header__container">
        <ul class="header__contacts">
          <li class="header__contacts-item">
            <a target="_blank" ref="noopener" :href="`mailto:${option.email}`">
              <div class="header__contacts-text">
                <span>Scrivici all'indirizzo: </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: #ff8d00;
                      fill-opacity: 1;
                    "
                    d="M29.43 11.18c.23-.18.57-.012.57.273v11.985a2.81 2.81 0 0 1-2.813 2.812H2.813A2.81 2.81 0 0 1 0 23.437v-11.98c0-.289.336-.453.57-.273 1.309 1.02 3.055 2.32 9.028 6.66 1.234.902 3.324 2.797 5.402 2.785 2.094.023 4.219-1.918 5.406-2.785 5.977-4.34 7.715-5.645 9.024-6.664zM15 18.75c1.36.027 3.316-1.71 4.3-2.426 7.774-5.644 8.368-6.133 10.16-7.539.34-.265.54-.672.54-1.105V6.563a2.81 2.81 0 0 0-2.813-2.813H2.813A2.81 2.81 0 0 0 0 6.563v1.109c0 .441.2.84.54 1.113 1.792 1.402 2.386 1.895 10.16 7.54.984.714 2.94 2.452 4.3 2.425zm0 0"
                  ></path>
                </svg>
                <span>{{ option.email }}</span>
              </div>
            </a>
          </li>
        </ul>
        <HeaderSocials :option="option" />
      </div>
    </div>
    <div class="header__content">
      <div class="site-branding header__logo">
        <img
          v-if="option.logo"
          :src="`${site_url}${option.logo.data.attributes.url}`"
          alt="Logo"
        />
      </div>
      <HeaderMenu />
      <!-- .site-branding -->
      <a v-if="option.phone" :href="`tel:${phoneClear}`" class="header-phone">
        <div class="header-phone__icon">
          <svg
            width="23"
            height="28"
            viewBox="0 0 23 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.27503 0.500056C2.34858 0.500056 2.41601 0.500056 2.48343 0.518475L7.50351 2.03498C8.15937 2.23145 8.57618 3.10329 8.55779 3.76023L8.44133 7.48089C8.46585 8.75794 7.91419 8.99125 6.87217 9.24912L4.72684 9.53768L4.99654 11.0358C5.34592 13.4241 6.14889 15.2169 7.68127 17.329C9.39141 19.2998 10.9422 20.4786 13.2162 21.3934L14.6505 22.0258L15.4719 20.0488C15.9807 19.1217 16.3178 18.6551 17.5805 18.9928L21.295 19.7971C21.9508 19.9383 22.6986 20.5462 22.7293 21.2154L22.999 26.3359C23.0296 26.913 22.3799 27.3735 21.3133 27.4472C14.9509 27.9138 8.48424 25.2799 4.24874 19.9445V19.926C0.0132317 14.5968 -1.02266 7.78787 0.993956 1.85079C1.28817 0.991232 1.78467 0.493916 2.27503 0.500056Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <span class="header-phone__text">{{ option.phone }}</span>
      </a>
    </div>
  </header>
</template>
<script>
import HeaderSocials from "~/components/navigation/HeaderSocials.vue";
import HeaderMenu from "~/components/navigation/HeaderMenu.vue";
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
  computed: {
    phoneClear() {
      return this.option.phone.replace(/[^\d]/g, '');
    },
  },
  components: {
    HeaderSocials,
    HeaderMenu,
  },
};
</script>
