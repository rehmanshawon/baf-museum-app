//import Draggable from "react-draggable";
import React, { useRef, useState, useEffect } from "react";
import { useBreakpoints, useCurrentWidth } from "react-breakpoints-hook";
import { MenuItem } from "./MenuItem";
import "./comp.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function ScrollMenu(props) {
  const parentRef = useRef(null);
  const rightArrow = useRef(null);
  const leftArrow = useRef(null);
  const childrenWidth = useRef(0);
  let windowWidth = useCurrentWidth();
  let smallWindow = false;
  const [scrollMenuWidth, setScrollMenuWidth] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [currStickyPos, setCurrStickyPos] = useState(0);
  const [show, setShow] = useState(false);
  // build the top menu from the props
  const menuArray = props.menuData;
  const menuItems = menuArray.map((item) => (
    <MenuItem
      menuText={item.menuName}
      menuTarget={item.menuTarget}
      sendWidthToParent={addChildWidth}
    />
  ));

  // calculate scroll menu's top position from the props topPosition id

  let offsetX;
  var direction = 1,
    oldx = 0;
  // window.location.reload(false);
  useEffect(() => {
    childrenWidth.current = 0;
    let topElement = document.getElementById(props.afterWhat);
    let scrollTopPosition =
      topElement.getBoundingClientRect().bottom +
      window.scrollY +
      props.adjustBy;
    //let scrollBar = document.getElementById("dragBox");
    //let stickyScrollTop =
    //  scrollBar.getBoundingClientRect().top + window.pageYOffset;
    setScrollTop(scrollTopPosition);

    // setCurrStickyPos(stickyScrollTop);
  });

  const handleResize = () => {
    let topElement = document.getElementById(props.afterWhat);
    let scrollTopPosition =
      topElement.getBoundingClientRect().bottom +
      window.scrollY +
      props.adjustBy;
    setScrollTop(scrollTopPosition);
  };
  const handleScroll = () => {
    // do something like call `this.setState`
    // access window.scrollY etc
    console.log("scrolling");
    if (window.pageYOffset > currStickyPos) {
      document.getElementById("dragBox").style.position = "fixed";
      document.getElementById("dragBox").style.top = "0px";
    } else {
      document.getElementById("dragBox").style.position = "absolute";
      document.getElementById("dragBox").style.top = "initial";
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    //window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, [show]);

  if (!show) return null;

  function addChildWidth(width) {
    childrenWidth.current = childrenWidth.current + width;
    setScrollMenuWidth(childrenWidth.current + 30);
    parentRef.current.style.width = childrenWidth.current + 30 + "px";
    if (windowWidth > parentRef.current.scrollWidth) {
      let x = windowWidth / 2 - parentRef.current.scrollWidth / 2;
      parentRef.current.style.left = x + "px";
      smallWindow = false;
    } else {
      parentRef.current.style.left = 0 + "px";
      smallWindow = true;
    }
    console.log(childrenWidth.current);
  }

  const move = (e) => {
    const el = e.target;
    if (e.pageX < oldx) {
      direction = 1;
    } else if (e.pageX > oldx) {
      direction = 2;
    }
    oldx = e.pageX;
    let newLeft = e.pageX - offsetX;
    //let newRight = e.pageX - offsetX;
    let left = el.getBoundingClientRect().left;
    let right = el.getBoundingClientRect().right;
    if (direction === 1) {
      if (left <= 0 && right <= windowWidth - 30) {
        right = windowWidth;
        el.style.right = right + "px";
        document.getElementById("leftArrow").style.visibility = "hidden";
      } else {
        el.style.left = newLeft + "px";
        document.getElementById("leftArrow").style.visibility = "visible";
        document.getElementById("rightArrow").style.visibility = "visible";
      }
    }
    if (direction === 2) {
      if (right > window.innerWidth && left >= 0) {
        left = 0;
        el.style.left = left + "px";
        //rightArrow.current.style.visibility = "hidden";
        document.getElementById("rightArrow").style.visibility = "hidden";
      } else {
        el.style.left = newLeft + "px";
        // rightArrow.current.style.visibility = "visible";
        document.getElementById("rightArrow").style.visibility = "visible";
        document.getElementById("leftArrow").style.visibility = "visible";
      }
    }
  };
  const add = (e) => {
    if (windowWidth > parentRef.current.scrollWidth) {
      const el = e.target;
      el.removeEventListener("mousemove", move);
      el.removeEventListener("touchmove", move);
      return;
    }
    e.preventDefault();
    const el = e.target;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    el.addEventListener("mousemove", move);
    el.addEventListener("touchmove", move);
  };
  const remove = (e) => {
    const el = e.target;
    el.removeEventListener("mousemove", move);
    el.removeEventListener("touchmove", move);
  };

  function moveBoxLeft() {
    let rightLimit = document
      .getElementById("dragBox")
      .getBoundingClientRect().right;
    let leftLimit = document
      .getElementById("dragBox")
      .getBoundingClientRect().left;
    if (rightLimit > window.innerWidth) {
      document.getElementById("rightArrow").style.visibility = "visible";
      let limit =
        rightLimit - window.innerWidth > 50
          ? 50
          : rightLimit - window.innerWidth;
      if (limit < 50) {
        limit += 30;
        document.getElementById("leftArrow").style.visibility = "hidden";
      }
      document.getElementById("dragBox").style.left = leftLimit - limit + "px";
    }
  }
  function moveBoxRight() {
    let leftLimit = document
      .getElementById("dragBox")
      .getBoundingClientRect().left;
    if (leftLimit + 50 < 0) {
      document.getElementById("leftArrow").style.visibility = "visible";
      let limit = 50;
      if (leftLimit > -50) {
        limit += 30;
        document.getElementById("rightArrow").style.visibility = "hidden";
      }
      document.getElementById("dragBox").style.left = leftLimit + limit + "px";
    }
  }

  return (
    <div className="scrollContainer">
      <BiLeftArrow
        id="leftArrow"
        ref={leftArrow}
        className={
          windowWidth > scrollMenuWidth ? "left-arrow-hidden" : "left-arrow"
        }
        style={{ top: scrollTop + 30 + "px" }}
        onClick={moveBoxLeft}
      />
      {windowWidth < scrollMenuWidth && (
        <fadeLeft style={{ top: scrollTop + 30 + "px" }} />
      )}
      <div
        className="drag-box"
        style={{ top: scrollTop + "px", cursor: "pointer" }}
        id="dragBox"
        onTouchStart={add}
        onMouseDown={add}
        onMouseUp={remove}
        onTouchEnd={remove}
        onMouseOut={remove}
        onMouseLeave={remove}
        //onTouch
        ref={parentRef}
      >
        {menuItems}
      </div>
      {windowWidth < scrollMenuWidth && (
        <fadeRight style={{ top: scrollTop + 30 + "px" }} />
      )}

      <BiRightArrow
        id="rightArrow"
        ref={rightArrow}
        className={
          windowWidth > scrollMenuWidth ? "right-arrow-hidden" : "right-arrow"
        }
        style={{ top: scrollTop + 30 + "px" }}
        onClick={moveBoxRight}
      />
    </div>
  );
}

export default ScrollMenu;
