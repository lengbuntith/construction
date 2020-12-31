<template>
    <div class="career bg-white pb-5">
        <b-row
      class="catbar border m-0 py-3 mb-3 shadow-sm rounded-bottom"
      align-h="between"
    >
      <b-col class="text-left text-uppercase font-weight-bold"
        >contact us</b-col
      >
    </b-row>
        <b-row v-if="contacts" class="pl-5">
            <!-- {{careers.title.rendered}} -->
            <span v-html="contacts"></span>
            
        </b-row>

        
    </div>
</template>

<script>
import axios from 'axios'
    export default {

        data(){
            return{
                contacts: ''
            }
        },

        created(){
        axios
      .get("https://admin.mvgroup-cambodia.com//wp-json/wp/v2/posts/18")
      .then((response) => {
        this.contacts = response.data.content.rendered;
      });
        }


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