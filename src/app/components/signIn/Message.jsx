import React from 'react'
import MissInfLvl from './MissInfLvl'
import MessageText from './MessageText'
import {
	Box,
	Card,
	Grid,
	GridList,
	Container,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	colors,
	makeStyles,
	useTheme,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
	root: {
		marginRight: '10px',
	},
	global: {
		//	direction: 'coulumn',
		//display: 'flex',
		padding: '15px',
		justifyContent: 'space-between',
	},
}))

const Message = () => {
	const classes = useStyles()
	return (
		<Grid className={classes.global} container spacing={1}>
			<Grid item xs={12} sm={12} md={8}>
				<MessageText className={classes.root} />
			</Grid>
			<Grid item xs={12} sm={12} md={4}>
				<MissInfLvl />
			</Grid>
		</Grid>
	)
}

export default Message
