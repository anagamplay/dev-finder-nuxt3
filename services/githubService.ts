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

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  if (!username.trim()) {
    throw new Error('Nome de usuário inválido')
  }

  const config = useRuntimeConfig()
  const octokit = new Octokit({
    auth: config.public.GITHUB_TOKEN,
  })

  try {
    const response = await octokit.request('GET /users/{username}', {
      username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    return response.data as GitHubUser
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error('Usuário não encontrado')
    }
    throw error
  }
}
