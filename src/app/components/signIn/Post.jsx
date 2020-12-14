import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		marginBottom: 10,
	},
})

export default function Post({ id, posts }) {
	const classes = useStyles()
	const history = useHistory()

	return (
		<Card className={classes.root}>
			<CardActionArea onClick={() => history.push(`/received/${id}`)}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{posts}
					</Typography>
					<Typography variant="body3" color="textSecondary" component="p">
						{id}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						This CardContent is wrapped in a CardActionsArea, so this text and
						the above header are wrapped in a ButtonBase, which means they
						behave like a Button.
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
