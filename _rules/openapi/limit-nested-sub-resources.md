---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: limit-nested-sub-resources
title: Limit Nested Sub Resources
severity: info
given: $.paths.*~
message: The hierarchy of nested resources SHOULD NOT contain more than 8
  resource names in the path.
description: The hierarchy of nested resources SHOULD NOT contain more than 8
  resource names in the path.
experience:
  - usability
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/limit-nested-sub-resources/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'limit-nested-sub-resources' (Limit Nested Sub Resources).
  Requirement: The hierarchy of nested resources SHOULD NOT contain more than 8
  resource names in the path. To fix: Ensure the targeted value does NOT match
  the regular expression `^([^/]*/){9,}`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.paths.*~` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  limit-nested-sub-resources:
    title: Limit Nested Sub Resources
    reference: https://spotlight-rules.com/spec/rules/openapi/limit-nested-sub-resources/
    description: The hierarchy of nested resources SHOULD NOT contain more than 8
      resource names in the path.
    message: The hierarchy of nested resources SHOULD NOT contain more than 8
      resource names in the path.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: ^([^/]*/){9,}
    tags:
      - format:openapi
      - spec:paths
      - experience:usability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'limit-nested-sub-resources' (Limit Nested Sub Resources).
      Requirement: The hierarchy of nested resources SHOULD NOT contain more than
      8 resource names in the path. To fix: Ensure the targeted value does NOT
      match the regular expression `^([^/]*/){9,}`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.paths.*~` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
