<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Cart List</li>
            <li class="list-group-item" v-for="(item ,index) in products" :key="index">
               <span class="float-left">{{ item.title }}</span>  -
                <span class="float-right ml-5">{{ item.price }}</span>
                <button class="btn btn-danger  ml-5" @click="removeItem(index)">X</button>
            </li>
            <li class="list-group-item">Total : {{ totalPrice }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Cart',

    data() {
        return {

        }
    },
    computed: {
        products() {
            return this.$store.getters.getCart
        },
        totalPrice() {
            let total = 0;
            this.products.forEach(item => {
                total += parseFloat(item.price);
            });
            return total;
        }
    },
    created() {
        console.log(this.cartData);
    },
    methods:{
        removeItem(index) {
            this.$store.commit('removeProduct', index);
        }
    }
}
</script>