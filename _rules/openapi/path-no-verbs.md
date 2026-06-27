---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-verbs
title: Path No Verbs
severity: info
given: $.paths[*]~
message: Path '{{path}}' includes a verb (e.g., 'get', 'update', 'create',
  'delete'). API paths SHOULD be resource-focused.
description: API paths MUST be resource-focused and MUST NOT include verbs like
  'get', 'update', 'create', or 'delete'.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-verbs/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-verbs' (Path No Verbs). Requirement: API paths MUST
  be resource-focused and MUST NOT include verbs like 'get', 'update', 'create',
  or 'delete'. To fix: Ensure the targeted value does NOT match the regular
  expression `/\\b(get|update|create|delete|fetch|retrieve)\\b/`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.paths[*]~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  path-no-verbs:
    title: Path No Verbs
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-verbs/
    description: API paths MUST be resource-focused and MUST NOT include verbs like
      'get', 'update', 'create', or 'delete'.
    message: Path '{{path}}' includes a verb (e.g., 'get', 'update', 'create',
      'delete'). API paths SHOULD be resource-focused.
    severity: info
    given: $.paths[*]~
    then:
      function: pattern
      functionOptions:
        notMatch: /\b(get|update|create|delete|fetch|retrieve)\b/
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-verbs' (Path No Verbs). Requirement: API paths MUST
      be resource-focused and MUST NOT include verbs like 'get', 'update',
      'create', or 'delete'. To fix: Ensure the targeted value does NOT match the
      regular expression `/\\b(get|update|create|delete|fetch|retrieve)\\b/`;
      rename or rewrite any value that does. This rule is evaluated at the
      JSONPath `$.paths[*]~` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
