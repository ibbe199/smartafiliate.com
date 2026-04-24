# تقرير المقالات التي تحتاج صورًا

هذا التقرير يعتمد على خريطة الصور الحالية في `site.js` وعلى روابط المقالات الموجودة في `sitemap.xml`.

## الحالة العامة

- الصور الحالية المربوطة فعليًا: `assets/images/image_01.jpg` إلى `assets/images/image_28.jpg`
- لا يوجد توليد تلقائي للصور داخل الموقع.
- المقالات أدناه تحتاج صورًا منفصلة حقيقية تُرفع إلى المستودع ثم تُربط في `site.js`.

## مقالات تحتاج صورًا

| # | المقال | الرابط المقترح | اسم صورة مقترح |
|---|---|---|---|
| 1 | الذكاء الاصطناعي وبناء البراند الشخصي | `posts-ai/27-ai-and-personal-brand.html` | `ai-personal-brand.jpg` |
| 2 | نشرات الذكاء الاصطناعي | `posts-ai/28-ai-newsletters.html` | `ai-newsletters.jpg` |
| 3 | أتمتة الإنتاجية بالذكاء الاصطناعي | `posts-ai/ai-automation-productivity.html` | `ai-automation-productivity.jpg` |
| 4 | التصميم بالذكاء الاصطناعي للسوشيال ميديا | `posts-ai/ai-design-for-social-media.html` | `ai-design-social-media.jpg` |
| 5 | مجتمعات تعلم الذكاء الاصطناعي | `posts-ai/ai-learning-communities.html` | `ai-learning-communities.jpg` |
| 6 | تصميم الشعارات بالذكاء الاصطناعي | `posts-ai/ai-logo-design-guide.html` | `ai-logo-design.jpg` |
| 7 | مشاريع ذكاء اصطناعي للمبتدئين | `posts-ai/ai-projects-for-beginners.html` | `ai-projects-beginners.jpg` |
| 8 | أفضل أدوات تصميم AI | `posts-ai/best-ai-design-tools.html` | `best-ai-design-tools.jpg` |
| 9 | أفضل كتب تعلم الذكاء الاصطناعي | `posts-ai/best-books-to-learn-ai.html` | `best-ai-books.jpg` |
| 10 | مراجعة Copy.ai | `posts-ai/copyai-review.html` | `copyai-review.jpg` |
| 11 | دليل Falcon | `posts-ai/falcon-guide.html` | `falcon-guide.jpg` |
| 12 | كورسات AI مجانية بالعربية | `posts-ai/free-ai-courses-arabic.html` | `free-ai-courses-arabic.jpg` |
| 13 | مستقبل الأتمتة بالذكاء الاصطناعي | `posts-ai/future-of-ai-automation.html` | `future-ai-automation.jpg` |
| 14 | أحدث استخدامات الأتمتة بالذكاء الاصطناعي | `posts-ai/latest-ai-automation-uses.html` | `latest-ai-automation-uses.jpg` |
| 15 | نصائح تعلم الذكاء الاصطناعي | `posts-ai/learning-tips-for-ai.html` | `ai-learning-tips.jpg` |
| 16 | دليل Llama 3 | `posts-ai/llama3-guide.html` | `llama3-guide.jpg` |
| 17 | الرياضيات للمبتدئين في AI | `posts-ai/math-for-ai-beginners.html` | `math-for-ai-beginners.jpg` |
| 18 | دليل Mistral | `posts-ai/mistral-guide.html` | `mistral-guide.jpg` |
| 19 | دليل Ollama | `posts-ai/ollama-guide.html` | `ollama-guide.jpg` |
| 20 | Python للمبتدئين في AI | `posts-ai/python-for-ai-beginners.html` | `python-for-ai-beginners.jpg` |
| 21 | هندسة النمو في TikTok | `posts-ai/tiktok-growth-engineering.html` | `tiktok-growth-engineering.jpg` |
| 22 | ما هو الذكاء الاصطناعي للمبتدئين | `posts-ai/what-is-ai-beginners.html` | `what-is-ai-beginners.jpg` |
| 23 | الذكاء المدفوع والمجاني ومفتوح المصدر | `articles/paid-vs-free-vs-open-source-ai.html` | `paid-free-open-source-ai.jpg` |

## العدد

**إجمالي المقالات التي تحتاج صورًا فعلية: 23 مقالًا**

## الخطوة التالية المقترحة

1. إنشاء 23 صورة منفصلة بمقاس 1200×675.
2. رفعها إلى:

```text
/assets/images/
```

3. إضافة الربط داخل `ARTICLE_IMAGE_MAP` في `site.js`.

## ملاحظة

هذا التقرير لا يضيف صورًا تلقائية داخل الموقع ولا يستخدم SVG مولدًا من السكربت. هو فقط قائمة عمل للصور التي ينبغي إنشاؤها كملفات حقيقية.
