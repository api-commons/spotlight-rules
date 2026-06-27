---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-include-business-impact-canvas
title: Document Include Business Impact Canvas
severity: info
given: $.common.*
message: Has APIOps Cycles Business Impact Canvas
description: This ensures that an API has had the APIOps Business Impact Canvas
  applied to the API, requiring that the canvas is present in the repository and
  registered in the APIs.json index for the API, helping with discovery and
  governance.
experience:
  - governance
  - documentation
spec:
  - collection
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-include-business-impact-canvas/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-include-business-impact-canvas' (Document Include
  Business Impact Canvas). Requirement: This ensures that an API has had the
  APIOps Business Impact Canvas applied to the API, requiring that the canvas is
  present in the repository and registered in the APIs.json index for the API,
  helping with discovery and governance. To fix: Ensure `type` does NOT match
  the regular expression `\\b(APIOpsBusinessImpactCanvas)\\b`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath `$.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-include-business-impact-canvas:
    title: Document Include Business Impact Canvas
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-include-business-impact-canvas/
    description: This ensures that an API has had the APIOps Business Impact Canvas
      applied to the API, requiring that the canvas is present in the repository
      and registered in the APIs.json index for the API, helping with discovery
      and governance.
    message: Has APIOps Cycles Business Impact Canvas
    severity: info
    given:
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(APIOpsBusinessImpactCanvas)\b
    tags:
      - format:apis-json
      - spec:collection
      - experience:governance
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-include-business-impact-canvas' (Document Include
      Business Impact Canvas). Requirement: This ensures that an API has had the
      APIOps Business Impact Canvas applied to the API, requiring that the canvas
      is present in the repository and registered in the APIs.json index for the
      API, helping with discovery and governance. To fix: Ensure `type` does NOT
      match the regular expression `\\b(APIOpsBusinessImpactCanvas)\\b`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
