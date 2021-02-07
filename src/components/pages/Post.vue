<template>
    <div class="container my-5">
        <div class="newpost">
            <a href="#" class="text-danger p-5" id="new-post-link">Create a new post</a>
        </div>
        <conditional-element when-hidden="#new-post-link">
            <button class="btn btn-danger rounded postBtn" type="button">+</button>
        </conditional-element>
    </div>
</template>
<script>
export default {
    name: 'Post',
}
</script>
<style scoped>
    .newpost{
        height: 1000px;
        width: 100%;
        background: lightcyan;
        position: relative;
    }
    .postBtn{
        position: fixed;
        right: 10%;
        bottom: 10%;
    }
</style>