<template>
        
        <!-- <b-card-text>
          <router-link  :to="{ name: 'product-detail', params: { id: product.id } }">{{product.name}}</router-link>
       </b-card-text> -->
    
      <b-card class="col ml-3 p-3 shadow-sm bg-white" img-src="../assets/am-g001(6).png" img-alt="Card image" img-top>
        <b-card-text>
          <router-link style="color: black; text-decoration: none;" :to="{name: 'product-detail', params: {id: product.id}}" > {{product.name}}  </router-link>
        </b-card-text>
      </b-card>

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
    
</style>