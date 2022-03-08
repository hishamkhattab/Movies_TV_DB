import Movie from "../components/Movie";
import Series from "../components/Series";
import Info from "../components/Info";

const Home = () => {
	const url = "https://api.themoviedb.org/3/movie/now_playing";

	return (
		<main>
			<div className="home-intro"></div>
			<div className="container">
				<section className="media-section">
					<h1 className="section-title">Top Movies</h1>
					<div className="media-wrapper">
						<Movie url={url} flag={0} />
					</div>
				</section>
				<Info url={""} />
				<section className="media-section">
					<h1 className="section-title">Trending Movies</h1>
					<div className="media-wrapper">
						<Movie
							url={"https://api.themoviedb.org/3/trending/movie/day"}
							flag={4}
						/>
					</div>
				</section>
				<Info url={"https://api.themoviedb.org/3/person/popular"} />
				<section className="media-section">
					<h1 className="section-title">TV Show on air</h1>
					<div className="media-wrapper">
						<Series url={"https://api.themoviedb.org/3/tv/on_the_air"} />
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
