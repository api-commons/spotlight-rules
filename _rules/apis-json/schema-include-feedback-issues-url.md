---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-feedback-issues-url
title: Schema Include Feedback Issues URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Feedback Issues URL
description: This property ensures there is a URL to Git issues specifically for
  providing feedback.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-feedback-issues-url/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-feedback-issues-url' (Schema Include Feedback
  Issues URL). Requirement: This property ensures there is a URL to Git issues
  specifically for providing feedback. To fix: Ensure `type` does NOT match the
  regular expression `\\b(FeedbackIssues|FeedbackGitHubIssues)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-feedback-issues-url:
    title: Schema Include Feedback Issues URL
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-feedback-issues-url/
    description: This property ensures there is a URL to Git issues specifically for
      providing feedback.
    message: Has Feedback Issues URL
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(FeedbackIssues|FeedbackGitHubIssues)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-feedback-issues-url' (Schema Include
      Feedback Issues URL). Requirement: This property ensures there is a URL to
      Git issues specifically for providing feedback. To fix: Ensure `type` does
      NOT match the regular expression
      `\\b(FeedbackIssues|FeedbackGitHubIssues)\\b`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
