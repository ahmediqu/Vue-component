<template>
    <nav class="py-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="mx-3"> {{ divider }}</li>
            <li class="breadcrumb-item active" aria-current="page">{{ pageTitle }}</li>
        </ol>
    </nav>
</template>
<script>
export default {
    name: '',
    props: {
        pageTitle: {
            required: true,
            type: String
        },
        divider: {
            required: true,
            type: String
        }
    }
}
</script>
<style scoped>
    a{
        text-decoration: none;
    }
</style>