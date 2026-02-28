//INTERFACE FETCH ISSUE

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface GitHubLabel {
  id: number
  name: string
  color: string
  description: string | null
}

export interface GitHubIssue {
  id: number
  number: number
  title: string
  body: string
  user: GitHubUser
  labels: GitHubLabel[]
  comments: number
  created_at: string
  updated_at: string
  state: 'open' | 'closed'
  html_url: string

  // Se existir, significa que é Pull Request
  pull_request?: {
    url: string
    html_url: string
    diff_url: string
    patch_url: string
  }
}

//INTERFACE USER

export interface GitHubUserProfile {
  login: string
  id: number
  avatar_url: string
  html_url: string

  name: string | null
  bio: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null

  followers: number
  following: number
  public_repos: number

  created_at: string
  updated_at: string
}