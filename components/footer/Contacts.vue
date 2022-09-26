<template>
  <div class="address">
    <h2 class="main-footer__title">Contatti</h2>
    <div class="address__wrap">
      <div class="address__item">
        <ul>
          <li>
            <h3 v-if="option.short_company_name">{{ option.short_company_name }}</h3>
          </li>
          <li v-if="option.address">{{ option.address }}</li>
        </ul>
      </div>
      <div class="address__item">
        <ul class="contacts-list">
          <li>Tel:<a :href="`tel:+${phoneClear}`">{{ option.phone }}</a></li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26">
              <path style=" stroke: none; fill-rule: nonzero; fill: #ff8d00; fill-opacity: 1; "
                    d="M11.5 6.234c-3.73 0-6.766 3.004-6.773 6.696a6.59 6.59 0 0 0 1.039 3.558l.16.254-.684 2.469 2.563-.664.246.144a6.795 6.795 0 0 0 3.445.934h.004c3.727 0 6.844-3 6.844-6.691 0-1.786-.782-3.47-2.059-4.73a6.74 6.74 0 0 0-4.785-1.97zm3.98 9.57c-.171.47-.98.9-1.37.954-.65.097-1.153.047-2.442-.504-2.035-.871-3.371-2.902-3.473-3.035-.105-.133-.832-1.094-.832-2.082 0-.992.524-1.477.711-1.68a.75.75 0 0 1 .547-.254c.133 0 .27 0 .39.004.122.004.29-.047.458.344.168.402.574 1.394.625 1.496.05.101.086.215.015.348-.39.773-.808.742-.597 1.097.785 1.336 1.574 1.797 2.77 2.39.202.102.323.087.44-.05.118-.129.508-.59.641-.785.133-.203.274-.168.457-.102.184.067 1.188.555 1.39.657.208.101.34.148.392.23.046.098.046.504-.122.973zm5.055-14.179H2.465C1.105 1.625 0 2.719 0 4.063v17.875c0 1.343 1.105 2.437 2.465 2.437h18.07c1.36 0 2.465-1.094 2.465-2.438V4.063c0-1.343-1.105-2.437-2.465-2.437zm-9.039 19.36a8.253 8.253 0 0 1-3.894-.981l-4.317 1.121 1.156-4.176a7.948 7.948 0 0 1-1.09-4.027c.008-4.438 3.657-8.047 8.145-8.047 2.176 0 4.219.836 5.758 2.36 1.535 1.523 2.46 3.546 2.46 5.699 0 4.437-3.734 8.05-8.218 8.05zm0 0"></path>
            </svg>
            <a :href="`https://api.whatsapp.com/send?phone=${whatsupClear}`">{{ option.whatsup_number }}</a>
          </li>
          <li>
            Email: <a :href="`mailto:${option.email}`">{{ option.email }}</a>
          </li>
        </ul>
        <div v-html="option.hours"></div>
        <ul class="socials">
          <li>
            <a target="_blank" :href="option.facebook_url">
              <img
                  v-if="option.facebook_image"
                  :src="`${site_url}${option.facebook_image.data.attributes.url}`"
                  alt=""
              />
            </a>
          </li>
          <li>
            <a target="_blank" :href="option.instagram_url">
              <img
                  v-if="option.instagram_image"
                  :src="`${site_url}${option.instagram_image.data.attributes.url}`"
                  alt=""
              />
            </a>
          </li>
          <li>
            <a target="_blank" :href="option.linkedin_url">
              <img
                  v-if="option.linkedin_image"
                  :src="`${site_url}${option.linkedin_image.data.attributes.url}`"
                  alt=""
              />
            </a>
          </li>
          <li>
            <a target="_blank" :href="option.youtube_url">
              <img
                  v-if="option.youtube_image"
                  :src="`${site_url}${option.youtube_image.data.attributes.url}`"
                  alt=""
              />
            </a>
          </li>
          <li>
            <a target="_blank" :href="option.whatsup_url">
              <img
                  v-if="option.whatsup_image"
                  :src="`${site_url}${option.whatsup_image.data.attributes.url}`"
                  alt=""
              />
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contacts",
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
  computed: {
    phoneClear() {
      return this.option.phone.replace(/[^\d]/g, '');
    },
    whatsupClear() {
      return this.option.whatsup_number.replace(/[^\d]/g, '');
    },
  }
}
</script>
<style lang="scss">
</style>
