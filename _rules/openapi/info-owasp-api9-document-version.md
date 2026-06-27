---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-owasp-api9-document-version
title: Info OWASP API9 Document Version
severity: info
given: $.info
message: API should declare info.version for inventory management.
description: The API should declare a version in info.version so every published
  version is inventoried and retired versions can be tracked (OWASP API9 —
  improper inventory management).
experience:
  - security
  - governance
spec:
  - info
topic: []
owasp:
  - api9
reference: https://spotlight-rules.com/spec/rules/openapi/info-owasp-api9-document-version/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-owasp-api9-document-version' (Info OWASP API9 Document
  Version). Requirement: The API should declare a version in info.version so
  every published version is inventoried and retired versions can be tracked
  (OWASP API9 — improper inventory management). To fix: Ensure `version` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  info-owasp-api9-document-version:
    title: Info OWASP API9 Document Version
    reference: https://spotlight-rules.com/spec/rules/openapi/info-owasp-api9-document-version/
    description: The API should declare a version in info.version so every published
      version is inventoried and retired versions can be tracked (OWASP API9 —
      improper inventory management).
    message: API should declare info.version for inventory management.
    given: $.info
    severity: info
    then:
      field: version
      function: truthy
    tags:
      - format:openapi
      - spec:info
      - experience:security
      - experience:governance
      - owasp:api9
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-owasp-api9-document-version' (Info OWASP API9 Document
      Version). Requirement: The API should declare a version in info.version so
      every published version is inventoried and retired versions can be tracked
      (OWASP API9 — improper inventory management). To fix: Ensure `version` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.info` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
