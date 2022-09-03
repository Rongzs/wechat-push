export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxc0f05df21cf9b1a3",

  // 公众号APP_SECRET
  APP_SECRET: "ae399f1cfadd3b75372b241ec9b69bdc",

 
  USERS: [
    {
      // 想要发送的人的名字
      name: "暴龙战士",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o4sTH6ImylubBREB-s8LYz963Rg8",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "Ii_kV_XKUhEWVhgbFezqqGyDgSvlnZZi5DEcRJngA2o",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: ""
    },
    {
      // 想要发送的人的名字
      name: "特别",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o4sTH6LSjAiYQm25NYyI438yVIYQ",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "Ii_kV_XKUhEWVhgbFezqqGyDgSvlnZZi5DEcRJngA2o",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: ""}

  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "Ii_kV_XKUhEWVhgbFezqqGyDgSvlnZZi5DEcRJngA2o",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o4sTH6ImylubBREB-s8LYz963Rg8",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "湖南",
  // 所在城市
  CITY: "邵阳",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "色色的宝贝", "year": "2001", "date": "12-09"},
    {"type": "节日", "name": "恋爱纪念日", "year": "2020", "date": "07-08"}
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 2,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2020-07-08"}
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
