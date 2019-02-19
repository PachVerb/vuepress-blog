(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{201:function(n,s,a){"use strict";a.r(s);var e=a(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[n._v("#")]),n._v(" ESLint")]),n._v(" "),a("h2",{attrs:{id:"eslint报错解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint报错解决方案","aria-hidden":"true"}},[n._v("#")]),n._v(" ESLint报错解决方案")]),n._v(" "),a("ol",[a("li",[n._v("ESLint使用的时候报错：error: No ESLint configuration found\n在项目部署中出现报错error: No ESLint configuration found，编辑器vscode。")]),n._v(" "),a("li",[n._v("解决方案：\n造成这种报错的原因是因为项目中缺少.eslintrc.js文件。添加上就可以了。")]),n._v(" "),a("li",[n._v("添加.eslintrc.js文件方法：\n手动添加，直接手动添加.eslintrc.js文件在项目中，并进行相应的配置就行了。\n使用命令添加，如果eslint是全局安装的话，使用命令eslint --init安装。")]),n._v(" "),a("li",[n._v("配置信息（简单版）")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("module.exports = {\n“env”: {\n“browser”: true,\n“es6”: true,\n“node”: true\n},\n“extends”: “eslint:recommended”,\n“parserOptions”: {\n“ecmaVersion”: 2015,\n“sourceType”: “module”\n},\n“rules”: {\n// 缩进\n“indent”: [\n“error”,\n4 //我的是编辑器自动格式化，不是使用tabs，而是四个空格\n],\n“linebreak-style”: [\n“error”,\n“windows”\n],\n// 引号\n“quotes”: [\n1,\n“single”\n],\n// 分号结尾\n“semi”: [\n“error”,\n“always”\n],\n“no-unused-vars”: [2, {\n// 允许声明未使用变量\n“vars”: “local”,\n// 参数不检查\n“args”: “none”\n}],\n// 最大空行100\n“no-multiple-empty-lines”: [0, { “max”: 100 }],\n“no-mixed-spaces-and-tabs”: [0],\n//不能使用console\n“no-console”: ‘off’,\n//未定义变量不能使用\n“no-undef”: 0,\n//一行结束后面不要有空格\n“no-trailing-spaces”: 1,\n//强制驼峰法命名\n“camelcase”: 2,\n//对象字面量项尾不能有逗号\n“comma-dangle”: [2, “never”],\n//this别名\n“consistent-this”: [2, “that”],\n}\n};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),a("p",[n._v('"no-undef": 0,和"no-undef": \'off\',一样，表示关闭该功能\n"no-undef": 1, 表示仅提示\n"no-undef": 2, 表示报错')])])])}],!1,null,null,null);s.default=t.exports}}]);