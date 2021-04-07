//Import Images
import athlete1 from './img/athlete1.png';
import couple1 from './img/couple1.png';
import driver1 from './img/driver1.png';
import athlete2 from './img/athlete2.png';
import couple2 from './img/couple2.jpg';
import driver2 from './img/driver2.jpg';

export const MovieState = () => {
	return [
		{
			title: 'Fight Night',
			mainImg: athlete1,
			secondaryImg: athlete2,
			url: '/work/fight-night',
			awards: [
				{
					title: 'Truly A masterpiece',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Fresh look on a brutal sport.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'It’s okay.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
		{
			title: 'The Race',
			mainImg: driver1,
			secondaryImg: driver2,
			url: '/work/the-race',
			awards: [
				{
					title: 'Truly A masterpiece',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Fast and Furious.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'It’s okay.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
		{
			title: 'Summer Days',
			mainImg: couple1,
			secondaryImg: couple2,
			url: '/work/summer-days',
			awards: [
				{
					title: 'Truly A masterpiece',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Romantic Greatness.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'It’s okay.',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
	];
};
