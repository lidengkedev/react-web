This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 配置React配置文件

使用如下命令生成两个文件夹 `config` 和 `scripts`，`config`文件夹放置的是项目配置文件，`scripts` 文件夹放置的是脚本执行文件。

执行如下命令行之后，`package.json` 中的 `scripts` 脚本命令行也会该自动修改为 `scripts` 文件夹中的命令。

==注意：执行如下命令后，需要重新安装一下项目依赖，因为执行如下命令后，会在 `package.json` 中添加若干依赖包，然后才能正常运行打包命令。==

```bash
$ yarn eject

$ pnpm eject
```
### 修改默认打包输出的文件名

找到 `config/path.js` 文件，修改文件 `appBuild: resolveApp('build')` 中的 `build` 改为 `dist`，或者其他名字。

### 修改默认打包静态资源根路径

在环境配置文件中添加 `PUBLIC_URL` 变量，并根据不同环境变量修改静态资源根路径。

```bash
ENV = 'development'
PUBLIC_URL = '/'
```

```bash
ENV = 'production'

PUBLIC_URL = 'https://lidengkedev.github.io/react-web/'
```