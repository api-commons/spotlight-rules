---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-names-title-case
title: Tag Names Title Case
severity: error
given: $.tags.*.name
message: Tag Names MUST Have First Letter in Each Word Capitalized
description: "The first letter of each word in a tag being applied to APIs needs
  to be capitalized, keeping the tags being applied across APIs the same look
  and feel for organizing and publishing to documentation. It requires the
  targeted value to match the pattern `[A-Z]\\w*` (evaluated at
  `$.tags.*.name`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - tags
source:
  - api-evangelist
builtin: false
---
