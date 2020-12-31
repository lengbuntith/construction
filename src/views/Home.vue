<template>
  <div class="home">
    <b-carousel 
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      
    >
      <b-carousel-slide
      
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>

    <b-row class="catbar border m-0 py-3   shadow-sm rounded-bottom" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">Rood Material</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>


    <b-row class="catbar border m-0 p-3  rounded-bottom mt-5 shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">ceiling</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">wall and partition</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">bathroom meterial</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">decorative</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">paint</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">steel</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">cement</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">pvc pipe</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">sand</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">aggregate</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">brick</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>

    <b-row class="catbar border m-0 p-3 mt-5 rounded-bottom shadow-sm" align-h="between">
      <b-col class="text-left text-uppercase font-weight-bold">home appliances</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <b-row class="mt-3 mr-1 mb-5 pl-3">
      <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </b-row>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCart from "../components/ProductCart";

export default {
  name: "Home",
  components: {
    ProductCart,
  },
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
    border-bottom-left-radius: 1rem!important;
}

.catbar{
  background-color: #fff;
  
}
</style>