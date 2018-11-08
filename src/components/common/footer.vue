<template>
  <div class="tv-footer">
    <div class="tv-footer-container as-width clearfix">
      <ul class="tv-footer-l">
        <li>关于奥昇</li>
        <li class="tv-footer-li"><a>公司简介</a></li>
        <li class="tv-footer-li"><a>业务范围</a></li>
        <li class="tv-footer-li"><a>产品介绍</a></li>
        <li class="tv-footer-li"><a>企业文化</a></li>
        <li class="tv-footer-li"><a>团队建设</a></li>
      </ul>
      <ul class="tv-footer-l">
        <li>更多链接</li>
        <li class="tv-footer-li"><a>商务合作</a></li>
        <li class="tv-footer-li"><a>常见问题</a></li>
        <li class="tv-footer-li"><a>常见反馈</a></li>
        <li class="tv-footer-li"><a>联系我们</a></li>
      </ul>
      <div class="tv-footer-r">
        <p>&copy; 奥昇信息 版权所有。<a>使用条数</a></p>
        <p>* 条款说明条款说明条款说明条款说明条款说明条款说明</p>
        <p>条款说明条款说明条款说明条款说明条款说明条款说明条款说明</p>
        <p>湘ICP证080678号湘ICP备09040564号湘公安备11010502027</p>
        <p>奥昇信息技术有限公司（长沙）</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {}
  },
  mounted () {
  },
  methods: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tv-footer{
    width: 100%;
    background: #666;
  }
  .tv-footer-container {
    height: 280px;
    margin: 0 auto;
    color: #fff;
  }
  .tv-footer-l{
    float: left;
    padding-top: 51px;
    margin-right: 104px;
  }
  .tv-footer-l > li {
    padding-bottom: 10px;
    color: #fff; font-size: 14px;
  }
  .tv-footer-l > li:first-child {
    padding-bottom: 18px;
    font-size: 17px;
  }
  .tv-footer-li:hover {
    -webkit-animation: footerTextCV .5s ease-out both;
    animation: footerTextCV .5s ease-out both;
  }
  @-webkit-keyframes footerTextCV {
    0% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
    100%{-webkit-transform: translate3d(5px, 0, 0); transform:translate3d(5px, 0, 0);}
  }
  @keyframes footerTextCV {
    0% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
    100%{-webkit-transform: translate3d(5px, 0, 0); transform:translate3d(5px, 0, 0);}
  }
  .tv-footer-l > li > a {
    color:#fff; cursor: pointer;
  }
  .tv-footer-l > li > a:hover {
    text-decoration: underline;
    -webkit-animation: tada 2s ease-out both;
      animation: tada 2s ease-out both;
  }
  .tv-footer-r{
    float:right;
    padding-top:51px;
    max-width: 600px;
  }
  .tv-footer-r > p{
    font-size:14px;
    padding-bottom: 5px;
  }
  .tv-footer-r > p > a{
    color:#fc5240;
    text-decoration:underline;
  }
  .tv-footer-r > p:first-child, .right > p:nth-child(3){
    margin-bottom:16px;
  }
  .tv-footer-r > p:nth-child(2), .right > p:nth-child(4){
    margin-bottom:8px;
  }
</style>
