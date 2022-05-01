import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Kenneth P. Chang",
	title: "Welcome to EveryDayKenneth",
	description:
		"I am a passionate Full Stack Engineer with experience in MongoDB, Express, Reactjs, Node.js and Python. Contact me if you would like to build something together. 😬 ",
	resumeLink: "https://www.espn.com",
};

export const openSource = {
	githubUserName: "KendrickPC",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/kendrickpc",
	linkedin: "https://www.linkedin.com/in/kenneth-chang-94569a142/",
	facebook: "https://www.facebook.com/kenneth.f.chang/",
	instagram: "https://www.instagram.com/brotherkendrick/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"A PASSIONATE FULL STACK DEVELOPER WHO LOVES TO BUILD! ",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", 
		progressPercentage: "75", 
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "78",
	},
];

export const educationInfo = [
	{
		schoolName: "CodeCademy",
		subHeader: "Full Stack Developer Certificate",
	},
	{
		schoolName: "Udacity",
		subHeader: "Full Stack Developer Certificate",
	},
	{
		schoolName: "University of California Santa Barbara",
		subHeader: "Bachelor of Arts in Political Science",
	},
];

export const experience = [
	// {
	// 	role: "Software Engineer",
	// 	company: "Google",
	// 	companylogo: googlelogo,
	// 	date: "June 2018 – Present",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	role: "Front-End Developer",
	// 	company: "Github",
	// 	companylogo: github,
	// 	date: "May 2017 – May 2018",
	// 	desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
	// {
	// 	role: "Software Engineer Intern",
	// 	company: "Airbnb",
	// 	companylogo: airbnb,
	// 	date: "Jan 2015 – Sep 2015",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
];

export const projects = [
	{
		name: "Kenneth's Spotify",
		desc: "My React web application using passing state, and requests with the Spotify API, allowing users to search the Spotify library, create a custom playlist, and saving it to their Spotify account.",
		github: "https://github.com/KendrickPC/kenneths-spotify",
		link: "http://kenneths_spotify.surge.sh/",

		
	},
	{
		name: "Kenneth's Flashcards",
		desc: "My flashcard quiz application, using React, while connecting to an external API",
		github: "https://github.com/KendrickPC/flashcards2",
		link: "https://quizzical-darwin-b008a9.netlify.app/",
	},
	{
		name: "Reddit Client",
		desc: "My Subreddit feed react app that searches through subreddits and displays their popular articles and posts.",
		github: "https://github.com/KendrickPC/reddit-client",
		link: "https://kendersons-reddit-client.netlify.app/",
	},
	{
		name: "Weather App",
		desc: "My React JS weather application that uses the open weather API.",
		github: "https://github.com/KendrickPC/WeatherApp",
		link: "https://bucolic-llama-f40748.netlify.app/",
	},
	{
		name: "Wikipedia Seeker",
		desc: "My React JS Wikipedia Search App",
		github: "https://github.com/KendrickPC/wikipedia-viewer",
		link: "https://rad-palmier-0ab236.netlify.app/",
	},
	{
		name: "Travel Blog",
		desc: "My React travel App, built from scratch, with data loaded through props",
		github: "https://github.com/KendrickPC/travelblog",
		link: "https://kenstravelblog.netlify.app/",
	},
];

export const feedbacks = [
	{
		name: "Naymar",
		feedback:
			"I wish Kenneth could play for our National team.",
	},
	{
		name: "Kylian Mbappe",
		feedback:
			"Kenneth taught me how to run fast.",
	},
];
