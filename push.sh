
#!/usr/bin/env bash
set -e

# Always work inside this project's folder
cd "$(dirname "$0")"

# Check required tools
command -v git >/dev/null || {
    echo "Git is not installed."
    exit 1
}

command -v gh >/dev/null || {
    echo "Install GitHub CLI first."
    exit 1
}

gh auth status >/dev/null || {
    echo "Run 'gh auth login' first."
    exit 1
}

# Initialize Git if necessary
if [ ! -d .git ]; then
    git init
fi

# Configure the initial branch
if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
    git checkout -B main
fi

# Stage and commit changes
git add .

if ! git diff --cached --quiet; then
    git commit -m "Update project"
else
    echo "No new changes to commit."
fi

# Get GitHub account and project names
OWNER=$(gh api user --jq .login)
REPO=$(basename "$PWD")
BRANCH=$(git branch --show-current)

# Create or connect the GitHub repository
if ! git remote get-url origin >/dev/null 2>&1; then
    if gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
        git remote add origin \
            "https://github.com/$OWNER/$REPO.git"
    else
        gh repo create "$REPO" \
            --private \
            --source=. \
            --remote=origin \
            --push

        echo "Repository created and code pushed!"
        exit 0
    fi
fi

# Push the current branch
git push -u origin "$BRANCH"

echo "Successfully pushed to GitHub!"

