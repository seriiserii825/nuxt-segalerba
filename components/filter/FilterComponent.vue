<template>
  <div class="filter-wrap">
    <div class="container">
      <div class="preloader" :class="{ hide: !loading }"></div>
      <div class="filter__label">Trova il tuo immobile</div>
      <div class="filter home-intro__filter">
        <div class="filter-body">
          <div class="filter-block" id="residentiale">
            <div
              class="filter__item"
              v-if="provincia_immobile && provincia_immobile.length > 0"
            >
              <select-component
                tab-index="1"
                :options="provincia_immobile"
                id="id"
                title="Provincia"
                label="title"
                :value="province"
                @handle-func="setProvince"
                loop-id="id"
                svg=""
              ></select-component>
            </div>
            <div class="filter__item">
              <select-component
                tab-index="1"
                :options="localita_immobile"
                id="id"
                title="Località"
                label="title"
                :value="localita"
                @handle-func="setLocalita"
                loop-id="id"
                svg=""
              ></select-component>
            </div>
            <div class="filter__item">
              <select-component
                tab-index="1"
                :options="zona_immobile"
                id="id"
                title="Zona"
                label="title"
                :value="zona"
                @handle-func="setZona"
                loop-id="id"
                svg=""
              ></select-component>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="real-estates-container"></div>
  </div>
</template>
<script>
import Preloader from "~/components/filter/Preloader";
import SelectComponent from "~/components/filter/SelectComponent";
export default {
  name: "FilterComponent",
  data() {
    return {
      loading: false,
      site_url: process.env.siteUrl,
      provincia_immobile: null,
      default_provincia_immobile: null,
      localita_immobile: null,
      default_localita_immobile: null,
      zona_immobile: null,
      province: "Tutte",
      localita: "Tutte",
      zona: "Tutte",
    };
  },
  components: {
    Preloader,
    SelectComponent,
  },
  methods: {
    setProvince(value) {
      this.province = value.label;
    },
    setLocalita(value) {
      this.localita = value.label;
    },
    setZona(value) {
      this.zona = value.label;
    },
    async setProvinceOptions() {
      await this.$store.dispatch("filters/fetchProvinciaImmobile");
      let provincia_immobile = this.$store.state.filters.provincia_immobile;
      provincia_immobile = provincia_immobile.data.map((item) => {
        return {
          id: item.id,
          title: item.attributes.title,
          children: item.attributes.localita_immobiles.data,
        };
      });
      this.provincia_immobile = [
        {
          id: "all",
          title: "Tutte",
          children: null,
        },
        ...provincia_immobile,
      ];
    },
    async setLocalitaOptions() {
      await this.$store.dispatch("filters/fetchLocalitaImmobile");
      this.localita_immobile = this.$store.state.filters.localita_immobile;
      this.localita_immobile = this.localita_immobile.data.map((item) => {
        return {
          id: item.id,
          title: item.attributes.title,
        };
      });
      this.localita_immobile = [
        {
          id: "all",
          title: "Tutte",
        },
        ...this.localita_immobile,
      ];
    },
    async setZoneOptions() {
      await this.$store.dispatch("filters/fetchZonaImmobile");
      this.zona_immobile = this.$store.state.filters.zona_immobile;
      this.zona_immobile = this.zona_immobile.data.map((item) => {
        return {
          id: item.id,
          title: item.attributes.title,
        };
      });
      this.zona_immobile = [
        {
          id: "all",
          title: "Tutte",
        },
        ...this.zona_immobile,
      ];
    },
  },
  created() {
    this.setProvinceOptions();
    this.setLocalitaOptions();
    this.setZoneOptions();
  },
};
</script>
