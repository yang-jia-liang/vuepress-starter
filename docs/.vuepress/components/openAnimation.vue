<style lang="less">
    /* 以下为主要代码 */
    .container {
        position: relative;
        width: 1000px;
        height: 600px;
        background-image: url("./images/bg.jpg");

        display: flex;
        justify-content: center;     /* 水平居中 */
        align-items: center;         /* 垂直居中 */

        overflow: hidden;

        /* 适配网页展示区域大小，不是主要代码 */
        transform: scale(0.5, 0.5) translateX(-50%);

      .L1, .L2, .R1, .R2 {
        position: absolute;
        width: 1000px;
        height: 600px;

        filter: drop-shadow(4px 4px 12px rgba(0,0,0,.5));
        opacity: .7;

        overflow: hidden;

        transition: .5s;
      }

      .L1::after, .L2::after, .R1::after, .R2::after  {
        content: "";
        position: absolute;
        width: 1000px;
        height: 600px;
        background-image: url("./images/bg.jpg");
      }
      .L1 {
        left: -400px;
        transform: rotateZ(100deg);
      }
      .L1::after {
        transform: rotateZ(-100deg);
      }

      .L2 {
        left: -400px;
        transform: rotateZ(-100deg);
      }
      .L2::after {
        transform: rotateZ(100deg);
      }

      .R1 {
        right: -400px;
        transform: rotateZ(100deg);
      }
      .R1::after {
        transform: rotateZ(-100deg);
      }

      .R2 {
        right: -400px;
        transform: rotateZ(-100deg);
      }
      .R2::after {
        transform: rotateZ(100deg);
      }

      /* 默认隐藏 */
      .title {
        opacity: 0;
        font: 900 50px '';
        letter-spacing: 10px;
        color: rgb(60,60,70);
        transition: .5s;
      }
    }

    /* 设置过渡动画 */
    /* 鼠标悬浮后开始展示 */
    .container:hover .L1 {
      left: -550px;
    }
    .container:hover .L2 {
      left: -600px;
    }
    .container:hover .R1 {
      right: -550px;
    }
    .container:hover .R2 {
      right: -600px;
    }
    .container:hover .title {
      opacity: 1;
    }
</style>

<template>
    <div class="container">
        <div class="L1"></div>
        <div class="L2"></div>
        <div class="R1"></div>
        <div class="R2"></div>
        <p class="title">春节联欢晚会</p>
    </div>
</template>

<script>
    export default {
        name: "openAnimation"
    }
</script>
