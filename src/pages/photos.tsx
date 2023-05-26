import { Link } from "react-router-dom";
import { Tag, Space } from "@douyinfe/semi-ui";

import Photo from "../components/photo";
import COS_PHOTOS from "../const/photos";
import READING_BOOKS from "../const/books";
import "../styles/photos.scss";

export default function PhotoPage() {
  return (
    <div className="photo-page">
      <div className="photo-list-top">
        <Space className="photo-total" align="start">
          {READING_BOOKS.length ? (
            <Link to="/">
              <Tag color="blue">{`${READING_BOOKS.length}本书`}</Tag>
            </Link>
          ) : null}
          {COS_PHOTOS.length ? (
            <Link to="/photos">
              <Tag color="green">{`${COS_PHOTOS.length}张图片`}</Tag>
            </Link>
          ) : null}
        </Space>
      </div>
      <div className="photo-list">
        {COS_PHOTOS.map((photo) => (
          <Photo key={photo.url} path={photo.url} name={""} />
        ))}
      </div>
    </div>
  );
}
