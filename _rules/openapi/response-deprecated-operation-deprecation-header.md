---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-deprecated-operation-deprecation-header
title: Response Deprecated Operation Deprecation Header
severity: info
given: $.paths[*][?(@ && @.deprecated == true)].responses[*].headers
message: Deprecated operation should document a Deprecation header.
description: Deprecated operations should document a Deprecation response header
  (RFC 9745) signalling that the resource is deprecated.
experience:
  - versioning
  - governance
spec:
  - responses
topic:
  - deprecation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-deprecated-operation-deprecation-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-deprecated-operation-deprecation-header' (Response
  Deprecated Operation Deprecation Header). Requirement: Deprecated operations
  should document a Deprecation response header (RFC 9745) signalling that the
  resource is deprecated. To fix: Ensure `Deprecation` is present and non-empty
  at each matching location. This rule is evaluated at the JSONPath
  `$.paths[*][?(@ && @.deprecated == true)].responses[*].headers` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-deprecated-operation-deprecation-header:
    title: Response Deprecated Operation Deprecation Header
    reference: https://spotlight-rules.com/spec/rules/openapi/response-deprecated-operation-deprecation-header/
    description: Deprecated operations should document a Deprecation response header
      (RFC 9745) signalling that the resource is deprecated.
    message: Deprecated operation should document a Deprecation header.
    given: $.paths[*][?(@ && @.deprecated == true)].responses[*].headers
    severity: info
    then:
      field: Deprecation
      function: truthy
    tags:
      - format:openapi
      - spec:responses
      - topic:deprecation
      - experience:versioning
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-deprecated-operation-deprecation-header' (Response
      Deprecated Operation Deprecation Header). Requirement: Deprecated operations
      should document a Deprecation response header (RFC 9745) signalling that the
      resource is deprecated. To fix: Ensure `Deprecation` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.paths[*][?(@ && @.deprecated == true)].responses[*].headers` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
