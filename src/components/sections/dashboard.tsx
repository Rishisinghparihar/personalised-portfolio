"use client";

import { useEffect, useState } from "react";
import { GitHubProfile } from "@/components/dashboard/github-profile";
import { WeeklyProgress } from "@/components/dashboard/weekly-progress";
import { MonthlyProgress } from "@/components/dashboard/monthly-progress";

interface GitHubStats {
  avatarUrl: string;
  login: string;
  repositories: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  totalStars: number;
  totalForks: number;
}

interface WeeklyData {
  day: string;
  commits: number;
}

interface MonthlyData {
  name: string;
  value: number;
  color: string;
}

export function Dashboard() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const query = `
          query {
            user(login: "rishisinghparihar") {
              avatarUrl
              login
              repositories {
                totalCount
              }
              followers {
                totalCount
              }
              contributionsCollection(from: "${new Date(new Date().setDate(new Date().getDate() - 7)).toISOString()}", to: "${new Date().toISOString()}") {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
                totalCommitContributions
                totalPullRequestContributions
                totalIssueContributions
                totalRepositoryContributions
                restrictedContributionsCount
              }
            }
          }
        `;

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        const userData = data.data.user;

        // Process stats
        setStats({
          avatarUrl: userData.avatarUrl,
          login: userData.login,
          repositories: userData.repositories,
          followers: userData.followers,
          totalStars: 0, // You'll need to fetch this separately
          totalForks: 0, // You'll need to fetch this separately
        });

        // Process weekly data
        const weeks = userData.contributionsCollection.contributionCalendar.weeks;
        const lastWeek = weeks[weeks.length - 1];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weeklyStats = lastWeek.contributionDays.map((day: any, index: number) => ({
          day: days[index],
          commits: day.contributionCount,
        }));
        setWeeklyData(weeklyStats);

        // Process monthly data
        const contributions = userData.contributionsCollection;
        setMonthlyData([
          { name: 'Commits', value: contributions.totalCommitContributions, color: '#0088FE' },
          { name: 'PRs', value: contributions.totalPullRequestContributions, color: '#00C49F' },
          { name: 'Issues', value: contributions.totalIssueContributions, color: '#FFBB28' },
          { name: 'Repos', value: contributions.totalRepositoryContributions, color: '#FF8042' },
        ]);

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-80 rounded-3xl bg-card/30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats && <GitHubProfile {...stats} />}
          <WeeklyProgress data={weeklyData} />
          <MonthlyProgress data={monthlyData} />
        </div>
      </div>
    </section>
  );
} 