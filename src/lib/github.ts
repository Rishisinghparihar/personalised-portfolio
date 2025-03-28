const GITHUB_API_URL = "https://api.github.com/graphql";

export interface Repository {
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
  defaultBranchRef: {
    target: {
      history: {
        totalCount: number;
      };
    };
  };
}

interface GitHubResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: Repository[];
      };
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

export async function getPinnedRepos(username: string): Promise<Repository[]> {
  try {
    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                homepageUrl
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                  color
                }
                repositoryTopics(first: 5) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history(first: 1) {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(GITHUB_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GitHubResponse = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    if (!data.data.user?.pinnedItems.nodes) {
      throw new Error('No pinned repositories found');
    }

    return data.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return [];
  }
}
