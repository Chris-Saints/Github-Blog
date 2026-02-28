import axios from "axios";



export const api = axios.create({
    baseURL: "https://api.github.com",
    headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`},
});

export async function fetchUser(username: string) {
    const { data } = await api.get(`/user/${username}`);
    return data;
}

export async function fetchIssues(user: string, repo: string) {
    const { data } = await api.get(`/repos/${user}/${repo}/issues`); 
    return data;
}

export async function searchIssues(query: string, user: string, repo: string) {
    const { data } =  await api.get(`/search/issues?q=${query}+repo:${user}/${repo}+is:issue`);
    return data.items
}