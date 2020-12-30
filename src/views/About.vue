<template>
    <div class="about bg-white pb-5">
        <b-row
      class="catbar border m-0 py-3 mb-3 shadow-sm rounded-bottom"
      align-h="between"
    >
      <b-col class="text-left text-uppercase font-weight-bold"
        >About company</b-col
      >
    </b-row>
        <b-row v-if="abouts" class="pl-5">
            <span v-html="abouts.content.rendered"></span>
            
        </b-row>

    </div>
</template>

<script>
import axios from 'axios'
    export default {

        data(){
            return{
                abouts: [],
            }
        },

        created(){
        axios
      .get("https://admin.mvgroup-cambodia.com//wp-json/wp/v2/posts/16")
      .then((response) => {
        this.abouts = response.data;
      });
        },

    }
   
</script>

<style scoped>
.rounded-bottom {
  border-bottom-left-radius: 1rem !important;
}

.catbar {
  background-color: #fff;
}
</style>