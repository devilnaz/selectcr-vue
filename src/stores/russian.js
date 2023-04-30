import { defineStore } from "pinia";

export const sectionStore = defineStore("allData", {
  state: () => {
    return {
      indicators: [
        {
          img: "icon-05.svg",
          title: "Внешняя торговля",
          percentage_main: "+19.0 %",
          percentage: "+17.6 %",
        },
        {
          img: "icon-04.svg",
          title: "Инвестиции",
          percentage_main: "+8.9 %",
          percentage: "+4.3 %",
        },
        {
          img: "icon-03.svg",
          title: "Промышленность",
          percentage_main: "+7.5 %",
          percentage: "+2.9 %",
        },
        {
          img: "icon-02.svg",
          title: "Розничная торговля",
          percentage_main: "+4.0 %",
          percentage: "+2.6 %",
        },
        {
          img: "icon-01.svg",
          title: "Сельское хозяйство",
          percentage_main: "+3.1 %",
          percentage: "-0.6 %",
        },
      ],
      statistics: {
        money: {
          title: "Деньги",
          list: [
            { percentage: "73%", value: "финансовых влияний" },
            { percentage: "53%", value: "накопленных прямых иностранных инвестиций" },
            { percentage: "29%", value: "инвестиций в основной капитал" },
          ],
        },
        production: {
          title: "Производство",
          list: [
            { percentage: "35%", value: "валового регионального продукта" },
            { percentage: "35%", value: "обрабатывающей промышленности" },
            { percentage: "28%", value: "продукции сельского хозяйства" },
          ],
        },
        market: {
          title: "Рынок",
          list: [
            { percentage: "55%", value: "внешней торговли" },
            { percentage: "34%", value: "розничной торговли" },
          ],
        },
      },
    };
  },
});
