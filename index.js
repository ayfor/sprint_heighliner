import inquirer from "inquirer";

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let projectedSprintDates = [];

const firstQuery = [
	{
		type: "number",
		name: "numberOfSprints",
		message: "How many sprints are you planning?",
	},
	{
		type: "number",
		name: "sprintLength",
		message: "How many days will each sprint be?",
	},
	{
		type: "input",
		name: "startDate",
		message: "What is the start date of the first sprint? (YYYY-MM-DD)",
	},
	{
		type: "number",
		name: "breakLength",
		message: "How many days will the break be between sprints?",
	},
	{
		type: "list",
		name: "avoidedDaysOfWeek",
		message: "Are there any days of the week that a Sprint should not end on? (e.g. Friday, Sunday)",
		choices: daysOfTheWeek,
	},
];

const secondQuery = [
	{
		type: "list",
		name: "excludedDates",
		message: "Are there any dates you want to exclude? (YYYY-MM-DD, YYYY-MM-DD)",
		choices: projectedSprintDates,
	},
];

const calculateProjectedSprintDates = (answers) => {
	const { sprintLength, startDate } = answers;
};

inquirer.prompt(firstQuery).then((answers) => {
	const initialAnswers = answers;
	console.log(initialAnswers);
});
