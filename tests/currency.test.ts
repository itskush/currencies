import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CurrencyComponent from '../components/currency/Currency.vue'

describe('CurrencyComponent', () => {
    it('import as expected', async () => {
        const cmp  = await import('../components/currency/Currency.vue')
        expect(cmp).toBeDefined()
    })
    it('renders three available currencies', () => {
        const wrapper = mount(CurrencyComponent)
        expect(wrapper.text()).toContain('EUR')
        expect(wrapper.text()).toContain('PLN') 
        expect(wrapper.text()).toContain('USD') 
    })
    it('renders the correct number of available currencies', () => {
        const wrapper = mount(CurrencyComponent)  
        const currencyItems = wrapper.findAll('.currency-item');
        expect(currencyItems.length).toBe(9);
    });

    it('selects a currency when clicked', async () => {
        const wrapper = mount(CurrencyComponent)  
        const currencyItem = wrapper.find('.currency-item');
        await currencyItem.trigger('click');
        expect(wrapper.vm.selectedCurrencies).toContain('EUR');
      });
    
      it('adds currency on click', async () => {
        const wrapper = mount(CurrencyComponent)  
        await wrapper.find('.currency-item').trigger('click') 
        expect(wrapper.find('.selected-currency-item').exists()).toBe(true)
      })
    
      it('removes currency on cross click', async () => {
        const wrapper = mount(CurrencyComponent)  
        await wrapper.find('.currency-item').trigger('click')
        await wrapper.find('.crosssign').trigger('click')
        expect(wrapper.find('.selected-currency-item').exists()).toBe(false) 
      }) 
})