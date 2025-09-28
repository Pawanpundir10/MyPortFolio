import React, { useState, useEffect } from 'react';
import { Star, GitFork, Eye, Book, Link as LinkIcon } from 'lucide-react';

// A simple loading skeleton component for the repo cards
const RepoCardSkeleton = () => (
  <div className="bg-[#252526] p-6 rounded-lg border border-gray-700 animate-pulse">
    <div className="h-5 bg-gray-700 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-700 rounded w-full mb-6"></div>
    <div className="flex items-center gap-6 text-sm text-gray-400">
      <div className="h-4 bg-gray-700 rounded w-12"></div>
      <div className="h-4 bg-gray-700 rounded w-12"></div>
      <div className="h-4 bg-gray-700 rounded w-12"></div>
    </div>
  </div>
);

// A simple mock contribution graph
const ContributionGraph = () => {
    const squares = Array.from({ length: 15 * 7 }); // 15 weeks
    return (
        <div className="flex flex-wrap gap-1 justify-center mt-8">
            {squares.map((_, i) => {
                const intensity = Math.random();
                let bgColor = 'bg-gray-800';
                if (intensity > 0.9) bgColor = 'bg-green-400';
                else if (intensity > 0.7) bgColor = 'bg-green-600';
                else if (intensity > 0.4) bgColor = 'bg-green-800';
                return <div key={i} className={`w-3 h-3 rounded-sm ${bgColor}`}></div>
            })}
        </div>
    )
}

function Github({ githubUser }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch user profile and repositories in parallel
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUser}`),
          fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&direction=desc`)
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('Failed to fetch data from GitHub API');
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (githubUser) {
      fetchGithubData();
    }
  }, [githubUser]);

  return (
    <div className="p-4 sm:p-8 text-gray-300 overflow-y-auto h-full bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        {loading && <div className="h-24 bg-gray-800 rounded-lg animate-pulse mb-8"></div>}
        {error && <div className="text-center text-red-400">Error: {error}</div>}
        
        {user && (
          <div className="flex items-center gap-6 bg-[#252526] p-6 rounded-lg border border-gray-700 mb-8">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full border-2 border-gray-600" />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{user.login}</a>
            </div>
            <div className="flex gap-6 text-center ml-auto">
              <div>
                <p className="text-2xl font-bold text-white">{user.public_repos}</p>
                <p className="text-sm text-gray-400">Repositories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{user.followers}</p>
                <p className="text-sm text-gray-400">Followers</p>
              </div>
            </div>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <RepoCardSkeleton key={i} />)
          ) : (
            repos.slice(0, 9).map(repo => ( // Display top 9 updated repos
              <div key={repo.id} className="bg-[#252526] p-6 rounded-lg border border-gray-700 flex flex-col hover:border-blue-500 transition-colors">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline font-bold text-lg mb-2">
                  <Book size={16} /> 
                  <span>{repo.name}</span>
                </a>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{repo.description || "No description provided."}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mt-auto">
                  <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                  <span className="flex items-center gap-1"><Eye size={14} /> {repo.watchers_count}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {!loading && <ContributionGraph />}
        
      </div>
    </div>
  );
}

export default Github;
