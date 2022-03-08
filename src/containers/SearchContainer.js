// const SearchContainer = () => {
// 	return (
// 		<SearchContainer>
// 			<SearchInner>
// 				<SearchClose onClick={handleSearch}>
// 					<img src="/images/icons/close.png" alt="close" />
// 				</SearchClose>

// 				<Card.Group>
// 					{searchData.data.results.filter(
// 						(item) => item.media_type === "person"
// 					).length > 0 && (
// 						<Card>
// 							<Card.Title>People.</Card.Title>
// 							<Card.Entities>
// 								{searchData.data.results
// 									.filter((item) => item.media_type === "person")
// 									.map((item) => {
// 										return (
// 											<Link
// 												to={`/cast/${item.id}`}
// 												state={{ knowFor: item.known_for }}
// 												key={item.id}
// 											>
// 												<Card.Item>
// 													<Card.Image
// 														src={
// 															`${posterURL}/${item.poster_path}` ||
// 															`/images/no-image.jpg`
// 														}
// 													/>
// 													<Card.Meta>
// 														<Card.SubTitle>{item.name}</Card.SubTitle>
// 														<Card.Text>{item.known_for_department}</Card.Text>
// 													</Card.Meta>
// 												</Card.Item>
// 											</Link>
// 										);
// 									})}
// 							</Card.Entities>
// 						</Card>
// 					)}
// 					{searchData.data.results.filter((item) => item.media_type === "tv")
// 						.length > 0 && (
// 						<Card>
// 							<Card.Title>Tv Shows.</Card.Title>
// 							<Card.Entities>
// 								{searchData.data.results
// 									.filter((item) => item.media_type === "tv")
// 									.map((item) => {
// 										return (
// 											<Card.Item key={item.id} item={item}>
// 												<Card.Image
// 													src={
// 														`${posterURL}/${item.poster_path}` ||
// 														`/images/no-image.jpg`
// 													}
// 												/>
// 												<Card.Meta>
// 													<Card.SubTitle>
// 														{item.stitle || item.name || item.original_name}
// 													</Card.SubTitle>
// 													<Card.Text>{truncate(item.overview, 100)}</Card.Text>
// 												</Card.Meta>
// 											</Card.Item>
// 										);
// 									})}
// 							</Card.Entities>
// 							<Card.Feature>
// 								<Player>
// 									<Player.Button />
// 									<Player.Video />
// 								</Player>
// 							</Card.Feature>
// 						</Card>
// 					)}
// 					{searchData.data.results.filter((item) => item.media_type === "movie")
// 						.length > 0 && (
// 						<Card>
// 							<Card.Title>Movies.</Card.Title>
// 							<Card.Entities>
// 								{searchData.data.results
// 									.filter((item) => item.media_type === "movie")
// 									.map((item) => {
// 										return (
// 											<Card.Item key={item.id} item={item}>
// 												<Card.Image
// 													src={
// 														`${posterURL}/${item.poster_path}` ||
// 														`/images/no-image.jpg`
// 													}
// 												/>
// 												<Card.Meta>
// 													<Card.SubTitle>
// 														{item.stitle || item.name || item.original_name}
// 													</Card.SubTitle>
// 													<Card.Text>{truncate(item.overview, 100)}</Card.Text>
// 												</Card.Meta>
// 											</Card.Item>
// 										);
// 									})}
// 							</Card.Entities>
// 							<Card.Feature>
// 								<Player>
// 									<Player.Button />
// 									<Player.Video />
// 								</Player>
// 							</Card.Feature>
// 						</Card>
// 					)}
// 				</Card.Group>
// 			</SearchInner>
// 		</SearchContainer>
// 	);
// };

// export default SearchContainer;
