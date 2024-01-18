import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchAllDep } from '../../Redux/AllDepOnlySlice';
import { Link } from 'react-router-dom';

const Footer = () => {


	const dispatch = useDispatch();

	const { alldept_data } = useSelector((state) => state?.alldept);
	// console.log(all_dep_data);


	useEffect(() => {
		dispatch(FetchAllDep());
		
	  }, [dispatch]);



  return (
    <div>
      <footer className="footer section gray-bg" style={{backgroundColor:'#7e7e80', color:'whitesmoke'}}>
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
					<img src="/images/logo.png" alt="" className="img-fluid" style={{ width: '240px', height: '90px' }}/>
					</div>
					<p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>

					<ul className="list-inline footer-socials mt-4">
						<li className="list-inline-item">
							<a href="https://www.facebook.com/ricky.dollars.9" target='blank'><i className="icofont-facebook"></i></a>
						</li>
						<li className="list-inline-item">
							<a href="https://twitter.com/themefisher"><i className="icofont-twitter"></i></a>
						</li>
						<li className="list-inline-item">
							<a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin"></i></a>
						</li>
					</ul>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3" style={{color:'whitesmoke'}}>Department</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">

					{alldept_data?.data?.map((item, index) => {
              return (
                <>

						<li key={item.id}><Link style={{color:'white'}} to={`/all-doctors/${item?._id}`}>{item?.departmentName}</Link></li>

				</>
              );
            })}
						
					</ul>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3"  style={{color:'whitesmoke'}}>Support</h4>
					<div className="divider mb-4"></div>

					<ul style={{color:'white'}} className="list-unstyled footer-menu lh-35" >
						<li ><a href="#!" style={{color:'white'}}>Terms & Conditions</a></li>
						<li ><a href="#!" style={{color:'white'}}>Privacy Policy</a></li>
						<li ><a href="#!" style={{color:'white'}}>Company Support </a></li>
						<li ><a href="#!" style={{color:'white'}}>FAQuestions</a></li>
						<li ><a href="#!" style={{color:'white'}}>Company Licence</a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3"  style={{color:'whitesmoke'}}>Get in Touch</h4>
					<div className="divider mb-4"></div>

					<div className="footer-contact-block mb-4">
						<div className="icon d-flex align-items-center">
							<i className="icofont-email mr-3"></i>
							<span style={{color:'white'}} className="h6 mb-0">Support Available for 24/7</span>
						</div>
						<h4 className="mt-2"  ><Link  to="mailto:support@email.com">Support@email.com</Link></h4>
					</div>

					<div className="footer-contact-block">
						<div className="icon d-flex align-items-center">
							<i className="icofont-support mr-3"></i>
							<span style={{color:'white'}} className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">+70 016 00 532</a></h4>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-btm py-4 mt-5">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-6">
					<div className="copyright">
						Copyright &copy; 2024, Designed &amp; Developed by <Link to="" target='blank'>Souvik Das</Link>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="subscribe-form text-lg-right mt-5 mt-lg-0">
						<form action="#" className="subscribe">
							<input type="text" className="form-control" placeholder="souvik.das9574@gmail.com" required/>
							<button type="submit" className="btn btn-main-2 btn-round-full">Subscribe</button>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<a className="backtop scroll-top-to" href="#top">
						<i className="icofont-long-arrow-up"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
    </div>
  )
}

export default Footer
