---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-include-capacity-canvas
title: Document Include Capacity Canvas
severity: info
given: $.common.*
message: Has APIOps Cycles Capacity Canvas
description: This ensures that an API has had the APIOps Capacity Canvas applied
  to the API, requiring that the canvas is present in the repository and
  registered in the APIs.json index for the API, helping with discovery and
  governance.
experience:
  - governance
  - documentation
spec:
  - collection
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-include-capacity-canvas/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-include-capacity-canvas' (Document Include Capacity
  Canvas). Requirement: This ensures that an API has had the APIOps Capacity
  Canvas applied to the API, requiring that the canvas is present in the
  repository and registered in the APIs.json index for the API, helping with
  discovery and governance. To fix: Ensure `type` does NOT match the regular
  expression `\\b(APIOpsCapacityCanvas)\\b`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
---
