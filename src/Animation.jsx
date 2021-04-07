export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: 'easeIn',
		},
	},
};

export const titleAnimation = {
	hidden: {
		y: 200,
	},
	show: {
		y: 0,
		transition: {
			duration: 0.75,
			ease: 'easeOut',
		},
	},
};

export const container = {
	hidden: {
		x: 50,
	},
	show: {
		x: 0,
		transition: {
			duration: 1,
			ease: 'easeOut',
			staggerChildren: 0.5,
			when: 'afterChildren',
		},
	},
};

export const fade = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
			ease: 'easeOut',
		},
	},
};

export const button = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
};

export const image = {
	hidden: {
		scale: 1.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: 'easeOut',
			duration: 1.25,
		},
	},
};
