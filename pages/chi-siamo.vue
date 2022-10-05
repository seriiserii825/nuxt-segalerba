<template>
  <div class="page-chi-siamo">
    <PageIntro v-if="chi_siamo.page_intro" :page_intro="chi_siamo.page_intro"/>
    <div class="container">
      <div class="site-bg site-bg--padding">
        <div class="content" v-if="chi_siamo.content" v-html="chi_siamo.content"></div>
        <section class="team">
          <h2 class="team-main__title" v-if="chi_siamo.title_1">{{ chi_siamo.title_1 }}</h2>
          <div class="team__wrap team__wrap--double" v-if="chi_siamo.team_1">
            <TeamItem v-for="team in chi_siamo.team_1" :key="team.id" :team="team"/>
          </div>
        </section>
        <section class="team-triple team " v-if="chi_siamo.team_2">
          <h2 class="team-main__title" v-if="chi_siamo.title_2">{{ chi_siamo.title_2 }}</h2>
          <div class="team__wrap team__wrap--double">
            <TeamItem v-for="team in chi_siamo.team_2" :key="team.id" :team="team"/>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import PageIntro from "../components/global/PageIntro";
import TeamItem from "../components/team/TeamItem";

export default {
  components: {TeamItem, PageIntro},
  layout: 'default',
  head() {
    return {
      title: this.chi_siamo.seo.title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "immobili",
        },
        {
          hid: "description",
          name: "description",
          content: this.chi_siamo.seo.text,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.chi_siamo.seo.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${process.env.siteUrl}${this.chi_siamo.seo.image.data.attributes.url}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.chi_siamo.seo.text,
        },
      ],
    };
  },
  async asyncData({store}) {
    let chi_siamo = null;

    if (!store.state.chi_siamo.chi_siamo) {
      await store.dispatch("chi_siamo/fetchChiSiamo");
      chi_siamo = store.state.chi_siamo.chi_siamo;
    }
    chi_siamo = store.state.chi_siamo.chi_siamo.data.attributes;

    return {
      chi_siamo: chi_siamo,
    };
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
}
</script>
