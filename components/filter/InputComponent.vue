<template>
  <div class="input">
    <h3 class="select__title filter-title">
      <span class="select__span">{{ title }}</span>
    </h3>
    <div class="input__footer">
      <div v-if="svg" class="svg" v-html="svg"></div>
      <input
        :tabindex="tabindex"
        :placeholder="placeholder"
        :min="type === 'number' ? 0 : ''"
        :type="type"
        @change="handleOptionChange"
        v-model="value"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    svg: String,
    type: String,
    placeholder: String,
    tabindex: String,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleOptionChange() {
      this.$emit("handle-func", this.value);
    },
  },
};
</script>
<style lang="scss"></style>
