# Sync all branches (Shane, Jivesh, Prem) with each other
# This script will merge all changes from all branches together

Write-Host "Starting branch sync..." -ForegroundColor Cyan

# Fetch all latest changes from remote
Write-Host "Fetching latest changes from GitHub..." -ForegroundColor Yellow
git fetch --all

# Get current branch
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Currently on branch: $currentBranch" -ForegroundColor Green

# Sync Jivesh <- Shane, Prem
Write-Host "`nSyncing Jivesh branch..." -ForegroundColor Cyan
git checkout Jivesh
git merge Shane --no-edit
if ($LASTEXITCODE -ne 0) {
    git checkout --theirs academics/timetable.html
    git add .
    git commit -m "Auto-sync: Merged Shane into Jivesh"
}
git merge Prem --no-edit
if ($LASTEXITCODE -ne 0) {
    git checkout --theirs academics/timetable.html
    git add .
    git commit -m "Auto-sync: Merged Prem into Jivesh"
}

# Sync Shane <- Jivesh
Write-Host "`nSyncing Shane with Jivesh..." -ForegroundColor Yellow
git checkout Shane
git merge Jivesh --no-edit
if ($LASTEXITCODE -ne 0) {
    git checkout --theirs academics/timetable.html
    git add .
    git commit -m "Auto-sync: Merged Jivesh into Shane"
}

# Sync Prem <- Jivesh
Write-Host "`nSyncing Prem with Jivesh..." -ForegroundColor Yellow
git checkout Prem
git merge Jivesh --no-edit
if ($LASTEXITCODE -ne 0) {
    git checkout --theirs academics/timetable.html
    git add .
    git commit -m "Auto-sync: Merged Jivesh into Prem"
}

# Push all branches to remote
Write-Host "`nPushing all branches to GitHub..." -ForegroundColor Yellow
git push origin Jivesh
git push origin Shane
git push origin Prem

# Return to original branch
git checkout $currentBranch
Write-Host "`nAll branches synced successfully!" -ForegroundColor Green
Write-Host "Returned to branch: $currentBranch" -ForegroundColor Cyan
