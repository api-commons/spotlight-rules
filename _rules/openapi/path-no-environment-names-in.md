---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-environment-names-in
title: Path No Environment Names In
severity: info
given: $.paths.*~
message: API paths MUST NOT indicate environment names.
description: API paths MUST NOT indicate environment names.
experience:
  - naming
  - governance
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-environment-names-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-environment-names-in' (Path No Environment Names In).
  Requirement: API paths MUST NOT indicate environment names. To fix: Ensure the
  targeted value does NOT match the regular expression
  `/prod/|/preprod/|/dev/|/test/|/integration/|/stage/`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$.paths.*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-no-environment-names-in:
    title: Path No Environment Names In
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-environment-names-in/
    description: API paths MUST NOT indicate environment names.
    message: API paths MUST NOT indicate environment names.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: /prod/|/preprod/|/dev/|/test/|/integration/|/stage/
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-environment-names-in' (Path No Environment Names
      In). Requirement: API paths MUST NOT indicate environment names. To fix:
      Ensure the targeted value does NOT match the regular expression
      `/prod/|/preprod/|/dev/|/test/|/integration/|/stage/`; rename or rewrite any
      value that does. This rule is evaluated at the JSONPath `$.paths.*~` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
