<template>
    <div class="container testimonial" id="testimonial">
        <div class="row">
            <div class="col">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <scroll-link href="#top" class="text-danger">Go top</scroll-link>
                <dropdown>
                    <template v-slot:trigger>
                        <button class="btn btn-default">...</button>
                    </template>
                    <li> <a href="#">Privency</a></li>
                    <li> <a href="#">Privency</a></li>
                    <li> <a href="#">Privency</a></li>
                    <li> <a href="#">Privency</a></li>
                </dropdown>
            </div>
        
            <div class="col">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <dropdown>
                    <template v-slot:trigger>
                        <a href="#">Click here for dropdown</a>
                    </template>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </dropdown>
            </div>
        
            <div class="col">
                <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
        
            <div class="col">
                <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Testimonial'
}
</script>
<style scoped>
    .testimonial {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
