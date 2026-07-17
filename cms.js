/* =========================================================================
   THE POTTER'S WHEEL — CMS ENGINE
   Shared by index.html (renders content) and admin.html (edits content).

   HOW CONTENT FLOWS
   1. On a real host (Netlify, GitHub Pages, cPanel, etc.) content.json sits
      next to index.html and is loaded with fetch(). This is the file the
      Admin page's "Export content.json" button produces -- replace the old
      one on your server with the new download and the live site updates.
   2. Inside a live editing session (e.g. this chat, or any environment that
      supports it) window.storage is used as a convenience layer so changes
      made in Admin show up on the site immediately, without exporting every
      time.
   3. DEFAULT_CONTENT below is a last-resort fallback so the site never
      breaks even if neither of the above is available.
   ========================================================================= */

const CMS_STORAGE_KEY = "potters-wheel:content";

const DEFAULT_CONTENT = {
  "sermons": [
    {
      "id": "s1",
      "type": "video",
      "typeLabel": "Video",
      "category": "Identity in Christ",
      "title": "Who Does God Say You Are?",
      "description": "A foundational teaching on discovering your true identity through Scripture rather than circumstance.",
      "duration": "38 min",
      "meta": "Series \u00b7 Part 1",
      "videoUrl": "",
      "date": "2026-06-14"
    },
    {
      "id": "s2",
      "type": "short",
      "typeLabel": "Short",
      "category": "Encouragement",
      "title": "When the Wheel Feels Too Slow",
      "description": "A quick word for the season when God's timing feels delayed but His hands are still at work.",
      "duration": "6 min",
      "meta": "Standalone",
      "videoUrl": "",
      "date": "2026-06-21"
    },
    {
      "id": "s3",
      "type": "study",
      "typeLabel": "Bible Study",
      "category": "Purpose",
      "title": "Jeremiah 18 \u2014 The Potter's House",
      "description": "A verse-by-verse walkthrough of the passage that shaped this ministry's entire message.",
      "duration": "52 min",
      "meta": "Study Series",
      "videoUrl": "",
      "date": "2026-06-28"
    },
    {
      "id": "s4",
      "type": "video",
      "typeLabel": "Video",
      "category": "Prayer",
      "title": "Praying with Confidence, Not Fear",
      "description": "Understanding your access to God and how to approach Him boldly as a beloved child.",
      "duration": "41 min",
      "meta": "Series \u00b7 Part 2",
      "videoUrl": "",
      "date": "2026-07-05"
    },
    {
      "id": "s5",
      "type": "short",
      "typeLabel": "Short",
      "category": "Faith",
      "title": "Faith Is Not the Absence of Fear",
      "description": "A short, direct word on choosing obedience even while the fear is still present.",
      "duration": "8 min",
      "meta": "Standalone",
      "videoUrl": "",
      "date": "2026-07-10"
    },
    {
      "id": "s6",
      "type": "study",
      "typeLabel": "Bible Study",
      "category": "Christian Living",
      "title": "Walking in the Spirit, Daily",
      "description": "A practical study on what it means to be led by the Spirit in ordinary, everyday decisions.",
      "duration": "47 min",
      "meta": "Study Series",
      "videoUrl": "",
      "date": "2026-07-14"
    }
  ],
  "devotionals": [
    {
      "id": "d1",
      "date": "2026-07-16",
      "verseText": "Before I formed you in the womb I knew you, before you were born I set you apart.",
      "verseRef": "JEREMIAH 1:5",
      "title": "You Were Known Before You Were Formed",
      "reflection": "Long before your first breath, God had already written your story. He didn't discover your worth after you achieved something \u2014 He established it before you could do anything at all. Whatever this season feels like, it is not evidence that God is absent; it's evidence that He's still forming what He already knows the end of.",
      "prayer": "Father, thank You for knowing me before I knew myself. Help me trust Your hands even when I cannot see the shape You're forming. Remind me today that I am not an accident, but a work You are lovingly completing. In Jesus' name, Amen."
    },
    {
      "id": "d2",
      "date": "2026-07-09",
      "verseText": "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
      "verseRef": "JEREMIAH 29:11",
      "title": "The Plan Was Never in Question",
      "reflection": "It is easy to read this promise and still feel unsure whether it applies to your specific mess. But God's plans were never made in response to your tidiness \u2014 they were made in response to His love. The delay you feel is not a denial of the plan; it's the unfolding of it.",
      "prayer": "Lord, when my circumstances contradict Your promises, help me hold on to Your word above my feelings. Thank You for a future that is secure in Your hands. Amen."
    },
    {
      "id": "d3",
      "date": "2026-07-02",
      "verseText": "He has made everything beautiful in its time.",
      "verseRef": "ECCLESIASTES 3:11",
      "title": "Beautiful, In Its Time",
      "reflection": "Not yet \u2014 but in its time. God is not indifferent to your timeline, but He is not bound by it either. What looks unfinished today is being prepared for a beauty that only comes with time on the wheel.",
      "prayer": "Father, give me patience to wait for Your timing and faith to trust Your process. I release my need to rush what You are still forming. Amen."
    },
    {
      "id": "d4",
      "date": "2026-06-25",
      "verseText": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "verseRef": "ROMANS 8:28",
      "title": "Even This Is Being Worked",
      "reflection": "This verse doesn't promise that all things are good \u2014 it promises that God works within all things toward good. The pain is real. The disappointment is real. But it is not the final word; it is raw material in the Potter's hands.",
      "prayer": "Lord, I don't understand everything happening around me, but I trust that You are working even here. Help me see Your hand where I only see hardship. Amen."
    }
  ],
  "articles": [
    {
      "id": "a1",
      "category": "faith",
      "categoryLabel": "Faith",
      "title": "What Real Faith Looks Like When Prayers Aren't Answered Yet",
      "excerpt": "Holding on to God's character when His timing doesn't match your calendar.",
      "readTime": "6 min read",
      "date": "2026-07-11"
    },
    {
      "id": "a2",
      "category": "purpose",
      "categoryLabel": "Purpose",
      "title": "Discovering Purpose Without Rushing the Process",
      "excerpt": "Why purpose is often revealed in seasons, not in a single dramatic moment.",
      "readTime": "7 min read",
      "date": "2026-07-04"
    },
    {
      "id": "a3",
      "category": "prayer",
      "categoryLabel": "Prayer",
      "title": "A Simple Framework for a Consistent Prayer Life",
      "excerpt": "Practical structure for people who want to pray more but don't know where to start.",
      "readTime": "5 min read",
      "date": "2026-06-27"
    },
    {
      "id": "a4",
      "category": "living",
      "categoryLabel": "Christian Living",
      "title": "Living Out Your Faith Monday to Saturday",
      "excerpt": "What it means to carry Sunday's truth into the ordinary days of the week.",
      "readTime": "8 min read",
      "date": "2026-06-20"
    },
    {
      "id": "a5",
      "category": "growth",
      "categoryLabel": "Spiritual Growth",
      "title": "Signs You Are Growing, Even When It Doesn't Feel Like It",
      "excerpt": "Spiritual maturity often looks quieter \u2014 and slower \u2014 than we expect.",
      "readTime": "6 min read",
      "date": "2026-06-13"
    },
    {
      "id": "a6",
      "category": "faith",
      "categoryLabel": "Faith",
      "title": "Trusting the Potter When You Don't Understand the Design",
      "excerpt": "Learning to release control and trust the hands shaping your story.",
      "readTime": "6 min read",
      "date": "2026-06-06"
    }
  ]
};

/* Detect whether a compatible browser storage API is present */
function cmsHasWindowStorage(){
  return typeof window !== "undefined" && (
    (window.storage && typeof window.storage.get === "function") ||
    (typeof window.localStorage !== "undefined")
  );
}

async function cmsReadStoredContent(){
  if (typeof window !== "undefined" && window.storage && typeof window.storage.get === "function"){
    try{
      const result = await window.storage.get(CMS_STORAGE_KEY, false);
      if (result && result.value){
        return JSON.parse(result.value);
      }
    }catch(err){
      /* key not found or storage error -- fall through to browser fallback */
    }
  }

  if (typeof window !== "undefined" && window.localStorage){
    try{
      const raw = window.localStorage.getItem(CMS_STORAGE_KEY);
      if (raw){
        return JSON.parse(raw);
      }
    }catch(err){
      /* localStorage error -- fall through */
    }
  }

  return null;
}

async function cmsWriteStoredContent(data){
  if (typeof window !== "undefined" && window.storage && typeof window.storage.set === "function"){
    try{
      const result = await window.storage.set(CMS_STORAGE_KEY, JSON.stringify(data), false);
      return { ok: !!result };
    }catch(err){
      /* fall through to localStorage */
    }
  }

  if (typeof window !== "undefined" && window.localStorage){
    try{
      window.localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
      return { ok: true };
    }catch(err){
      return { ok:false, reason:"error", error:err };
    }
  }

  return { ok:false, reason:"no-storage" };
}

/* Load content with priority: browser storage -> content.json (fetch) -> DEFAULT_CONTENT */
async function cmsLoadContent(){
  const stored = await cmsReadStoredContent();
  if (stored){
    return { data: stored, source: "storage" };
  }

  try{
    const res = await fetch("content.json", { cache: "no-store" });
    if (res.ok){
      const json = await res.json();
      return { data: json, source: "file" };
    }
  }catch(err){
    /* fetch blocked (e.g. opened via double-click / file://) -- fall through */
  }
  return { data: DEFAULT_CONTENT, source: "fallback" };
}

/* Persist content to browser storage when available (no-op elsewhere) */
async function cmsSaveContent(data){
  return cmsWriteStoredContent(data);
}

/* Trigger a browser download of the current content as content.json */
function cmsDownloadJSON(data, filename){
  filename = filename || "content.json";
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* Read a File (from <input type="file">) as parsed JSON */
function cmsReadJSONFile(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try{ resolve(JSON.parse(reader.result)); }
      catch(err){ reject(err); }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

function cmsUid(prefix){
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
}

function cmsEscapeHTML(str){
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}
