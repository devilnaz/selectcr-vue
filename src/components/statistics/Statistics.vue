<style src="./statistics.scss" lang="scss"></style>

<template>
  <div class="statistics" v-if="data.statistics">
    <div class="column" v-for="(item, index) in data.statistics" :key="index">
      <h3 class="column__title">{{ item.title }}</h3>
      <ul class="column__list">
        <li class="column__item" v-for="(info, index) in item.list" :key="index">
          <div class="info-cell">
            <div class="info-cell__percentage">{{ info.percentage }}</div>
            <div class="info-cell__value">{{ info.value }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { sectionStore } from "../../stores/section";
const data = sectionStore();
</script>
