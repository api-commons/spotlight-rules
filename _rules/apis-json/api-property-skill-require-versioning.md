---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-skill-require-versioning
title: API Property Require Versioning
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Versioning for API
description: This property ensures there is a reference to how APIs are
  versioned, providing a single place where teams can learn about how change is
  communicated.
experience:
  - versioning
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-skill-require-versioning/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-skill-require-versioning' (API Property Require
  Versioning). Requirement: This property ensures there is a reference to how
  APIs are versioned, providing a single place where teams can learn about how
  change is communicated. To fix: Ensure `type` does NOT match the regular
  expression `\\b(versions|Versions|Versioning|versioning)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-skill-require-versioning:
    title: API Property Require Versioning
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-skill-require-versioning/
    description: This property ensures there is a reference to how APIs are
      versioned, providing a single place where teams can learn about how change
      is communicated.
    message: Has Versioning for API
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(versions|Versions|Versioning|versioning)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:versioning
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-skill-require-versioning' (API Property
      Require Versioning). Requirement: This property ensures there is a reference
      to how APIs are versioned, providing a single place where teams can learn
      about how change is communicated. To fix: Ensure `type` does NOT match the
      regular expression `\\b(versions|Versions|Versioning|versioning)\\b`; rename
      or rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
