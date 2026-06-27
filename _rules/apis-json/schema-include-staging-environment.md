---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-staging-environment
title: Schema Include Staging Environment
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Stage Environment
description: This property ensures that there is a staging environment available
  for an API, providing base URL, tokens, keys, and other key / value pairs that
  are needed to integrate with an API.
experience:
  - usability
  - reliability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-staging-environment/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-staging-environment' (Schema Include Staging
  Environment). Requirement: This property ensures that there is a staging
  environment available for an API, providing base URL, tokens, keys, and other
  key / value pairs that are needed to integrate with an API. To fix: Ensure
  `type` does NOT match the regular expression `\\b(StagingEnvironment)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-staging-environment:
    title: Schema Include Staging Environment
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-staging-environment/
    description: This property ensures that there is a staging environment available
      for an API, providing base URL, tokens, keys, and other key / value pairs
      that are needed to integrate with an API.
    message: Has a Stage Environment
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(StagingEnvironment)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:reliability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-staging-environment' (Schema Include Staging
      Environment). Requirement: This property ensures that there is a staging
      environment available for an API, providing base URL, tokens, keys, and
      other key / value pairs that are needed to integrate with an API. To fix:
      Ensure `type` does NOT match the regular expression
      `\\b(StagingEnvironment)\\b`; rename or rewrite any value that does. This
      rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
