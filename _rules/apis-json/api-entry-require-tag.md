---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-entry-require-tag
title: API Entry Require Tag
severity: info
given: $.apis.*
message: API MUST Have a Tags Object
description: Each API defined in an APIs.json artifact includes a property for
  adding one or more tags. These tags provide additional context about the
  resources or capabilities offered by the API, highlighting its business value
  and the domain in which it is applied.
experience:
  - discoverability
  - data-modeling
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-entry-require-tag/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-entry-require-tag' (API Entry Require Tag). Requirement:
  Each API defined in an APIs.json artifact includes a property for adding one
  or more tags. These tags provide additional context about the resources or
  capabilities offered by the API, highlighting its business value and the
  domain in which it is applied. To fix: Ensure `tags` is present and non-empty
  at each matching location. This rule is evaluated at the JSONPath `$.apis.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-entry-require-tag:
    title: API Entry Require Tag
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-entry-require-tag/
    description: Each API defined in an APIs.json artifact includes a property for
      adding one or more tags. These tags provide additional context about the
      resources or capabilities offered by the API, highlighting its business
      value and the domain in which it is applied.
    message: API MUST Have a Tags Object
    severity: info
    given: $.apis.*
    then:
      field: tags
      function: truthy
    tags:
      - format:apis-json
      - spec:apis
      - experience:discoverability
      - experience:data-modeling
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-entry-require-tag' (API Entry Require Tag).
      Requirement: Each API defined in an APIs.json artifact includes a property
      for adding one or more tags. These tags provide additional context about the
      resources or capabilities offered by the API, highlighting its business
      value and the domain in which it is applied. To fix: Ensure `tags` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.apis.*` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
