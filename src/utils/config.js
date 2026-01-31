

export const GITHUB_API_BASE_URL = "https://api.github.com";

export const MAX_REPOS_TO_DISPLAY = 10;

export const UI_MESSAGES = {
    rateLimit: "GitHub rate limit reached. Please try again later.",
    userNotFound: "User or organization not found. Check the name and try again.",
    noRepos: "No public repositories found for this user or organization.",
    unknownError: "Something went wrong. Please try again.",
};

export const HTTP_STATUS = {
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
};

export const ENDPOINTS = {
    userRepos: (username) =>
        `${GITHUB_API_BASE_URL}/users/${encodeURIComponent(
            username
        )}/repos?per_page=${MAX_REPOS_TO_DISPLAY}&sort=updated`,

    latestWorkflowRun: (owner, repo) =>
        `${GITHUB_API_BASE_URL}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(
            repo
        )}/actions/runs?per_page=1`,
};