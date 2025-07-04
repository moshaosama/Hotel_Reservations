import type { ReactElement } from "react";
import Container from "../Styles";
import React from "react";
import { cn } from "../libs/cn";

const PathName = ({ children }: { children: ReactElement }) => {
  return <div className={cn(Container)}>{React.cloneElement(children)}</div>;
};

export default PathName;
