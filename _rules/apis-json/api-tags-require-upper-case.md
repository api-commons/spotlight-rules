---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-tags-require-upper-case
title: API Tags Require Upper Case
severity: error
given: $.apis.*.tags.*
message: API Tags MUST Be Upper Case
description: Maintaining consistent casing for tags applied to individual APIs
  ensures a uniform appearance and enhances search and discovery. Each word in a
  tag should be capitalized, with the first letter of every word in a phrase
  treated the same way.
experience:
  - naming
  - consistency
  - discoverability
spec:
  - apis
  - tags
source: []
builtin: false
---
