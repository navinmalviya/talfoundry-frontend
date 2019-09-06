import React, {Component} from "react";
import { connect } from "react-redux";
import '../static/stylesheets/home.css';
import '../index.css'

// import Header from '../miscellaneous/Header';
// import Footer from '../miscellaneous/Footer';

class  HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
			<div>
				<div className="wraper">
					<div className="header_top">
						<div className="header">
							<div className="container">
								<div className="navigation">
									<nav className="navbar navbar-findcond">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
												<span className="sr-only">Toggle navigation</span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
											</button>
											<a className="navbar-brand" href="index.html"><img src="images/logo_1.png" alt=""/></a>
										</div>
										<div className="collapse navbar-collapse" id="navbar">
											<ul className="nav navbar-nav navbar-right">
												<li><a href="#" className="mn_black">HIRE NOW</a></li>
												<li><a href="#" className="active">Apply as Freelancer</a></li>
												<li><a href="login.html">Login</a></li>
												<li><a href="login_2.html">Sign Up</a></li>
											</ul>
											<div className="col-md-4">
												<div className="input-group">
													<div className="input-group-btn">
														<button className="btn btn-danger mn_search" type="button">
															<img src="images/Path_402.svg" align=""/>
														</button>
													</div>
													<input type="text" className=" search-query form-control" placeholder="Find Freelancers.." />
												</div>
											</div>
										</div>
									</nav>
								</div>
								<div className="mn_welcome">
									<div className="col-xs-12 col-xs-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
										<h5>WELCOME TO</h5>
										<h1>TALFOUNDRY</h1>
										<p>Want to create a business bigger than yourself?</p>
										<p>A one-stop solution for all your business needs. Scale new heights with TalFoundry. Take your business to another level. Connect to / Discover the best professionals in the industry and get your work done in minutes. To get started, click below to post a job.</p>
										<p><a href="post_a_job.html">Post a Job</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mn_services">
						<div className="container">
							<div className="col-md-12">
								<div className="col-lg-4 col-md-4">
									<h1>What Type of Work You Want Done?</h1>
								</div>
								<div className="col-lg-6 col-md-8 col-sm-12 pull-right pd-none">
									<div className="col-md-6 col-sm-6">
										<div className="mn_box">
											<span className="sprte4 mn_iconcmn_s mn_icnhnaws"></span>
											<h2>AWS</h2>
											<p>Choose the perfect AWS freelancers from TalFoundry, one of world’s leading marketplaces and get your work done remotely online.</p>
										</div>
									</div>
									<div className="col-md-6 col-sm-6">
										<div className="mn_box"><span className="sprte4 mn_iconcmn_s mn_icnhnsales"></span>
											<h2>Salesforce</h2>
											<p>Deliver the best experience for your clients using the secret sauce of salesforce.</p>
										</div>
									</div>
									<div className="col-md-6 col-sm-6">
										<div className="mn_box"><span className="sprte4 mn_iconcmn_s mn_icnhnoracle"></span>
											<h2>Oracle</h2>
											<p>Does your business need help with Oracle databases? You need not look any further. TalFoundry offers the best Oracle professionals to satisfy all your business needs.</p>
										</div>
									</div>
									<div className="col-md-6 col-sm-6">
										<div className="mn_box"><span className="sprte4 mn_iconcmn_s mn_icnhnet"></span>
											<h2>NetSuite</h2>
											<p>Expert Netsuite developers available at your fingertips on TalFoundry.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
							<div className="mn_project">
								<h3>Multiple Project Requirements, Just One Platform <span><br/>TALFOUNDRY<br/></span> We have got you covered.</h3>
							</div>
							<div className="mn_project_1">
								<div className="row">
									<div className="col-md-4 nopad">
										<div className="grid">
										<figure className="effect-milo">
											<img src="images/1Artboard 2@2x.png" alt=""/>
											<figcaption>
												<h2>Short-term task</h2>
												<p>Provision of multifarious expertise for your one-off need in a single place.</p>
												<h4><img src="images/Group_1448.svg" align=""/></h4>
											</figcaption>			
										</figure>
									</div>
									</div>
									<div className="col-md-4 nopad">
										<div className="grid">
										<figure className="effect-milo">
											<img src="images/2Artboard_color.png" alt=""/>
											<figcaption>
												<h2>Recurring Projects</h2>
												<p>Specialization is our buzzword. An all-weather multitasking team of experts with unmatched diversified skills for all your requirements.</p>
												<h4><img src="images/Group_1448.svg" align=""/></h4>
											</figcaption>			
										</figure>
										</div>
									</div>
									<div className="col-md-4 nopad">
										<div className="grid">
										<figure className="effect-milo">
											<img src="images/2Artboard_3_color.png" alt=""/>
											<figcaption>
												<h2>Full time</h2>
												<p>Ours is a place where motivation and dedication shake hands with each other. Trust us and let us deliver you the best.</p>
												<h4><img src="images/Group_1448.svg" align=""/></h4>
											</figcaption>			
										</figure>
										</div>
									</div>
								</div>
							</div>

							<div className="clearfix"></div>

							<div className="col-md-12">
								<div className="mn_project">
									<h3>How it works</h3>
								</div>
								<div className="how_it_works">
									<div className="col-md-12 nopad">
										<div className="col-md-3 col-sm-6 tf_how">
											<img src="images/position.svg" alt=""/>
											<h5>STEP 1</h5>
											<h3>POST A JOB</h3>
											<p>Connect with us instantly. Write to us about your project. We will bring the top talents of the world at your doorstep.</p>
										</div>
										<div className="col-md-3 col-sm-6 tf_how">
											<img src="images/recruitment.svg" alt=""/>
											<h5>STEP 2</h5>
											<h3>WE FIND THE <br/>PERFECT MATCH</h3>
											<p>Experience the unique expertise in providing you the right talent for the right job</p>
										</div>
										<div className="col-md-3 col-sm-6 tf_how">
											<img src="images/interview.svg" alt=""/>
											<h5>STEP 3</h5>
											<h3>COLLABORATE EASILY</h3>
											<p>Feel absolutely comfortable collaborating with our dedicated team and experience the remarkable ease of doing your business.</p>
										</div>
										<div className="col-md-3 col-sm-6 tf_how">
											<img src="images/wallet.svg" alt=""/>
											<h5>STEP 4</h5>
											<h3>SIMPLIFIED PAYMENT</h3>
											<p>Get your work done faster. Know the price upfront and feel confident with our payment protection policy.</p>
										</div>
									</div>
									<div className="col-md-12">
										<div className="mn_learnmore">
											<a href="#">LEARN MORE</a>
										</div>
									</div>
									<div className="col-md-12">
									<div className="mn_offers">
										<h4>TalFoundry offers a diverse pool of multi-talented freelancers to cover all your business needs. Pick the best fit and get your business rolling!</h4>
									</div>
								</div>
								</div>
							</div>

							<div className="clearfix"></div>
						</div>
					</div>
					<div className="mn_footer">
						<div className="container">
							<div className="ftr">
								<div className="col-md-2 col-sm-3 tf_ftr_res">
									<div className="mn_ftr_names">
										<h4>PRODUCT</h4>
										<ul>
											<li><a href="#">How it works</a></li>
											<li><a href="#">Features</a></li>
											<li><a href="#">Pricing</a></li>
											<li><a href="#">Testimonials</a></li>
										</ul>
									</div>
								</div>
								<div className="col-md-2 col-sm-3 tf_ftr_res">
									<div className="mn_ftr_names">
										<h4>ABOUT</h4>
										<ul>
											<li><a href="#">Our team</a></li>
											<li><a href="#">Careers</a></li>
											<li><a href="#">Press</a></li>
											<li><a href="#">Stories</a></li>
										</ul>
									</div>
								</div>
								<div className="col-md-2 col-sm-3 tf_ftr_res">
									<div className="mn_ftr_names">
										<h4>CONNECT</h4>
										<ul>
											<li><a href="#">Facebook</a></li>
											<li><a href="#">Twitter</a></li>
											<li><a href="#">Instagram</a></li>
											<li><a href="#">LinkedIn</a></li>
										</ul>
									</div>
								</div>
								<div className="col-md-2 col-sm-3 tf_ftr_res">
									<div className="mn_ftr_names">
										<h4>CONTACT</h4>
										<ul>
											<li><a href="#">info@company.com  </a></li>
											<li>882-587-3025</li>
											<li>6116 Willa River Suite 610</li>
										</ul>
									</div>
								</div>
								<div className="col-md-1"></div>
								<div className="col-md-3">
									<div className="mn_ftr_names newsletter">
										<h4>NEWSLETTER</h4>
										<div className="content">
											<p>Join our mailing list</p>
										<div className="input-group">
													<input type="email" className="form-control" placeholder="Your email"/>
													<span className="input-group-btn">
													<button className="btn" type="submit">Subscribe</button>
													</span>
														</div>
										</div>
									</div>
								</div>
							</div>
							<div className="copyright">
								<div className="col-md-12">
								<p>©2019 - Talfoundry | All Rights Reserved</p>
								<ul>
									<li><a href="#">Terms & Conditions</a></li>
									<li><a href="#">Legal</a></li>
									<li><a href="#">Patents</a></li>
								</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(HomePage);
