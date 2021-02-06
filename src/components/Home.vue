<template>
    <div>
      <HeroArea />
      <Testimonial />
    </div>
</template>

<script>
import HeroArea from './sections/HeroArea'
import Testimonial from './sections/Testimonial'
export default {
  name: 'Home',
  components: {
    HeroArea,
    Testimonial
  }
  
}
</script>
<style scoped>

</style>
