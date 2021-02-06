<template>
    <div>
    
        <PageBanner page-title="About Us" divider=">" />

        <div class="content">
            <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, saepe consectetur qui consequatur, laudantium cumque placeat quis fugit hic sit deleniti. Officiis tenetur quia beatae ipsum, tempora soluta exercitationem amet et voluptas assumenda architecto animi reiciendis. Quae quos illum labore quidem corporis aspernatur iusto obcaecati est esse molestiae natus omnis, ea placeat delectus numquam consequatur. Enim excepturi explicabo non quibusdam, assumenda ratione, eaque odit itaque ipsum iste natus. Voluptates alias ut totam, quos deleniti repellat dolorum sed autem ratione animi pariatur sequi minus doloremque temporibus numquam molestias fugiat labore aliquam libero voluptatum fugit sunt obcaecati. Cumque, maxime! Explicabo, sequi corporis.</p>
                </div>
                <div class="col-md-6">
                    <div>
                        <img src="https://kohire.com/img/dowloaded/about-us.png" alt="" class="container-fluid">
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageBanner from '../core/PageBanner';
export default {
    name: 'AboutUs',
    components: {
        PageBanner
    },
}
</script>
<style scoped>
    .content {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
