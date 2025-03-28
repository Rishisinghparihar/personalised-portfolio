const GITHUB_API_URL = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export async function fetchGitHubData() {
  const query = `
    {
      viewer {
        login
        name
        avatarUrl
        repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            name
            description
            url
            updatedAt
            stargazerCount
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });
  console.log(response);
  const data = await response.json();
  return data.data.viewer;
}

export async function getPinnedRepos() {
  try {
    const query = `
      query {
        user(login: "rishiparihar") {
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

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    return data.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
