<template>
    <div class="page-banner">
        <h3> {{ pageTitle }} </h3>
    </div>
</template>
<script>
export default {
    name: 'PageBanner',
    props: {
        pageTitle: {
            required: true,
            type: String
        }
    }
}
</script>
<style scoped>
    .page-banner{
        height: 20vh;
        display: flex;
        align-items: center;
        background: darkslategrey;
        color: white;
    }
</style>