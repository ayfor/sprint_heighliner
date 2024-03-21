import inquirer from "inquirer";

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
		message: "What is the start date of the first sprint? (DD-MM-YYYY)",
	},
	{
		type: "number",
		name: "breakLength",
		message: "How many days will the break be between sprints?",
	},
	{
		type: "checkbox",
		name: "avoidedDaysOfWeek",
		message: "Are there any days of the week that a Sprint should not end on? (e.g. Friday, Sunday)",
		choices: daysOfTheWeek,
	},
];

const secondQuery = [
	{
		type: "list",
		name: "excludedDates",
		message: "Are there any dates you want to exclude? (e.g. public holidays, team events)",
		choices: projectedSprintDates,
	},
];

const getProjectedSprintDates = (answers) => {
	const { sprintLength, startDate, numberOfSprints } = answers;

	let dateList = [];
	let datesAdded = 0;
	// Parse the start date from the given string
	let currentDate = luxon.DateTime.fromFormat(startDate, "dd-MM-yyyy");

	while (datesAdded < sprintLength) {
		// Check if the current date is not a Saturday (6) or Sunday (7)
		if (currentDate.weekday < 6) {
			// Add the formatted date string to the list if it's a weekday
			dateList.push(currentDate.toFormat("dd-MM-yyyy"));
			datesAdded++;
		}
		// Move to the next day regardless
		currentDate = currentDate.plus({ days: 1 });
	}

	return dateList;
};

inquirer
	.prompt(firstQuery)
	.then((answers) => {})

	.then(() => {});
