export interface BookProps {
  title: string;
  url: string;
  star?: number;
  comment?: string;
  date?: string;
}

const READING_BOOKS: BookProps[] = [
  {
    title: "她厌男，她是我女友",
    url: "https://img1.doubanio.com/view/subject/s/public/s34527419.jpg",
    star: 4,
    date: "2023.06",
  },
  {
    title: "完美主义扼杀效率",
    url: "https://img2.doubanio.com/view/subject/l/public/s34153013.jpg",
    star: 4,
    date: "2023.05",
    comment:
      "简单扼要，提高效率，留出休息时间，不要担所有责任，尽快开始，完成草稿。",
  },
  {
    title: "告别百年激进",
    url: "https://img1.doubanio.com/view/subject/l/public/s33584247.jpg",
    star: 4,
    date: "2023.02",
  },
  {
    title: "三国配角演义",
    url: "https://img9.doubanio.com/view/subject/l/public/s33521216.jpg",
    star: 4,
    date: "2023.01",
    comment: "刘禅，马谡的故事，洛神赋有点意思。",
  },
  {
    title: "两京十五日",
    url: "https://img2.doubanio.com/view/subject/l/public/s33682883.jpg",
    star: 4,
    date: "2022.10",
    comment:
      "好看，不过有些地方有点假。知道一个身份之后，就立刻代入进去了，有点太简单化了。",
  },
  {
    title: "毫无意义的工作",
    url: "https://img1.doubanio.com/view/subject/l/public/s34246527.jpg",
    star: 2,
    date: "2022.12",
  },
  {
    title: "一句顶一万句",
    url: "https://img1.doubanio.com/view/subject/s/public/s6916838.jpg",
    star: 4,
    date: "2022.10",
    comment: "中国的百年孤独",
  },
  {
    title: "中国城市大趋势",
    url: "https://img2.doubanio.com/view/subject/s/public/s34088393.jpg",
    star: 4,
    date: "2022.05",
  },
  {
    title: "我本芬芳",
    url: "https://img2.doubanio.com/view/subject/l/public/s34072342.jpg",
    star: 5,
    date: "2022.04",
    comment: "写的太好了。",
  },
  {
    title: "天下英雄谁敌手",
    url: "https://img2.doubanio.com/view/subject/l/public/s33871311.jpg",
    star: 5,
    date: "2022.04",
  },
  {
    title: "桶川跟踪狂杀人事件",
    url: "https://img9.doubanio.com/view/subject/s/public/s34072986.jpg",
    star: 3,
    date: "2022.02",
    comment: "不知道为啥这么高分",
  },
  {
    title: "置身事内",
    url: "https://img1.doubanio.com/view/subject/l/public/s33956867.jpg",
    star: 5,
    date: "2022.02",
    comment:
      "好书，看完之后对政府地方投资、债务、城投公司、城市化、工业化有所了解。",
  },
  {
    title: "定投十年财务自由",
    url: "https://img9.doubanio.com/view/subject/l/public/s33819565.jpg",
    star: 4,
    date: "2022.02",
  },
  {
    title: "在细雨中呼喊",
    url: "https://img2.doubanio.com/view/subject/s/public/s29032782.jpg",
    star: 3.5,
    date: "2022.01",
    comment: "没太看懂"
  },
  {
    title: "蒋经国传",
    url: "https://img9.doubanio.com/view/subject/s/public/s4483554.jpg",
    star: 4,
    date: "2022.01",
    comment:
      "没有以蒋经国为核心，而是通过历史进程把人物的事迹串联了起来。不难读，不过里面有很多职位相关的描述，这部分读起来不舒服。",
  },
  {
    title: "心若菩提",
    url: "https://img9.doubanio.com/view/subject/s/public/s29111376.jpg",
    star: 4,
    date: "2022.01",
    comment: "配合《美国工厂》纪录片阅读"
  },
  {
    title: "成为乔布斯",
    url: "https://img9.doubanio.com/view/subject/s/public/s28948876.jpg",
    star: 4,
    date: "2021.12",
    comment: "配合乔布斯传阅读，不同视角"
  },
  {
    title: "JavaScript 权威指南",
    url: "https://img9.doubanio.com/view/subject/s/public/s9056065.jpg",
    star: 5,
    date: "2021.10",
    comment: "很不错的一本书，适合有一定基础的人看",
  },
  {
    title: "大国大城",
    url: "https://img1.doubanio.com/view/subject/s/public/s29440008.jpg",
    star: 3,
    date: "2021.07",
    comment: "大国发展大城",
  },
  {
    title: "少年维特之烦恼",
    url: "https://img2.doubanio.com/view/subject/m/public/s2899473.jpg",
    star: 3,
    date: "2021.07",
  },
  {
    title: "基本穿搭",
    url: "https://img2.doubanio.com/view/subject/m/public/s29980542.jpg",
    star: 3,
    date: "2021.07",
    comment: "先保证不出错",
  },
  {
    title: "战拖行动",
    url: "https://img2.doubanio.com/view/subject/m/public/s30024201.jpg",
    star: 3,
    date: "2021.06",
  },
  {
    title: "不拘一格",
    url: "https://img1.doubanio.com/view/subject/m/public/s33784858.jpg",
    star: 3,
    date: "2021.05",
    comment: "只招最好的员工，定期考试，给市场最高的工资"
  },
  {
    title: "小乌龟投资智慧",
    url: "https://img9.doubanio.com/view/subject/m/public/s33572855.jpg",
    star: 3,
    date: "2021.05",
    comment: "资产配置讲的挺好的",
  },
  {
    title: "巴菲特投资组合",
    url: "https://img9.doubanio.com/view/subject/m/public/s33785506.jpg",
    star: 3,
    date: "2021.02",
    comment: "集中投资，5-10只优质股。整体来说干货不多。",
  },
  {
    title: "曾国藩传",
    url: "https://img1.doubanio.com/view/subject/m/public/s33678368.jpg",
    star: 5,
    date: "2021.01",
    comment: "应该早点读的。支撑一个人的信念，理想到底是什么？",
  },
  {
    title: "时间简史",
    url: "https://img9.doubanio.com/view/subject/s/public/s9111416.jpg",
    star: 3,
    date: "2020.09",
    comment: "没有特别深奥，还是可读的"
  },
  {
    title: "简明日本史",
    url: "https://img1.doubanio.com/view/subject/l/public/s33668239.jpg",
    star: 3,
    date: "2020.09",
  },
  {
    title: "都嘟",
    url: "https://img2.doubanio.com/view/subject/m/public/s28324181.jpg",
    star: 3,
    date: "2020.08",
    comment: "挺好，讲了一些老北京的生活。",
  },
  {
    title: "你的第一本保险指南",
    url: "https://img3.doubanio.com/view/subject/m/public/s29849250.jpg",
    star: 3,
    date: "2020.08",
    comment: "感谢作者的分享，槽叔讲的听清楚的，是我的第一本保险书。",
  },
  {
    title: "王二的经济学故事",
    url: "https://img3.doubanio.com/view/subject/m/public/s10279030.jpg",
    star: 3,
    date: "2020.08",
    comment:
      "郭凯老师这本书的每个章节有一个主题，里面的文章讲相关的话题，话题的主人公是有中国特色的王二，他可能是普普通通的中年男人，但他的故事代表了很多人遇见但又无法弄懂的事。作者在每篇文章后都有相应的经济学解释，清晰易懂，适合新手阅读。",
  },
  {
    title: "指数基金投资指南",
    url: "https://img1.doubanio.com/view/subject/m/public/s29618589.jpg",
    star: 3,
    date: "2020.07",
  },
  {
    title: "李光耀论中国与世界",
    url: "https://img2.doubanio.com/view/subject/m/public/s27058151.jpg",
    star: 3,
    date: "2020.07",
    comment: "做一个优秀的人。",
  },
  {
    title: "鞋狗",
    url: "https://img9.doubanio.com/view/subject/m/public/s29067926.jpg",
    star: 4,
    date: "2020.06",
    comment: "耐克的logo竟然是一个大学生设计的"
  },
  {
    title: "一本书读懂地缘世界",
    url: "https://img2.doubanio.com/view/subject/m/public/s29581653.jpg",
    star: 3,
    date: "2020.06",
  },
  {
    title: "刻意练习",
    url: "https://img9.doubanio.com/view/subject/m/public/s29105145.jpg",
    star: 3,
    date: "2020.05",
    comment: "重复和刻意练习是有区别的",
  },
  {
    title: "一年顶十年",
    url: "https://img2.doubanio.com/view/subject/m/public/s33606302.jpg",
    star: 3,
    date: "2020.05",
    comment: "虽然短，干货满满。",
  },
  {
    title: "三体2",
    url: "https://img2.doubanio.com/view/subject/m/public/s28823471.jpg",
    star: 3,
    date: "2020.04",
    comment:
      "一开始的赤蚁那部分差点没读下去，后面还是精彩。期待三体舰队的到来。",
  },
  {
    title: "经济学通识",
    url: "https://img9.doubanio.com/view/subject/m/public/s29408045.jpg",
    star: 3,
    date: "2020.03",
    comment: "全书以短文形式组织。读起来很受启发。",
  },
  {
    title: "邓小平时代",
    url: "https://img1.doubanio.com/view/subject/s/public/s24516687.jpg",
    star: 4,
    date: "2020.03",
    comment: "几起几落依然阻挡不了成为伟人"
  },
  {
    title: "白鹿原",
    url: "https://img9.doubanio.com/view/subject/s/public/s28111905.jpg",
    star: 4,
    date: "2020.03",
  },
  {
    title: "白夜行",
    url: "https://img1.doubanio.com/view/subject/s/public/s24514468.jpg",
    star: 5,
    date: "2020.03",
  },
  {
    title: "手把手教你读财报",
    url: "https://img2.doubanio.com/view/subject/s/public/s29175222.jpg",
    star: 4,
    date: "2020.03",
  },
  {
    title: "薄世宁医学通识讲义",
    url: "https://img2.doubanio.com/view/subject/s/public/s33514773.jpg",
    star: 5,
    date: "2020.03",
  },
  {
    title: "价值投资实战手册",
    url: "https://img1.doubanio.com/view/subject/m/public/s33654427.jpg",
    star: 3,
    date: "2020.03",
  },
  {
    title: "房价的本质",
    url: "https://img9.doubanio.com/view/subject/m/public/s8856554.jpg",
    star: 3,
    date: "2020.03",
  },
  {
    title: "金融的逻辑",
    url: "https://img9.doubanio.com/view/subject/m/public/s3908276.jpg",
    star: 3,
    date: "2020.03",
    comment:
      "大城市和农村对于“养儿防老”的态度有不同；有了完善的金融制度后，人们可以把未来的收入投入到今天使用；国债的利率如果高于政府投资的利率，这时候政府不应该收过多的税，钱用之于民带来的投资效率可能会更好；如果一项投资的回报率是0，就不要做；西方国家物质文明发达就代表精神文明不发达吗？中国物质文明不发达就代表精神文明发达吗； 感觉有很多观念还是挺有启发的。 国家如果要保持经济的增长，1.完善产权制度2.土地买卖3.私营企业发展4.建立自由的金融制度5.国有企业民营化。我们能在这个过程中做什么？",
  },
  {
    title: "简读中国史",
    url: "https://img1.doubanio.com/view/subject/m/public/s33470317.jpg",
    star: 4,
    date: "2020.03",
  },
  {
    title: "巴菲特之道",
    url: "https://img2.doubanio.com/view/subject/m/public/s33917963.jpg",
    star: 3,
    date: "2020.02",
    comment:
      "巴菲特以一贯的平易近人的口吻说:我只是“在别人恐惧时贪婪,在别人贪婪时恐惧而已”。",
  },
  {
    title: "女生呵护指南",
    url: "https://img9.doubanio.com/view/subject/m/public/s33458976.jpg",
    star: 3,
    date: "2020.02",
    comment: "了解了一些平时想知道但又不知道从哪里看的知识。",
  },
  {
    title: "彼得·林奇的成功投资",
    url: "https://img2.doubanio.com/view/subject/m/public/s4409283.jpg",
    star: 3,
    date: "2020.02",
    comment: "基本面，盈利，市盈率，业务投资者。自己的第三本投资书。",
  },
  {
    title: "CSS揭秘",
    url: "https://img1.doubanio.com/view/subject/m/public/s28659699.jpg",
    star: 3,
    date: "2020.01",
    comment: "实现了一些比较感兴趣的部分。",
  },
  {
    title: "简约至上",
    url: "https://img1.doubanio.com/view/subject/m/public/s4592217.jpg",
    star: 3,
    date: "2020.01",
    comment: "第二本设计书。",
  },
  {
    title: "腾讯传",
    url: "https://img9.doubanio.com/view/subject/m/public/s29653026.jpg",
    star: 3,
    date: "2019.12",
    comment: "1998-2018，再过20年，腾讯又会变成怎样。腾讯创造的价值是什么。",
  },
  {
    title: "菊与刀",
    url: "https://img9.doubanio.com/view/subject/s/public/s26241196.jpg",
    star: 4,
    date: "2019.11",
  },
  {
    title: "JavaScript模式",
    url: "https://img1.doubanio.com/view/subject/m/public/s11337059.jpg",
    star: 3,
    date: "2019.12",
    comment: "不推荐新手读"
  },
  {
    title: "把时间当做朋友",
    url: "https://img2.doubanio.com/view/subject/m/public/s3778613.jpg",
    star: 3,
    date: "2019.11",
    comment:
      "方法很重要，对于不同的人有不同的方法，在别人身上可以成功的方法对你不一定适用。在方法面前，努力使它们差距变小。",
  },
  {
    title: "深入浅出Vue.js",
    url: "https://img2.doubanio.com/view/subject/m/public/s31471882.jpg",
    star: 4,
    date: "2019.10",
    comment: "感觉挺好的，做完一两个项目可以读这本书。",
  },
  {
    title: "汴京之围",
    url: "https://img9.doubanio.com/view/subject/m/public/s33300134.jpg",
    star: 4,
    date: "2019.09",
    comment: "喜欢作者的文笔。",
  },
  {
    title: "炒股的智慧",
    url: "https://img1.doubanio.com/view/subject/m/public/s28951618.jpg",
    star: 4,
    date: "2019.09",
    comment: "很好的一本书，感觉炒股也像是做人，要守规则，明大势，辨是非。",
  },
  {
    title: "被讨厌的勇气",
    url: "https://img1.doubanio.com/view/subject/m/public/s29237648.jpg",
    star: 3,
    date: "2019.09",
  },
  {
    title: "巴菲特致股东的信",
    url: "https://img2.doubanio.com/view/subject/m/public/s2505152.jpg",
    star: 3,
    date: "2019.07",
    comment:
      "从一个方面了解巴菲特。真实的巴菲特如果是这样的，那这个人也太伟大了。",
  },
  {
    title: "网络是怎样连接的",
    url: "https://img1.doubanio.com/view/subject/m/public/s29370067.jpg",
    star: 5,
    date: "2019.07",
    comment: "非科班推荐看"
  },
  {
    title: "上帝掷骰子吗？",
    url: "https://img3.doubanio.com/view/subject/m/public/s6475450.jpg",
    star: 5,
    date: "2019.07",
    comment:
      "很好的一本书，从光开始，到相对论和量子力学。可怕的观察者效应，最终归于万物理论（弦）。其中一句话说的很好，命题是可以证伪的，因为证实需要穷尽所有情况，显然是不可能的，所以只能选择一个折中的方案。科学也在不断地进步和完善，可惜课本中从来没有说，我们高中学到的就是，科学就是科学，爱因斯坦就是对的。真的是这样吗？",
  },
  {
    title: "给大家看的设计书",
    url: "https://img9.doubanio.com/view/subject/m/public/s23486434.jpg",
    star: 4,
    date: "2019.06",
  },
  {
    title: "浪潮之巅",
    url: "https://img9.doubanio.com/view/subject/m/public/s6807265.jpg",
    star: 5,
    date: "2019.06",
  },
  {
    title: "人月神话",
    url: "https://img9.doubanio.com/view/subject/m/public/s1086045.jpg",
    star: 3,
    date: "2019.06",
  },
  {
    title: "精通CSS",
    url: "https://img2.doubanio.com/view/subject/m/public/s29995512.jpg",
    star: 3,
    date: "2019.06",
    comment: "初级，有些内容比较老了，不过外边距合并那里讲的很好。",
  },
  {
    title: "锋利的jQuery",
    url: "https://img1.doubanio.com/view/subject/m/public/s28026858.jpg",
    star: 3,
    date: "2019.06",
    comment: "宝刀依然锋利，但有更好的工具出现了"
  },
  {
    title: "HTML5秘籍",
    url: "https://img2.doubanio.com/view/subject/m/public/s11190661.jpg",
    star: 3,
    date: "2019.06",
    comment: "1-4章可以",
  },
  {
    title: "Just For Fun",
    url: "https://img3.doubanio.com/view/subject/m/public/s1390410.jpg",
    star: 3,
    date: "2019.06",
    comment:
      "比较简短，印象深刻的是Linus对人类社会形态的解读，对开源软件的态度以及自我内心的关注。",
  },
  {
    title: "CSS实战手册",
    url: "https://img2.doubanio.com/view/subject/m/public/s29130641.jpg",
    star: 4,
    date: "2019.05",
    comment: "非常完美的一本CSS书。",
  },
  {
    title: "大型网站技术架构",
    url: "https://img9.doubanio.com/view/subject/s/public/s27250675.jpg",
    star: 4,
    date: "2019.04",
    comment: "对网站整体架构的描述，没有描述太多的技术细节，是一本好书。",
  },
  {
    title: "算法图解",
    url: "https://img9.doubanio.com/view/subject/m/public/s29358625.jpg",
    star: 3,
    date: "2019.04",
    comment: "有点意思，非科班可以读读"
  },
  {
    title: "HTTP 权威指南",
    url: "https://img1.doubanio.com/view/subject/s/public/s11329547.jpg",
    star: 3,
    date: "2019.04",
    comment: "1-4章",
  },
  {
    title: "史蒂夫·乔布斯传",
    url: "https://img2.doubanio.com/view/subject/s/public/s6974202.jpg",
    star: 5,
    date: "2019.04",
    comment:
      "一部很棒的传记，让我了解了把艺术和科技融合在一起的天才。也让我对苹果公司有了新的看法。作者写作功底太强大，读起来很舒服。",
  },
  {
    title: "HTML & CSS设计与构建网站",
    url: "https://img1.doubanio.com/view/subject/s/public/s24951890.jpg",
    star: 5,
    date: "2019.04",
    comment: "1-9章",
  },
  {
    title: "JavaScript高级程序设计（第3版）",
    url: "https://img1.doubanio.com/view/subject/s/public/s8958650.jpg",
    star: 5,
    date: "2019.04",
    comment: "JS 程序员必读的一本书，也是推荐入手后第一本要看的"
  },
  {
    title: "JavaScript语言精粹",
    url: "https://img9.doubanio.com/view/subject/s/public/s3651235.jpg",
    star: 4,
    date: "2019.04",
  },
  {
    title: "野心优雅",
    url: "https://img1.doubanio.com/view/subject/s/public/s27041888.jpg",
    star: 4,
    date: "2019.04",
    comment: "唏嘘"
  },
  {
    title: "Java核心技术·卷 I",
    url: "https://img9.doubanio.com/view/subject/s/public/s29063065.jpg",
    star: 4,
    date: "2019.04",
  },
  {
    title: "计算机网络",
    url: "https://img1.doubanio.com/view/subject/s/public/s27997920.jpg",
    star: 4,
    date: "2019.04",
  },
  {
    title: "明朝那些事儿",
    url: "https://img2.doubanio.com/view/subject/s/public/s1872653.jpg",
    star: 4,
    date: "2019.03",
  },
  {
    title: "天才在左 疯子在右",
    url: "https://img1.doubanio.com/view/subject/s/public/s6340977.jpg",
    star: 4,
    date: "2019.03",
    comment: "你也是蘑菇吗？"
  },
  {
    title: "一只特立独行的猪",
    url: "https://img2.doubanio.com/view/subject/s/public/s1670642.jpg",
    star: 4,
    date: "2019.03",
  },
  {
    title: "羊脂球",
    url: "https://img1.doubanio.com/view/subject/s/public/s1469280.jpg",
    star: 4,
    date: "2019.03",
  },
  {
    title: "无人生还",
    url: "https://img1.doubanio.com/view/subject/s/public/s2962510.jpg",
    star: 4,
    date: "2019.03",
  },
  {
    title: "沉默的大多数",
    url: "https://img1.doubanio.com/view/subject/s/public/s1447349.jpg",
    star: 4,
    date: "2019.03",
  },
  {
    title: "一个陌生女人的来信",
    url: "https://img1.doubanio.com/view/subject/s/public/s2611329.jpg",
    star: 5,
    date: "2019.03",
    comment: "高中读的，震撼，很好",
  },
  {
    title: "兄弟",
    url: "https://img2.doubanio.com/view/subject/s/public/s1427312.jpg",
    star: 5,
    date: "2019.03",
    comment: "震撼，不过有人也说屁股没啥可看的，低俗",
  },
  {
    title: "1984",
    url: "https://img1.doubanio.com/view/subject/s/public/s4371408.jpg",
    star: 4,
    date: "2019.03",
    comment: "老大哥在看你，人人都是老大哥",
  },
  {
    title: "向左走·向右走",
    url: "https://img1.doubanio.com/view/subject/s/public/s1557610.jpg",
    star: 4,
    date: "2019.03",
    comment: "治愈",
  },
  {
    title: "万历十五年",
    url: "https://img9.doubanio.com/view/subject/s/public/s1800355.jpg",
    star: 5,
    date: "2019.03",
    comment: "读完明朝那些事儿之后推荐读这本"
  },
  {
    title: "狼图腾",
    url: "https://img2.doubanio.com/view/subject/s/public/s1466042.jpg",
    star: 4,
    date: "2019.03",
    comment: "书比电影版好。",
  },
  {
    title: "许三观卖血记",
    url: "https://img2.doubanio.com/view/subject/s/public/s1074291.jpg",
    star: 5,
    date: "2019.03",
    comment: "震撼",
  },
  {
    title: "飘",
    url: "https://img1.doubanio.com/view/subject/s/public/s1078958.jpg",
    star: 5,
    date: "2019.03",
    comment: "史诗级",
  },
  {
    title: "不能承受的生命之轻",
    url: "https://img1.doubanio.com/view/subject/s/public/s1091698.jpg",
    star: 4,
    date: "2019.03",
  },
  {
    title: "百年孤独",
    url: "https://img1.doubanio.com/view/subject/s/public/s27237850.jpg",
    star: 4,
    date: "2019.03",
    comment:
      "第一次读下来还是有点困难的，不过整体读下来之后很震撼。面对行刑队，他还记得...",
  },
  {
    title: "活着",
    url: "https://img1.doubanio.com/view/subject/s/public/s29053580.jpg",
    star: 5,
    date: "2019.03",
    comment: "也强烈推荐电影版"
  },
  {
    title: "三体1",
    url: "https://img1.doubanio.com/view/subject/s/public/s2768378.jpg",
    star: 4,
    date: "2019.03",
    comment: "第一部还是震撼"
  },
  {
    title: "围城",
    url: "https://img2.doubanio.com/view/subject/s/public/s1070222.jpg",
    star: 5,
    date: "2019.03",
    comment: "感觉过誉了"
  },
  {
    title: "解忧杂货店",
    url: "https://img2.doubanio.com/view/subject/s/public/s27264181.jpg",
    star: 5,
    date: "2019.03",
    comment: "印象中比电影好看"
  },
  {
    title: "追风筝的人",
    url: "https://img1.doubanio.com/view/subject/s/public/s1727290.jpg",
    star: 4,
    date: "2019.03",
    comment: "配合电影版食用更佳。",
  },
  {
    title: "计算机体系结构",
    url: "https://img1.doubanio.com/view/subject/s/public/s6343909.jpg",
    star: 5,
    date: "2019.02",
  },
  {
    title: "流浪地球",
    url: "https://img9.doubanio.com/view/subject/s/public/s5961934.jpg",
    star: 5,
    date: "2019.02",
  },
  {
    title: "房思琪的初恋乐园",
    url: "https://img2.doubanio.com/view/subject/s/public/s29651121.jpg",
    star: 5,
    date: "2019.01",
    comment: "愿每个人都可以温柔被对待。",
  },
  {
    title: "囚徒健身",
    url: "https://img2.doubanio.com/view/subject/s/public/s27248971.jpg",
    star: 4,
    date: "2019.01",
    comment: "理论上挺不错的，实际很难坚持下来"
  },
  {
    title: "醒来觉得甚是爱你",
    url: "https://img1.doubanio.com/view/subject/s/public/s29286968.jpg",
    star: 5,
    date: "2019.01",
  },
  {
    title: "爱你就像爱生命",
    url: "https://img2.doubanio.com/view/subject/s/public/s4661043.jpg",
    star: 5,
    date: "2019.01",
    comment: "你好哇，李银河"
  },
  {
    title: "非暴力沟通",
    url: "https://img1.doubanio.com/view/subject/s/public/s9346487.jpg",
    star: 4,
    date: "2019.01",
  },
  {
    title: "毛泽东传",
    url: "https://img9.doubanio.com/view/subject/s/public/s6783554.jpg",
    star: 4,
    date: "2019.01",
    comment: "很好读，推荐。了解伟人的一些成长以及平时难以看到的趣事。"
  },
  {
    title: "半小时漫画中国史",
    url: "https://img2.doubanio.com/view/subject/s/public/s29492853.jpg",
    star: 4,
    date: "2019.01",
  },
  {
    title: "半小时漫画世界史",
    url: "https://img1.doubanio.com/view/subject/s/public/s29736949.jpg",
    star: 4,
    date: "2019.01",
  },
  {
    title: "An Introduction to Statistical Learning : with Applications in R",
    url: "https://img1.doubanio.com/view/subject/s/public/s28340848.jpg",
    star: 5,
    date: "2018.10",
    comment:
      "统计学入门读的书，没有把细节放在数学公式的推导，非常的友好，读完这本书可以读进阶版ESL。",
  },
];

export default READING_BOOKS;
