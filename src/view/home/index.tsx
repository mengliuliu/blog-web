import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd"
import { stampToTime } from "@src/utils/timeFilter"
import ModuleApi from "@src/network/index";
import styled from "styled-components";

const List = () => {
  const [articleList, setArticleList] = useState<any>([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 })
  useEffect(() => {
    getArticleList();
  }, [pagination.current, pagination.pageSize]);

  const getArticleList = async () => {
    const params = {
      pageNum: pagination.current,
      pageSize: pagination.pageSize,
    }
    const res: any = await ModuleApi.getArticleList(params);
    pagination.total = res['total']

    if (res.list && res.list.length) {
      setArticleList(res['list'])
    } else {
      setArticleList([])
    }
    console.log("res", res);
  };

  const handlePageNumChange = (current: number) => {
    pagination.current = current
    setPagination({ ...pagination })
  }
  const handlePageSizeChange = (size: number) => {
    pagination.current = 1
    pagination.pageSize = size
    setPagination({ ...pagination })
  }

  return (
    <Box>
      {articleList.map((article: any) => {
        return (
          <div key={article.id} className="item">
            <h2>
              <Link to={"/detail/" + article.id}>{article.title}</Link>
            </h2>
            <div className="description">{article.content}</div>
            <div className="date">
              发布时间：{stampToTime(article.createTime, 7)} 评论({article.comment_count})
            </div>
            <div className="readMore">
              <Link to={"/detail/" + article.id}>阅读更多</Link>
            </div>
            {/* <hr /> */}
          </div>
        );
      })}
      <div className="Pagination">
        <Pagination
          total={pagination.total}
          showTotal={(total: number) => `共搜索到 ${total} 条数据`}
          defaultPageSize={10}
          pageSizeOptions={['5', '10', '25', '50']}
          defaultCurrent={1}
          onChange={(page: number, pageSize: number) => {
            handlePageNumChange(page)
          }}
          onShowSizeChange={(current: number, size: number) => {
            handlePageSizeChange(size)
          }
          }
        />
      </div>
      <div className="about">
      </div>
    </Box>
  );
};

const Box = styled.div`
  .item {
    margin-bottom: 15px;
    border-bottom: 1px solid #666;
    h2 {
      a {
        color: #3e3b3f;
        text-decoration: none;
      }
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      /* display: block;
        line-height: 25px;
        font-size: 14px; */
      color: #666;
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      text-align: right;
    }
    .readMore {
      padding-bottom: 5px;
      a {
        color: #16982b;
        text-decoration: none;
      }

    }
  }
  .Pagination {
    text-align: right;
  }
  .about {
    height: 30px;

  }
`;

export default List;
