---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-questions-issues-url
title: Schema Include Questions Issues URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Questions Issues URL
description: This property ensures that an API has a dedicated link to Git
  issues for asking questions.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-questions-issues-url/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-questions-issues-url' (Schema Include
  Questions Issues URL). Requirement: This property ensures that an API has a
  dedicated link to Git issues for asking questions. To fix: Ensure `type` does
  NOT match the regular expression
  `\\b(QuestionsIssues|QuestionsGitHubIssues)\\b`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-include-questions-issues-url:
    title: Schema Include Questions Issues URL
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-questions-issues-url/
    description: This property ensures that an API has a dedicated link to Git
      issues for asking questions.
    message: Has Questions Issues URL
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(QuestionsIssues|QuestionsGitHubIssues)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-questions-issues-url' (Schema Include
      Questions Issues URL). Requirement: This property ensures that an API has a
      dedicated link to Git issues for asking questions. To fix: Ensure `type`
      does NOT match the regular expression
      `\\b(QuestionsIssues|QuestionsGitHubIssues)\\b`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
