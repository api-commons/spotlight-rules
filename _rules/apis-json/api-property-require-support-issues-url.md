---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-support-issues-url
title: API Property Require Support Issues URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Support Issues URL
description: This property ensures that there are Git issues available to
  support an API, using the issues capability of GitHub, GitLab, or Bitbucket to
  support API consumers.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-support-issues-url/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-support-issues-url' (API Property
  Require Support Issues URL). Requirement: This property ensures that there are
  Git issues available to support an API, using the issues capability of GitHub,
  GitLab, or Bitbucket to support API consumers. To fix: Ensure `type` does NOT
  match the regular expression `\\b(SupportIssues|SupportGitHubIssues)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-support-issues-url:
    title: API Property Require Support Issues URL
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-support-issues-url/
    description: This property ensures that there are Git issues available to
      support an API, using the issues capability of GitHub, GitLab, or Bitbucket
      to support API consumers.
    message: Has Support Issues URL
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(SupportIssues|SupportGitHubIssues)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-support-issues-url' (API Property
      Require Support Issues URL). Requirement: This property ensures that there
      are Git issues available to support an API, using the issues capability of
      GitHub, GitLab, or Bitbucket to support API consumers. To fix: Ensure `type`
      does NOT match the regular expression
      `\\b(SupportIssues|SupportGitHubIssues)\\b`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
