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

### Step 3: Configure Protection for `staging` (Recommended)

**Branch name pattern:** `staging`

**Enable the following rules:**

#### Pull Request Protection
- ✅ **Require a pull request before merging**
  - Required approvals: `1` (you can approve your own PRs)
  - This enables **Netlify deploy previews** for each feature branch!

#### Branch Restrictions
- ✅ **Require linear history** (enforces rebase)
- ❌ Allow force pushes (keep disabled)
- ❌ Allow deletions (keep disabled)

#### Benefits of PR to Staging
- ✅ **Netlify deploy preview** for each feature branch
- ✅ Test your changes in a real environment before merging
- ✅ Share preview URL with others for review
- ✅ Prevents accidental direct pushes

Click **Create** to save the rule.

---

## Workflow with Branch Protection

### Recommended Workflow (with Netlify Deploy Previews)

```bash
# 1. Create feature branch from staging
git new-feature my-feature

# 2. Develop and commit
git add .
git commit -m "feat: Add my feature"

# 3. Push feature branch to GitHub
git push -u origin feature/my-feature

# 4. Create PR to staging (triggers Netlify deploy preview)
gh pr create --base staging --head feature/my-feature \
  --title "feat: Add my feature" \
  --body "Description of changes"

# 5. Review Netlify deploy preview
# GitHub will show the preview URL in the PR
# Test your changes in the preview environment

# 6. If everything looks good, merge PR to staging
# (Can be done via GitHub UI or gh CLI)
gh pr merge --squash  # or --rebase for linear history

# 7. Test on staging environment
# https://staging--centre-darshan.netlify.app

# 8. Deploy to production via PR from staging to main
gh pr create --base main --head staging \
  --title "Deploy to production" \
  --body "Deploying tested changes from staging to main"

# 9. Merge PR on GitHub (will enforce protection rules)
```

### Benefits of This Workflow

- ✅ **Netlify deploy preview** for each feature (preview URL in PR)
- ✅ **Test before merging** to staging
- ✅ **Share preview link** with others for review
- ✅ **Two-stage deployment**: feature → staging → production
- ✅ **Linear history** maintained with rebase
- ✅ **Protection rules** enforced at every step

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

- ✅ Create PRs from feature branches to `staging`
- ✅ Create PRs from `staging` to `main`
- ✅ Approve your own PRs (since you're the only developer)
- ✅ Push to feature branches
- ✅ Get Netlify deploy previews for each PR to staging

---

## Troubleshooting

### "Protected branch update failed"

**Problem:** Trying to push directly to `main` or `staging`

**Solution:** Use the correct PR workflow:
```bash
# For staging: Create PR from feature branch
git push -u origin feature/my-feature
gh pr create --base staging --head feature/my-feature

# For production: Create PR from staging
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

1. **Always use PRs** - Creates deploy previews and maintains protection
2. **Test deploy preview first** - Before merging to staging
3. **Test staging environment** - Before deploying to production
4. **Use descriptive PR titles** - Helps track what's deployed
5. **Keep PRs small** - Easier to review and safer to deploy
6. **Document breaking changes** - In PR description
7. **Use `--rebase` or `--squash`** - When merging PRs to maintain linear history

---

## Quick Reference

| Action | Command |
|--------|---------|
| Create feature branch | `git new-feature my-feature` |
| Push feature branch | `git push -u origin feature/my-feature` |
| Create PR to staging | `gh pr create --base staging --head feature/my-feature` |
| Merge PR (with rebase) | `gh pr merge --rebase` |
| Create PR to production | `gh pr create --base main --head staging` |
| Check protection status | Settings → Branches on GitHub |

### Netlify Deploy URLs

| Environment | URL | Triggered by |
|-------------|-----|--------------|
| Production | https://centre-darshan.netlify.app | Merge to `main` |
| Staging | https://staging--centre-darshan.netlify.app | Merge to `staging` |
| Deploy Preview | `deploy-preview-XX--centre-darshan.netlify.app` | PR to `staging` or `main` |

**Note:** All non-production deploys (staging, branch deploys, and deploy previews) have `X-Robots-Tag: noindex, nofollow` headers to prevent SEO indexing. This is configured in `netlify.toml`.

---

**Last updated:** January 2025
**Related docs:** `/docs/BRANCHING_STRATEGY.md`, `/docs/GIT_ALIASES.md`
