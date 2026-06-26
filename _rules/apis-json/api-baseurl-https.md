---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-baseurl-https
title: API Baseurl HTTPS
severity: info
given: $.apis[*].baseURL
message: API baseURL should use https.
description: Each API baseURL should be an https URL.
experience:
  - security
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-baseurl-https/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-baseurl-https' (API Baseurl HTTPS). Requirement: Each API
  baseURL should be an https URL. To fix: Ensure the targeted value matches the
  regular expression `^https://`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.apis[*].baseURL` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
---
