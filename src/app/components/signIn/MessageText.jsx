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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
							risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
							ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
							massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
							nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
							sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
							consequat in, pretium a, enim. Pellentesque congue. Ut in risus
							volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
							Praesent egestas leo in pede. Praesent blandit odio eu enim
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	)
}
export default MessageText
