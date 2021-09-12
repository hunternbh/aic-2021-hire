import React from 'react';
import Pricing from '../../Pricing';
import './HireX.css';


function Terms() {
  return (
    <>
      <Pricing />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
	<body>
		<header>
			<div class="website-header">
				<h1>Hire-X</h1>
				<div class="social-icons">
					<i class="fab fa-facebook-f"></i>
					<i class="fab fa-twitter"></i>
					<i class="fab fa-instagram"></i>
					<i class="fas fa-rss"></i>
				</div>
			</div>
			<nav class="navbar navbar-expand-md ">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">LATEST</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">SINGAPORE</a>
      </li> 
		<li class="nav-item">
        <a class="nav-link" href="/">OPINION</a>
      </li>
    </ul>
  </div> 
			</nav>
			<div class="breaking-news-section">
				<span id="btext">Trending</span>
				<marquee direction="left" onmouseover="this.stop()" onmouseout="this.start()">
					<a href="/" class="breaking-news">
						<p class="bntime">1 Dec 2021</p>
						Top 5 soft skills needed for auditor executives in Singapore</a>
									</marquee>
			</div>
		</header>
		<main>
			<article id="popular-news">
				<div id="featured">
					<h2>FEATURED</h2>
					<section class="popular-news-carousel">
						<div id="carousel" class="carousel slide" data-ride="carousel">
						  <ol class="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						  </ol>
						  <div class="carousel-inner">
							<div class="carousel-item active">
							  <img class="d-block w-100" src="images/carousel1.png" alt="First slide" />
								<div class="carousel-caption d-none d-md-block">
									<h5>Hire-X's Launch!</h5>
									<p>1st Dec 2021</p>
								 </div>
							</div>
							<div class="carousel-item">
							  <img class="d-block w-100" src="images/carousel2.png" alt="Second slide" />
								<div class="carousel-caption d-none d-md-block">
									<h5>Hire-Y's Launch!</h5>
									<p>1st Dec 2021</p>
								 </div>
							</div>
							<div class="carousel-item">
							  <img class="d-block w-100" src="images/carousel3.png" alt="Third slide" />
								<div class="carousel-caption d-none d-md-block">
									<h5>Top 5 soft skills needed for auditor executives in Singapore</h5>
									<p>1st Dec 2021</p>
								 </div>
							</div>
						  </div>
						  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						  </a>
						  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						  </a>
						</div>
					</section>
					
				</div>
				<div id="latest">
					<h2>LATEST</h2>
					<section class="news">
						<div class="news-container">
							<img src="images/carousel1.png" alt=""/>
							<p class="carousel-text">Hire-Y's Launch</p>				
						</div>						
					</section>
					<section class="news">
						<div class="news-container">
							<img src="images/carousel2.png" alt=""/>
							<p class="carousel-text">Hire-X's Launch</p>				
						</div>						
					</section>
				</div>
				<div id="our-picks">
					<h2>OUR PICKS</h2>
					<section class="news">
						<div class="news-container">
							<img src="images/carousel3.png" alt=""/>
							<p class="carousel-text">Top 5 soft skills needed for auditor executives in Singapore </p>				
						</div>						
					</section>
				</div>
			</article>
			<section class="more-news">
				<div class="news-section">
					<article class="world">
						<h2>Trending</h2>
						<img src="images/world1.png" alt=""/>
						<h3>Hire-Y's Launch</h3>
						<p>Hire-Y is Singapore's first and only AI-powered resume screener in line with the Skills Framework for Accountancy</p>
					</article>
					<article class="sport">
						<h2>Singapore</h2>
						<img src="images/sport1.jpg" alt=""/>
						<h3>SFw for Accountancy</h3>
						<p>The Skills Framework for Accountancy is the latest handbook for individuals and companies looking for the latest developments in the accountancy sector</p>
					</article>
				</div>
				
			</section>
		</main>
		<footer>
			<div class="social-links">
				<section class="about">
					<h2>About</h2>
					<p>Hire-X is the leadings news provider of accounting-related developments in Singapore.</p>
					<div class="social-icons-footer">
						<i class="fab fa-facebook"></i>
						<i class="fab fa-twitter-square"></i>
						<i class="fab fa-google-plus-square"></i>
						<i class="fab fa-instagram"></i>

					</div>
				</section>

				<section class="Subscribe">
					<h2>Subscribe to Hire-X</h2>
					<p>Don't say we didn't invite you! All the latest curated headlines to your email.</p>
					<input type="email" placeholder="Email Address" />
					<button type="button" class="footer-buttons">Subscribe</button>
				</section>
			</div>
			
			<div class="copyright">Hire 2021</div>
		</footer>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>

    </>
  );
}

export default Terms;
