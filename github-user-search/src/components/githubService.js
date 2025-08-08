import axios from 'axios';

export default async function fetchAdvancedUsers(username, location, minRepos) {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  const userPromises = response.data.items.map((user) =>
    axios.get(user.url).then((res) => res.data)
  );

  const detailedUsers = await Promise.all(userPromises);

  return detailedUsers;
}
