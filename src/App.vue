<template>
  <div id="app" class="bg-light">
    <b-row style="background: #333333; font-size: 12px;" class="top text-light p-3 no-gutters">
      <b-container fluid="lg">
        <div class="row no-gutters">
          <div class="col-3">
            <a style="color: white; text-decoration: none;" href="tel:+855085555101" ><b-icon  icon="telephone" aria-hidden="true" variant="success" scale="1.4"></b-icon>
             <span class="ml-1" > Call us: +855 085 555 101</span></a>
             
          </div>
          <div class="col-4">
            <a style="color: white; text-decoration: none;" href="mailto:mv.buildingmaterial@gmail.com">  <b-icon icon="inbox" aria-hidden="true" variant="success" scale="1.4"></b-icon>
             <span class="ml-1"> Email us: mv.buildingmaterial@gmail.com</span></a>
           
          </div>
          <div class="col text-right" >
            <a href="https://www.facebook.com/MV.Trusted.Solution/"><b-icon  icon="facebook" class="mr-4" aria-hidden="true" variant="danger" scale="2"></b-icon></a>
            <a href="mailto:mv.buildingmaterial@gmail.com"><b-icon icon="google" aria-hidden="true" variant="danger" scale="2"></b-icon></a>
             
          </div>
        </div>
      </b-container>
    </b-row>
    <b-navbar class="bg-white shadow-sm" sticky >
      <b-container fluid="lg">

      
      <b-navbar-brand href="/" class=" font-weight-bold">
        <img src="./assets/logo.png" width="50px" class="my-1 ml-3" alt="" />
        MV BUILDING MATERAIL
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto text font-weight-bold">
          <b-nav-item to="/" class=" text-uppercase">home</b-nav-item>
          <b-nav-item to="/about" class=" text-uppercase">about</b-nav-item>
          <b-nav-item to="/service" class=" text-uppercase">service</b-nav-item>
          <b-nav-item to="/career" class=" text-uppercase">career</b-nav-item>
          <b-nav-item to="/our-event" class=" text-uppercase">event</b-nav-item>
          <b-nav-item  to="/contact-us" class=" text-uppercase">contact us</b-nav-item>
        
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>

    
    <b-container class="content" fluid="lg">
      <b-row class="no-gutters justify-content-center mt-1">
        <b-col class="sidebar border shadow-sm pb-3 rounded" cols="3">
          <b-col>
            <b-list-group class="mt-3 shadow">
              <div
                class="bg-danger text-center text-white font-weight-bold p-2"
              >
                Product by Category
              </div>
              <b-list-group-item
                v-for="probycat in probycats"
                :key="probycat.id"
                style="font-size: 15px"
                class="text-uppercase py-2"
                >{{ probycat.title }}</b-list-group-item
              >
            </b-list-group>
          </b-col>

          <b-col>
            <b-list-group class="mt-4 shadow">
              <div
                class="bg-danger text-center text-white font-weight-bold p-2"
              >
                Product by Country
              </div>
              <b-list-group-item
                v-for="probycountry in probycountrys"
                :key="probycountry.id"
                style="font-size: 15px"
                class="text-uppercase py-2"
                >{{ probycountry.title }}</b-list-group-item
              >
            </b-list-group>
          </b-col>

          <b-col>
            <b-list-group class="mt-4">
              <div
                class="shadow-sm bg-danger text-center text-white font-weight-bold p-2"
              >
                Product & Comapany
              </div>

              <img class="mt-2" src="./assets/butterfly.jpg" alt="" />
              <img class="mt-2" src="./assets/cpac.jpg" alt="" />
              <img class="mt-2" src="./assets/excella.jpg" alt="" />
              <img class="mt-2" src="./assets/gomdatviet.jpg" alt="" />
            </b-list-group>
          </b-col>
        </b-col>

        <b-col class="content p-0 no-gutters" cols="9">
          <router-view />
        </b-col>
      </b-row>
    </b-container>

    <div sticky class="footer row no-gutters mt-3 justify-content-center text-light p-4" style="background: #333333">
      © Copyright 2021. All rights reserved.
    </div>

  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "App",
  data() {
    return {
      probycats: [
        { id: 1, title: "Roof" },
        { id: 2, title: "Ceiling" },
        { id: 3, title: "wall and partition " },
        { id: 4, title: "Bathroom" },
        { id: 5, title: "decorative" },
        { id: 6, title: "Paint" },
        { id: 7, title: "Electrical" },
        { id: 8, title: "steel" },
        { id: 9, title: "cement" },
        { id: 10, title: "pvc pipe" },
        { id: 11, title: "sand" },
        { id: 12, title: "aggregate" },
        { id: 13, title: "Brick" },
        { id: 14, title: "home appliances" },
      ],

      probycountrys: [
        { id: 1, title: "Cambodia" },
        { id: 2, title: "Thailand" },
        { id: 3, title: "China" },
        { id: 4, title: "Indonesia" },
        { id: 5, title: "Vietnam" },
        { id: 6, title: "others" },
      ],

      probybrands: [
        { id: 1, title: "SCG" },
        { id: 2, title: "Diamond" },
        { id: 3, title: "Shera" },
        { id: 4, title: "Camel" },
        { id: 5, title: "Moolar" },
        { id: 6, title: "Kherko" },
        { id: 4, title: "HH" },
        { id: 5, title: "ZH" },
        { id: 6, title: "SMG" },
      ],
    };
  },
  components: {},
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}


.sidebar {
  background-color: firebrick;
}
</style>