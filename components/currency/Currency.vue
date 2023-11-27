<template>
  <div class="currency-container">
    <div class="currencies-selected">
      <div
        v-for="currency in selectedCurrencies"
        :key="currency"
        class="selected-currency-item"
      >
        {{ currency }}
        <span class="crosssign_outer"></span>
        <span class="crosssign"  @click="removeCurrency(currency)">
          <div class="crosssign_circle"></div>
          <div class="crosssign_stem"></div>
          <div class="crosssign_stem2"></div>
        </span>
      </div>
    </div>
    <div class="available-currencies">
      <div 
      v-for="currency in currencies"
      class="currency-item"
      :class="{
          'currency-item-selected ' : isSelected(currency)
      }"
      @click="toggleCurrency(currency)" 
      >
        <input type="checkbox"  
        :key="currency"
        :checked="isSelected(currency)"
        />
        {{ currency }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const currencies = reactive(['EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB']);
const selectedCurrencies = reactive<string[]>([]);

const isSelected = (currency: string) => selectedCurrencies.includes(currency);

const toggleCurrency = (currency: string) => {
  const isSelected = selectedCurrencies.includes(currency);
  if (isSelected) {
    selectedCurrencies.splice(selectedCurrencies.indexOf(currency), 1);
  } else {
    selectedCurrencies.push(currency);
  }
};

const removeCurrency = (currency: string) => {
  selectedCurrencies.splice(selectedCurrencies.indexOf(currency), 1);
};
</script>

<style scoped>
.currency-item:focus,
.remove-button:focus {
  outline: none;
}
</style>