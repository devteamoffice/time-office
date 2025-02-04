import React, { useEffect, useRef } from "react";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

const ProductImageUploader = ({ existingImages, onImagesChange }) => {
  const dropzoneRef = useRef(null);

  useEffect(() => {
    if (dropzoneRef.current && Dropzone.instances.length === 0) {
      const dropzone = new Dropzone(dropzoneRef.current, {
        url: "#", // Prevent auto-upload
        autoProcessQueue: false,
        addRemoveLinks: true,
        acceptedFiles: "image/*",
        init() {
          this.on("addedfile", (file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              onImagesChange((prevImages) => [
                ...prevImages,
                { file, preview: event.target.result, new: true },
              ]);
            };
            reader.readAsDataURL(file);
          });

          this.on("removedfile", (file) => {
            onImagesChange((prevImages) =>
              prevImages.filter((img) => img.file !== file)
            );
          });
        },
      });

      dropzoneRef.current.dropzone = dropzone;
    }

    return () => {
      if (dropzoneRef.current && dropzoneRef.current.dropzone) {
        dropzoneRef.current.dropzone.destroy();
        dropzoneRef.current.dropzone = null;
      }
    };
  }, [onImagesChange]);

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Add Product Photo</h4>
      </div>
      <div className="card-body">
        <form className="dropzone" ref={dropzoneRef} id="imageDropzone">
          <div className="fallback">
            <input name="file" type="file" multiple />
          </div>
          <div className="dz-message needsclick">
            <i className="bx bx-cloud-upload fs-48 text-primary"></i>
            <h3 className="mt-4">
              Drop your images here, or{" "}
              <span className="text-primary">click to browse</span>
            </h3>
            <span className="text-muted fs-13">
              1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
              allowed.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductImageUploader;
