---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-max-nesting-depth
title: Path Max Nesting Depth
severity: info
given: $.paths
message: Path Nesting MUST NOT Exceed 4 Levels
description: API paths should not exceed 4 levels of nesting depth. Analysis of
  6627 paths across 773 specs shows an average depth of 3.04 segments, with
  deeper paths indicating overly complex resource hierarchies.
experience:
  - consistency
  - usability
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-max-nesting-depth/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-max-nesting-depth' (Path Max Nesting Depth).
  Requirement: API paths should not exceed 4 levels of nesting depth. Analysis
  of 6627 paths across 773 specs shows an average depth of 3.04 segments, with
  deeper paths indicating overly complex resource hierarchies. To fix: Ensure
  the targeted value does NOT match the regular expression `^(/[^/]+){5,}`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.paths` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  path-max-nesting-depth:
    title: Path Max Nesting Depth
    reference: https://spotlight-rules.com/spec/rules/openapi/path-max-nesting-depth/
    description: API paths should not exceed 4 levels of nesting depth. Analysis of
      6627 paths across 773 specs shows an average depth of 3.04 segments, with
      deeper paths indicating overly complex resource hierarchies.
    message: Path Nesting MUST NOT Exceed 4 Levels
    severity: info
    given: $.paths
    then:
      function: pattern
      functionOptions:
        notMatch: ^(/[^/]+){5,}
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-max-nesting-depth' (Path Max Nesting Depth).
      Requirement: API paths should not exceed 4 levels of nesting depth. Analysis
      of 6627 paths across 773 specs shows an average depth of 3.04 segments, with
      deeper paths indicating overly complex resource hierarchies. To fix: Ensure
      the targeted value does NOT match the regular expression `^(/[^/]+){5,}`;
      rename or rewrite any value that does. This rule is evaluated at the
      JSONPath `$.paths` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
