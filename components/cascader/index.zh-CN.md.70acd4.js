(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1423:function(t,e){t.exports={content:["section",["p","级联选择框。"],["h2","何时使用"],["ul",["li",["p","需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"]],["li",["p","从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"]],["li",["p","比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。"]]]],meta:{category:"Components",type:"数据录入",title:"Cascader",subtitle:"级联选择",filename:"components/cascader/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#方法",title:"方法"},"方法"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation">=</span>{options}</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{onChange}</span> <span class="token punctuation">/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","allowClear"],["td","是否支持清除"],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"]],["tr",["td","changeOnSelect"],["td","当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","自定义类名"],["td","string"],["td","-"]],["tr",["td","defaultValue"],["td","默认的选中项"],["td","string","[","]"],["td","[","]"]],["tr",["td","disabled"],["td","禁用"],["td","boolean"],["td","false"]],["tr",["td","displayRender"],["td","选择后展示的渲染函数"],["td",["code","(label, selectedOptions) => ReactNode"]],["td",["code","label => label.join(' / ')"]]],["tr",["td","expandTrigger"],["td","次级菜单的展开方式，可选 'click' 和 'hover'"],["td","string"],["td","'click'"]],["tr",["td","fieldNames"],["td","自定义 options 中 label name children 的字段（注意，3.7.0 之前的版本为 ",["code","filedNames"],"）"],["td","object"],["td",["code","{ label: 'label', value: 'value', children: 'children' }"]]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"示例"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","loadData"],["td","用于动态加载选项，无法与 ",["code","showSearch"]," 一起使用"],["td",["code","(selectedOptions) => void"]],["td","-"]],["tr",["td","notFoundContent"],["td","当下拉列表为空时显示的内容"],["td","string"],["td","'Not Found'"]],["tr",["td","options"],["td","可选项数据源"],["td","object"],["td","-"]],["tr",["td","placeholder"],["td","输入框占位文本"],["td","string"],["td","'请选择'"]],["tr",["td","popupClassName"],["td","自定义浮层类名"],["td","string"],["td","-"]],["tr",["td","popupPlacement"],["td","浮层预设位置：",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","Enum"],["td",["code","bottomLeft"]]],["tr",["td","popupVisible"],["td","控制浮层显隐"],["td","boolean"],["td","-"]],["tr",["td","showSearch"],["td","在选择框中显示搜索框"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","输入框大小，可选 ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]],["tr",["td","style"],["td","自定义样式"],["td","string"],["td","-"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"]],["tr",["td","value"],["td","指定选中项"],["td","string","[","]"],["td","-"]],["tr",["td","onChange"],["td","选择完成后的回调"],["td",["code","(value, selectedOptions) => void"]],["td","-"]],["tr",["td","onPopupVisibleChange"],["td","显示/隐藏浮层的回调"],["td",["code","(value) => void"]],["td","-"]]]],["p",["code","showSearch"]," 为对象时，其中的字段："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","filter"],["td","接收 ",["code","inputValue"]," ",["code","path"]," 两个参数，当 ",["code","path"]," 符合筛选条件时，应返回 true，反之则返回 false。"],["td",["code","function(inputValue, path): boolean"]],["td"]],["tr",["td","limit"],["td","搜索结果展示数量"],["td","number ","|"," false"],["td","50"]],["tr",["td","matchInputWidth"],["td","搜索结果列表是否与输入框同宽"],["td","boolean"],["td"]],["tr",["td","render"],["td","用于渲染 filter 后的选项"],["td",["code","function(inputValue, path): ReactNode"]],["td"]],["tr",["td","sort"],["td","用于排序 filter 后的选项"],["td",["code","function(a, b, inputValue)"]],["td"]]]],["h2","方法"],["table",["thead",["tr",["th","名称"],["th","描述"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"]],["tr",["td","focus()"],["td","获取焦点"]]]],["style","\n.ant-cascader-picker {\n  width: 300px;\n}\n"],["blockquote",["p","注意，如果需要获得中国省市区数据，可以参考 ",["a",{title:null,href:"https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17"},"china-division"],"。"]]]}}}]);