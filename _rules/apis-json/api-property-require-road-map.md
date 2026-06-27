---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-road-map
title: API Property Require Road Map
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Road Map
description: This property ensures there is a reference to the road map for an
  API or for the entire API operations within domain, line of business, or
  teams.
experience:
  - discoverability
  - documentation
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-road-map/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-road-map' (API Property Require Road
  Map). Requirement: This property ensures there is a reference to the road map
  for an API or for the entire API operations within domain, line of business,
  or teams. To fix: Ensure `type` does NOT match the regular expression
  `\\b(api-road-map|road-map|Roadmap|Road Map|RoadMap)\\b`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-road-map:
    title: API Property Require Road Map
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-road-map/
    description: This property ensures there is a reference to the road map for an
      API or for the entire API operations within domain, line of business, or
      teams.
    message: Has a Road Map
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-road-map|road-map|Roadmap|Road Map|RoadMap)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:discoverability
      - experience:documentation
      - experience:governance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-road-map' (API Property Require Road
      Map). Requirement: This property ensures there is a reference to the road
      map for an API or for the entire API operations within domain, line of
      business, or teams. To fix: Ensure `type` does NOT match the regular
      expression `\\b(api-road-map|road-map|Roadmap|Road Map|RoadMap)\\b`; rename
      or rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
