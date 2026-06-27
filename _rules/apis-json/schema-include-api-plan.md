---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-api-plan
title: Schema Include API Plan
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Plans
description: This property provides a link to the dedicated plans page that
  applies to an API, providing information about access tiers, rate limits, and
  features available for an API as part of a wider API business plan.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-api-plan/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-api-plan' (Schema Include API Plan).
  Requirement: This property provides a link to the dedicated plans page that
  applies to an API, providing information about access tiers, rate limits, and
  features available for an API as part of a wider API business plan. To fix:
  Ensure `type` does NOT match the regular expression `\\b(api-plans|Plans)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-api-plan:
    title: Schema Include API Plan
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-api-plan/
    description: This property provides a link to the dedicated plans page that
      applies to an API, providing information about access tiers, rate limits,
      and features available for an API as part of a wider API business plan.
    message: Has API Plans
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-plans|Plans)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-api-plan' (Schema Include API Plan).
      Requirement: This property provides a link to the dedicated plans page that
      applies to an API, providing information about access tiers, rate limits,
      and features available for an API as part of a wider API business plan. To
      fix: Ensure `type` does NOT match the regular expression
      `\\b(api-plans|Plans)\\b`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
