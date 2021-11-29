import React from "react";
import { Tag, Space } from "@douyinfe/semi-ui";

import Photo from "components/photo";
import COS_PHOTOS from "../const/photos";
import READING_BOOKS from "../const/books";
import "../styles/photos.scss";

export default function PhotoPage() {
  return (
    <div className="photo-page">
      <div className="photo-list-top">
        <Space className="photo-total" align="start">
          {COS_PHOTOS.length ? (
            <Tag color="green">{`${COS_PHOTOS.length}张图片`}</Tag>
          ) : null}
          {READING_BOOKS.length ? (
            <Tag color="blue">{`${READING_BOOKS.length}本书`}</Tag>
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
