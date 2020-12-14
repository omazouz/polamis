import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import {
	Box,
	Card,
	Grid,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	colors,
	makeStyles,
	useTheme,
} from '@material-ui/core'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		padding: '15px',
	},
}))

const MissInfLvl = ({ className, ...rest }) => {
	const classes = useStyles()
	const theme = useTheme()

	const data = {
		datasets: [
			{
				data: [63, 27],
				backgroundColor: [colors.red[500], colors.white],
				borderWidth: 8,
				borderColor: colors.common.white,
				hoverBorderColor: colors.common.white,
			},
		],
		labels: ['Missinformation Level'],
	}

	const options = {
		animation: false,
		cutoutPercentage: 80,
		layout: { padding: 0 },
		legend: {
			display: false,
		},
		maintainAspectRatio: false,
		responsive: true,
		tooltips: {
			backgroundColor: theme.palette.background.default,
			bodyFontColor: theme.palette.text.secondary,
			borderColor: theme.palette.divider,
			borderWidth: 1,
			enabled: true,
			footerFontColor: theme.palette.text.secondary,
			intersect: false,
			mode: 'index',
			titleFontColor: theme.palette.text.primary,
		},
	}

	const devices = [
		{
			title: 'Missinformation Level',
			value: 63,
			icon: LaptopMacIcon,
			color: colors.red[500],
		},
	]

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardHeader title="Traffic by Device" />
			<Divider />
			<CardContent justifyContent={'center'}>
				<Box>
					<Doughnut data={data} options={options} />
				</Box>
				<Box display="flex" justifyContent="center" mt={2}>
					{devices.map(({ color, icon: Icon, title, value }) => (
						<Box key={title} p={1} textAlign="center">
							<Icon color="action" />
							<Typography color="textPrimary" variant="body1">
								{title}
							</Typography>
							<Typography style={{ color }} variant="h2">
								{value}%
							</Typography>
						</Box>
					))}
				</Box>
			</CardContent>
		</Card>
	)
}

MissInfLvl.propTypes = {
	className: PropTypes.string,
}

export default MissInfLvl
