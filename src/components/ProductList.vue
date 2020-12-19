<template>
    <div class="products mt-2">
        <b-row class="bg-light border m-0 p-3" align-h="between">
            <b-col class="text-left">Category Title</b-col>
            <b-col class="text-right"><router-link class="text-danger" to="/product">View All</router-link></b-col>
        </b-row>
        <product-cart  />
    </div>
</template>

<script>
import ProductCart from './ProductCart.vue'
    export default {
  components: { ProductCart },
        data() {
            return{
                products: [
                    {
                        title: "Asiana M",
                        Price: 	0.00,
                        Code: "AM-G001",
                        Country: "Malaysia"
                    },

                     {
                        title: "Asiana A",
                        Price: 	0.00,
                        Code: "AM-G001",
                        Country: "Malaysia"
                    },

                     {
                        title: "Asiana b",
                        Price: 	0.00,
                        Code: "AM-G001",
                        Country: "Malaysia"
                    },

                     {
                        title: "Asiana x",
                        Price: 	0.00,
                        Code: "AM-G001",
                        Country: "Malaysia"
                    },

                ]
            }
        }
        
    }
</script>

<style scoped>

</style>