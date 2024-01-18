import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleBlogDetails } from '../../Redux/SingleBlogSlice';
import { fetchBlogCommentDetails } from '../../Redux/GetCommentBlogSlice';
import { PostBlogCommentSlice, PostComment } from '../../Redux/PostBlogCommentSlice';

const BlogSingles = () => {

  const { single_blog } = useSelector((state) => state?.single_blog);
	const { comment_details } = useSelector((state) => state?.getCommentBlog);

  	// Date And Time
    const formatDate = (timestamp) => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
    
      return new Date(timestamp).toLocaleString('en-US', options);
    };

const [comment, setComment] = useState();

const user_id = localStorage.getItem("id")
const blog_Id = single_blog?.data?._id

const id = useParams();

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchSingleBlogDetails(id));
  dispatch(fetchBlogCommentDetails(id));
}, [id]);

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(PostComment({ comment, user_id, blog_Id }))
  .then(() => {
    dispatch(fetchBlogCommentDetails(id));
  })
  setComment("")
  };
  return (
    <>
       <div>
    <section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">News details</span>
          <h1 className="text-capitalize mb-5 text-lg">Blog Single</h1>

          
        </div>
      </div>
    </div>
  </div>
    </section>

<section className="section blog-wrap">
	
  <div className="container">
    {/* <div className="row"> */}
      {/* <div className="col-lg-8"> */}
        <div className="row">
	

		<div className="col-lg-12 mb-5">
		<div className="single-blog-item">
			<img src={`${process.env.PUBLIC_URL}/images/blog/blog-single.jpg`} alt="" className="img-fluid" style={{ width: "100rem", height: "40rem" }}/>

			<div className="blog-item-content mt-5">
				<div className="blog-item-meta mb-3">
					{/* <span className="text-color-2 text-capitalize mr-3"><i className="icofont-book-mark mr-2"></i> Equipment</span> */}
					<span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i>{comment_details?.count} Comments</span>
					<span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-2"></i> {formatDate(single_blog?.data?.createdAt)}</span>
				</div>

				<h2 className="mb-4 text-md">{single_blog?.data?.title}</h2>

				<p className="lead mb-4">{single_blog?.data?.description}</p>


				<div className="mt-5 clearfix">
					

					<ul className="float-right list-inline">
						<li className="list-inline-item"> Share: </li>
						<li className="list-inline-item"><a href="#!"><i className="icofont-facebook"></i></a></li>
						<li className="list-inline-item"><a href="#!"><i className="icofont-twitter"></i></a></li>
						<li className="list-inline-item"><a href="#!"><i className="icofont-pinterest"></i></a></li>
						<li className="list-inline-item"><a href="#!"><i className="icofont-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

{/* Comment */}

	<div className="col-lg-12">

	

		<div className="comment-area mt-4 mb-5">
			<h4 className="mb-4">{comment_details?.count} Comments </h4>
			<ul className="comment-tree list-unstyled">
				
			{comment_details?.data?.map((item, index) => {
  // Format createdAt to display date and time with AM/PM
  const formattedDate = new Date(item?.createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // Display time in 12-hour format with AM/PM
  });

  return (
    <>
      <li className="mb-5">
        <div className="comment-area-box d-block d-sm-flex">
          <div className="comment-thumb">
            <img alt="" src={`http://localhost:7654/${item?.user_id?.image}`} style={{ width: "70px" }} />
          </div>

          <div className="block">
            <div className="comment-info">
              <h5 className="mb-1">{item?.user_id?.name}</h5>
              <span>Posted at </span>
              <span className="date-comm"> | {formattedDate}</span>
            </div>

            <div className="comment-content mt-3">
              <p>{item?.comment} </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
})}

				
			</ul>
		</div>
		
		

	</div>



	<div className="col-lg-12">
		<form className="comment-form my-5" id="comment-form" onSubmit={(e) => handleSubmit(e)}>
			<h4 className="mb-4">Write a comment</h4>
			
			<textarea className="form-control mb-4" name="comment" id="comment" onChange={(e) => setComment(e.target.value)} cols="30" rows="5"
				placeholder="Comment"></textarea>

			<input className="btn btn-main-2 btn-round-full" type="submit" name="submit-contact" id="submit_contact"
				value="Submit Message"/>
		</form>
	</div>

{/* Comment */}

</div>
  
  </div>
</section>
    </div>
    </>
  )
}

export default BlogSingles