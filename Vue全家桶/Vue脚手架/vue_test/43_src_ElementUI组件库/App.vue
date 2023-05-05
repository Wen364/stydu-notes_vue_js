<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <wen-row>
      <wen-button>默认按钮</wen-button>
      <wen-button type="primary">主要按钮</wen-button>
      <wen-button type="success">成功按钮</wen-button>
      <wen-button type="info">信息按钮</wen-button>
      <wen-button type="warning">警告按钮</wen-button>
      <wen-button type="danger">危险按钮</wen-button>
    </wen-row>
    <wen-date-picker
      type="date"
      placeholder="选择日期">
    </wen-date-picker>
  </div>
</template>

<script>
    export default {
        name:'App',       
    }
</script>

<style >
 
</style>


   