---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: info-apis-json-specification-version-format
title: Info APIs JSON Specification Version Format
severity: info
given: $.specificationVersion
message: specificationVersion should be major.minor.
description: specificationVersion should be a major.minor version (e.g. 0.21).
experience:
  - versioning
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/info-apis-json-specification-version-format/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'info-apis-json-specification-version-format' (Info APIs JSON
  Specification Version Format). Requirement: specificationVersion should be a
  major.minor version (e.g. 0.21). To fix: Ensure the targeted value matches the
  regular expression `^\\d+\\.\\d+$`; rewrite any value that does not. This rule
  is evaluated at the JSONPath `$.specificationVersion` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-apis-json-specification-version-format:
    title: Info APIs JSON Specification Version Format
    reference: https://spotlight-rules.com/spec/rules/apis-json/info-apis-json-specification-version-format/
    description: specificationVersion should be a major.minor version (e.g. 0.21).
    message: specificationVersion should be major.minor.
    given: $.specificationVersion
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^\d+\.\d+$
    tags:
      - format:apis-json
      - spec:document
      - experience:versioning
      - experience:consistency
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'info-apis-json-specification-version-format' (Info APIs
      JSON Specification Version Format). Requirement: specificationVersion should
      be a major.minor version (e.g. 0.21). To fix: Ensure the targeted value
      matches the regular expression `^\\d+\\.\\d+$`; rewrite any value that does
      not. This rule is evaluated at the JSONPath `$.specificationVersion` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
