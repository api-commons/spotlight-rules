---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-sandbox
title: API Property Require Sandbox
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog
description: This property ensures that an API has a reference to a sandbox for
  individual APIs or as part of common properties, providing sandbox, synthetic
  data, and mock servers for use in making test requests.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-sandbox/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-sandbox' (API Property Require Sandbox).
  Requirement: This property ensures that an API has a reference to a sandbox
  for individual APIs or as part of common properties, providing sandbox,
  synthetic data, and mock servers for use in making test requests. To fix:
  Ensure `type` does NOT match the regular expression `\\b(sandbox|Sandbox)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-sandbox:
    title: API Property Require Sandbox
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-sandbox/
    description: This property ensures that an API has a reference to a sandbox for
      individual APIs or as part of common properties, providing sandbox,
      synthetic data, and mock servers for use in making test requests.
    message: Has a Blog
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(sandbox|Sandbox)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-sandbox' (API Property Require
      Sandbox). Requirement: This property ensures that an API has a reference to
      a sandbox for individual APIs or as part of common properties, providing
      sandbox, synthetic data, and mock servers for use in making test requests.
      To fix: Ensure `type` does NOT match the regular expression
      `\\b(sandbox|Sandbox)\\b`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
