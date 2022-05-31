# LogDNA CloudWatch

This repository contains [a GitHub Action][action] to deploy a release of the
LogDNA CloudWatch integration Lambda in my own CloudFormation Stack (using
GitOps).

[action](./.github/workflows/ci.yml)

## Usage

- Update the `prep` step, which sets the desired version
- Opening a PR will establish the zip file for that version on S3
- Pushing to `main` will update a CloudFormation Parameter via GitOps to use it

PRs and pushes that don't modify this version are effectively no-ops.

---

[LICENSE](./LICENSE)
