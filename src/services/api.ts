import axios from "axios";

const token = null

export const api = axios.create({
    baseURL: "https://api.github.com",
    headers: token ? { Authorization: `Bearer ${token}`} : undefined,
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
    const q = `${query} repo:${user}/${repo}`;
    const { data } =  await api.get(`
    /search/issues?q=${encodeURIComponent(q)}`);
    return data
}