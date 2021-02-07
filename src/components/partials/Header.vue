<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Store</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/product">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about-us">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                Category
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Man</a></li>
                <li><a class="dropdown-item" href="#">Women</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Other Product</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="search">
            <input class="form-control me-2" v-model="keyword" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: '',
    }
  },
  methods : {
    search() {
          this.$http
                .get('http://localhost/agroStarLive/api/product/search/'+this.keyword)
                .then(response => {
                    this.$store.commit('setProduct', response.data);
                })
        },
  }
}
</script>

<style scoped>

</style>