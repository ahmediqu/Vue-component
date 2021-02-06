<template>
    <div class="my-5">
        <div class="container">
            <div v-if="!loading" class="row">
                <div class="col-md-6">
                    <img src="https://www.roudstudio.com/images/works/product-photo/img03.jpg" class="card-img-top px-4" alt="...">
                </div>
                <div class="col-md-3">
                    <h3>{{ product.title }}</h3>
                    <router-link to="/" class="text-muted p"> {{ product.category.name }}</router-link>
                    <p class="mb-0">{{product.price}} BDT</p>
                    <button class="btn btn-info" @click="addToCart(product)">Add To Cart</button>
                </div>
                <div class="col-md-3">
                    <Cart />
                </div>
            </div>
            <div v-else>
                <Loading />
            </div>
        </div>
    </div>
</template>
<script>
import Loading from '../core/Loading';
import Cart from '../ecommerce/Cart';
export default {
    name: 'ProductDetails',
    components: {
        Loading,
        Cart
    },
    data() {
        return{
            product: null,
            loading: true,
        }
    },
    created() {
        this.getProduct();
    },
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product);
        },
        getProduct() {
            this.$http.get('http://localhost/agroStarLive/api/product/'+this.$route.params.id)
            .then(response => {
                this.product = response.data;
                this.loading = false;
            })
        }
    }
}
</script>
<style scoped>
    .card-img-top {
        height: 400px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>