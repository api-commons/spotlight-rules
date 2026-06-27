---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-query-strings-in
title: Path No Query Strings In
severity: info
given: $.paths.*~
message: Paths SHOULD NOT have query parameters in them. They should be defined
  separately in the OpenAPI.
description: Paths SHOULD NOT have query parameters in them. They should be
  defined separately in the OpenAPI.
experience:
  - consistency
  - naming
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-query-strings-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-query-strings-in' (Path No Query Strings In).
  Requirement: Paths SHOULD NOT have query parameters in them. They should be
  defined separately in the OpenAPI. To fix: Ensure the targeted value does NOT
  match the regular expression `\\?`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.paths.*~` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-no-query-strings-in:
    title: Path No Query Strings In
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-query-strings-in/
    description: Paths SHOULD NOT have query parameters in them. They should be
      defined separately in the OpenAPI.
    message: Paths SHOULD NOT have query parameters in them. They should be defined
      separately in the OpenAPI.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: \?
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:naming
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-query-strings-in' (Path No Query Strings In).
      Requirement: Paths SHOULD NOT have query parameters in them. They should be
      defined separately in the OpenAPI. To fix: Ensure the targeted value does
      NOT match the regular expression `\\?`; rename or rewrite any value that
      does. This rule is evaluated at the JSONPath `$.paths.*~` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
