export const convertDateToString = (date: Date | string): string => {
	const stringDate = new Date(date);
	const year = stringDate.getFullYear();
	const month = stringDate.getMonth() < 10 ? `0${stringDate.getMonth()}` : stringDate.getMonth();
	const day = stringDate.getDate() < 10 ? `0${stringDate.getDate()}` : stringDate.getDate();
	// const time = stringDate.get();
	return `${year}.${month}.${day}`;
};

export const compareWithCurrentDate = (firstDate: Date | string): boolean => {
	return new Date(firstDate).getTime() > new Date().getTime();
};
