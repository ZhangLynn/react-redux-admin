'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const config = require('./webpack.config.dev');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    // WebpackDevServer 2.4.3引入了一个安全修复程序,
    // 用于防止远程网站通过DNS重新绑定潜在地访问本地内容
    // https://github.com/webpack/webpack-dev-server/issues/887
    // https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
    // However, it made several existing use cases such as development in cloud
    // environment or subdomains in development significantly more complicated:
    // https://github.com/facebookincubator/create-react-app/issues/2271
    // https://github.com/facebookincubator/create-react-app/issues/2233
    // 虽然我们正在研究更好的解决方案，但现在我们将采取一个妥协.
    // 由于我们的WDS配置仅 serve `public`中的文件夹, 我们不会考虑将其作为漏洞访问它们.
    // 但是, 如果你使用`proxy`代理功能, 它会变得危险,
    // 因为它可以暴露Django和Rails等后端的远程代码执行漏洞.
    // 因此我们将正常禁用主机检查, 但是当你有特定的 `proxy` 配置, 我们会开启它.
    // 最后, 如果你真的知道你在用特定的环境变量做什么, 我们会让你覆盖这个配置
    disableHostCheck:
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // 启用生成文件的gzip压缩.
    // 采用gzip压缩的优点和缺点：
    // 优点: 对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
    // 缺点: 服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
    compress: true,
    // 关闭WebpackDevServer自己的日志，因为它们通常没用.
    // 它仍将显示此设置的编译警告和错误.
    // 默认情况下，WebpackDevServer serves 当前目录中的物理文件,
    // 除了 serves 内存的所有虚拟构建产品
    // By default WebpackDevServer serves physical files from current directory
    // in addition to all the virtual build products that it serves from memory.
    // 令人困惑的地方在于那些文件在生产环境的build目录下不会自动可用除非我们复制它们.
    // 然而复制整个项目目录很危险, 因为我们可能暴露了敏感文件.
    // 我们遵循一个惯例来替代, 就是只有在 `public` 目录下的文件可以得到 served.
    // 我们的构建脚本将把 `public` 复制到 `build` 文件夹中.
    // In `index.html`, you can get URL of `public` folder with %PUBLIC_URL%:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
    // 请注意，我们只建议使用 `public` 文件夹作为像`favicon.ico`, `manifest.json`这样的文件,
    // 和通过Webpack导入时由于某种原因被破坏的库的逃生舱口
    // 如果你只是想使用图片, 将它放入src 文件夹并且通过`import`方法使用.
    // 指定了服务器资源的根目录, 如果不写入contentBase的值, 那么contentBase默认是项目的目录
    // 有时候打包后的index.html无法访问JS和CSS资源, 就是因为这个路径指向了根目录
    // 设置contentBase: path.join(__dirname, "build")即可
    contentBase: paths.appPublic,
    // 默认情况下，`contentBase`中的文件不会触发页面重新加载.
    watchContentBase: true,
    // 启用热重装服务器。它将为WebpackDevServer客户端提供/ sockjs-node / endpoint
    // 使其可以了解文件的更新时间.
    // WebpackDevServer客户端作为Webpack开发配置中的入口点
    // 请注意，只有更改到CSS文件才回正在热重新加载. JS的更改将刷新浏览器.
    hot: true,
    // 告诉WebpackDevServer使用相同的“根”路径非常重要
    //正如我们在配置中指定的那样。在生产环境中, we always serve from /.
    publicPath: config.output.publicPath,
    // WebpackDevServer默认是嘈杂环境,
    // 所以我们通过上面的`compiler.plugin`调用来监听编译器事件来替代发出自定义消息
    quiet: true,
    // 据报道, 这可以避免某些系统上的CPU过载
    // https://github.com/facebookincubator/create-react-app/issues/293
    // src/node_modules 不支持绝对导入
    // https://github.com/facebookincubator/create-react-app/issues/1065
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    // 如果HTTPS服务可用, 开启HTTPS服务
    https: protocol === 'https',
    host: host,
    // 这个配置属性用来在编译出错的时候, 在浏览器页面上显示错误
    overlay: false,
    // 这个配置属性是用来应对返回404页面时定向到特定页面用的
    historyApiFallback: {
      // Paths with dots 仍然应该使用历史回退.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    before(app) {
      // 这可以让我们从 the runtime error overlay 中打开文件
      app.use(errorOverlayMiddleware());
      // This service worker file is effectively a 'no-op' that will reset any
      // previous service worker registered for the same host:port combination.
      // We do this in development to avoid hitting the production cache if
      // it used the same host and port.
      // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
