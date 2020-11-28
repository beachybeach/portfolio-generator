//uses an array method (slice) to take the command line array and only returns data from index 2 and finishes with the final index (process.arv.length)

const profileDataArgs = process.argv.slice(2, process.argv.length);

//prints each command line argument one at a time using forEach
const printProfileData = profileDataArr => {
profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);