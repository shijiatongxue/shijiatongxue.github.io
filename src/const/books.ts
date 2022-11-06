export interface BookProps {
    title: string;
    url: string;
    star?: number;
    comment?: string;
    date?: string;
}

const READING_BOOKS: BookProps[] = [
    {
        title: '一句顶一万句',
        url: 'https://img1.doubanio.com/view/subject/s/public/s6916838.jpg',
        star: 4,
        date: '2022.10',
    },
    {
        title: '中国城市大趋势',
        url: 'https://img2.doubanio.com/view/subject/s/public/s34088393.jpg',
        star: 4,
        date: '2022.05',
    },
    {
        title: '我本芬芳',
        url: 'https://img2.doubanio.com/view/subject/l/public/s34072342.jpg',
        star: 5,
        date: '2022.04',
    },
    {
        title: '天下英雄谁敌手',
        url: 'https://img2.doubanio.com/view/subject/l/public/s33871311.jpg',
        star: 5,
        date: '2022.04',
    },
    {
        title: '置身事内',
        url: 'https://img1.doubanio.com/view/subject/l/public/s33956867.jpg',
        star: 5,
        date: '2022.02',
    },
    {
        title: '定投十年财务自由',
        url: 'https://img9.doubanio.com/view/subject/l/public/s33819565.jpg',
        star: 4,
        date: '2022.02',
    },
    {
        title: '在细雨中呼喊',
        url: 'https://img2.doubanio.com/view/subject/s/public/s29032782.jpg',
        star: 3,
        date: '2022.01',
    },
    {
        title: '蒋经国传',
        url: 'https://img9.doubanio.com/view/subject/s/public/s4483554.jpg',
        star: 4,
        date: '2022.01',
    },
    {
        title: '成为乔布斯',
        url: 'https://img9.doubanio.com/view/subject/s/public/s28948876.jpg',
        star: 4,
        date: '2021.12',
    },
    {
        title: 'JavaScript 权威指南',
        url: 'https://img9.doubanio.com/view/subject/s/public/s9056065.jpg',
        star: 5,
        date: '2021.10',
        comment: '很不错的一本书，适合有一定基础的人看'
    },
    {
        title: '大国大城',
        url: 'https://img1.doubanio.com/view/subject/s/public/s29440008.jpg',
        star: 3,
        date: '2021.07'
    },
    {
        title: '少年维特之烦恼',
        url: 'https://img2.doubanio.com/view/subject/m/public/s2899473.jpg',
        star: 3,
        date: '2021.07'
    },
    {
        title: '基本穿搭',
        url: 'https://img2.doubanio.com/view/subject/m/public/s29980542.jpg',
        star: 3,
        date: '2021.07'
    },
    {
        title: '战拖行动',
        url: 'https://img2.doubanio.com/view/subject/m/public/s30024201.jpg',
        star: 3,
        date: '2021.06'
    },
    {
        title: '不拘一格',
        url: 'https://img1.doubanio.com/view/subject/m/public/s33784858.jpg',
        star: 3,
        date: '2021.05'
    },
    {
        title: '小乌龟投资智慧',
        url: 'https://img9.doubanio.com/view/subject/m/public/s33572855.jpg',
        star: 3,
        date: '2021.05'
    },
    {
        title: '巴菲特投资组合',
        url: 'https://img9.doubanio.com/view/subject/m/public/s33785506.jpg',
        star: 3,
        date: '2021.02'
    },
    {
        title: '曾国藩传',
        url: 'https://img1.doubanio.com/view/subject/m/public/s33678368.jpg',
        star: 5,
        date: '2021.01'
    },
    {
        title: '都嘟',
        url: 'https://img2.doubanio.com/view/subject/m/public/s28324181.jpg',
        star: 3,
        date: '2020.08'
    },
    {
        title: '你的第一本保险指南',
        url: 'https://img3.doubanio.com/view/subject/m/public/s29849250.jpg',
        star: 3,
        date: '2020.08'
    },
    {
        title: '王二的经济学故事',
        url: 'https://img3.doubanio.com/view/subject/m/public/s10279030.jpg',
        star: 3,
        date: '2020.08'
    },
    {
        title: '指数基金投资指南',
        url: 'https://img1.doubanio.com/view/subject/m/public/s29618589.jpg',
        star: 3,
        date: '2020.07'
    },
    {
        title: '李光耀论中国与世界',
        url: 'https://img2.doubanio.com/view/subject/m/public/s27058151.jpg',
        star: 3,
        date: '2020.07'
    },
    {
        title: '鞋狗',
        url: 'https://img9.doubanio.com/view/subject/m/public/s29067926.jpg',
        star: 4,
        date: '2020.06'
    },
    {
        title: '一本书读懂地缘世界',
        url: 'https://img2.doubanio.com/view/subject/m/public/s29581653.jpg',
        star: 3,
        date: '2020.06'
    },
    {
        title: '刻意练习',
        url: 'https://img9.doubanio.com/view/subject/m/public/s29105145.jpg',
        star: 3,
        date: '2020.05'
    },
    {
        title: '一年顶十年',
        url: 'https://img2.doubanio.com/view/subject/m/public/s33606302.jpg',
        star: 3,
        date: '2020.05'
    },
    {
        title: '三体2',
        url: 'https://img2.doubanio.com/view/subject/m/public/s28823471.jpg',
        star: 3,
        date: '2020.04'
    },
    {
        title: '经济学通识',
        url: 'https://img9.doubanio.com/view/subject/m/public/s29408045.jpg',
        star: 3,
        date: '2020.03'
    },
    {
        title: '价值投资实战手册',
        url: 'https://img1.doubanio.com/view/subject/m/public/s33654427.jpg',
        star: 3,
        date: '2020.03'
    },
    {
        title: '房价的本质',
        url: 'https://img9.doubanio.com/view/subject/m/public/s8856554.jpg',
        star: 3,
        date: '2020.03'
    },
    {
        title: '金融的逻辑',
        url: 'https://img9.doubanio.com/view/subject/m/public/s3908276.jpg',
        star: 3,
        date: '2020.03'
    },
    {
        title: '简读中国史',
        url: 'https://img1.doubanio.com/view/subject/m/public/s33470317.jpg',
        star: 4,
        date: '2020.03'
    },
    {
        title: '巴菲特之道',
        url: 'https://img2.doubanio.com/view/subject/m/public/s33917963.jpg',
        star: 3,
        date: '2020.02'
    },
    {
        title: '女生呵护指南',
        url: 'https://img9.doubanio.com/view/subject/m/public/s33458976.jpg',
        star: 3,
        date: '2020.02'
    },
    {
        title: '彼得·林奇的成功投资',
        url: 'https://img2.doubanio.com/view/subject/m/public/s4409283.jpg',
        star: 3,
        date: '2020.02'
    },
    {
        title: 'CSS揭秘',
        url: 'https://img1.doubanio.com/view/subject/m/public/s28659699.jpg',
        star: 3,
        date: '2020.01'
    },
    {
        title: '简约至上',
        url: 'https://img1.doubanio.com/view/subject/m/public/s4592217.jpg',
        star: 3,
        date: '2020.01'
    },
    {
        title: '腾讯传',
        url: 'https://img9.doubanio.com/view/subject/m/public/s29653026.jpg',
        star: 3,
        date: '2019.12'
    },
    {
        title: 'JavaScript模式',
        url: 'https://img1.doubanio.com/view/subject/m/public/s11337059.jpg',
        star: 3,
        date: '2019.12'
    },
    {
        title: '把时间当做朋友',
        url: 'https://img2.doubanio.com/view/subject/m/public/s3778613.jpg',
        star: 3,
        date: '2019.11'
    },
    {
        title: '深入浅出Vue.js',
        url: 'https://img2.doubanio.com/view/subject/m/public/s31471882.jpg',
        star: 4,
        date: '2019.10'
    },
    {
        title: '汴京之围',
        url: 'https://img9.doubanio.com/view/subject/m/public/s33300134.jpg',
        star: 4,
        date: '2019.09'
    },
    {
        title: '炒股的智慧',
        url: 'https://img1.doubanio.com/view/subject/m/public/s28951618.jpg',
        star: 4,
        date: '2019.09'
    },
    {
        title: '被讨厌的勇气',
        url: 'https://img1.doubanio.com/view/subject/m/public/s29237648.jpg',
        star: 3,
        date: '2019.09'
    },
    {
        title: '巴菲特致股东的信',
        url: 'https://img2.doubanio.com/view/subject/m/public/s2505152.jpg',
        star: 3,
        date: '2019.07'
    },
    {
        title: '网络是怎样连接的',
        url: 'https://img1.doubanio.com/view/subject/m/public/s29370067.jpg',
        star: 5,
        date: '2019.07'
    },
    {
        title: '上帝掷骰子吗？',
        url: 'https://img3.doubanio.com/view/subject/m/public/s6475450.jpg',
        star: 5,
        date: '2019.07'
    },
    {
        title: '给大家看的设计书',
        url: 'https://img9.doubanio.com/view/subject/m/public/s23486434.jpg',
        star: 4,
        date: '2019.06'
    },
    {
        title: '浪潮之巅',
        url: 'https://img9.doubanio.com/view/subject/m/public/s6807265.jpg',
        star: 5,
        date: '2019.06'
    },
    {
        title: 'JavaScript语言精粹',
        url: 'https://img9.doubanio.com/view/subject/m/public/s3651235.jpg',
        star: 3,
        date: '2019.06'
    },
    {
        title: '人月神话',
        url: 'https://img9.doubanio.com/view/subject/m/public/s1086045.jpg',
        star: 3,
        date: '2019.06'
    },
    {
        title: '精通CSS',
        url: 'https://img2.doubanio.com/view/subject/m/public/s29995512.jpg',
        star: 3,
        date: '2019.06'
    },
    {
        title: '锋利的jQuery',
        url: 'https://img1.doubanio.com/view/subject/m/public/s28026858.jpg',
        star: 3,
        date: '2019.06'
    },
    {
        title: 'HTML5秘籍',
        url: 'https://img2.doubanio.com/view/subject/m/public/s11190661.jpg',
        star: 3,
        date: '2019.06'
    },
    {
        title: 'Just For Fun',
        url: 'https://img3.doubanio.com/view/subject/m/public/s1390410.jpg',
        star: 3,
        date: '2019.06'
    },
    {
        title: 'CSS实战手册',
        url: 'https://img2.doubanio.com/view/subject/m/public/s29130641.jpg',
        star: 4,
        date: '2019.05'
    },
    {
        title: '算法图解',
        url: 'https://img9.doubanio.com/view/subject/m/public/s29358625.jpg',
        star: 3,
        date: '2019.04'
    },
];

export default READING_BOOKS;
