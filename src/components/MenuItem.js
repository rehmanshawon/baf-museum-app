import React, { useEffect, useRef } from "react";

export function MenuItem(props) {
  const ref = useRef(null);
  useEffect(() => {
    props.sendWidthToParent(ref.current.offsetWidth);
    console.log("width", ref.current.offsetWidth);
  }, [props]);
  return (
    <div ref={ref} className="menuText">
      <a href={props.menuTarget}>{props.menuText}</a>
    </div>
  );
}
