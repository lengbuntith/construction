<template>
  <div class="home pl-3">
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

    <b-row class="bg-light border m-0 p-3" align-h="between">
      <b-col class="text-left">Category Title</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" to="/category"
          >View All</router-link
        ></b-col
      >
    </b-row>

    <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
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
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
        { id: 4, name: "d" },
      ],
    };
  },
};
</script>
