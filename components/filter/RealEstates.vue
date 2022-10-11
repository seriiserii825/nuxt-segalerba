<template>
  <div class="real-estates-container">
    <div class="loading" v-if="loading">
      <img src="~/assets/i/static/loading-500.svg" alt="">
    </div>
    <section class="real-estates" v-else>
      <div v-if="filtered.length > 0">
        <div class="real-estates__wrap" ref="real-estates">
          <real-estate
            v-for="item in filtered"
            :key="item.id"
            :title="item.attributes.title"
            :img="image(item.attributes.image)"
            :price="String(item.attributes.price)"
            :place="item.attributes.riferimento"
            :text="item.attributes.loop_text"
            :surface="item.attributes.area"
            :rooms="item.attributes.locali"
            :bathRooms="item.attributes.bagni"
          >
          </real-estate>
        </div>
      </div>
      <div v-else>
        <h2 class="real-estate__no-products">
          Nessun immobile corrisponde ai criteri di ricerca impostati.<br />
          Prova ad effettuare una nuova ricerca
        </h2>
      </div>
    </section>
  </div>
</template>
<script>
import RealEstate from "@/components/filter/RealEstate.vue";
export default {
  data() {
    return {
      filtered: [],
      site_url: process.env.siteUrl,
      loading: false,
    };
  },
  methods: {
    image(img) {
      if (img) {
        return this.site_url + img.data.attributes.url;
      } else {
        return "";
      }
    },
    async getImmobile() {
      this.loading = true;
      await this.$store.dispatch("immobile/fetchImmobile");
      this.filtered = this.$store.state.immobile.immobile.data;
      setTimeout(() => {
        this.loading = false;
      }, 600);
    },
  },
  created() {
    this.getImmobile();
  },
  components: {
    RealEstate,
  },
};
</script>
<style lang="scss"></style>
