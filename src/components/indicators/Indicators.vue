<template>
  <div class="indicators">
    <div class="indicators__headlines">
      <div class="headlines__cell">Рост за 2019 год</div>
      <div class="headlines__cell">Центральная Россия</div>
      <div class="headlines__cell">Российская Федерация</div>
    </div>
    <div class="indicators__body">
      <ul class="indicators__list">
        <li class="indicators__item">
          <img class="indicators__item-img" src="../../assets/images/icon-05.svg" alt="icon-05" />
          <div class="indicators__item-title">Внешняя торговля</div>
          <div class="indicators__item-percentage indicators__item-percentage_main">+19.0 %</div>
          <div class="indicators__item-percentage">+17.6 %</div>
        </li>
        <li class="indicators__item">
          <img class="indicators__item-img" src="../../assets/images/icon-04.svg" alt="icon-04" />
          <div class="indicators__item-title">Инвестиции</div>
          <div class="indicators__item-percentage indicators__item-percentage_main">+19.0 %</div>
          <div class="indicators__item-percentage">+17.6 %</div>
        </li>
        <li class="indicators__item">
          <img class="indicators__item-img" src="../../assets/images/icon-03.svg" alt="icon-03" />
          <div class="indicators__item-title">Промышленность</div>
          <div class="indicators__item-percentage indicators__item-percentage_main">+19.0 %</div>
          <div class="indicators__item-percentage">+17.6 %</div>
        </li>
        <li class="indicators__item">
          <img class="indicators__item-img" src="../../assets/images/icon-02.svg" alt="icon-02" />
          <div class="indicators__item-title">Розничная торговля</div>
          <div class="indicators__item-percentage indicators__item-percentage_main">+19.0 %</div>
          <div class="indicators__item-percentage">+17.6 %</div>
        </li>
        <li class="indicators__item">
          <img class="indicators__item-img" src="../../assets/images/icon-01.svg" alt="icon-01" />
          <div class="indicators__item-title">Сельское хозяйство</div>
          <div class="indicators__item-percentage indicators__item-percentage_main">+3.1 %</div>
          <div class="indicators__item-percentage">-0.6 %</div>
        </li>
      </ul>
    </div>
  </div>
  <div>
  </div>
</template>

<style src="./indicators.scss" lang="scss"></style>

<script setup>

const props = defineProps({
  title: Object,
});
</script>
