import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Box>
      <div className="header">
        <div className="left">小孟小刘</div>
        <div className="right">
          <div className="front">首页</div>
          <div className="about">关于</div>
        </div>
      </div>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  .header {
    width: 80%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: red;
  }
`;

export default Header;
