import React, { FC } from 'react';
import { Pagination as MaterialPagination } from '@mui/material';

interface IProps {
	totalCount: number;
	countForPage: number;
	onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
	currentPage: number;
}

const Pagination: FC<IProps> = ({ currentPage, totalCount, countForPage, onChange }) => {
	return (
		<>
			{Math.ceil(totalCount / countForPage) && (
				<MaterialPagination
					sx={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)' }}
					count={10}
					variant='outlined'
					onChange={(event, value) => onChange(event, value - 1)}
					page={currentPage + 1}
				/>
			)}
		</>
	);
};

export default Pagination;
