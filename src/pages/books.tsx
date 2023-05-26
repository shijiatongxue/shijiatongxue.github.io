import React from "react";
import { Link } from "react-router-dom";
import { Select, Space, Tag } from "@douyinfe/semi-ui";
import BookCard from "../components/bookCard";
import EmptyContent from "../components/emptyCotent";
import { getReadYearList } from "../common/utils";
import READING_BOOKS from "../const/books";
import COS_PHOTOS from "../const/photos";
import "../styles/books.scss";

const { Option } = Select;
const YEAR_LIST = getReadYearList({ books: READING_BOOKS });
type RecommendType = "all" | "recommend";

function Books(props: any) {
  const [type, setType] = React.useState<RecommendType>("all");
  const [years, setYears] = React.useState<string[]>(YEAR_LIST);

  const list = READING_BOOKS.filter((book) => {
    const { star, date } = book;
    if (type === "recommend") {
      if (![4, 5].includes(star)) {
        return false;
      }
    }
    if (
      typeof date === "string" &&
      date.length &&
      !years.includes(date.split(".")[0])
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="books-page">
      <div className="books-list-top">
        <Space className="books-total" align="start">
          {list.length ? (
            <Link to="/">
              <Tag color="blue">{`${list.length}本书`}</Tag>
            </Link>
          ) : null}
          {COS_PHOTOS.length ? (
            <Link to="/photos">
              <Tag color="green">{`${COS_PHOTOS.length}张图片`}</Tag>
            </Link>
          ) : null}
        </Space>
        <Space className="books-filter">
          <Select
            style={{ width: 100 }}
            value={type}
            onChange={(value: RecommendType) => setType(value)}
          >
            <Option value={"recommend"}>推荐好书</Option>
            <Option value={"all"}>所有书</Option>
          </Select>
          <Select
            style={{ width: 220 }}
            maxTagCount={2}
            multiple
            value={years}
            onChange={(value: string[]) => setYears(value)}
          >
            {YEAR_LIST.sort((a, b) => Number(b) - Number(a)).map((year) => (
              <Option key={year} value={year}>{`${year}年`}</Option>
            ))}
          </Select>
        </Space>
      </div>
      <div className="book-list">
        {list.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
      <div className="book-empty">{list.length === 0 && <EmptyContent />}</div>
    </div>
  );
}

export default Books;
