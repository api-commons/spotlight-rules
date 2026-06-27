---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-api-prefix-in
title: Path No API Prefix In
severity: info
given: $.paths.*~
message: A resource SHOULD NOT contain 'api' as a prefix in or a part of the path.
description: A resource SHOULD NOT contain 'api' as a prefix in or a part of the path.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-api-prefix-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-api-prefix-in' (Path No API Prefix In). Requirement:
  A resource SHOULD NOT contain 'api' as a prefix in or a part of the path. To
  fix: Ensure the targeted value does NOT match the regular expression
  `/api|/api/|-api/`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths.*~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-no-api-prefix-in:
    title: Path No API Prefix In
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-api-prefix-in/
    description: A resource SHOULD NOT contain 'api' as a prefix in or a part of the path.
    message: A resource SHOULD NOT contain 'api' as a prefix in or a part of the path.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: /api|/api/|-api/
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-api-prefix-in' (Path No API Prefix In).
      Requirement: A resource SHOULD NOT contain 'api' as a prefix in or a part of
      the path. To fix: Ensure the targeted value does NOT match the regular
      expression `/api|/api/|-api/`; rename or rewrite any value that does. This
      rule is evaluated at the JSONPath `$.paths.*~` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
