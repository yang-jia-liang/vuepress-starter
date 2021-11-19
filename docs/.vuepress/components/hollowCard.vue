<style>
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .key-value {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  .key {
    width: 80px;
  }

</style>

<template>
  <div>
    <div class="card-container">
      <div class="hollowCard" />
    </div>

    <div class="key-value">
      <span class="key">位置：</span>

      <el-radio
        v-model="position"
        v-for="(value, index) in positions"
        :key="index"
        :label="value"
      />
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>

      <el-input-number
          v-model="width"
          size="mini"
          :min="100"
          :max="500"
          label="宽度"
      >
      </el-input-number>
    </div>
    <div class="key-value">
      <span class="key">高度：</span>

      <el-input-number
          v-model="height"
          size="mini"
          :min="50"
          :max="500"
          label="高度"
      />
    </div>
    <div class="key-value">
      <span class="key">距离：</span>

      <el-input-number
          v-model="distance"
          size="mini"
          :min="40"
          :max="500"
          label="距离"
      />
    </div>
    <div class="key-value">
      <span class="key">半径：</span>

      <el-input-number
          v-model="radio"
          size="mini"
          :min="1"
          :max="20"
          label="半径"
      />
    </div>
    <div class="key-value">
      <span class="key">虚线：</span>

      <el-switch v-model="dashed" active-color="#00adb5" />
    </div>
    <div class="key-value">
      <span class="key">阴影：</span>

      <el-switch v-model="shadow" active-color="#00adb5" />
    </div>

    <pre>
      <code ref="cssRef" />
    </pre>
  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: "hollowCard",
    data() {
      return {
        width: 300,
        height: 100,
        radio: 10,
        dashed: true,
        position: 'horizontal',
        distance: 60,
        positions: ['horizontal', 'vertical'],
        color1: '#00adb5',
        color2: '#eeeeee',
        shadow: true
      }
    },
    computed: {
      computed_style() {
        if (this.position === 'horizontal') {
          return (
              `.hollowCard {
        width: ${this.width}px;
        height: ${this.height}px;
        position: relative;
        background:
          radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
          radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
          radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width - this.distance}px 51% no-repeat,
          radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance}px 51% no-repeat;
       ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
      }

      ${this.dashed ?
      `.hollowCard::after {
          content: '';
          height: ${this.height - this.radio * 2}px;
          border: 1px dashed #fff;
          position: absolute;
          left: ${this.distance}px;
          top: 0;
          bottom: 0;
          margin: auto;
      }`
: ''
              }`
          )
        } else {
          return (
              `.hollowCard {
        width: ${this.width}px;
        height: ${this.height}px;
        position: relative;
        background:
          radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
          radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
          radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance}px no-repeat,
          radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance}px no-repeat;
       ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
      }

      ${this.dashed ?
      `.hollowCard::after {
          content: '';
          width: ${this.width - this.radio * 2}px;
          border: 1px dashed #fff;
          position: absolute;
          left: 0;
          right: 0;
          top: ${this.distance}px;
          margin: auto;
      }`
      : ''
  }`
          )
        }
      }
    },
    watch: {
      // 计算样式变化是更新页面样式和代码块
      computed_style: function () {
        this.setViewStyle();
        this.setCodeBlock();
      }
    },
    methods: {
      // 设置展示的代码块
      setCodeBlock() {
        // Prism（vuepress内置）实现代码高亮
        // 使用示例：https://prismjs.com/#basic-usage-node
        this.$refs['cssRef'].innerHTML = Prism.highlight(this.computed_style, Prism.languages.css);
      },
      // 设置页面的样式
      setViewStyle() {
        // 找到mounted创建的style标签，把计算好的样式放进去
        let _style = document.querySelector('#hollowStyle');
        _style.innerHTML = this.computed_style;
      }
    },
    mounted() {
      // 页面加载完成后，创建一个带有id标识的style标签
      const style = document.createElement('style');

      style.setAttribute('id', 'hollowStyle');

      document.head.appendChild(style);

      setTimeout(() => {
        this.setViewStyle();
        this.setCodeBlock();
      }, 1000)
    }
  }
</script>
