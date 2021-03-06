import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Card,
	CardHeader,
	Chip,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip,
	makeStyles,
	Typography,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
	{
		id: uuid(),
		ref: 'CDD1049',
		type: 'image',
		customer: {
			name: 'Ekaterina Tankova',
		},
		createdAt: 1555016400000,
		status: 'pending',
	},
	{
		id: uuid(),
		ref: 'CDD1048',
		type: 'text',
		customer: {
			name: 'Cao Yu',
		},
		createdAt: 1555016400000,
		status: 'approved by Admin',
	},
	{
		id: uuid(),
		ref: 'CDD1047',
		type: 'mpg',
		customer: {
			name: 'Alexa Richardson',
		},
		createdAt: 1554930000000,
		status: 'pending',
	},
	{
		id: uuid(),
		ref: 'CDD1046',
		type: 'pdf',
		customer: {
			name: 'Anje Keizer',
		},
		createdAt: 1554757200000,
		status: 'pending',
	},
	{
		id: uuid(),
		ref: 'CDD1045',
		type: 'image',
		customer: {
			name: 'Clarke Gillebert',
		},
		createdAt: 1554670800000,
		status: 'approved by Lars',
	},
	{
		id: uuid(),
		ref: 'CDD1044',
		type: 'image',
		customer: {
			name: 'Adam Denisov',
		},
		createdAt: 1554670800000,
		status: 'approved by Tomas',
	},
];

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.primary.main,
	},
	actions: {
		justifyContent: 'flex-end',
	},
	Chip: {
		justifyContent: 'flex-end',
		backgroundColor: theme.palette.primary.light,
	},
}));

const LatestSubmissions = ({ className, ...rest }) => {
	const classes = useStyles();
	const [orders] = useState(data);

	// title={<Typography gutterBottom variant="h5" > "LATEST SUBMISSIONS" </Typography>}

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardHeader
				title={
					<Typography gutterBottom variant="h5" color="textSecondary">
						LATEST SUBMISSIONS
					</Typography>
				}
				subheader="(This is an example showing how it can look like)"
			/>
			<Divider />
			<PerfectScrollbar>
				<Box minWidth={800}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Order Ref</TableCell>
								<TableCell>User</TableCell>
								<TableCell>Type</TableCell>
								<TableCell sortDirection="desc">
									<Tooltip enterDelay={300} title="Sort">
										<TableSortLabel active direction="desc">
											Date
										</TableSortLabel>
									</Tooltip>
								</TableCell>
								<TableCell>Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map(order => (
								<TableRow hover key={order.id}>
									<TableCell>{order.ref}</TableCell>
									<TableCell>{order.customer.name}</TableCell>
									<TableCell>{order.type}</TableCell>
									<TableCell>{moment(order.createdAt).format('DD/MM/YYYY')}</TableCell>
									<TableCell>
										<Chip className={classes.Chip} label={order.status} size="small" />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			<Box display="flex" justifyContent="flex-end" p={2}>
				<Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
					View all
				</Button>
			</Box>
		</Card>
	);
};

LatestSubmissions.propTypes = {
	className: PropTypes.string,
};

LatestSubmissions.defaultProps = {
	className: '',
};

export default LatestSubmissions;
