---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-http-methods-in
title: Path No HTTP Methods In
severity: info
given: $.paths.*~
message: A resource SHOULD NOT contain HTTP methods.
description: A resource SHOULD NOT contain HTTP methods.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-http-methods-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-http-methods-in' (Path No HTTP Methods In).
  Requirement: A resource SHOULD NOT contain HTTP methods. To fix: Ensure the
  targeted value does NOT match the regular expression
  `(\\/get|\\/post|\\/put|\\/delete|\\/patch)`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.paths.*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-no-http-methods-in:
    title: Path No HTTP Methods In
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-http-methods-in/
    description: A resource SHOULD NOT contain HTTP methods.
    message: A resource SHOULD NOT contain HTTP methods.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: (\/get|\/post|\/put|\/delete|\/patch)
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-http-methods-in' (Path No HTTP Methods In).
      Requirement: A resource SHOULD NOT contain HTTP methods. To fix: Ensure the
      targeted value does NOT match the regular expression
      `(\\/get|\\/post|\\/put|\\/delete|\\/patch)`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.paths.*~` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
