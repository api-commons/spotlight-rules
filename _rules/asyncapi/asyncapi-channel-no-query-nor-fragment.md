---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-no-query-nor-fragment
title: Asyncapi Channel No Query Nor Fragment
severity: warn
given: $.channels
message: ""
description: Channel path must not include query ("?") or fragment ("#") delimiter.
experience:
  - consistency
  - naming
spec:
  - channels
source: []
builtin: true
---
