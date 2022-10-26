export const convertDateToString = (date: Date | string): string => {
	const stringDate = new Date(date);
	const year = stringDate.getFullYear();
	const month = stringDate.getMonth() < 10 ? `0${stringDate.getMonth()}` : stringDate.getMonth();
	const day = stringDate.getDate() < 10 ? `0${stringDate.getDate()}` : stringDate.getDate();
	// const time = stringDate.get();
	return `${year}.${month}.${day}`;
};

export const diffDatesAndFindTime = (
	firstDate: Date | string,
	secondDate: Date | string
): string => {
	const newFirstDate = new Date(firstDate);
	const newSecondDate = new Date(secondDate);

	const diff = newFirstDate.getTime() - newSecondDate.getTime();

	const seconds = Math.floor((diff / 1000) % 60);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);

	return `${days}:${hours}:${minutes}:${seconds}`;
};
