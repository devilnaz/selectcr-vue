<style lang="scss" src="./assets/scss/style.scss"></style>

<template>
  <div class="selectcr-page__inner">
    <Header />
    <main class="content">
      <div class="section">
        <div class="section__inner">
          <h1 class="section__title">
            <span class="section__title_highlight">Центральная россия —</span> 1/3 экономики страны
          </h1>
          <div class="section__statistics">
            <Statistics />
          </div>
        </div>
        <div class="section__indicators">
          <Indicators :title="allData" />
        </div>
        <div class="section__inner">
          <div class="section__background">
            <div class="section__wrapper-image">
              <img class="section__image" src="./assets/images/central-russian.png" alt="Image: Central Russian" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/header/Header.vue";
import Indicators from "./components/indicators/Indicators.vue";
import Statistics from "./components/statistics/Statistics.vue";


</script>
