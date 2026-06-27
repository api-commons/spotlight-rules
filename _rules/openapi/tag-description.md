---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-description
title: Tag Description
severity: info
given: $.tags[*]
message: Tag object must have "description".
description: Tag object must have "description".
experience:
  - documentation
  - discoverability
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/tag-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'tag-description' (Tag Description). Requirement: Tag object
  must have \"description\". To fix: Ensure `description` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.tags[*]` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
ruleyaml: >
  tag-description:
    title: Tag Description
    reference: https://spotlight-rules.com/spec/rules/openapi/tag-description/
    description: Tag object must have "description".
    message: Tag object must have "description".
    severity: info
    given: $.tags[*]
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:tags
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'tag-description' (Tag Description). Requirement: Tag object
      must have \"description\". To fix: Ensure `description` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.tags[*]` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
