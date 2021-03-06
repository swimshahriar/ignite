// Base URL
const BASE_URL = "https://api.rawg.io/api/";

// get current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// get current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// get current year
const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// upcoming games
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// new games
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = `${BASE_URL}${popularGames}`;
export const upcomingGamesUrl = `${BASE_URL}${upcomingGames}`;
export const newGamesUrl = `${BASE_URL}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (gameId) => `${BASE_URL}games/${gameId}`;
//Game ScreenShots
export const gameScreenshotURL = (gameId) =>
  `${BASE_URL}games/${gameId}/screenshots`;
//Searched game
export const searchGameURL = (game_name) =>
  `${BASE_URL}games?search=${game_name}&page_size=9`;
