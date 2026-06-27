---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-version-segment
title: Path No Version Segment
severity: info
given: $.paths
message: Paths MUST NOT Contain API Version
description: API paths should not contain version numbers like v1 or v2. API
  versioning should be handled through headers, query parameters, or server URLs
  rather than embedded in resource paths.
experience:
  - versioning
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-version-segment/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-version-segment' (Path No Version Segment).
  Requirement: API paths should not contain version numbers like v1 or v2. API
  versioning should be handled through headers, query parameters, or server URLs
  rather than embedded in resource paths. To fix: Ensure the targeted value does
  NOT match the regular expression `/v[0-9]`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.paths` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-no-version-segment:
    title: Path No Version Segment
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-version-segment/
    description: API paths should not contain version numbers like v1 or v2. API
      versioning should be handled through headers, query parameters, or server
      URLs rather than embedded in resource paths.
    message: Paths MUST NOT Contain API Version
    severity: info
    given: $.paths
    then:
      function: pattern
      functionOptions:
        notMatch: /v[0-9]
    tags:
      - format:openapi
      - spec:paths
      - experience:versioning
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-version-segment' (Path No Version Segment).
      Requirement: API paths should not contain version numbers like v1 or v2. API
      versioning should be handled through headers, query parameters, or server
      URLs rather than embedded in resource paths. To fix: Ensure the targeted
      value does NOT match the regular expression `/v[0-9]`; rename or rewrite any
      value that does. This rule is evaluated at the JSONPath `$.paths` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
