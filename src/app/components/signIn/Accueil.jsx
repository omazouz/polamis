import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Post from './Post'
import Message from './Message'
import SendEmail from './SendEmail'
import SendIcon from '@material-ui/icons/Send'

const drawerWidth = 240
const posts = ['Topic Name']

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))

function ResponsiveDrawer(props) {
	const [send, setSend] = useState(false)
	const { window } = props
	const classes = useStyles()
	const theme = useTheme()
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const history = useHistory()
	const location = useLocation()
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	const handleClick = (index) => {
		return index === 1
			? history.push('/sent')
			: index === 0
			? setSend(true)
			: history.push('/test')
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} />

			<List>
				{['new text', 'Inbox', 'Send email'].map((text, index) => (
					<ListItem button onClick={() => handleClick(index)} key={text}>
						<ListItemIcon key={text}>
							{index === 0 ? (
								<SendIcon />
							) : index === 1 ? (
								<InboxIcon />
							) : (
								<MailIcon />
							)}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Grid item className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Responsive drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<Grid>
				<div className={classes.toolbar} />
				{location.pathname === '/sent' ? (
					posts.map((post) => <Post id={post} posts={post} />)
				) : (
					<Message />
				)}
				{send ? (
					<Grid container xs={12} md={6} sm={12}>
						<SendEmail setSend={() => setSend()} />
					</Grid>
				) : (
					<></>
				)}
			</Grid>
		</Grid>
	)
}

export default ResponsiveDrawer
