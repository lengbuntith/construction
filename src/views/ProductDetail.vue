<template>
  <div class="product-detail bg-light p-4">
      <!-- <div v-for="pro in product" :key="pro.id">
          <div v-if="pro.id == $route.params.id">
            {{pro.id}} - {{pro.name}}
  
          </div>
      </div> -->
        
    <b-row class="border bg-white mx-2 font-weight-bold p-4"> Product Title </b-row>
    <b-row class="m-2 mt-1 bg-white">
      <b-col cols="4" class="border text-center p-4">
        <img src="../assets/am-g001(6).png" alt="" />
      </b-col>
      <b-col cols="8" class="border p-4">
        Title : Asiana M <br />
        Price : 0.00 <br />
        Code: : AM-G001 <br />
        Country: : Malaysia <br />
        Description: <br />
        Asiana M Silver Grey <br />
        Size : 315 x 415 mm <br />
        Thickness : 10 mm <br />
        Roof Pitch : 200 <br />
        Weight : 3 kg / pc <br />
        Pcs / m2 : 10.2 pcs <br />
        Rafter : 355 mm <br />
      </b-col>
    </b-row>

    <b-row class="p-4">
      <img class="pb-4" style="width:100%" src="../assets/big.png" alt="" />
      <img class="pb-4" style="witdh:100%" src="../assets/b2.png" alt="" />
    </b-row>
  </div>
</template>

<script>
export default {
  props:["id"],
  data(){
    return{
      product:[
        {id:1, name:'a'},
        {id:2, name:'b'},
        {id:4, name:'d'}
      ]
    }
  }
};
  

</script>

<style scoped>
</style>