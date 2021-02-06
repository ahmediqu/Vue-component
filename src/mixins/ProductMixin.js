export const ProductMixin = {
    data() {
        return {
          cart: [],
          product: []
        }
      },
      created() {
        this.getProduct();
      },
      computed: {
        products() {
          return this.$store.getters.getProducts
        }
      },
      methods: {
      
        test(product){
          this.cart.push(product);
        },
        getProduct() {
                this.$http
                .get('http://localhost/agroStarLive/api/product')
                .then(response => {
                    this.$store.commit('setProduct', response.data);
                    this.loading = false
                })
        },
        removeProduct(index) {
          this.cart.splice(index, 1);
        }
      }
}