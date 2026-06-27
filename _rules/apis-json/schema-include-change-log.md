---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-change-log
title: Schema Include Change Log
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Change Log
description: This property ensures that than an individual API or API operations
  possesses a change log that catalogs all the changes that have occurred in a
  recent time frame, with historical and version information available if
  possible.
experience:
  - versioning
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-change-log/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-change-log' (Schema Include Change Log).
  Requirement: This property ensures that than an individual API or API
  operations possesses a change log that catalogs all the changes that have
  occurred in a recent time frame, with historical and version information
  available if possible. To fix: Ensure `type` does NOT match the regular
  expression `\\b(api-change-log|change-log|Change Log|Changelog|ChangeLog)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-change-log:
    title: Schema Include Change Log
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-change-log/
    description: This property ensures that than an individual API or API operations
      possesses a change log that catalogs all the changes that have occurred in a
      recent time frame, with historical and version information available if
      possible.
    message: Has Change Log
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-change-log|change-log|Change Log|Changelog|ChangeLog)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:versioning
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-change-log' (Schema Include Change Log).
      Requirement: This property ensures that than an individual API or API
      operations possesses a change log that catalogs all the changes that have
      occurred in a recent time frame, with historical and version information
      available if possible. To fix: Ensure `type` does NOT match the regular
      expression `\\b(api-change-log|change-log|Change
      Log|Changelog|ChangeLog)\\b`; rename or rewrite any value that does. This
      rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
