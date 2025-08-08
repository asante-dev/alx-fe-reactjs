import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
import axios from "axios";

export async function fetchGitHubUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}`;

  const response = await axios.get(url);

  // Enrich user data with additional details (since GitHub search API doesn’t return all fields)
  const detailedUsers = await Promise.all(
    response.data.items.slice(0, 10).map(async (user) => {
      const detail = await axios.get(user.url);
      return detail.data;
    })
  );

  return detailedUsers;
}