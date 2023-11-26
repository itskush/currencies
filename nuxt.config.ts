export default defineNuxtConfig({
  routeRules:{
    '/': { redirect: '/currency' }, 
  },
  css: [
    "@/assets/styles/styles.scss",
  ],
  devtools: { enabled: true }
})
