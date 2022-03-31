import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGaffynBlog } from "./gaffynBlogSlice";

const GaffynBlog = () => {
  const { blogapi } = useSelector((state) => state.blogapi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGaffynBlog());
  }, [dispatch]);

  return (
    <div id="quote">
      <p></p>
      <h3> <abbr title="Will return better objects in time...">
        GaffynBlog API</abbr>
      </h3>
      <p className="blogapi">{blogapi}</p>
    </div>
  );
};

export default GaffynBlog;