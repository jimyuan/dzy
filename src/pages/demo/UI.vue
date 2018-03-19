<template>
  <main class="container">
    <h2>{{ msg }} (/pages/Demo.vue)</h2>

    <h3 class="el-icon-star-on"> 按钮样式</h3>
    <p>
      <el-button class="btn-sure btn-lg">提交</el-button>
      <pre v-text="btn.sureLg"></pre>
    </p>
    <p>
      <el-button class="btn-default">按钮</el-button>
      <pre v-text="btn.default"></pre>
    </p>
    <p>
      <el-button class="btn-sure">发布竞价</el-button>
      <pre v-text="btn.sure"></pre>
    </p>
    <p>
      <el-button class="btn-light">暂存</el-button>
      <pre v-text="btn.light"></pre>
    </p>
    <p>
      <el-button class="btn-highlight">发布竞价</el-button>
      <pre v-text="btn.highlight"></pre>
    </p>
    <p>
      <el-button class="btn-solid btn-sm">关闭</el-button>
      <pre v-text="btn.solidSm"></pre>
    </p>
    <p>
      <el-button class="btn-solid-sure btn-sm">保存</el-button>
      <pre v-text="btn.solidSureSm"></pre>
    </p>
    <p>
      <el-button class="btn-query btn-mini">查询</el-button>
      <pre v-text="btn.queryMini"></pre>
    </p>
    <p>
      <el-button class="btn-round">我要找货</el-button>
      <pre v-text="btn.round"></pre>
    </p>
    <p>
      <el-button class="btn-round-sm">详情</el-button>
      <el-button class="btn-round-sm">变更司机</el-button>
      <pre v-text="btn.roundSm"></pre>
    </p>
    <p>
      <span class="btn-close el-icon-close"></span>
      <span class="btn-close btn-close-solid el-icon-close"></span>
      <pre v-text="btn.close"></pre>
    </p>
    <p>
      <span class="tag">标签<i class="el-icon-close"></i></span>
      <pre v-text="btn.tags"></pre>
    </p>

    <h3 class="el-icon-star-on"> 输入框样式</h3>
    <p>
      <el-input size="mini" placeholder="请输入内容" class="dzy-input dzy-input-narrow"></el-input>
      <pre v-text="input.in1"></pre>
      <el-input size="mini" placeholder="请输入内容" class="dzy-input"></el-input>
      <pre v-text="input.in3"></pre>
      <el-input size="mini" placeholder="请输入内容" class="dzy-input" :disabled="true"></el-input>
      <pre v-text="input.in4"></pre>
      <el-input size="mini" placeholder="请输入内容" class="dzy-input dzy-input-light"></el-input>
      <pre v-text="input.in2"></pre>
    </p>
  </main>
</template>

<script>
export default {
  data () {
    return {
      msg: 'DEMO PAGE!',
      btn: {
        default: '<el-button class="btn-default">按钮</el-button>',
        sure: '<el-button class="btn-sure">发布竞价</el-button>',
        sureLg: '<el-button class="btn-sure btn-lg">提交</el-button>',
        light: '<el-button class="btn-light">暂存</el-button>',
        highlight: '<el-button class="btn-highlight">发布竞价</el-button>',
        queryMini: '<el-button class="btn-query btn-mini">查询</el-button>',
        solidSm: '<el-button class="btn-solid btn-sm">关闭</el-button>',
        solidSureSm: '<el-button class="btn-solid-sure btn-sm">保存</el-button>',
        round: '<el-button class="btn-round">我要找货</el-button>',
        roundSm: '<el-button class="btn-round-sm">详情</el-button>',
        close: `<span class="btn-close el-icon-close"></span>
<span class="btn-close btn-close-solid el-icon-close"></span>`,
        tags: '<span class="tag">标签<i class="el-icon-close"></i></span>'
      },
      input: {
        in1: '<el-input size="mini" placeholder="请输入内容" class="dzy-input dzy-input-scale"></el-input>',
        in2: '<el-input size="mini" placeholder="请输入内容" class="dzy-input dzy-input-light"></el-input>',
        in3: '<el-input size="mini" placeholder="请输入内容" class="dzy-input"></el-input>',
        in4: '<el-input size="mini" placeholder="请输入内容" class="dzy-input" :disabled="true"></el-input>'
      }
    }
  }
}
</script>
<style scoped>
  h3 ~ p:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  pre {
    font-size: 14px;
    font-family: 'Source Code Pro', monospace;
    color: rgb(70, 190, 228);
  }
  .dzy-input {
    display: block;
    width: 130px;
  }
  .dzy-input + .dzy-input {
    margin-top: 1em;
  }
</style>
