import React, { memo } from "react";

import { RecommendWrapper } from "./style";

import RangeTopBanner from "./c-cpns/top-banner";

export default memo(function RangeRecommend() {
  return (
    <RecommendWrapper>
      <RangeTopBanner />
    </RecommendWrapper>
  );
});
