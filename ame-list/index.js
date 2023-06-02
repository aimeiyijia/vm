;(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory())
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory()
  } else {
    root.AmeList = factory()
  }
})(typeof self !== "undefined" ? self : this, function () {
  function getListBaseTemplate() {
    const template = `<div @click="handleTestEmit">主体 {{ data }} {{ testProp.a }} </div>`
    Ame.component("list-base", {
      props: {
        testProp: Object,
      },
      template: template,
      data: function () {
        return {
          data: "我是listBase数据",
        }
      },
      mounted: function () {
        JSON.stringify
        console.log(this, "list-base 组件")
        // console.log(this.$VN('2'), "this.$VN 组件")
        // setInterval(() => {
        //   this.data = [new Date()]
        //   console.log('改变data')
        // }, 2000)
        this.$emit("test-event")
      },
      methods: {
        handleTestEmit: function(){
          console.log('节点')
          this.$emit("test-event")
        }
      }
    })
  }
  function getListHeaderTemplate() {
    const template = `<div>头部</div>`
  }
  function getListBodyTemplate() {
    const template = `<div>内容区</div>`
  }
  function init() {
    getListBaseTemplate()
    const template = `
      <input v-model="model"> {{model}}
      <list-base :test-prop="testProps" :ab="testProps" @test-event="handleTestEvent"></list-base>
    `
    $("#app").append(template)
    const instance = new Ame({
      el: "#app",
      data: {
        testProps: {
          a: 1,
          b: 2,
        },
        model: "hello vm.js",
      },
      mounted: function () {
        // console.log(this, "list 组件")
        // setInterval(() => {
        //   this.testProps.a = new Date().getSeconds()
        //   console.log(this, "改变data")
        // }, 1000)
      },
      methods: {
        handleTestEvent() {
          console.log("自定义事件被触发")
        },
      },
    })
  }
  return {
    init,
  }
})
