---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-message-messageId-uniqueness
title: Asyncapi Message MessageId Uniqueness
severity: info
given: $
message: '"messageId" must be unique across all the messages.'
description: '"messageId" must be unique across all the messages.'
experience:
  - consistency
  - naming
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-message-messageId-uniqueness/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-message-messageId-uniqueness' (Asyncapi Message
  MessageId Uniqueness). Requirement: \"messageId\" must be unique across all
  the messages. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
