---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-github-action
title: Schema Include Github Action
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a GitHub Action
description: This property ensures that a GitHub Actions CI/CD pipeline is
  available for an API, providing a link to the pipeline YAML artifact, which
  can be used to automate and govern the API as part of the build process.
experience:
  - governance
  - reliability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-github-action/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-github-action' (Schema Include Github Action).
  Requirement: This property ensures that a GitHub Actions CI/CD pipeline is
  available for an API, providing a link to the pipeline YAML artifact, which
  can be used to automate and govern the API as part of the build process. To
  fix: Ensure `type` does NOT match the regular expression
  `\\b(github-actions|GitHubActions)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
