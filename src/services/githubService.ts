import { Octokit } from '@octokit/core'

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  company: string | null
  blog: string
  location: string | null
  email: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

const username = 'rafaballerini'

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const config = useRuntimeConfig()
  const octokit = new Octokit({
    auth: config.public.GITHUB_TOKEN,
  })

  const response = await octokit.request('GET /users/{username}', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  return response.data as GitHubUser
}
