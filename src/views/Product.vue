<template>
    <div class="product pl-3">
    <b-row class="bg-light border m-0 p-3" align-h="between" v-for="probycat in probycats" :key="probycat.id">
      <b-col class="text-left">{{probycat.catname}}</b-col>
      <b-col class="text-right"
        ><router-link class="text-danger road" 
          :to="{ name: 'category', params: { id: probycat.id } }"  >View All</router-link
        ></b-col

      >
    </b-row>

    <!-- <b-card-group deck class="my-2 pr-3">
        <b-card-text>
          <router-link  :to="{ name: 'product-detail', params: { id: product.id } }">{{product.name}}</router-link>
       </b-card-text>

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e.
        </b-card-text>
      </b-card>

    </b-card-group> -->
    </div>
</template>

<script>

    export default {
        name: 'Product',
        components: {
        },
       data() {
    return {
      allproduct: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
        { id: 4, name: "d" },
      ],

      probycats: [
          {catid: 1, catname: "aaa"},
          {catid: 2, catname: "bbb"},
          {catid: 3, catname: "ccc"}
      ]
    };
  },
    }
</script>

<style scoped>

</style>