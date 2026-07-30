---
layout: default
nav: blog
title: Blog
description: >-
  Status notes, release announcements, and decisions in the open — the running record of a
  maintained Spectral build and the ruleset format as a standalone specification.
permalink: /blog/
---

# Blog

The running record. Status notes, release announcements, and decisions as they get made —
including the ones that turn out to be wrong.

This exists because the failure being fixed here was never really a technical one. It was a
communication failure: issues nobody answered, releases nobody explained, and a format whose
rules lived in a source tree that outsiders had to read to understand. The correction for that
is to over-communicate, on a schedule, in public.

<p class="small text-muted">
  Subscribe via <a href="/feed.xml">RSS</a>. Decisions get argued in
  <a href="{{ site.discussion }}">the discussion</a>; work happens in the
  <a href="{{ site.repo_cli }}/issues">spectral-cli</a> and
  <a href="{{ site.repo_rules }}/issues">spectral-rules</a> issues.
</p>

---

<div class="row g-4 mt-1">
{% for post in site.posts %}
  <div class="col-md-6">
    <div class="card shadow-sm">
      <div class="card-body d-flex flex-column">
        <p class="text-muted small mb-1">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
        </p>
        <h5 class="card-title"><a href="{{ post.url }}" class="text-decoration-none">{{ post.title }}</a></h5>
        <p class="card-text flex-grow-1 small">{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
        <p class="mb-0"><a href="{{ post.url }}" class="small">Read it →</a></p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<p class="text-muted">Nothing published yet.</p>
{% endif %}
