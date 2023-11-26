<template>
  <div class="currency-container">
    <div class="currencies-selected">
      <div
        v-for="currency in selectedCurrencies"
        :key="currency"
        class="selected-currency-item p-2 m-1 bg-blue-500 text-white rounded flex items-center justify-between"
      >
        {{ currency }}
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
import { ref } from 'vue';

const currencies = ref(['EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB']);
const selectedCurrencies = ref<string[]>([]);

const isSelected = (currency: string) => {
  return selectedCurrencies.value.includes(currency);
}

const toggleCurrency = (currency: string) => {
  const index = selectedCurrencies.value.indexOf(currency);
  if (index >= 0) {
    selectedCurrencies.value.splice(index, 1);
  } else {
    selectedCurrencies.value.push(currency);
  }
}

const removeCurrency =(currency: string) => {
  const index = selectedCurrencies.value.indexOf(currency);
  if (index >= 0) {
    selectedCurrencies.value.splice(index, 1);
  }
}
</script>

<style scoped>
.currency-item:focus {
  outline: none;
}
.remove-button:focus {
  outline: none;
}
</style>
