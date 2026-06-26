---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: component-asyncapi-message-require-contenttype
title: Component Asyncapi Message Require Contenttype
severity: info
given: $.components.messages[*]
message: Message should declare a contentType.
description: Messages should declare a contentType (e.g. application/json).
experience:
  - consistency
  - data-modeling
spec:
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-contenttype/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'component-asyncapi-message-require-contenttype' (Component
  Asyncapi Message Require Contenttype). Requirement: Messages should declare a
  contentType (e.g. application/json). To fix: Ensure `contentType` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.components.messages[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
