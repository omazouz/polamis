import React from 'react'
import clsx from 'clsx'
import {
	Card,
	Grid,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		width: '100%',
	},
	text: { noWrap: 'true', fontSize: '13px' },
	gridUser: {
		display: 'flex',
		direction: 'column',
		paddingInline: '15px',
		justifyContent: 'space-between',
	},
}))

const MessageText = ({ className, ...rest }) => {
	const classes = useStyles()
	return (
		<>
			<Grid className={classes.root}>
				<Card className={clsx(classes.root, className)} {...rest}>
					<CardHeader title="Post Name" />
					<Grid className={classes.gridUser}>
						<Typography color="textSecondary" variant="p">
							From:xxxxx XXXX
						</Typography>
						<Typography color="textSecondary" variant="p">
							Date : 20/20/2020
						</Typography>
					</Grid>
					<Divider />
					<CardContent style={{ maxHeight: 400, overflow: 'auto' }}>
						<Typography variant="p" className={classes.text}>
							textdkkkkkkkkkkkkkkkkkkkk ,,,,,,,,,,,,,, ddddddddddddddd
							dddddddddddddddd dddddddddddddddd ddddddddddddddddd ddddddddddddd
							ddddddddddd ddddddd textdkkkkkkkkkkkkkkkkkkkk ,,,,,,,,,,,,,,
							ddddddddddddddd dddddddddddddddd dddddddddddddddd
							ddddddddddddddddd ddddddddddddd ddddddddddd ddddddd
							textdkkkkkkkkkkkkkkkkkkkk ,,,,,,,,,,,,,, ddddddddddddddd
							dddddddddddddddd dddddddddddddddd dddddddddddddddd
							dddddddddddddddddddddddddddddddddddddddddddddddd dddddddddddddddd
							dddddddddddddddd dddddddddddddddd dddddddddddddddd
							ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
							ddddddddddddd ddddddddddd ddddddd textdkkkkkkkkkkkkkkkkkkkk
							,,,,,,,,,,,,,, ddddddddddddddd dddddddddddddddd dddddddddddddddd
							ddddddddddddddddd ddddddddddddd ddddddddddd ddddddd
							textdkkkkkkkkkkkkkkkkkkkk ,,,,,,,,,,,,,, ddddddddddddddd
							dddddddddddddddd dddddddddddddddd ddddddddddddddddd ddddddddddddd
							ddddddddddd ddddddd textdkkkkkkkkkkkkkkkkkkkk ,,,,,,,,,,,,,,
							ddddddddddddddd dddddddddddddddd dddddddddddddddd
							ddddddddddddddddd ddddddddddddd ddddddddddd ddddddd
							textdkkkkkkkkkkkkkkkkkkkk ,,,,,,,,,,,,,, ddddddddddddddd
							dddddddddddddddd dddddddddddddddd ddddddddddddddddd ddddddddddddd
							ddddddddddd dddddddffffffffffff ffffffffffffffffffff fffffffffffff
							f f f f f f fddddddddddddddddddddddddddddddddddddddddddddddddddwww
							dddddddd f f f f
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	)
}
export default MessageText
