import { useEffect, useState } from "react";

import { Container } from "../Container/Container";

import { picturesApi } from "../../apis/picturesApi";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import styles from "./Pictures.module.scss";

export const Pictures = function () {
	const [pictures, setPictures] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	const getData = async function () {
		const { data } = await picturesApi.get("/", { params: { q: "nature", safesearch: "true", orientation: "horizontal", page: currentPage + 1, perPage: 25 } });
		setPictures(data.hits);
	};

	useEffect(() => {
		getData();
	}, []);

	const scrollForward = function () {
		setCurrentPage(currentPage + 1);
	};

	const scrollBackward = function () {
		setCurrentPage(currentPage - 1);
	};

	return (
		<>
			{pictures.length ? (
				<section className={styles["pictures"]}>
					<Container>
						{currentPage == 0 ? (
							<button disabled className={styles["pictures__scroll-button"]}>
								<MdOutlineKeyboardArrowLeft />
							</button>
						) : (
							<button onClick={scrollBackward} className={styles["pictures__scroll-button"]}>
								<MdOutlineKeyboardArrowLeft />
							</button>
						)}
						<ul className={styles["pictures__list"]}>
							{pictures.slice(currentPage, currentPage + 5).map((el, i) => (
								<li className={styles["pictures__list__item"]} key={i}>
									<a href={el.pageURL} target="_blank" className={styles["pictures__list__item__link"]}>
										<div className={styles["pictures__list__item__img-container"]} style={{ backgroundImage: `url("${el.webformatURL}")` }}>
											<img src={el.webformatURL} alt="article image" className={styles["pictures__list__item__img"]} />
										</div>
									</a>
								</li>
							))}
						</ul>
						{currentPage >= pictures.length - 5 ? (
							<button disabled className={styles["pictures__scroll-button"]}>
								<MdOutlineKeyboardArrowRight />
							</button>
						) : (
							<button onClick={scrollForward} className={styles["pictures__scroll-button"]}>
								<MdOutlineKeyboardArrowRight />
							</button>
						)}
					</Container>
				</section>
			) : (
				<></>
			)}
		</>
	);
};
