import React, { useEffect } from 'react';
import image from '../image.svg';
import { gsap } from 'gsap';
import audio from '../audio.mp3';

const MainPage = () => {
	useEffect(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		setInterval(() => {
			const tl = gsap.timeline();
			tl.to('.image', { opacity: 0, duration: 0.1 });
			tl.to('.image', {
				x: Math.random() * width,
				y: Math.random() * height,
                duration: 0.1
			});
            tl.to(".image", {opacity: 1});
		}, 750);
	}, []);

    const catFunction = () => {
        new Audio(audio).play();
    };

	return (
		<section>
			<div className="title">Catch Me</div>
			<img src={image} alt="cat" className="image" onClick={catFunction}/>
		</section>
	);
};

export default MainPage;
