<template>
  <div class="filter-wrap">
    <div class="container">
      <div class="preloader" :class="{ hide: !loading }"></div>
      <div class="filter__label">Trova il tuo immobile</div>
      <div class="filter home-intro__filter">
        <div class="filter-body">
          <div class="filter-block" id="residentiale"></div>
        </div>
      </div>
    </div>
    <div class="real-estates-container"></div>
  </div>
</template>
<script>
import Preloader from "~/components/filter/Preloader";
export default {
  name: "FilterComponent",
  data() {
    return {
      loading: false,
      site_url: process.env.siteUrl,
      provincia_immobile: null,
    };
  },
  components: {
    Preloader,
  },
  async created() {
    await this.$store.dispatch("filters/fetchProvinciaImmobile");
    this.provincia_immobile = this.$store.state.filters.provincia_immobile;

    await this.$store.dispatch("filters/fetchLocalitaImmobile");
    this.provincia_immobile = this.$store.state.filters.localita_immobile;

    await this.$store.dispatch("filters/fetchZonaImmobile");
    this.provincia_immobile = this.$store.state.filters.zona_immobile;
  },
};
</script>
