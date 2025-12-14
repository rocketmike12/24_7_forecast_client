import { useEffect, useState } from "react";

import { Container } from "../Container/Container";

import { newsApi } from "../../apis/newsApi";

import styles from "./News.module.scss";

export const News = function () {
	const [news, setNews] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	const getData = async function () {
		const { data } = await newsApi.get("/", { params: { q: "pets" } });
		setNews(data.articles.filter((el) => el.urlToImage));
	};

	useEffect(() => {
		getData();
	}, []);

	const scrollForward = function () {
		setCurrentPage(currentPage + 4);
	};

	const scrollBackward = function () {
		setCurrentPage(currentPage - 4);
	};

	return (
		<>
			<section className={styles["news"]}>
				<Container>
					{news.length && (
						<>
							<h2 className={styles["news__title"]}>Latest pet news</h2>
							<ul className={styles["news-list"]}>
								{news.slice(currentPage, currentPage + 4).map((el) => (
									<>
										<li className={styles["news-list__item"]}>
											<div className={styles["news-list__item__img-container"]} style={{ backgroundImage: `url("${el.urlToImage}")` }}>
												<img src={el.urlToImage} alt="article image" className={styles["news-list__item__img"]} />
											</div>
											<p className={styles["news-list__item__title"]}>{el.title}</p>
										</li>
									</>
								))}
							</ul>
							{currentPage == 0 ? (
								<button disabled className={styles["news__scroll-btn"]}>
									{"<"}
								</button>
							) : (
								<button onClick={scrollBackward} className={styles["news__scroll-btn"]}>
									{"<"}
								</button>
							)}

							<p className="news__current-page">{currentPage}</p>

							{currentPage == news.length ? (
								<button disabled className={styles["news__scroll-btn"]}>
									{">"}
								</button>
							) : (
								<button onClick={scrollForward} className={styles["news__scroll-btn"]}>
									{">"}
								</button>
							)}
						</>
					)}
				</Container>
			</section>
		</>
	);
};
