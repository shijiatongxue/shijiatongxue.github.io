import { useEffect, useState } from "react";
import { getBlogList } from "./utils";
import { get } from "lodash-es";

export interface Blog {
  id: string;
  url: string;
  title: string;
  description: string;
  createTime: Date;
  coverUrl?: string;
}

/**
 * @url https://www.notion.so/Blog-8b5996a9eeed460facf2233b8dffe386
 */
function formatData(rawData: Record<string, any>): Blog {
  const { id, cover, created_time, url, properties, paragraph } = rawData;
  const siteUrl = url.replace(
    "https://www.notion.so",
    "https://shijia.notion.site"
  );
  const result: Blog = {
    id,
    title: get(properties, "title.title.0.plain_text"),
    coverUrl: get(cover, "external.url"),
    description: get(paragraph, "paragraph.rich_text[0].plain_text"),
    createTime: new Date(created_time),
    url: siteUrl,
  };
  return result;
}

let isLoaded = false;
let list: Blog[] = [];

export default function useBlogList() {
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean | undefined>();
  useEffect(() => {
    if (isLoaded) {
      setBlogList(list);
    } else {
      setLoading(true);
      getBlogList()
        .then((data) => {
          const formattedData = data.map(formatData);
          setBlogList(formattedData);
          list = formattedData;
          isLoaded = true;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { blogList, loading };
}
