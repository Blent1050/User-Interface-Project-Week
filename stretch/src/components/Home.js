import React from "react";
//Images
import jumbotronImg from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-jumbotron.png';
import jumbotronImgMobile from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-mobile-jumbotron.png';

import homeImg1 from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-img-1.png';
import homeImg1Mobile from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-mobile-img-1.png';

import homeImg2 from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-img-2.png';
import homeImg2Mobile from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-mobile-img-2.png';

import homeVilla from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-villas-img.png';
import homeVillaMobile from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-mobile-villas-img.png';

import homeOutskirts from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-outskirts-img.png';
import homeOutskirtsMobile from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-mobile-outskirts-img.png';

import homeBlocks from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-the-blocks-img.png';
import homeBlocksMobile from '/Users/Brandon/Documents/Lambda/Project-week/User-Interface-Project-Week/stretch/src/img/home/home-mobile-the-blocks-img.png';

const Home = () => {
    return(
        <div>
    <div className="jumbotron">
		<img src={jumbotronImg} className="img--desktop" />
		<img src={jumbotronImgMobile} alt="" className="img--mobile" />
		<div className="image-text">
			<h2>Integrity,</h2>
			<h2>Excellence,</h2>
			<h2>Progress.</h2>
		</div>
	</div>

	<div className="container">
		<div className="about-container">
			<div className="about-card">
				<img src={homeImg1} className="img--desktop" />
				<img src={homeImg1Mobile} alt="" className="img--mobile" />
				<div className="content">
					<h2>Smith & Jones Architects</h2>
					<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer
						sed.Duo etiam laboramus dissentiet in, nec no errem</p>
					<a href="" className="btn">Learn More</a>
				</div>

			</div>
			<div className="about-card">

				<div className="content">
					<h2>Futuristic Designs</h2>
					<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer
						sed.Duo etiam laboramus dissentiet in, nec no errem</p>
					<a href="" className="btn">View Designs</a>

				</div>
				<img src={homeImg2} className="img--desktop" />
				<img src={homeImg2Mobile} alt="" className="img--mobile" />
			</div>
		</div>

		
		<div className="projects-container">
			<h2>Recent Projects</h2>
			<div className="project-card">
				<img src={homeVilla} className="img--desktop" />
				<img src={homeVillaMobile} alt="" className="img--mobile" />
				<h3 className="h3-style">THE VILLAS</h3>
				<div className="content">
					<p> The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the
						day,goingforward, a new normal that has evolved from generation X is on the runway heading towards a streamlined
						cloudsolution.</p>
					<p> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
						digital
						dividewith additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will
						close
						the loop on focusing solely on the bottom line.</p>
				</div>

			</div>
			<div className="project-card">
				<img src={homeOutskirts} className="img--desktop" />
				<img src={homeOutskirtsMobile} alt="" className="img--mobile" />
				<h3 className="h3-style">OUTSKIRTS</h3>


				<div className="content">
					<p> The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end
						of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards
						astreamlined cloud solution.</p>

					<p> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
						digital
						divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will
						close the loop on focusing solely on the bottom line.</p>
				</div>


			</div>
			<div className="project-card">
				<img src={homeBlocks} className="img--desktop" />
				<img src={homeBlocksMobile} alt="" className="img--mobile" />
				<h3 className="h3-style">THE BLOCKS</h3>
				

				<div className="content">
					<p> The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of
						the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a
						streamlined cloud solution.</p>
					<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital
						divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will
						close
						the loop on focusing solely on the bottom line.</p>
				</div>

			</div>

		</div>
	</div>
	<script>

		
	</script>
        </div>

    );
}

export default Home;