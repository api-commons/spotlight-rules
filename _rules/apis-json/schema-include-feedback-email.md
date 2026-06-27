---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-feedback-email
title: Schema Include Feedback Email
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Feedback Email
description: This property ensures that there is an email available for API
  consumers to provide feedback.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-feedback-email/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-feedback-email' (Schema Include Feedback
  Email). Requirement: This property ensures that there is an email available
  for API consumers to provide feedback. To fix: Ensure `type` does NOT match
  the regular expression `\\b(feedback-email|FeedbackEmail)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-feedback-email:
    title: Schema Include Feedback Email
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-feedback-email/
    description: This property ensures that there is an email available for API
      consumers to provide feedback.
    message: Has Feedback Email
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(feedback-email|FeedbackEmail)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-feedback-email' (Schema Include Feedback
      Email). Requirement: This property ensures that there is an email available
      for API consumers to provide feedback. To fix: Ensure `type` does NOT match
      the regular expression `\\b(feedback-email|FeedbackEmail)\\b`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
