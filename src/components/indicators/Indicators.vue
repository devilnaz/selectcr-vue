<template>
  <div class="wrapper-indicators">
    <div class="indicators" v-if="data">
      <div class="indicators__headlines">
        <div class="headlines__cell">Рост за 2019 год</div>
        <div class="headlines__cell">Центральная Россия</div>
        <div class="headlines__cell">Российская Федерация</div>
      </div>
      <div class="indicators__body">
        <ul class="indicators__list">
          <li class="indicators__item" v-for="(item, index) in data.indicators" :key="index">
            <img class="indicators__item-img" :src="require(`./../../assets/images/${item.img}`)" :alt="`icon-${data.indicators.length - index}`" />
            <div class="indicators__item-title">{{ item.title }}</div>
            <div class="indicators__item-percentage indicators__item-percentage_main">{{ item.percentage_main }}</div>
            <div class="indicators__item-percentage">{{ item.percentage }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style src="./indicators.scss" lang="scss"></style>

<script setup>
import { sectionStore } from "../../stores/section";
const data = sectionStore();
</script>
