import React from "react";

const BlogList = () => {
  return (
    <>
      <div class="tf-page-title">
        <div class="container-full">
          <div class="row">
            <div class="col-12">
              <div class="heading text-center">Blog Grid</div>
              <ul class="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i class="icon-arrow-right"></i>
                </li>
                <li>Fashion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-grid-main">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-md-6 col-12">
              <div class="blog-article-item">
                <div class="article-thumb">
                  <a href="blog-detail.html">
                    <img
                      class="lazyload"
                      data-src="images/blog/blog-2.jpg"
                      src="images/blog/blog-2.jpg"
                      alt="img-blog"
                    />
                  </a>
                  <div class="article-label">
                    <a
                      href="blog-detail.html"
                      class="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                    >
                      Accessories
                    </a>
                  </div>
                </div>
                <div class="article-content">
                  <div class="article-title">
                    <a href="blog-detail.html" class="">
                      The next generation of leather alternatives
                    </a>
                  </div>
                  <div class="article-btn">
                    <a href="blog-detail.html" class="tf-btn btn-line fw-6">
                      Read more<i class="icon icon-arrow1-top-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
