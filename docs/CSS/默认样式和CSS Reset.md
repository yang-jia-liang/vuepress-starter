比如下拉框这种比较复杂的元素，是自带默认样式的。如果没有这个默认样式，则该元素在页面上不会有任何表现，则必然增加一些工作量。

同时，默认样式也会带来一些问题：比如，有些默认样式我们是不需要的；有些默认样式甚至无法去掉。

如果我们不需要默认的样式，这里就需要引入一个概念：**CSS Reset**。

### 常见的 CSS Reset 方案
**方案一**：
CSS Tools: Reset CSS。链接：<https://meyerweb.com/eric/tools/css/reset/>

**方案二**：
雅虎的 CSS Reset。链接：<https://yuilibrary.com/yui/docs/cssreset/>

我们可以直接通过 CDN 的方式引入：
```html
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
```

**方式三**：（比较有争议）
```css
* {
  margin: 0;
  padding: 0;
}
```
上面何种写法，比较简洁，但也有争议。有争议的地方在于，可能会导致 css 选择器的性能问题

### Normalize.css
上面的几种 css reset 的解决思路是：将所有的默认样式清零。

但是，[Normalize.css](https://necolas.github.io/normalize.css/) 的思路是：既然浏览器提供了这些默认样式，那它就是有意义的。**既然不同浏览器的默认样式不一致，那么，`Normalize.css`就将这些默认样式设置为一致**。

### 清空元素边距
``` css
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
  margin: 0;
  padding: 0;
}
```

### 利用body设置整个页面的文字信息
``` css
body {
  font-size: 12px;
  font-family: '宋体';
  color: #333;
}
```
