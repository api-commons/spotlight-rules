---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-resources-plural
title: Path Resources Plural
severity: info
given: $.paths
message: Path Resources Should Be Plural
description: Resource names in paths should use plural nouns to maintain
  consistency and follow REST conventions for collection-oriented resource
  design.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-resources-plural/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-resources-plural' (Path Resources Plural). Requirement:
  Resource names in paths should use plural nouns to maintain consistency and
  follow REST conventions for collection-oriented resource design. To fix:
  Ensure the targeted value matches the regular expression
  `^(/[a-z].*s(/\\{[^}]+\\})?)*$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.paths` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-resources-plural:
    title: Path Resources Plural
    reference: https://spotlight-rules.com/spec/rules/openapi/path-resources-plural/
    description: Resource names in paths should use plural nouns to maintain
      consistency and follow REST conventions for collection-oriented resource
      design.
    message: Path Resources Should Be Plural
    severity: info
    given: $.paths
    then:
      function: pattern
      functionOptions:
        match: ^(/[a-z].*s(/\{[^}]+\})?)*$
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-resources-plural' (Path Resources Plural).
      Requirement: Resource names in paths should use plural nouns to maintain
      consistency and follow REST conventions for collection-oriented resource
      design. To fix: Ensure the targeted value matches the regular expression
      `^(/[a-z].*s(/\\{[^}]+\\})?)*$`; rewrite any value that does not. This rule
      is evaluated at the JSONPath `$.paths` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
