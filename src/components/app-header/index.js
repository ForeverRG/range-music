import React, { memo } from "react";

import { headerLinks } from "../../common/local-data";

import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

export default memo(function RangeAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {index < 3 ? (
                    <NavLink to={item.link} className="select-item">
                      {item.title}
                    </NavLink>
                  ) : (
                    <a href={item.link}>{item.title}</a>
                  )}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            type="text"
            placeholder="音乐/视频/电台/用户"
          />
          <div className="center">创作者中心</div>
          <a href="/#">登录</a>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
});
