import React from "react";

function GridMemoSection({ Categories, activeCatg }) {
  return (
    <>
      <div className="pl-2.5 h-[100vhx] pr-2.5 pt-5 pb-0 overflow-hidden ">
        {Categories[activeCatg - 1].content}
      </div>
    </>
  );
}

export default GridMemoSection;
