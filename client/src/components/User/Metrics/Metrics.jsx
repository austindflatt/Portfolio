import react, { useEffect, useHistory, useState } from 'react';
import { createStyles, Text } from '@mantine/core';
import axios from "axios"

const GITHUB_API = `https://api.github.com/users/austindflatt`;

const useStyles = createStyles((theme) => ({
	root: {
	display: 'flex',
	backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
	theme.colors[theme.primaryColor][7]
	} 100%)`,
	padding: theme.spacing.xl * 1.5,
	borderRadius: theme.radius.md,

	[theme.fn.smallerThan('sm')]: {
	flexDirection: 'column',
	},
	},

	title: {
	color: theme.white,
	textTransform: 'uppercase',
	fontWeight: 700,
	fontSize: theme.fontSizes.sm,
	},

	count: {
	color: theme.white,
	fontSize: 32,
	lineHeight: 1,
	fontWeight: 700,
	marginBottom: theme.spacing.md,
	fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	description: {
	color: theme.colors[theme.primaryColor][0],
	fontSize: theme.fontSizes.sm,
	marginTop: 5,
	},

	stat: {
	flex: 1,

	'& + &': {
	paddingLeft: theme.spacing.xl,
	marginLeft: theme.spacing.xl,
	borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

	[theme.fn.smallerThan('sm')]: {
	paddingLeft: 0,
	marginLeft: 0,
	borderLeft: 0,
	paddingTop: theme.spacing.xl,
	marginTop: theme.spacing.xl,
	borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
	},
	},
	},
	}));

function Metrics() {
	const [github, setGithub] = useState(null);

	const { classes } = useStyles();
	const websiteStats = 
	<div key={null} className={classes.stat}>
	<Text className={classes.count}>0</Text>
	<Text className={classes.title}>Portfolio Views</Text>
	<Text className={classes.description}>All time views of my personal portfolio</Text>
	</div>;

	const youtubeStats = 
	<div key={null} className={classes.stat}>
	<Text className={classes.count}>0</Text>
	<Text className={classes.title}>YouTube Views</Text>
	<Text className={classes.description}>The total number of views I have on YouTube</Text>
	</div>;

	const githubStats = 
	<div key={null} className={classes.stat}>
	<Text className={classes.count}>0</Text>
	<Text className={classes.title}>GitHub Repos</Text>
	<Text className={classes.description}>The total number of public repositories I have created</Text>
	</div>;

	const twitchStats = 
	<div key={null} className={classes.stat}>
	<Text className={classes.count}>0</Text>
	<Text className={classes.title}>Twitch Followers</Text>
	<Text className={classes.description}>The total number of followers I have on Twitch</Text>
	</div>;

	return (
	<>
		<h2>Dashboard</h2>
		<p>This is a personal dashboard I am building to track various metrics across platforms I am on.</p>
		<div className={classes.root}>
		{websiteStats}
		{githubStats}
		{youtubeStats}
		{twitchStats}
		</div>
	</>
	)
}

export default Metrics