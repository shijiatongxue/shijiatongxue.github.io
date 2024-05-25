import { useEffect, useState } from "react";
import { getBlogList } from "./utils";
import { get } from "lodash-es";

export interface Blog {
  url: string;
  title: string;
  description: string;
  createTime: Date;
  id?: string;
  updateTime?: Date;
  coverUrl?: string;
}

/**
 * @url https://www.notion.so/Blog-8b5996a9eeed460facf2233b8dffe386
 */
function formatData(rawData: Record<string, any>): Blog {
  const { id, cover, created_time, url, properties, paragraph, last_edited_time } = rawData;
  const siteUrl = url.replace(
    "https://www.notion.so",
    "https://shijia.notion.site"
  );
  const externalUrl = get(cover, "external.url");
  const fileUrl = get(cover, "file.url");
  const result: Blog = {
    id,
    title: get(properties, "title.title.0.plain_text"),
    coverUrl: externalUrl || fileUrl,
    description: get(paragraph, "paragraph.rich_text[0].plain_text"),
    createTime: new Date(created_time),
    updateTime: new Date(last_edited_time),
    url: siteUrl,
  };
  return result;
}

let list: Blog[] = [
  {
    title: 'Semi D2C 设计稿转代码的演进之路',
    description: '介绍 Semi D2C 的能力边界、探索历程、底层实现原理',
    coverUrl: 'https://site-1307850796.cos.ap-beijing.myqcloud.com/design-2-code.jpg',
    createTime: new Date('2023/08/15'),
    url: 'https://mp.weixin.qq.com/s/AvqMqjQbP_whT5NBttFIGA',
  },
  {
    title: 'Semi Design 如何做质量保障',
    description: '综合运用 Unit Test、E2E Test、Visual Test 保障组件库稳定性',
    coverUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*5BAW6KHTo0_s2nj73lDRzg.png',
    createTime: new Date('2022/08/02'),
    url: 'https://medium.com/front-end-weekly/how-we-test-semi-design-component-libraries-64b854f63b65',
  }
];

export default function useBlogList() {
  const [blogList, setBlogList] = useState<Blog[]>(list);
  const [loading, setLoading] = useState<boolean | undefined>(false);
  // useEffect(() => {
  //   if (isLoaded) {
  //     setBlogList(list);
  //   } else {
  //     setLoading(true);
  //     getBlogList()
  //       .then((data) => {
  //         const formattedData = data.map(formatData);
  //         setBlogList(formattedData);
  //         list = formattedData;
  //         isLoaded = true;
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // }, []);

  return { blogList, loading };
}
