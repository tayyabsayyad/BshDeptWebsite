# Branch Sync Script

## 🚀 Quick Sync Command

To sync all three branches (Shane, Jivesh, Prem) with each other, run:

```powershell
.\sync-branches.ps1
```

## 📝 What it does:

1. Fetches all latest changes from GitHub
2. Merges all changes from Shane and Prem into Jivesh
3. Syncs Shane with Jivesh
4. Syncs Prem with Jivesh
5. Pushes all updated branches to GitHub
6. Returns you to your original branch

## ⚡ When to use:

- After someone pushes changes to any branch
- Before you start working (to get latest updates)
- After you finish your work and push

## 🔄 Regular Workflow:

```powershell
# 1. Sync all branches first
.\sync-branches.ps1

# 2. Make your changes
# (edit files, add PDFs, etc.)

# 3. Commit your changes
git add .
git commit -m "Your commit message"

# 4. Push your branch
git push origin [your-branch-name]

# 5. Sync again to update other branches
.\sync-branches.ps1
```

## ✅ All three branches will always have the same content!
