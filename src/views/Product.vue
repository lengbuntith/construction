<template>
  <div class="product mb-5 ">

    <b-row
      class="catbar border m-0 py-3  shadow-sm rounded-bottom"
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
        class="col ml-3 p-3 shadow-sm bg-white"
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

    <b-row
      class="catbar border m-0 py-3 mt-5 shadow-sm rounded-bottom"
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
        class="col ml-3 p-3 shadow-sm bg-white"
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

    <b-row
      class="catbar border m-0 py-3 mt-5 shadow-sm rounded-bottom"
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
        class="col ml-3 p-3 shadow-sm bg-white"
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

    <b-row
      class="catbar border m-0 py-3 mt-5 shadow-sm rounded-bottom"
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
        class="col ml-3 p-3 shadow-sm bg-white"
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
        { id: 4, name: "Asiana M d" },
       
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