import { Empty } from "@douyinfe/semi-ui";
import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from "@douyinfe/semi-illustrations";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NoMatch() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);

  const handleBackToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (time - 1 >= 0) {
        setTime(time - 1);
      } else {
        handleBackToHome();
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time]);

  return (
    <div>
      <Empty
        image={<IllustrationNotFound />}
        darkModeImage={<IllustrationNotFoundDark />}
        description={`当前页面不存在，即将跳转到首页 ${time}s`}
        style={{ padding: 30 }}
      ></Empty>
    </div>
  );
}
