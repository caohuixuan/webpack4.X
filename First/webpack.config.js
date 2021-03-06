const config={
	entry:{
		app:__dirname+'/src/app.js',
		main:__dirname+'/src/index.js'
	},
    output:{
    	filename:'[name].js',
    	path:__dirname+'/dist'
    },
    mode:'development',
    devtool:'source-map',//设置source map选项
    devServer:{//设置webpack本地服务器的配置
        contentBase:'./dist',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器
        port:'8383',//监听端口
        inline:true,//设置为true，当源文件改变的时候会自动刷新
        historyApiFallback:true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot:true//允许热加载
    },
    module:{
    	rules:[
          {
          	test:/\.css$/,
          	use:[
               {loader:'style-loader'},
               {loader:'css-loader',
                options:{
                	modules:true, //指定启动css modules
                  localIdentName:'[name]__[local]--[hash:base64:5]'// 指定css的类名格式
                }
               }
          	]
          },
          {
          	test:/\.js$/,
          	use:{
          		loader:'babel-loader',
          		options:{
          			presets:['env']
          		}
          	},
          	exclude:/node_modules/
          },
          {
          	test:/\.vue$/,
          	use:{
          		loader:'vue-loader'
          	}
          }
    	]
    },
    resolve: {
          alias: {
               'vue': 'vue/dist/vue.js'
                 }
    }
};
module.exports=config;