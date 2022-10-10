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
            <div
              class="filter__item"
              v-if="localita_immobile && localita_immobile.length > 0"
            >
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
            <div
              class="filter__item"
              v-if="zona_immobile && zona_immobile.length > 0"
            >
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
      localita_immobile: null,
      all_localita_immobile: null,
      zona_immobile: null,
      all_zona_immobile: null,
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
      this.localita = this.all_localita_immobile[0].title;
      this.province = value.label;
      console.log(this.localita, "this.localita");
      console.log(this.province, "this.province");
      this.setLocalitaOptionsByProvince();
    },
    setLocalita(value) {
      this.zona = this.all_zona_immobile[0].title;
      this.localita = value.label;
      this.setZonaOptionsByLocalita();
    },
    setZona(value) {
      this.zona = value.label;
    },
    setLocalitaOptionsByProvince() {
      if (this.province === this.provincia_immobile[0].title) {
        this.localita_immobile = this.all_localita_immobile;
      } else {
        this.provincia_immobile.forEach((item) => {
          if (item.title === this.province) {
            console.log(item.title, "item.title");
            console.log(this.province, "this.province");
            this.localita_immobile = item.children;
            console.log(this.localita_immobile, "this.localita_immobile");
          }
        });
      }
    },
    setZonaOptionsByLocalita() {
      if (this.localita === this.all_localita_immobile[0].title) {
        this.zona_immobile = this.all_zona_immobile;
      } else {
        this.localita_immobile.forEach((item) => {
          if (item.title === this.localita) {
            this.zona_immobile = item.zona.length > 0 ? item.zona : [this.all_zona_immobile[0]];
          } else {
            this.zona_immobile = [this.all_zona_immobile[0]];
          }
        });
      }
    },
    async setProvinceOptions() {
      await this.$store.dispatch("filters/fetchProvinciaImmobile");

      let provincia_immobile = this.$store.state.filters.provincia_immobile;
      provincia_immobile = provincia_immobile.data.map((item) => {
        let children = [];
        if (item.attributes.localita_immobiles.data.length) {
          item.attributes.localita_immobiles.data.forEach((item) => {
            this.localita_immobile.forEach((localita) => {
              if (localita.id === item.id) {
                children.push(localita);
              }
            });
          });
        }
        return {
          id: item.id,
          title: item.attributes.title,
          children: children,
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
        let children = [];
        if (
          item.attributes.zona_immobiles &&
          item.attributes.zona_immobiles.data.length
        ) {
          item.attributes.zona_immobiles.data.forEach((item) => {
            this.zona_immobile.forEach((zona) => {
              if (zona.id === item.id) {
                children.push(zona);
              }
            });
          });
        }
        return {
          id: item.id,
          title: item.attributes.title,
          zona: children,
        };
      });
      this.localita_immobile = [
        {
          id: "all",
          title: "Tutte",
        },
        ...this.localita_immobile,
      ];
      this.all_localita_immobile = this.localita_immobile;
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
      this.all_zona_immobile = this.zona_immobile;
    },
  },
  async created() {
    await this.setZoneOptions();
    await this.setLocalitaOptions();
    await this.setProvinceOptions();
  },
};
</script>
