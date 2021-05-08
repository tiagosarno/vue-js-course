<template>
  <div class="border-progress">
    <span>{{ progress }} %</span>
    <div class="bar" :style="{width: progress + '%'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
  .border-progress {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 10px;
    width: 80%;
    height: 40px;
  }
  .border-progress span {
    color: white;
    z-index: 1;
    font-size: 1.5rem;
  }
  .bar {
    position: absolute;    
    background-color: green;
    border-radius: 10px;
    height: 100%;
    align-self: flex-start;
  }
</style>