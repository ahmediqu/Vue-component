<template>
<div>
    <PageBanner page-title="Products"/>
    <div class="container">
        <div class="row" v-if="!loading">
            <div class="col-md-8">
                <div class="row">
                    <div v-for="(product, index)  in products"  :key="index" class="col-md-3 my-2">
                <div class="card text-center">
                    <router-link :to="{path: 'product/' + product.id}">
                        <img src="https://www.roudstudio.com/images/works/product-photo/img03.jpg" class="card-img-top" alt="...">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text text-muted"> {{ product.price}} </p>
                        <button @click="addToCart(product)" class="btn btn-primary">Add to cart</button>
                    </div>
                    </div>
            </div>
                </div>
            </div>
            <div class="col-md-4">
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
import { ProductMixin } from "../../mixins/ProductMixin";
import PageBanner from '../core/PageBanner';
import Cart from '../../components/ecommerce/Cart';
import Loading from '../core/Loading';
export default {
    name: 'Product',
    mixins: [ProductMixin],
    components: {
        PageBanner,
        Loading,
        Cart
    },
    data() {
        return {
           loading: true,
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product)
        }
    }
}
</script>
<style scoped>
    .card img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>