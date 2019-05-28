import Vue from "vue";
import Row from "@/grid/row";
import Col from "@/grid/col";
import { expect } from "chai";
import { mount } from "@vue/test-utils";

describe("Row", () => {
  it("存在.", () => {
    expect(Row).to.exist;
  });
  it("接受 gutter 属性", done => {
    // 默认代码是同步的，只要加了done，才表示可为异步。异步代码结束后，调用done表示异步执行完了
    Vue.component("f-col", Col);
    const wrapper = mount(Row, {
      slots: {
        default: `
                 <f-col span="12"></f-col>
                 <f-col span="12"></f-col>
                `
      },
      propsData: {
        gutter: 20
      }
    });
    Promise.resolve().then(() => {
      const row = wrapper.find(".row");
      expect(row.element.style.marginLeft).to.eq("-10px");
      expect(row.element.style.marginRight).to.eq("-10px");
      const col = wrapper.findAll(".col").at(0);
      expect(col.element.style.paddingRight).to.eq("10px");
      expect(col.element.style.paddingLeft).to.eq("10px");
      done();
    });
  });
  it("接受 align 属性", () => {
    const wrapper = mount(Row, {
      propsData: {
        align: "right"
      }
    });
    expect(wrapper.classes()).contain("align-right");
  });
});
