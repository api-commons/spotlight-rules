---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-require-valid-http-verb
title: Path Require Valid HTTP Verb
severity: info
given: $.paths.*
message: "{{error}}"
description: All APIs MUST have a valid http verb.
experience:
  - consistency
  - governance
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-require-valid-http-verb/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-require-valid-http-verb' (Path Require Valid HTTP Verb).
  Requirement: All APIs MUST have a valid http verb. This rule is evaluated at
  the JSONPath `$.paths.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  path-require-valid-http-verb:
    title: Path Require Valid HTTP Verb
    reference: https://spotlight-rules.com/spec/rules/openapi/path-require-valid-http-verb/
    description: All APIs MUST have a valid http verb.
    message: "{{error}}"
    severity: info
    given: $.paths.*
    then:
      field: "@key"
      function: trimble:does-spec-contains-valid-http-verbs
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-require-valid-http-verb' (Path Require Valid HTTP
      Verb). Requirement: All APIs MUST have a valid http verb. This rule is
      evaluated at the JSONPath `$.paths.*` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
