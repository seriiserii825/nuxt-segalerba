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
            <div
              class="filter__item"
              v-if="tipo_immobile && tipo_immobile.length > 0"
            >
              <select-component
                tab-index="1"
                :options="tipo_immobile"
                id="id"
                title="Tipo di immobile"
                label="title"
                :value="tipo"
                @handle-func="setTipo"
                loop-id="id"
                svg=""
              ></select-component>
            </div>
            <div
              class="filter__item"
              v-if="contrato_immobiles && contrato_immobiles.length > 0"
            >
              <select-component
                tab-index="1"
                :options="contrato_immobiles"
                id="id"
                title="Tipo contrato"
                label="title"
                :value="contrato"
                @handle-func="setContrato"
                loop-id="id"
                svg=""
              ></select-component>
            </div>
            <div class="filter__item">
              <input-component
                tabindex="6"
                type="text"
                title="Riferimento"
                @handle-func="setRif"
                svg=""
                placeholder="Tutti"
              >
              </input-component>
            </div>
            <div
              class="filter__item"
              v-if="residenziale_immobiles && residenziale_immobiles.length > 0"
            >
              <select-component
                tab-index="1"
                :options="residenziale_immobiles"
                id="id"
                title="Residenziale"
                label="title"
                :value="residenziale"
                @handle-func="setResidenziale"
                loop-id="id"
                svg=""
              ></select-component>
            </div>
            <div class="filter__item filter__item--flex">
              <select-component
                tab-index="8"
                :options="mq_min_list"
                id="id"
                loop-id="id"
                title="Mq min"
                label="label"
                :value="mq_min_list_current"
                @handle-func="setMqMinList"
                svg=""
              >
              </select-component>
              <select-component
                tab-index="9"
                :options="mq_max_list"
                id="id"
                loop-id="id"
                title="Mq max"
                label="label"
                :value="mq_max_list_current"
                @handle-func="setMqMaxList"
                svg=""
              >
              </select-component>
            </div>
            <div class="filter__item filter__item--flex">
              <select-component
                tab-index="8"
                :options="price_min_list"
                id="id"
                loop-id="id"
                title="Prezzo da"
                label="label"
                :value="price_min_list_current"
                @handle-func="setPriceMin"
                svg=""
              >
              </select-component>
              <select-component
                tab-index="9"
                :options="price_max_list"
                id="id"
                loop-id="id"
                title="Prezzo a"
                label="label"
                :value="price_max_list_current"
                @handle-func="setPriceMax"
                svg=""
              >
              </select-component>
            </div>
            <button
              @click.prevent="onFilterSubmit"
              class="filter__submit filter__item"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="7.5" stroke="white" stroke-width="3" />
                <line
                  x1="15.0607"
                  y1="14.9393"
                  x2="19.0607"
                  y2="18.9393"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
              <strong>Cerca</strong>
            </button>
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
import InputComponent from "~/components/filter/InputComponent";
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
      tipo_immobile: null,
      tipo: "Tutti",
      contrato_immobiles: null,
      contrato: "Tutti",
      riferimento: "",
      residenziale_immobiles: null,
      residenziale: "Tutti",
      mq_min_list: null,
      mq_min_list_current: null,
      mq_max_list: null,
      mq_max_list_current: null,
      price_min_list: null,
      price_min_list_current: null,
      price_max_list: null,
      price_max_list_current: null,
    };
  },
  components: {
    Preloader,
    SelectComponent,
    InputComponent,
  },
  methods: {
    setProvince(value) {
      this.localita = this.all_localita_immobile[0].title;
      this.province = value.label;
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
    setTipo(value) {
      this.tipo = value.label;
    },
    setContrato(value) {
      this.contrato = value.label;
    },
    setRif(value) {
      this.riferimento = value;
    },
    setResidenziale(value) {
      this.residenziale = value.label;
    },
    setMqMinList(value) {
      this.mq_min_list_current = value.id;
    },
    setMqMaxList(value) {
      this.mq_max_list_current = value.id;
    },
    setPriceMin(value) {
      this.price_min_list_current = value.id;
    },
    setPriceMax(value) {
      this.price_max_list_current = value.id;
    },
    setLocalitaOptionsByProvince() {
      if (this.province === this.provincia_immobile[0].title) {
        this.localita_immobile = this.all_localita_immobile;
      } else {
        this.provincia_immobile.forEach((item) => {
          if (item.title === this.province) {
            this.localita_immobile = item.children;
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
            this.zona_immobile =
              item.zona.length > 0 ? item.zona : [this.all_zona_immobile[0]];
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
    async setTipoImmobile() {
      await this.$store.dispatch("filters/fetchTipoImmobile");
      this.tipo_immobile = this.$store.state.filters.tipo_immobile;
      this.tipo_immobile = this.tipo_immobile.data.map((item) => {
        return {
          id: item.id,
          title: item.attributes.title,
        };
      });
      this.tipo_immobile = [
        {
          id: "all",
          title: "Tutti",
        },
        ...this.tipo_immobile,
      ];
    },
    async setContratoImmobile() {
      await this.$store.dispatch("filters/fetchContratoImmobile");
      this.contrato_immobiles = this.$store.state.filters.contrato_immobiles;
      this.contrato_immobiles = this.contrato_immobiles.data.map((item) => {
        return {
          id: item.id,
          title: item.attributes.title,
        };
      });
      this.contrato_immobiles = [
        {
          id: "all",
          title: "Tutti",
        },
        ...this.contrato_immobiles,
      ];
    },
    async setResidenzialeImmobile() {
      await this.$store.dispatch("filters/fetchResidenzialeImmobile");
      this.residenziale_immobiles =
        this.$store.state.filters.residenziale_immobiles;
      this.residenziale_immobiles = this.residenziale_immobiles.data.map(
        (item) => {
          return {
            id: item.id,
            title: item.attributes.title,
          };
        }
      );
      this.residenziale_immobiles = [
        {
          id: "all",
          title: "Tutti",
        },
        ...this.residenziale_immobiles,
      ];
    },
    setMqMaxListOptions() {
      this.mq_min_list = [
        {
          id: "all",
          title: "Tutti",
        },
        ...this.mq_min_list,
      ];
    },
    onFilterSubmit() {},
  },
  async created() {
    await this.setZoneOptions();
    await this.setLocalitaOptions();
    await this.setProvinceOptions();
    await this.setTipoImmobile();
    await this.setContratoImmobile();
    await this.setResidenzialeImmobile();
    const mq_list = [
      {
        id: 0,
        label: "0",
      },
      {
        id: 20,
        label: "20 mq",
      },
      {
        id: 40,
        label: "40 mq",
      },
      {
        id: 60,
        label: "60 mq",
      },
      {
        id: 80,
        label: "80 mq",
      },
      {
        id: 100,
        label: "100 mq",
      },
      {
        id: 120,
        label: "120 mq",
      },
      {
        id: 140,
        label: "140 mq",
      },
      {
        id: 160,
        label: "160 mq",
      },
      {
        id: 180,
        label: "180 mq",
      },
      {
        id: 200,
        label: "200 mq",
      },
      {
        id: 201,
        label: "> 201 mq",
      },
    ];
    this.mq_min_list = mq_list;
    this.mq_min_list_current = this.mq_min_list[0].id;
    this.mq_max_list = mq_list;
    this.mq_max_list_current = this.mq_max_list[0].id;

    const price_list = [
      {
        id: 0,
        label: "Tutti",
      },
      {
        id: 20000,
        label: "20.000 €",
      },
      {
        id: 30000,
        label: "30.000 €",
      },
      {
        id: 40000,
        label: "40.000 €",
      },
      {
        id: 50000,
        label: "50.000 €",
      },
      {
        id: 60000,
        label: "60.000 €",
      },
      {
        id: 70000,
        label: "70.000 €",
      },
      {
        id: 80000,
        label: "80.000 €",
      },
      {
        id: 90000,
        label: "90.000 €",
      },
      {
        id: 100000,
        label: "100.000 €",
      },
      {
        id: 120000,
        label: "120.000 €",
      },
      {
        id: 140000,
        label: "140.000 €",
      },
      {
        id: 160000,
        label: "160.000 €",
      },
      {
        id: 180000,
        label: "180.000 €",
      },
      {
        id: 200000,
        label: "200.000 €",
      },
      {
        id: 220000,
        label: "220.000 €",
      },
      {
        id: 240000,
        label: "240.000 €",
      },
      {
        id: 260000,
        label: "260.000 €",
      },
      {
        id: 280000,
        label: "280.000 €",
      },
      {
        id: 300000,
        label: "300.000 €",
      },
      {
        id: 320000,
        label: "320.000 €",
      },
      {
        id: 340000,
        label: "340.000 €",
      },
      {
        id: 360000,
        label: "360.000 €",
      },
      {
        id: 380000,
        label: "380.000 €",
      },
      {
        id: 400000,
        label: "400.000 €",
      },
      {
        id: 420000,
        label: "420.000 €",
      },
      {
        id: 440000,
        label: "440.000 €",
      },
      {
        id: 460000,
        label: "460.000 €",
      },
      {
        id: 480000,
        label: "480.000 €",
      },
      {
        id: 500000,
        label: "500.000 €",
      },
      {
        id: 550000,
        label: "550.000 €",
      },
      {
        id: 600000,
        label: "600.000 €",
      },
      {
        id: 650000,
        label: "650.000 €",
      },
      {
        id: 700000,
        label: "700.000 €",
      },
      {
        id: 750000,
        label: "750.000 €",
      },
      {
        id: 800000,
        label: "800.000 €",
      },
      {
        id: 850000,
        label: "850.000 €",
      },
      {
        id: 900000,
        label: "900.000 €",
      },
      {
        id: 1000000,
        label: "1000.000 €",
      },
      {
        id: 1500000,
        label: "1500.000 €",
      },
      {
        id: 2000000,
        label: "2000.000 €",
      },
      {
        id: 2500000,
        label: "2500.000 €",
      },
      {
        id: 3000000,
        label: "3000.000 €",
      },
      {
        id: 3500000,
        label: "3500.000 €",
      },
      {
        id: 4000000,
        label: "4000.000 €",
      },
      {
        id: 4500000,
        label: "4500.000 €",
      },
      {
        id: 5000000,
        label: "5000.000 €",
      },
    ];

    this.price_min_list = price_list;
    this.price_min_list_current = this.price_min_list[0].id;
    this.price_max_list = price_list;
    this.price_max_list_current = this.price_max_list[0].id;
  },
};
</script>
