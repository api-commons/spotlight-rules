---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-include-version
title: Path Include Version
severity: info
given: $.paths[?(@property!='/<upload_url>')]~
message: "{{description}}; {{property}} incorrect"
description: Path must include the version.
experience:
  - versioning
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-include-version/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-include-version' (Path Include Version). Requirement:
  Path must include the version. To fix: Ensure the targeted value matches the
  regular expression `^(/v[12]/.*|/api/v[12]/.*)$`; rewrite any value that does
  not. This rule is evaluated at the JSONPath
  `$.paths[?(@property!='/<upload_url>')]~` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-include-version:
    title: Path Include Version
    reference: https://spotlight-rules.com/spec/rules/openapi/path-include-version/
    description: Path must include the version.
    message: "{{description}}; {{property}} incorrect"
    severity: info
    given: $.paths[?(@property!='/<upload_url>')]~
    then:
      function: pattern
      functionOptions:
        match: ^(/v[12]/.*|/api/v[12]/.*)$
    tags:
      - format:openapi
      - spec:paths
      - experience:versioning
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-include-version' (Path Include Version). Requirement:
      Path must include the version. To fix: Ensure the targeted value matches the
      regular expression `^(/v[12]/.*|/api/v[12]/.*)$`; rewrite any value that
      does not. This rule is evaluated at the JSONPath
      `$.paths[?(@property!='/<upload_url>')]~` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
