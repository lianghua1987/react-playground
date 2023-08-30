import {useParams} from "react-router-dom";
import React from "react";
import exp from "constants";

export function withParams(Component: any) {
  return () => <Component params={useParams()}/>;
}
