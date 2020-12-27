<template>
  <div class="serivce bg-white pb-5">
    <b-row
      class="catbar border m-0 py-3 mb-3 shadow-sm rounded-bottom"
      align-h="between"
    >
      <b-col class="text-left text-uppercase font-weight-bold"
        >our service</b-col
      >
    </b-row>

    <b-row class="px-4">
      <b-card class="m-2 shadow text-white bg-success">
        <b-card-text> Architectural design service </b-card-text>
      </b-card>
      <b-card class="m-2 shadow text-white bg-danger">
        <b-card-text> Construction service </b-card-text>
      </b-card>
      <b-card class="m-2 shadow text-white bg-primary">
        <b-card-text>  Interior design service </b-card-text>
      </b-card>

      <b-card class="m-2 shadow text-white bg-danger">
        <b-card-text> Roof solution service </b-card-text>
      </b-card>

      <b-card class="m-2 shadow text-white bg-success">
        <b-card-text> wall and partition service  </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rounded-bottom {
  border-bottom-left-radius: 1rem !important;
}

.catbar {
  background-color: #fff;
}
</style>