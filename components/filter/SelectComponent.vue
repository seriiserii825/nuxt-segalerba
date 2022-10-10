<template>
  <div class="select" :tabindex="tabIndex || -1" @focusout="handleFocusOut">
    <header class="select__header">
      <h3 v-if="title" class="select__title filter-title">
        <span class="select__span">{{ title }}</span>
      </h3>
      <div
        :class="{
          'is-active': isVisibleOptions,
        }"
        class="select-selected"
        @click="toggleIsVisibleOptions"
      >
        <span v-if="svg.length > 0" v-html="svg"></span>
        <span>{{ value }}</span>
      </div>
    </header>
    <ul
      class="select-options"
      v-if="isVisibleOptions"
      :class="{ overflow: options.length > 8 }"
    >
      <li
        v-for="item in options"
        :key="item[loopId]"
        class="select-options__item"
        @click="handleOptionClick({ id: item[id], label: item[label] })"
      >
        {{ item[label] }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    id: String,
    title: String,
    label: String,
    value: String | Number,
    svg: String,
    tabIndex: String,
    loopId: String,
  },
  data: function () {
    return {
      isVisibleOptions: false,
    };
  },
  methods: {
    toggleIsVisibleOptions() {
      this.isVisibleOptions = !this.isVisibleOptions;
    },
    handleOptionClick(value) {
      this.$emit("handle-func", value);
      this.isVisibleOptions = false;
    },
    handleFocusOut() {
      this.isVisibleOptions = false;
    },
  },
};
</script>
<style lang="scss"></style>
