import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <>
      <div>
        <ClipLoader
          color="#4D0186"
          size={60}
          cssOverride={{
            borderWidth: "6px", // Increase border thickness for a larger visual effect
          }}
        />
      </div>
    </>
  );
};

export default Loading;
