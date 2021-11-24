## 引言

### 背景
大家都知道Native app体验确实很好，下载到手机上之后入口也方便。它也有一些缺点:<br />​<br />

- 开发成本高(ios和安卓)
- 软件上线需要审核
- 版本更新需要将新版本上传到不同的应用商店
- 想使用一个app就必须去下载才能使用，即使是偶尔需要使用一下下


<br />而web网页开发成本低，网站更新时上传最新的资源到服务器即可，用手机带的浏览器打开就可以使用。但是除了体验上比Native app还是差一些，还有一些明显的缺点<br />​<br />

- 手机桌面入口不够便捷，想要进入一个页面必须要记住它的url或者加入书签
- 没网络就没响应，不具备离线能力
- 不像APP一样能进行消息推送



### What's PWA?
PWA全称Progressive Web App，即渐进式WEB应用。<br />​

一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能

解决了哪些问题？

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏
- 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
- 实现了消息推送


<br />它解决了上述提到的问题，这些特性将使得 Web 应用渐进式接近原生 App。<br />

### 特性

- Web App可以被添加到桌面并有它自己的应用图标
- 同时，从桌面开启时，会和原生app一样有它自己的“开屏图”；
- 更进一步的，这个Web App在的样子几乎和原生应用一样——没有浏览器的地址栏、工具条，似乎和Native App一样运行在一个独立的容器中。



## PWA的实现

<br />

### Manifest
Manifest就是一个json文件，在里面给出了诸如主题、背景色、图标等一系列的描述，用来让Web应用更接近于原生应用。<br />​

比如下面这个例子

json文件中不能加注释
```json
{
  "name": "vuepress-starter",
  "short_name": "VP",
  "description": "vuepress脚手架",
  "start_url": "/vuepress-starter",
  "display": "standalone",
  "theme_color": "#FFDF00",
  "background_color": "#FFDF00",
  "icons": [
    {
      "src": "icons/icon-144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/icon-192.png",
      "sizes": "152x152",
      "type": "image/png"
    }
  ]
}

```

<br />​<br />
#### name
Web App的名称<br />​<br />
#### short_name
简称，当没有足够空间展示应用的name时，系统就会使用short_name<br />​<br />
#### start_url
指定了用户打开该Web App时加载的URL。相对URL会相对于manifest<br />

#### display
display控制了应用的显示模式

| **显示模式** | **描述** | **后备显示模式** |
| --- | --- | --- |
| fullscreen | 全屏显示, 所有可用的显示区域都被使用, 并且不显示状态栏。 | standalone |
| standalone | 独立应用模式，这种模式下打开的应用有自己的启动图标，并且不会有浏览器的地址栏。因此看起来更像一个Native App | minimal-ui |
| minimal-ui | 该应用程序将看起来像一个独立的应用程序，但会有浏览器地址栏。 样式因浏览器而异。 | browser |
| browser | 该应用程序在传统的浏览器标签或新窗口中打开，具体实现取决于浏览器和平台。 这是默认的设置。 | (None) |

​

​

让我们来看下这四种模式的差异：<br /><br />当然，不同的系统所表现出的具体样式也不完全一样。就像示例中的虚拟按键在fullscreen 模式下会默认隐藏。<br />​<br />
#### orientation
控制Web App的方向。设置某些值会具有类似锁屏的效果（禁止旋转），例如例子中的portrait-primary​<br />​

具体的值包括：any, natural, landscape, landscape-primary, landscape-secondary, portrait, portrait-primary, portrait-secondary。<br />
<br />​<br />
#### icons
icons用来指定应用的桌面图标。icons本身是一个数组，每个元素包含三个属性：<br />​<br />

- sizes：图标的大小。通过指定大小，系统会选取最合适的图标展示在相应位置上。
- src：   图标的文件路径。注意相对路径是相对于manifest。
- type：图标的图片类型。


<br />

#### background_color
“开屏图”其实是背景颜色 + 图标的展示模式（并不会设置一张所谓的开屏图）。background_color是在应用的样式资源为加载完毕前的默认背景，因此会展示在开屏界面。background_color加上我们刚才定义的icons就组成了Web App打开时的“开屏图”。<br />​<br />
#### theme_color
默认主题颜色<br />​<br />
#### description
一段对该应用的描述<br />​<br />
### 使用Manifest
在引用这个manifest.json的时候只要在html的head里加上
```html
<html>
   <head>
        ...
        <link rel="manifest" href="/manifest.json">
    </head> 
</html>
```

<br />效果如下<br /><br />打开后是没有地址栏的，跟原生应用效果一样了，并且有个splash screen<br />​<br />
### 兼容性
​

到目前为止，我们的工作都非常顺利：创建manifest.json，添加meta标签，然后把我们的Web App添加到桌面。然而，如果我们在iPhone上访问我们的站点，然后“添加到主屏幕”，你会发现——一切都失效了！是的，你没有看错，一切都回到了原样。<br />
## IOS中的兼容处理

<br />safari虽然不支持Web App Manifest，但是它有自己的一些head标签来定义相应的资源与展示形式：<br />
<br />​

下面是项目中的相关设置
```bash
// IOS中的Manifest兼容
['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],                     // 类似于manifest中的display的功能，通过设置为yes可以进入standalone模式
['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],          // 移动设备状态栏的样式
['link', { rel: 'apple-touch-icon', href: '/image/icon-152.png' }],                     // 桌面图标
['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }], // 触摸栏上的自定义Safari书签图标和颜色
```
### IE中的兼容处理

<br />与Safari类似，IE中也有自己的meta标签来指示相应的资源。其中比较重要的有：<br />
<br />下面是项目中的相关设置
```bash
// Windows8 / Microsoft Surface(IE10+) 中的Manifest兼容
['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],  // 瓷砖块的背景图
['meta', { name: 'msapplication-TileColor', content: '#000000' }],                                // 瓷砖块颜色
```


### service worker实现离线缓存


#### 什么是service worker

<br />Service Worker 是 Chrome 团队提出和力推的一个 WEB API，用于给 web 应用提供高级的可持续的后台处理能力。<br />
<br /><br />
<br />Service Workers 就像介于服务器和网页之间的拦截器，能够拦截进出的HTTP 请求，从而完全控制你的网站。<br />​<br />
#### 最主要的特点
**​**<br />

- 在页面中注册并安装成功后，运行于浏览器后台，不受页面刷新的影响，可以监听和截拦作用域范围内所有页面的 HTTP 请求。
- 网站必须使用 HTTPS。除了使用本地开发环境调试时(如域名使用 localhost)
- 运行于浏览器后台，可以控制打开的作用域范围下所有的页面请求
- 单独的作用域范围，单独的运行环境和执行线程
- 不能操作页面 DOM。但可以通过事件机制来处理
- 事件驱动型服务线程


<br />为什么要求网站必须是HTTPS的，大概是因为service worker权限太大能拦截所有页面的请求吧，如果http的网站安装service worker很容易被攻击<br />​<br />
#### 浏览器支持情况
<br />

## 总结


### PWA的优势

- 可以将app的快捷方式放置到桌面上，全屏运行，与原生app无异
- 能够在各种网络环境下使用，包括网络差和断网条件下，不会显示undefind
- 推送消息的能力
- 其本质是一个网页，没有原生app的各种启动条件，快速响应用户指令



### PWA存在的问题

- 支持率不高:现在ios手机端不支持pwa，IE也暂时不支持
- Chrome在中国桌面版占有率还是不错的，安卓移动端上的占有率却很低
- 各大厂商还未明确支持pwa
- 依赖的GCM服务在国内无法使用
- 微信小程序的竞争


<br />尽管有上述的一些缺点，PWA技术仍然有很多可以使用的点。

- service worker技术实现离线缓存，可以将一些不经常更改的静态文件放到缓存中，提升用户体验。
- service worker实现消息推送，使用浏览器推送功能，吸引用户
- 渐进式开发，尽管一些浏览器暂时不支持，可以利用上述技术给使用支持浏览器的用户带来更好的体验。
