---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-no-query-nor-fragment
title: Asyncapi Channel No Query Nor Fragment
severity: info
given: $.channels
message: Channel path must not include query ("?") or fragment ("#") delimiter.
description: Channel path must not include query ("?") or fragment ("#") delimiter.
experience:
  - consistency
  - naming
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-no-query-nor-fragment/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-channel-no-query-nor-fragment' (Asyncapi Channel No
  Query Nor Fragment). Requirement: Channel path must not include query (\"?\")
  or fragment (\"#\") delimiter. To fix: Ensure `@key` does NOT match the
  regular expression `[\\?#]`; rename or rewrite any value that does. This rule
  is evaluated at the JSONPath `$.channels` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
