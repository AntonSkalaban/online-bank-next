import { FC } from "react";

import { SkeletonProps } from "./types";
import "./style.scss";

export const Skeleton: FC<SkeletonProps> = ({ skeletonClassName }) => {
  return <div className={`skeleton skeleton_${skeletonClassName}`}></div>;
};
