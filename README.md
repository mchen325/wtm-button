# WTM button

WTM button [Click here to visit https://watame.moe](https://watame.moe)

基于Mea button制作 (https://github.com/zyzsdy/meamea-button)

[![Build Status](https://travis-ci.org/zangxx66/wtm-button.svg?branch=master)](https://github.com/zangxx66/wtm-button)

Related Links:

* [Watame's Youtube channel](https://t.co/gE06SdvpNX?amp=1)

* [Watame's Twitter](https://twitter.com/tsunomakiwatame)

* [Watame's Bilibili](https://space.bilibili.com/491474050)

## 参与完善本项目

请Fork本项目进行修改，完成修改后在本项目中发起一个Pull Request。

### 添加或修改音频

**简述**： 添加的新音频请先进行音量标准化。可以使用MP3GainGUI之类的软件，目前音量全部标准化为80。

申请添加或修改音频，请开一个issue提交你的音频（添加前先确保该音频没有被重复提交），内容需要包含音频和对应的翻译。

音频被采纳后，对应的issue将会被关闭。

### 参与翻译

请帮助进行英文和日语的翻译！

主程序翻译在 [src/locales](src/locales) 中的三个以语言名命名的js文件中。

### 参与网页开发

请参考[部署本地开发环境](#部署本地开发环境)一节。

## 部署本地开发环境

本站使用 Vue + jQuery + Bootstrap 3 开发。

要部署本地开发环境，请先安装最新版的node。然后按照如下步骤操作：

1. Clone代码到本地。

2. 进入代码目录，运行`npm install`。

3. 运行本地开发服务器`npm run serve`，在代码修改过程中，本地开发服务器可以即时反映修改的结果。

4. 要编译可供部署的文件，请运行`npm run build`，这会生成`dist`目录。本站为全静态，将整个`dist`目录部署即可。

若要为本项目贡献你的代码，你不必在本地编译。在开发服务器中测试通过并推送至Github后，直接给本项目提交Pull Request即可。

## LICENCE

程序部分： MIT

音频部分按照hololive二次创作条例进行

## 桌面版

[Click here](https://github.com/zangxx66/wtm-button-desktop/releases)
