<template>
  <div id="app">
    
    <Header />
    
    <router-view></router-view>
  
    <Footer/>
    
  </div>
</template>

<script>
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import { ProductMixin } from "./mixins/ProductMixin";



export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mixins: [ProductMixin],
}
</script>
