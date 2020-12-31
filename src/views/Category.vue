<template>
  <div class="category bg-white">
    <b-row
      class="catbar border m-0 py-3 shadow-sm rounded-bottom"
      align-h="between"
    >
      <b-col class="text-left text-uppercase font-weight-bold"
        >Category Title</b-col
      >
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 pl-3">
      <b-card
        v-for="product in products"
        :key="product.id"
        class="ml-3 p-3 mb-3 shadow-sm bg-white"
        img-src="../assets/am-g001(6).png"
        img-alt="Card image"
        img-top
      >
        <b-card-text>
          <router-link
            style="color: black; text-decoration: none"
            :to="{ name: 'product-detail', params: { id: product.id } }"
          >
            {{ product.name }}
          </router-link>
        </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
  data() {
    return {
      products: [
        { id: 1, name: "aAsiana M" },
        { id: 2, name: "Asiana Mb" },
        { id: 3, name: " Asiana Mc" },
        { id: 4, name: "Asialna M d" },
        { id: 5, name: "aAsiana M" },
        { id: 6, name: "Asiana Mb" },
        { id: 7, name: " Asiana Mc" },
        { id: 8, name: "Asiana M d" },
        { id: 9, name: "aAsiana M" },
        { id: 10, name: "Asiana Mb" },
        { id: 11, name: " Asiana Mc" },
        { id: 12, name: "Asiana M d" },
        { id: 13, name: "aAsiana M" },
        { id: 14, name: "Asiana Mb" },
        { id: 15, name: " Asiana Mc" },
        { id: 16, name: "Asiana M d" },
       
       
       
      ],
    };
  },
};
</script>

<style scoped>

.rounded-bottom {
  border-bottom-left-radius: 1rem !important;
}

.catbar {
  background-color: #fff;
}
</style>