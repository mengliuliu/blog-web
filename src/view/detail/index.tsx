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
    const res = await ModuleApi.getArticleDetail(params).catch((error) => {});
    // setArticleDetail(res.data);
    console.log("res", res);
  };

  return (
    <Box>
      <div>Detail</div>
      <div>
        <Link to="/home">首页</Link>
      </div>
    </Box>
  );
};

const Box = styled.div``;

export default Detail;
