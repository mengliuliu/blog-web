import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModuleApi from "@src/network/index";
import styled from "styled-components";

const Detail = (props: any) => {
  const params = useParams();
  const [articleDetail, setArticleDetail] = useState<any>({});

  useEffect(() => {
    console.log("props", props);
    console.log("params", params);
  }, []);

  useEffect(() => {
    getArticleDetail();
  }, []);

  const getArticleDetail = async () => {
    const res: any = await ModuleApi.getArticleDetail(params).catch((error) => { });
    setArticleDetail(res.data);
    console.log("res", res);
  };

  return (
    <Box>
      <div>Detail</div>
      <div className="detail">
        <div className="title">{articleDetail.title}</div>
        <div className="createTime">发布于：{articleDetail.createTime}</div>
        <div className="content">{articleDetail.content}</div>
        <div className="data">
          <div className="view">阅读({articleDetail.view_count})</div>
          <div className="comment">评论({articleDetail.comment_count})</div>
        </div>
      </div>
    </Box>
  );
};

const Box = styled.div`
.detail {
.title {
  font-size: 30px;
  padding: 10px;
}
.createTime {
  color: rgba(0,0,0,.5);
  padding: 10px;
}
.content {
  padding: 10px;
}
.data {
  display: flex;
  justify-content: flex-end;
  .view {
    padding-right: 20px;
  }
}
}
`;

export default Detail;
