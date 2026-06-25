---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: tags-require-upper-case
title: Tags Require Upper Case
severity: error
given: $.tags.*
message: Tags Upper Case
description: Maintaining consistent casing for tags applied to APIs.json
  contracts ensures a uniform appearance and enhances search and discovery. Each
  word in a tag should be capitalized, with the first letter of every word in a
  phrase treated the same way.
experience:
  - naming
  - consistency
  - discoverability
spec:
  - tags
source: []
builtin: false
---
