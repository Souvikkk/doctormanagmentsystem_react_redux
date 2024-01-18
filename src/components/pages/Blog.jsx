import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchBlog } from "../../Redux/SearchBlogSlice";
import { fetchRecentBlogs } from "../../Redux/RecentBlogSlice";
import { FetchAllBlogs } from "../../Redux/AllBlogSlice";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { GridLoader } from "react-spinners";
import Layout from "../Layout/Layout";
const Blog = () => {
  const { all_blog_data, status } = useSelector((state) => state?.allblog);
  const { recent_blog, loading } = useSelector((state) => state?.recent);
  const { search_blog } = useSelector((state) => state?.search);
  const count = search_blog?.count;

  const dispatch = useDispatch();

  const formatDate = (timestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return new Date(timestamp).toLocaleString("en-US", options);
  };

  // search

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(e.target.value);
    // Dispatch action to get search results
    dispatch(fetchSearchBlog(value));
  };
  // Pgination All Blogs
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);

  useEffect(() => {
    dispatch(fetchRecentBlogs());
    dispatch(FetchAllBlogs());
  }, [dispatch]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = all_blog_data?.data?.slice(
    indexofFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <Layout title={"Blog"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Our blog</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      Blog articles
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section blog-wrap">
            <div className="container">
              <div className="row">
                {/* start blog Content */}

                <div className="col-lg-8">
                  <div className="row">
                    {status === "loading" ? (
                      <div style={{ margin: "auto" }}>
                        <GridLoader color="#36d7b7" />{" "}
                      </div>
                    ) : (
                      currentPosts?.map((item, index) => {
                        return (
                          <>
                            <div className="col-lg-12 col-md-12 mb-5">
                              <div className="blog-item">
                                <div className="blog-thumb">
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/blog/Blogimg.jpg`}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: "350", height: "215" }}
                                  />
                                </div>

                                <div className="blog-item-content">
                                  <div className="blog-item-meta mb-3 mt-4">
                                    <span className="text-black text-capitalize mr-3">
                                      <i className="icofont-calendar mr-1"></i>{" "}
                                      {formatDate(item?.createdAt)}
                                    </span>
                                  </div>

                                  <h2 className="mt-3 mb-3">
                                    <Link to={`/blog-single/${item?._id}`}>
                                      {item?.title}
                                    </Link>
                                  </h2>

                                  <p className="mb-4">{item?.description}</p>

                                  <Link
                                    to={`/blog-single/${item?._id}`}
                                    className="btn btn-main btn-icon btn-round-full"
                                  >
                                    Details{" "}
                                    <i className="icofont-simple-right ml-2"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                    )}

                    {/* Pagination controls */}

                    <div className="col-lg-12 col-md-12">
                      <div className="blog-pagination">
                        <ReactPaginate
                          breakLabel={
                            <span className="page-numbers current">...</span>
                          }
                          nextLabel={
                            <a className="page-numbers" href="#!">
                              <i className="icofont-thin-double-right"></i>
                            </a>
                          }
                          onPageChange={handlePageClick}
                          pageCount={Math.ceil(
                            all_blog_data?.data?.length / postPerPage
                          )}
                          previousLabel={
                            <a className="page-numbers" href="#!">
                              {"< Previous"}
                            </a>
                          }
                          activeclassName={"active"}
                          containerclassName={"pagination"}
                          pageclassName={"page-numbers"}
                          pageLinkclassName={"page-link"}
                          breakclassName={"page-numbers current"}
                          breakLinkclassName={"page-link"}
                          previousclassName={"page-numbers"}
                          previousLinkclassName={"page-link"}
                          nextclassName={"page-numbers"}
                          nextLinkclassName={"page-link"}
                        />
                      </div>
                    </div>

                    {/* Pagination controls */}
                  </div>
                </div>

                {/* end blog Content */}

                <div className="col-lg-4">
                  <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                    <div className="sidebar-widget search  mb-3 ">
                      <h5>Search Here</h5>

                      <form className="search-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="search"
                          value={search}
                          onChange={handleChange}
                        />
                        <i className="ti-search"></i>
                      </form>
                    </div>

                    {/* start Searched Blogs */}

                    <div className="sidebar-widget latest-post mb-3">
                      {search ? <h5>{count} Blogs found</h5> : null}

                      {search_blog?.data?.length > 0 ? (
                        search_blog.data.map((item, index) => (
                          <div className="py-2" key={index}>
                            <span className="text-sm text-muted">
                              {formatDate(item?.createdAt)}
                            </span>
                            <h6 className="my-2">
                              <Link to={`/blog-single/${item?._id}`}>
                                {item?.title}
                              </Link>
                            </h6>
                          </div>
                        ))
                      ) : (
                        <p
                          style={{
                            color: search ? "red" : "transparent",
                            fontWeight: "bold",
                          }}
                        >
                          No blogs found!
                        </p>
                      )}
                    </div>

                    {/* end Searched Blogs */}

                    <div className="sidebar-widget latest-post mb-3">
                      <h5>Recent Blogs</h5>

                      {loading === "loading" ? (
                        <div style={{ margin: "auto" }}>
                          <GridLoader color="#36d7b7" />{" "}
                        </div>
                      ) : (
                        recent_blog?.data?.map((item, index) => {
                          return (
                            <>
                              <div className="py-2">
                                <span className="text-sm text-muted">
                                  {formatDate(item?.createdAt)}
                                </span>
                                <h6 className="my-2">
                                  <Link to={`/blog-single/${item?._id}`}>
                                    {item?.title}
                                  </Link>
                                </h6>
                              </div>
                            </>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
