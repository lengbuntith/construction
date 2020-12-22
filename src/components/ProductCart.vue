<template>
    <div class="product-cart">
        <b-card-group deck class="my-2 pr-3">
        <!-- <b-card-text>
          <router-link  :to="{ name: 'product-detail', params: { id: product.id } }">{{product.name}}</router-link>
       </b-card-text> -->

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e.
        </b-card-text>
      </b-card>

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e.
        </b-card-text>
      </b-card>

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e.
        </b-card-text>
      </b-card>

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e.
        </b-card-text>
      </b-card>

    </b-card-group>
    </div>
</template>

<script>
    export default {
      props: ["product"],
      data() {
        return {

        }
      }
        
    }
</script>

<style scoped>
    .card{
        padding: 20px;
    }

    .card-deck .card{
        margin-right: 0;
    }
</style>