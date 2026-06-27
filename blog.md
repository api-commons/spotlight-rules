---
layout: default
nav: blog
title: Blog
description: Notes from the Spotlight Rules project — API governance for the APIs you produce and the APIs you consume.
---

<div style="max-width: 740px; margin: 0 auto;">
<h1 class="mb-2">Blog</h1>
<p class="text-muted mb-4">Notes on governing the APIs you produce — and the APIs you consume.</p>

{% for post in site.posts %}
<article class="mb-4 pb-4 border-bottom">
  <h2 class="h4 mb-1"><a href="{{ post.url }}" class="text-decoration-none">{{ post.title }}</a></h2>
  <div class="text-muted small mb-2">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
    {% if post.author %} · {{ post.author }}{% endif %}
  </div>
  {% if post.summary %}<p class="text-muted mb-1">{{ post.summary }}</p>{% endif %}
  <a href="{{ post.url }}" class="small">Read →</a>
</article>
{% endfor %}

{% if site.posts.size == 0 %}<p class="text-muted">No posts yet.</p>{% endif %}
</div>
