import React, { memo, useEffect } from "react";

import request from "@/services/request";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft } from "./style";

export default memo(function RangeTopBanner() {
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </BannerLeft>
      </div>
    </BannerWrapper>
  );
});
