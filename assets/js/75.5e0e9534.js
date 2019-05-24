(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{241:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("使用 pywebview 的最简单方法")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),a("p",[t._v("如需更改 Web 渲染引擎，请设置 "),a("code",[t._v("webview.gui")]),t._v(" 的值（如 "),a("code",[t._v("cef")]),t._v("）。有关详细信息，请查阅 "),a("router-link",{attrs:{to:"./renderer.html"}},[t._v("Web 渲染引擎")]),t._v(" 页面。")],1),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webview\nwebview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"It works, Jim!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://pywebview.flowrl.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中，第二个参数 "),s("code",[this._v("url")]),this._v(" 指向页面的 URL，可以为本地路径或留空。如果为空，则可以使用 "),s("code",[this._v("load_html")]),this._v(" 函数直接加载 HTML 代码 。例如")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load_html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>This is dynamically loaded HTML</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("load_html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Load HTML example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请注意，"),s("code",[this._v("webview.create_window")]),this._v(" 会占用程序主线程，因此其他代码必须在其它线程上运行。")])}],!1,null,null,null);s.default=e.exports}}]);