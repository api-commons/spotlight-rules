---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-postman-public-workspace
title: Schema Include Postman Public Workspace
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Public Postman Workspace
description: This property ensures that an API is associated with a Postman
  Workspace, providing a single location that API producers and/or API consumers
  can engage around an API.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-postman-public-workspace/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-postman-public-workspace' (Schema Include
  Postman Public Workspace). Requirement: This property ensures that an API is
  associated with a Postman Workspace, providing a single location that API
  producers and/or API consumers can engage around an API. To fix: Ensure `type`
  does NOT match the regular expression
  `\\b(postman-public-workspace|PostmanPublicWorkspace|PostmanWorkspace)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
