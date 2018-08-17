#### 基于vue 2.x的日期选择器组件和城市选择器组件
#### 运行环境vue-cli2

效果图如下:

![image](https://github.com/angellfzhong/vue-date-selector/blob/master/img/11.png)

#### 城市选择器 CitySelector 组件使用了city.json获取全部城市 按照拼音的首字母给城市分类
#### 创建键名为A-Z的对象数组 并渲染城市列表

```
buildCity(cityNamesFilter) {
      for (let i = 0; i < this.citylist.length; i++) {
        let firstLetter = this.citylist[i].pinyin.substr(0, 1);
        this.lettercity[firstLetter].push(this.citylist[i]);
      }
    }
```
#### 右侧字母导航
![image](https://github.com/angellfzhong/vue-date-selector/blob/master/img/22.png)

#### 根据搜索框输入内容动态渲染搜索结果，将搜索字体高亮显示

```
showsearchReasult(n) {
      let reg = new RegExp(this.inputcity, "g");
      let pretxt = n;
      let newtxt = pretxt.replace(
        reg,
        '<span style="color: #ff6026">' + this.inputcity + "</span>"
      );
      return newtxt;
    },
```
![image](https://github.com/angellfzhong/vue-date-selector/blob/master/img/33.png)

#### DateSelector日期选择器可选择开始时期和结束日期
#### 默认选中日期为今日，可根据选中日期动态计算开始时期和离店日期
#### 今日之前的日期无法选中
![image](https://github.com/angellfzhong/vue-date-selector/blob/master/img/44.png)

#### 选择后的页面  自动计算入住天数
![image](https://github.com/angellfzhong/vue-date-selector/blob/master/img/55.png)

