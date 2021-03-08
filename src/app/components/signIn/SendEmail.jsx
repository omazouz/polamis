import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import {
	Grid,
	Paper,
	TextareaAutosize,
	TextField,
	ButtonBase,
	Typography,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing(0, 3),
		position: 'fixed',
		bottom: 0,
		right: 0,
		top: 'unset',
		left: 'unset',
	},
	paper: {
		maxWidth: 700,
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
	},
	icon: {
		justifyContent: 'flex-end',
	},
	textarea: {
		width: '50vw',
	},
	flexd: {
		justifyContent: 'space-between',
		display: 'flex',
	},
	flexs: {
		justifyContent: 'flex-end',
		display: 'flex',
	},
}))

export default function AutoGridNoWrap({ setSend }) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} xs={12}>
				<Grid container direction="column" wrap="nowrap" spacing={2}>
					<Grid item className={classes.flexd}>
						<Grid>
							<Typography color="textSecondary" variant="p">
								New message
							</Typography>
						</Grid>
						<Grid>
							<ButtonBase onClick={() => setSend(false)}>
								<CloseIcon color="secondary" />
							</ButtonBase>
						</Grid>
					</Grid>
					<Grid item>
						<TextField
							size="small"
							id="outlined-basic"
							label="To"
							variant="outlined"
							fullWidth="true"
						/>
					</Grid>
					<Grid item>
						<TextField
							size="small"
							id="outlined-basic"
							label="Object"
							variant="outlined"
							fullWidth="true"
						/>
					</Grid>
					<Grid item xs>
						<TextField
							className={classes.textarea}
							id="outlined-multiline-static"
							multiline
							rows={10}
							variant="outlined"
						/>
					</Grid>
					<Grid item className={classes.flexs}>
						<ButtonBase onClick={() => setSend(false)}>
							<SendIcon color="primary" />
						</ButtonBase>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}
