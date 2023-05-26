import React from "react";
import { Card, Rating, Typography } from "@douyinfe/semi-ui";
import { BookProps } from "../const/books";
import  '../styles/components.scss';

interface BookCardProps extends BookProps {
  style?: React.CSSProperties;
}

const { Meta } = Card;

function BookCard(props: BookCardProps) {
  const { title, url, star = 3, date } = props;
  return (
    <Card
      className="book-card-component"
      shadows='hover'
      bodyStyle={{ padding: 0, margin: 0 }}
      title={<Meta title={title} />}
      headerExtraContent={
        <Typography.Text style={{ fontWeight: "normal" }} type="quaternary">
          {date}
        </Typography.Text>
      }
      cover={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <img
            alt={title}
            src={url}
            style={{ maxHeight: 250, width: "auto" }}
          />
        </div>
      }
      footerLine={true}
      footer={<Rating size="small" defaultValue={star} />}
    />
  );
}

export default BookCard;
