<template>
  <div>
    <img src="../../../assets/img/temp/temp_01.jpg" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
  .demo_ul { overflow: hidden; }
  .demo_ul > li {
    overflow: hidden;
    height: 40px; line-height: 40px; vertical-align: middle;
    padding: 0 10px; margin-bottom: 5px;
    background-color: #fdfdfd;
    -webkit-animation: fadeInRight .4s ease-out both;
    -o-animation: fadeInRight .4s ease-out both;
    animation: fadeInUp .4s ease-out both;
  }
  .demo_ul > li:nth-child(1){  -webkit-animation-delay: .2s; animation-delay: .2s; }
  .demo_ul > li:nth-child(2){  -webkit-animation-delay: .4s; animation-delay: .4s; }
  .demo_ul > li:nth-child(3){  -webkit-animation-delay: .6s; animation-delay: .6s; }
  .demo_ul > li:nth-child(4){  -webkit-animation-delay: .8s; animation-delay: .8s; }
  .demo_ul > li:nth-child(5){  -webkit-animation-delay: 1s; animation-delay: 1s; }

  .demo_ul > li:hover {
    background-color: #f6f6f6;
  }
  .demo_ul > li:hover .demo_li_ii {
    animation: anDowloadIcon 1.8s linear both infinite;
  }
  @keyframes anDowloadIcon {
    0% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
    50% { -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 30%, 0); }
    51%{-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -30%, 0); }
    100%{ opacity: 1; -webkit-transform:translate3d(0, 0, 0); transform:translate3d(0, 0, 0); }
  }
  .demo_li_ii {
    font-size: 20px;
    position: relative; top: 2px;
    padding-left: 20px;
  }
  .sl-mian-title {
    font-size: 28px; color: #1f2f3d; font-weight: 400;
  }
  .sl-mian-title2 {
    font-size: 24px; color: #1f2f3d; font-weight: 400;
  }
  .sl-mian-text {
    padding: 5px 0 20px 2px;
    animation: fadeIn 1s ease-out .5s both;
  }
</style>
