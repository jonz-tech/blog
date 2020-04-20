# 0x0:Flutter环境搭建
## 搭建android

* 环境要求 java 8[下载](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
* Android studio[下载](https://developer.android.com/studio/index.html?hl=zh-cn)
* 按照要求验证java8及android studio
* 安装一台模拟器。AVD Manager 选择Create Virtual Device，Nexus 6P 模拟器

## 搭建iOS 

* apple store 搜索xcode 进行安装
* 安装模拟器及command-line
* 打开模拟器 open -a Simulator

## flutter环境

* 配置镜像

```
vi ~/.bash_profile
export PUB_HOSTED_URL=https://pub.flutter-io.cn  
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

* 下载[flutter稳定版本](https://flutter.dev/docs/development/tools/sdk/releases?tab=macos)

```
vi ~/.bash_profile
#加入下面配置。 注意路径为你解压稳定版的bin目录
export PATH=~/Documents/flutter/bin:$PATH
```

* 验证环境 

```
//终端输入 flutter emulators 找到可运行设备
//返回
Nexus_6P_API_R      • Nexus 6P API R • Google • android
apple_ios_simulator • iOS Simulator  • Apple  • ios

```

* 运行

```
//cd到稳定版目录下的example目录下的hello_world工程
flutter emulators --launch Nexus_6P_API_R
flutter run 
//若有多台链接设备，则运行 flutter fun -d device_id
```

## 工程配置运行

* iOS

  * 安装usbmux
    ```
    brew update
    brew install --HEAD usbmuxd
    brew link usbmuxd
    ```

  * 安装libimobiledevice
	  ```
	  brew install --HEAD libimobiledevice
	  ```

  * 安装ideviceinstaller
	  ```
	  brew install ideviceinstaller
	  ```
  * 运行xcode工程./ios/Runner.xcworkspace,修改签名账号为你手机可运行证书。暂时改为公司企业证书。
  * 运行Runner.xcworkspace 工程，保证你运行成功。报错的话见[错误4](#错误4)

* android

  * 安装Flutter和Dart 插件。见[错误2](#错误2)。由于Flutter依赖于Dart, 装Flutter默认会带上dart.
  * android Studio 打开hello_world工程。Open an existing Android Studio Project > hello_world
  * 工具栏选择启动机器。可以选择已连接的真机或者模拟器。
  * 工程自带两个dart作为入口。可自行切换main.dart 和araic.dart.
  * 运行工程即可根据效果体验。
  
* 热修复体验

  * 修改main.dart入口。

    ```
    //定义一个入口类
    class MyAPP extends StatelessWidget {
      @override Widget build(BuildContext context) { 
        return const Center(child: Text('Hello World', textDirection: TextDirection.ltr)); 
      }
    }
    //runApp()改成入口类
    void main() => runApp(new MyAPP());
    ```
    
   * 使用debug模式，运行模拟器。能看到工具栏闪电⚡️图标亮起即可。
  
   * 修改hello world,为"你好"

## 常见问题
 #### 错误1
```
 **✗** **Android license status unknown.**
 Try re-installing or updating your Android SDK Manager.
 
 ## 解决
 android IED中选择configure,sdkManager,systemSetting中选择android SDK ，选择sdk tool,安装命android sdk command-line组件
```
#### 错误2
```
   ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
## 解决
同上，配置中选中plugin，安装flutter和dart
```
#### 错误3

```

Waiting for another flutter command to release the startup lock...
## 解决
flutter项目中，删除bin/cache/lockfile
```
#### 错误4

```
Building for iOS, but the linked and embedded framework 'App.framework' was built for iOS Simulator
### 解决
//1. 移除flutter.framework和app.framework
//2. 确认Build Phases > Link Binary With Libraries和 Build Phases > Embed Frameworks都没有上面两个库
// 3.  Build Phases > Thin Binary 加入以下两个脚本
    /bin/sh "$FLUTTER_ROOT/packages/flutter_tools/bin/xcode_backend.sh" embed
    /bin/sh "$FLUTTER_ROOT/packages/flutter_tools/bin/xcode_backend.sh" thin
//4. Build Settings > Other Linker Flags 加入$(inherited)和-framework Flutter
```





