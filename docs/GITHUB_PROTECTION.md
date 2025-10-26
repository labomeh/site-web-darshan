# GitHub Branch Protection Rules

This document explains how to configure GitHub branch protection rules to prevent direct merges to `main` and enforce the Git Flow workflow.

---

## Why Branch Protection?

Branch protection prevents accidental direct merges to `main`, ensuring that all code:
1. Goes through `staging` first for testing
2. Maintains a linear, clean git history
3. Follows the established Git Flow with rebase workflow

---

## Setting Up Branch Protection

### Step 1: Access Branch Protection Settings

1. Go to your GitHub repository: https://github.com/labomeh/site-web-darshan
2. Click on **Settings** (top right)
3. In the left sidebar, click **Branches** (under "Code and automation")
4. Click **Add branch protection rule**

### Step 2: Configure Protection for `main`

**Branch name pattern:** `main`

**Enable the following rules:**

#### Required Reviews
- ✅ **Require a pull request before merging**
  - Required approvals: `1` (you can approve your own PRs since you're the only developer)
  - ❌ Dismiss stale pull request approvals when new commits are pushed (optional)

#### Status Checks (Optional)
-  If you set up CI/CD later, you can require:
  - Build must pass
  - Tests must pass
  - Linting must pass

#### Branch Restrictions
- ✅ **Require linear history** (enforces rebase, no merge commits)
- ✅ **Do not allow bypassing the above settings** (even for admins)
- ❌ Allow force pushes (keep disabled)
- ❌ Allow deletions (keep disabled)

#### Additional Settings
- ✅ **Require status checks to pass before merging** (if you have CI/CD)
- ✅ **Require branches to be up to date before merging**

Click **Create** to save the rule.

### Step 3: Configure Protection for `staging` (Optional but Recommended)

**Branch name pattern:** `staging`

**Enable the following rules:**

#### Basic Protection
- ✅ **Require linear history** (enforces rebase)
- ❌ Require pull request reviews (not needed for staging since it's preprod)
- ❌ Allow force pushes (keep disabled)
- ❌ Allow deletions (keep disabled)

Click **Create** to save the rule.

---

## Workflow with Branch Protection

### Normal Workflow (Feature → Staging → Main)

```bash
# 1. Create feature branch from staging
git new-feature my-feature

# 2. Develop and commit
git add .
git commit -m "feat: Add my feature"

# 3. Ship to staging using git aliases
git finish  # Rebases onto staging, merges, and pushes

# 4. Test on staging environment
# https://staging--centre-darshan.netlify.app

# 5. Deploy to production via GitHub Pull Request
gh pr create --base main --head staging --title "Deploy to production" --body "Deploying tested changes from staging to main"

# 6. Merge PR on GitHub (will enforce protection rules)
```

### Emergency Hotfix to Main

If you absolutely need to push directly to `main` (rare emergency):

1. **Temporary disable protection:**
   - Go to Settings → Branches
   - Edit the `main` protection rule
   - Uncheck "Do not allow bypassing"
   - Save

2. **Make your emergency fix**

3. **Re-enable protection immediately**

4. **Sync staging with main:**
   ```bash
   git checkout staging
   git merge --ff-only main
   git push
   ```

---

## Preventing Direct Merges

### What the Protection Rules Prevent

- ✅ **Direct pushes to `main`** - Must go through PR
- ✅ **Merge commits on `main`** - Only rebased linear history
- ✅ **Bypassing reviews** - At least 1 approval required
- ✅ **Force pushes to `main`** - Prevents history rewriting
- ✅ **Branch deletion** - Can't accidentally delete `main`

### What You Can Still Do

- ✅ Create PRs from `staging` to `main`
- ✅ Approve your own PRs (since you're the only developer)
- ✅ Push directly to `staging` (for testing)
- ✅ Push to feature branches
- ✅ Use git aliases for normal workflow

---

## Troubleshooting

### "Protected branch update failed"

**Problem:** Trying to push directly to `main`

**Solution:** Use the correct workflow:
```bash
# Push to staging instead
git checkout staging
git push

# Then create PR to main
gh pr create --base main --head staging
```

### "Required status checks failed"

**Problem:** CI/CD checks aren't passing

**Solution:**
1. Check the failing checks in the PR
2. Fix the issues in your branch
3. Push the fixes
4. PR will auto-update

### "Linear history required"

**Problem:** Trying to merge instead of rebase

**Solution:** Always use rebase:
```bash
git rebase staging  # Not git merge staging
```

---

## Best Practices

1. **Always use Git aliases** - They enforce correct workflow
2. **Test in staging first** - Never skip staging
3. **Use descriptive PR titles** - Helps track what's deployed
4. **Keep PRs small** - Easier to review and safer to deploy
5. **Document breaking changes** - In PR description

---

## Quick Reference

| Action | Command |
|--------|---------|
| Create feature | `git new-feature my-feature` |
| Ship to staging | `git finish` |
| Create PR to main | `gh pr create --base main --head staging` |
| Check protection status | Settings → Branches on GitHub |

---

**Last updated:** January 2025
**Related docs:** `/docs/BRANCHING_STRATEGY.md`, `/docs/GIT_ALIASES.md`
