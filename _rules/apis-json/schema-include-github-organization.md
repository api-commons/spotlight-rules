---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-github-organization
title: Schema Include Github Organization
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a GitHub Organization
description: This property ensures that an API is associated with GitHub
  organization, providing the URL to where you can engage with the operations
  surrounding an API.
experience:
  - discoverability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-github-organization/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-github-organization' (Schema Include Github
  Organization). Requirement: This property ensures that an API is associated
  with GitHub organization, providing the URL to where you can engage with the
  operations surrounding an API. To fix: Ensure `type` does NOT match the
  regular expression `\\b(github-organization|GitHubOrganization)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
