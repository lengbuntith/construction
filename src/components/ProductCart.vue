<template>
    <div class="product-cart">
        <b-card-group deck class="my-2 pr-3">
      <b-card img-src="../assets/am-g001(6).png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick  </b-card-text>
      </b-card>

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e.
        </b-card-text>
      </b-card>

      <b-card img-src="../assets/am-mr001(3).png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick e
        </b-card-text>
      </b-card>

      <b-card img-src="../assets/am-mp001.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick          </b-card-text>
      </b-card>

    </b-card-group>
    </div>
</template>

<script>
    export default {
        props:['product']
        
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