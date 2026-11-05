# content.md: Metro Dental BD Website Copy

All user-facing text for the site, in English (EN) and Bangla (BN). Put this text into `src/i18n/en.json`, `src/i18n/bn.json`, and the files in `src/data/`. Do not write your own text for the site or change the claims here.

## Rules for using this file

- Do **not** invent prices, qualifications, years of experience, awards, patient numbers, success rates, or technology names. If it is not in this file, use a placeholder.
- Anything in `[TODO: ...]` is information the clinic owner must supply. Keep the placeholder visible in the data file and list it in your final message.
- The Bangla text is a first draft. A native speaker must review it before launch, especially medical wording and the spelling of names.
- Tone: friendly, simple, reassuring. Short sentences. No fear-based wording. No guarantees of results.
- Where the text says "the clinic", use the clinic name only in headings, the footer, and the SEO text.

## Facts to confirm before launch

| Item | Status |
|---|---|
| Dr. Mustak's full name, title, and qualifications | [TODO] |
| Bangla spelling of the name (draft uses ডাঃ মুস্তাক) | [TODO: confirm] |
| Opening hours | [TODO] |
| Real patient reviews and permission to publish | [TODO] |
| Whether a free consultation or any offer is available | [TODO: the offer banner stays hidden until confirmed] |
| Treatments actually offered (the list below is a starting point) | [TODO: confirm] |
| Facebook / Instagram / Google Maps links | [TODO] |

---

## 1. Clinic Info (src/data/clinic.js)

| Field | Value |
|---|---|
| Name | Metro Dental BD |
| Name (BN) | মেট্রো ডেন্টাল বিডি |
| Dentist | Dr. Mustak / ডাঃ মুস্তাক |
| Phone | 01716374977 |
| WhatsApp number | 8801716374977 |
| Address (EN) | 59 Kazi Alauddin Rd, Bangshal, Dhaka 1100, Bangladesh |
| Address (BN) | ৫৯ কাজী আলাউদ্দিন রোড, বংশাল, ঢাকা ১১০০, বাংলাদেশ |
| Landmarks (EN) | Beside Beauty Lacchi and Alom Khan Tea |
| Landmarks (BN) | বিউটি লাচ্ছি ও আলম খান টি-এর পাশে |
| Hours | [TODO] |

---

## 2. Navigation and Global Buttons

| Key | EN | BN |
|---|---|---|
| nav.home | Home | হোম |
| nav.about | About | আমাদের সম্পর্কে |
| nav.services | Services | সেবাসমূহ |
| nav.problems | Problems We Treat | যেসব সমস্যার চিকিৎসা করি |
| nav.newPatients | New Patients | নতুন রোগী |
| nav.contact | Contact | যোগাযোগ |
| btn.book | Book Appointment | অ্যাপয়েন্টমেন্ট নিন |
| btn.call | Call Now | এখনই কল করুন |
| btn.whatsapp | WhatsApp Us | হোয়াটসঅ্যাপে মেসেজ করুন |
| btn.directions | Get Directions | রাস্তার দিকনির্দেশনা |
| btn.learnMore | Learn more | আরও জানুন |
| btn.viewAll | View all services | সব সেবা দেখুন |
| lang.toggle | বাংলা (shows on English) / English (shows on Bangla) | |

---

## 3. Home Page

### Hero
| Key | EN | BN |
|---|---|---|
| hero.title | Healthy smiles, gentle care in Bangshal, Dhaka | বংশাল, ঢাকায় সুস্থ হাসি ও যত্নশীল চিকিৎসা |
| hero.subtitle | Dental implants, braces, and complete family dental care with Dr. Mustak. | ডাঃ মুস্তাকের তত্ত্বাবধানে ডেন্টাল ইমপ্লান্ট, ব্রেসেস ও পরিবারের সম্পূর্ণ দাঁতের যত্ন। |
| hero.primary | Book Appointment | অ্যাপয়েন্টমেন্ট নিন |
| hero.secondary | Call 01716374977 | কল করুন ০১৭১৬৩৭৪৯৭৭ |

### Trust strip
| Key | EN | BN |
|---|---|---|
| trust.1.title | Focused on implants and braces | ইমপ্লান্ট ও ব্রেসেসে বিশেষ মনোযোগ |
| trust.1.text | Two treatments we are known for. | যে দুটি চিকিৎসার জন্য আমরা পরিচিত। |
| trust.2.title | Clear explanations | সহজ ভাষায় ব্যাখ্যা |
| trust.2.text | We explain your options before any treatment. | চিকিৎসার আগে সব বিকল্প বুঝিয়ে বলা হয়। |
| trust.3.title | Clean and comfortable clinic | পরিচ্ছন্ন ও আরামদায়ক ক্লিনিক |
| trust.3.text | A calm space for the whole family. | পুরো পরিবারের জন্য শান্ত পরিবেশ। |
| trust.4.title | Easy to find | সহজে খুঁজে পাওয়া যায় |
| trust.4.text | In Bangshal, beside Beauty Lacchi and Alom Khan Tea. | বংশালে, বিউটি লাচ্ছি ও আলম খান টি-এর পাশে। |

### Meet the dentist
| Key | EN | BN |
|---|---|---|
| doctor.heading | Meet Dr. Mustak | ডাঃ মুস্তাকের সাথে পরিচিত হোন |
| doctor.text | Dr. Mustak looks after every patient at Metro Dental BD. He focuses on dental implants and braces care, and takes time to explain each step so you feel comfortable. | মেট্রো ডেন্টাল বিডি-তে ডাঃ মুস্তাক প্রতিটি রোগীর যত্ন নেন। তিনি ডেন্টাল ইমপ্লান্ট ও ব্রেসেস চিকিৎসায় বিশেষ মনোযোগ দেন এবং প্রতিটি ধাপ বুঝিয়ে বলেন, যাতে আপনি স্বস্তি বোধ করেন। |
| doctor.qualifications | [TODO: degrees, training, memberships] | [TODO] |
| doctor.cta | Book a visit with Dr. Mustak | ডাঃ মুস্তাকের সাথে অ্যাপয়েন্টমেন্ট নিন |

### Featured treatments
| Key | EN | BN |
|---|---|---|
| featured.heading | Our Specialties | আমাদের বিশেষ চিকিৎসা |
| featured.implant.title | Dental Implants | ডেন্টাল ইমপ্লান্ট |
| featured.implant.text | A long-lasting way to replace missing teeth, so you can eat, speak, and smile with confidence. | হারানো দাঁত প্রতিস্থাপনের একটি দীর্ঘস্থায়ী উপায়, যাতে আপনি আত্মবিশ্বাসের সাথে খেতে, কথা বলতে ও হাসতে পারেন। |
| featured.braces.title | Braces Care | ব্রেসেস চিকিৎসা |
| featured.braces.text | Straighter teeth and a better bite, with a treatment plan made for you. | সোজা দাঁত ও ভালো কামড়ের জন্য আপনার উপযোগী চিকিৎসা পরিকল্পনা। |

### More services (grid heading)
| Key | EN | BN |
|---|---|---|
| services.heading | Complete Dental Care | সম্পূর্ণ দাঁতের যত্ন |
| services.subtitle | From routine check-ups to restorative treatment, all in one clinic. | নিয়মিত চেকআপ থেকে শুরু করে দাঁত মেরামত, সবকিছু এক ক্লিনিকে। |

### Comfort and technology (editable placeholders)
| Key | EN | BN |
|---|---|---|
| comfort.heading | Your comfort comes first | আপনার স্বাচ্ছন্দ্যই আমাদের অগ্রাধিকার |
| comfort.1.title | Gentle approach | কোমল ব্যবহার |
| comfort.1.text | We go at your pace and tell you what to expect. | আমরা আপনার সুবিধামতো এগোই এবং কী হবে তা আগেই জানিয়ে দিই। |
| comfort.2.title | Hygiene you can trust | নির্ভরযোগ্য পরিচ্ছন্নতা |
| comfort.2.text | [TODO: describe sterilization practices the clinic actually follows] | [TODO] |
| comfort.3.title | Modern equipment | আধুনিক যন্ত্রপাতি |
| comfort.3.text | [TODO: name the equipment the clinic actually uses] | [TODO] |

### Offer banner (hidden until the clinic confirms an offer)
| Key | EN | BN |
|---|---|---|
| offer.title | [TODO: offer name, for example "Free first consultation"] | [TODO] |
| offer.text | [TODO: one sentence with conditions] | [TODO] |
| offer.cta | Book Appointment | অ্যাপয়েন্টমেন্ট নিন |

### Reviews
| Key | EN | BN |
|---|---|---|
| reviews.heading | What our patients say | রোগীরা যা বলছেন |
| reviews.placeholder | [TODO: add 4 to 5 real reviews with permission. Mark any sample text as PLACEHOLDER in the data file and remove it before launch.] | [TODO] |
| reviews.link | Read more reviews on Google | গুগলে আরও রিভিউ পড়ুন |

### FAQ (home page shows these 6; each also appears on related service pages)
| # | EN question | EN answer |
|---|---|---|
| 1 | What is a dental implant? | A dental implant is a small post placed in the jawbone to replace the root of a missing tooth. A crown is then fitted on top so it looks and works like a natural tooth. |
| 2 | Is dental treatment painful? | Dentists use local anesthesia so you should not feel pain during treatment. Some soreness afterward is normal and Dr. Mustak will explain how to manage it. |
| 3 | How long does braces treatment take? | It depends on your teeth and the type of braces. Dr. Mustak will examine you and give an estimate at your first visit. |
| 4 | How much does treatment cost? | Cost depends on the treatment you need. Call us or message on WhatsApp and we will explain the cost after understanding your needs. |
| 5 | Do I need an appointment? | Appointments are best because they save your time. Call 01716374977 or send us a WhatsApp message to book. |
| 6 | Where is the clinic? | We are at 59 Kazi Alauddin Rd, Bangshal, Dhaka 1100, beside Beauty Lacchi and Alom Khan Tea. |

| # | BN প্রশ্ন | BN উত্তর |
|---|---|---|
| 1 | ডেন্টাল ইমপ্লান্ট কী? | ডেন্টাল ইমপ্লান্ট হলো চোয়ালের হাড়ে বসানো একটি ছোট স্ক্রু, যা হারানো দাঁতের গোড়ার কাজ করে। এর ওপর ক্রাউন লাগানো হয়, ফলে দাঁতটি দেখতে ও কাজে প্রাকৃতিক দাঁতের মতো হয়। |
| 2 | দাঁতের চিকিৎসায় কি ব্যথা হয়? | চিকিৎসার সময় লোকাল অ্যানেস্থেশিয়া দেওয়া হয়, তাই সাধারণত ব্যথা অনুভব হয় না। পরে সামান্য অস্বস্তি হতে পারে, এবং ডাঃ মুস্তাক তা কীভাবে সামলাবেন তা বুঝিয়ে বলবেন। |
| 3 | ব্রেসেস চিকিৎসায় কত সময় লাগে? | এটি আপনার দাঁতের অবস্থা ও ব্রেসেসের ধরনের ওপর নির্ভর করে। প্রথম ভিজিটে ডাঃ মুস্তাক পরীক্ষা করে আনুমানিক সময় জানাবেন। |
| 4 | চিকিৎসার খরচ কত? | খরচ নির্ভর করে আপনার প্রয়োজনীয় চিকিৎসার ওপর। আমাদের কল করুন বা হোয়াটসঅ্যাপে মেসেজ দিন, আপনার সমস্যা বুঝে আমরা খরচ জানাব। |
| 5 | অ্যাপয়েন্টমেন্ট কি লাগবে? | অ্যাপয়েন্টমেন্ট নিয়ে এলে আপনার সময় বাঁচে। ০১৭১৬৩৭৪৯৭৭ নম্বরে কল করুন বা হোয়াটসঅ্যাপে মেসেজ দিন। |
| 6 | ক্লিনিকটি কোথায়? | ৫৯ কাজী আলাউদ্দিন রোড, বংশাল, ঢাকা ১১০০, বিউটি লাচ্ছি ও আলম খান টি-এর পাশে। |

### Location section
| Key | EN | BN |
|---|---|---|
| location.heading | Visit us in Bangshal | বংশালে আমাদের ক্লিনিকে আসুন |
| location.hours | Opening hours | খোলার সময় |
| location.hoursValue | [TODO] | [TODO] |

### Final call to action
| Key | EN | BN |
|---|---|---|
| cta.title | Ready for a healthier smile? | সুস্থ হাসির জন্য প্রস্তুত? |
| cta.text | Call us or send a WhatsApp message and we will find a time that suits you. | আমাদের কল করুন বা হোয়াটসঅ্যাপে মেসেজ দিন, আমরা আপনার সুবিধামতো সময় ঠিক করব। |

### Footer
| Key | EN | BN |
|---|---|---|
| footer.about | Metro Dental BD provides dental implants, braces care, and general dental treatment in Bangshal, Dhaka. | মেট্রো ডেন্টাল বিডি বংশাল, ঢাকায় ডেন্টাল ইমপ্লান্ট, ব্রেসেস ও সাধারণ দাঁতের চিকিৎসা দেয়। |
| footer.copyright | © 2026 Metro Dental BD. All rights reserved. | © ২০২৬ মেট্রো ডেন্টাল বিডি। সর্বস্বত্ব সংরক্ষিত। |

---

## 4. About Page

| Key | EN | BN |
|---|---|---|
| about.title | About Metro Dental BD | মেট্রো ডেন্টাল বিডি সম্পর্কে |
| about.intro | Metro Dental BD is a dental clinic in Bangshal, Dhaka, managed by Dr. Mustak. We focus on dental implants and braces care, and we also offer general dental treatment for the whole family. | মেট্রো ডেন্টাল বিডি বংশাল, ঢাকার একটি ডেন্টাল ক্লিনিক, যার দায়িত্বে আছেন ডাঃ মুস্তাক। আমরা ডেন্টাল ইমপ্লান্ট ও ব্রেসেস চিকিৎসায় বিশেষ মনোযোগ দিই, পাশাপাশি পুরো পরিবারের জন্য সাধারণ দাঁতের চিকিৎসাও করি। |
| about.approach.title | How we care for you | আমরা যেভাবে আপনার যত্ন নিই |
| about.approach.1 | We listen first and examine carefully. | আমরা আগে আপনার কথা শুনি এবং মনোযোগ দিয়ে পরীক্ষা করি। |
| about.approach.2 | We explain your options in simple words. | আমরা সহজ ভাষায় আপনার বিকল্পগুলো বুঝিয়ে বলি। |
| about.approach.3 | You decide, and we plan treatment with you. | সিদ্ধান্ত আপনার, আর আমরা আপনার সাথে মিলে চিকিৎসা পরিকল্পনা করি। |
| about.story | [TODO: clinic story, when it started, what the clinic believes in] | [TODO] |

---

## 5. Services (src/data/services.js)

Confirm with the clinic that each service is actually offered. Every service page uses the same template: intro, who it is for, how it works, benefits, FAQs, Book button.

### 5.1 Dental Implants (slug: `dental-implant`, featured)

| Key | EN | BN |
|---|---|---|
| title | Dental Implants | ডেন্টাল ইমপ্লান্ট |
| intro | A dental implant replaces a missing tooth from the root up. A small post is placed in the jawbone, and a crown is fitted on top. | ডেন্টাল ইমপ্লান্ট হারানো দাঁতকে গোড়া থেকে প্রতিস্থাপন করে। চোয়ালের হাড়ে একটি ছোট পোস্ট বসানো হয় এবং তার ওপর ক্রাউন লাগানো হয়। |
| forWhom | People with one or more missing teeth; people who find dentures uncomfortable. Suitability is decided after an examination. | যাদের এক বা একাধিক দাঁত নেই; যাদের ডেনচার অস্বস্তিকর লাগে। উপযুক্ততা পরীক্ষার পর ঠিক করা হয়। |
| step.1 | Consultation and examination, with X-rays where needed | পরামর্শ ও পরীক্ষা, প্রয়োজনে এক্স-রে সহ |
| step.2 | Treatment plan and cost explained | চিকিৎসা পরিকল্পনা ও খরচ বুঝিয়ে বলা |
| step.3 | Implant placed under local anesthesia | লোকাল অ্যানেস্থেশিয়ায় ইমপ্লান্ট বসানো |
| step.4 | Healing time, then the crown is fitted | সুস্থ হওয়ার সময়, তারপর ক্রাউন লাগানো |
| step.5 | Follow-up and care instructions | ফলো-আপ ও যত্নের নির্দেশনা |
| benefit.1 | Looks and feels like a natural tooth | দেখতে ও অনুভবে প্রাকৃতিক দাঁতের মতো |
| benefit.2 | Helps you chew comfortably | আরামে চিবাতে সাহায্য করে |
| benefit.3 | Does not rely on neighboring teeth for support | পাশের দাঁতের ওপর নির্ভর করে না |
| note | Results and healing time vary from person to person. | ফলাফল ও সুস্থ হওয়ার সময় একেক জনের ক্ষেত্রে আলাদা হতে পারে। |

### 5.2 Braces Care (slug: `braces-care`, featured)

| Key | EN | BN |
|---|---|---|
| title | Braces Care | ব্রেসেস চিকিৎসা |
| intro | Braces gently move teeth into a better position, helping with crooked teeth, gaps, and bite problems. | ব্রেসেস ধীরে ধীরে দাঁতকে সঠিক অবস্থানে নিয়ে যায়, বাঁকা দাঁত, ফাঁক ও কামড়ের সমস্যায় সাহায্য করে। |
| forWhom | Children, teens, and adults with crooked or crowded teeth, gaps, or bite problems. | বাঁকা, ঘন বা ফাঁকা দাঁত অথবা কামড়ের সমস্যা আছে এমন শিশু, কিশোর ও প্রাপ্তবয়স্ক। |
| step.1 | Examination and discussion of your goals | পরীক্ষা এবং আপনার প্রত্যাশা নিয়ে আলোচনা |
| step.2 | Treatment plan, estimated time, and cost explained | চিকিৎসা পরিকল্পনা, আনুমানিক সময় ও খরচ বুঝিয়ে বলা |
| step.3 | Braces fitted | ব্রেসেস লাগানো |
| step.4 | Regular check-ups and adjustments | নিয়মিত চেকআপ ও সমন্বয় |
| step.5 | Retainer and aftercare | রিটেইনার ও পরবর্তী যত্ন |
| benefit.1 | Straighter, more even teeth | আরও সোজা ও সমান দাঁত |
| benefit.2 | Easier to clean teeth properly | দাঁত ঠিকমতো পরিষ্কার করা সহজ হয় |
| benefit.3 | A more comfortable bite | আরও আরামদায়ক কামড় |
| note | Treatment time depends on each person's teeth. | চিকিৎসার সময় প্রত্যেকের দাঁতের অবস্থার ওপর নির্ভর করে। |

### 5.3 Other services (short entries; the template adds the same structure)

| Slug | EN title | EN intro | BN title | BN intro |
|---|---|---|---|---|
| `teeth-cleaning` | Teeth Cleaning | Removes plaque and tartar to keep your gums and teeth healthy. Regular cleaning helps prevent gum problems. | দাঁত পরিষ্কার (স্কেলিং) | প্লাক ও টার্টার সরিয়ে দাঁত ও মাড়ি সুস্থ রাখে। নিয়মিত পরিষ্কার মাড়ির সমস্যা প্রতিরোধে সাহায্য করে। |
| `root-canal` | Root Canal Treatment | Treats an infected or badly damaged tooth from the inside so you can keep your natural tooth. | রুট ক্যানাল চিকিৎসা | সংক্রমিত বা মারাত্মক ক্ষতিগ্রস্ত দাঁতের ভেতরের অংশ চিকিৎসা করে, যাতে আপনার প্রাকৃতিক দাঁত রাখা যায়। |
| `teeth-whitening` | Teeth Whitening | Lightens stains and discoloration for a brighter smile. | দাঁত সাদা করা (হোয়াইটেনিং) | দাগ ও বিবর্ণতা হালকা করে উজ্জ্বল হাসি দেয়। |
| `fillings` | Dental Fillings | Repairs cavities and small chips so the tooth works well again. | দাঁত ফিলিং | গর্ত ও ছোট ভাঙা অংশ মেরামত করে দাঁতকে আবার কার্যকর করে। |
| `crowns-bridges` | Crowns and Bridges | Restores a damaged tooth with a crown, or fills a gap with a bridge. | ক্রাউন ও ব্রিজ | ক্ষতিগ্রস্ত দাঁত ক্রাউন দিয়ে এবং ফাঁকা জায়গা ব্রিজ দিয়ে পূরণ করা হয়। |

Each of these pages also needs: who it is for, 3 to 5 steps, 2 to 3 benefits, 2 FAQs, and the standard note "Suitability and results depend on your examination." Ask the clinic for the real details; do not invent them.

---

## 6. Problems We Treat (src/data/problems.js)

Each problem links to the most relevant service. Keep the wording as "may" and "can help"; never promise a cure or diagnose.

| Slug | EN title | EN text | Links to | BN title | BN text |
|---|---|---|---|---|---|
| `toothache` | Toothache | Tooth pain can have many causes, such as cavities or infection. An examination finds the cause so the right treatment can be given. | fillings, root-canal | দাঁতের ব্যথা | দাঁত ব্যথার নানা কারণ থাকতে পারে, যেমন গর্ত বা সংক্রমণ। পরীক্ষা করে কারণ খুঁজে সঠিক চিকিৎসা দেওয়া হয়। |
| `bleeding-gums` | Bleeding Gums | Bleeding gums can be a sign of gum disease. Professional cleaning and good home care often help. | teeth-cleaning | মাড়ি থেকে রক্ত পড়া | মাড়ি থেকে রক্ত পড়া মাড়ির রোগের লক্ষণ হতে পারে। পেশাদার পরিষ্কার ও বাসায় সঠিক যত্ন অনেক সময় সাহায্য করে। |
| `crooked-teeth` | Crooked or Crowded Teeth | Braces can move teeth into a better position and make cleaning easier. | braces-care | বাঁকা বা ঘন দাঁত | ব্রেসেস দাঁতকে ভালো অবস্থানে নিতে এবং পরিষ্কার করা সহজ করতে সাহায্য করে। |
| `missing-teeth` | Missing Teeth | Missing teeth can be replaced with implants, bridges, or other options, depending on your situation. | dental-implant, crowns-bridges | হারানো দাঁত | আপনার অবস্থা অনুযায়ী ইমপ্লান্ট, ব্রিজ বা অন্য বিকল্পে হারানো দাঁত প্রতিস্থাপন করা যায়। |
| `sensitivity` | Sensitive Teeth | Sensitivity to hot or cold can have several causes. We check the cause and suggest treatment. | fillings, teeth-cleaning | সংবেদনশীল দাঁত | ঠান্ডা বা গরমে শিরশির করার নানা কারণ থাকতে পারে। আমরা কারণ পরীক্ষা করে চিকিৎসার পরামর্শ দিই। |
| `bad-breath` | Bad Breath | Bad breath is often linked to plaque, gum problems, or cavities. A check-up and cleaning can help find and treat the cause. | teeth-cleaning | মুখের দুর্গন্ধ | মুখের দুর্গন্ধ প্রায়ই প্লাক, মাড়ির সমস্যা বা দাঁতের গর্তের সাথে সম্পর্কিত। চেকআপ ও পরিষ্কার কারণ খুঁজে চিকিৎসা করতে সাহায্য করে। |

Add this line at the bottom of the Problems page: *"If you have severe pain, swelling, or bleeding that will not stop, call us now."* / *"তীব্র ব্যথা, ফোলা বা থামছে না এমন রক্তপাত হলে এখনই আমাদের কল করুন।"*

---

## 7. New Patients Page

| Key | EN | BN |
|---|---|---|
| newPatients.title | Your first visit | আপনার প্রথম ভিজিট |
| newPatients.intro | We want your first visit to be simple and stress-free. Here is what to expect. | আমরা চাই আপনার প্রথম ভিজিট সহজ ও চিন্তামুক্ত হোক। কী হবে তা জেনে নিন। |
| step.1 | Call or message us to book a time. | কল বা মেসেজ করে সময় নিন। |
| step.2 | Arrive a few minutes early. | কয়েক মিনিট আগে পৌঁছান। |
| step.3 | Dr. Mustak asks about your concerns and examines your teeth. | ডাঃ মুস্তাক আপনার সমস্যার কথা শোনেন এবং দাঁত পরীক্ষা করেন। |
| step.4 | We explain your options and cost before any treatment. | চিকিৎসার আগে আমরা বিকল্প ও খরচ বুঝিয়ে বলি। |
| bring.title | Please bring | সাথে আনুন |
| bring.1 | Any previous dental records or X-rays | আগের দাঁতের কাগজপত্র বা এক্স-রে (যদি থাকে) |
| bring.2 | A list of medicines you take | আপনি যেসব ওষুধ খান তার তালিকা |
| bring.3 | Your questions, so we can answer them | আপনার প্রশ্নগুলো, যাতে আমরা উত্তর দিতে পারি |
| payment | [TODO: accepted payment methods] | [TODO] |

---

## 8. Contact and Booking Page

| Key | EN | BN |
|---|---|---|
| contact.title | Contact and Book | যোগাযোগ ও বুকিং |
| contact.intro | Call us, message on WhatsApp, or fill in the form and we will reply to confirm your time. | কল করুন, হোয়াটসঅ্যাপে মেসেজ দিন, বা ফর্ম পূরণ করুন। আমরা সময় নিশ্চিত করতে উত্তর দেব। |
| form.name | Your name | আপনার নাম |
| form.phone | Phone number | ফোন নম্বর |
| form.date | Preferred date | পছন্দের তারিখ |
| form.time | Preferred time | পছন্দের সময় |
| form.treatment | Treatment | চিকিৎসা |
| form.treatment.other | Not sure yet | এখনো নিশ্চিত নই |
| form.message | Message (optional) | বার্তা (ঐচ্ছিক) |
| form.submit | Send on WhatsApp | হোয়াটসঅ্যাপে পাঠান |
| form.error.required | This field is required. | এই ঘরটি পূরণ করা আবশ্যক। |
| form.error.phone | Please enter a valid phone number. | সঠিক ফোন নম্বর দিন। |
| form.success.title | Almost done! | প্রায় শেষ! |
| form.success.text | Your message is ready in WhatsApp. Press send there, and we will reply to confirm your time. | আপনার বার্তা হোয়াটসঅ্যাপে প্রস্তুত। সেখানে সেন্ড চাপুন, আমরা সময় নিশ্চিত করতে উত্তর দেব। |
| form.success.fallback | Prefer to talk? Call 01716374977. | কথা বলতে চান? কল করুন ০১৭১৬৩৭৪৯৭৭। |

**Prefilled WhatsApp message template**

EN:
```
Hello Metro Dental BD, I would like to book an appointment.
Name: {name}
Phone: {phone}
Preferred date: {date}
Preferred time: {time}
Treatment: {treatment}
Message: {message}
```

BN:
```
আসসালামু আলাইকুম, আমি মেট্রো ডেন্টাল বিডি-তে অ্যাপয়েন্টমেন্ট নিতে চাই।
নাম: {name}
ফোন: {phone}
পছন্দের তারিখ: {date}
পছন্দের সময়: {time}
চিকিৎসা: {treatment}
বার্তা: {message}
```

---

## 9. 404 Page

| Key | EN | BN |
|---|---|---|
| notFound.title | Page not found | পেজটি পাওয়া যায়নি |
| notFound.text | The page you are looking for does not exist. You can go back home or book an appointment. | আপনি যে পেজটি খুঁজছেন তা নেই। আপনি হোমে ফিরে যেতে বা অ্যাপয়েন্টমেন্ট নিতে পারেন। |

---

## 10. SEO Text (title under 60 characters, description under 155)

| Page | Title | Description |
|---|---|---|
| Home | Metro Dental BD: Dental Implant and Braces, Bangshal, Dhaka | Dental implants, braces care, and family dental treatment with Dr. Mustak in Bangshal, Dhaka. Call 01716374977 to book. |
| About | About Metro Dental BD \| Dr. Mustak, Bangshal | Meet Dr. Mustak and learn how Metro Dental BD cares for patients in Bangshal, Dhaka. |
| Services | Dental Services in Bangshal, Dhaka \| Metro Dental BD | Implants, braces, cleaning, root canal, whitening, fillings, and crowns at Metro Dental BD in Bangshal, Dhaka. |
| Dental Implant | Dental Implants in Dhaka \| Metro Dental BD | Replace missing teeth with dental implants. Book a consultation with Dr. Mustak in Bangshal, Dhaka. |
| Braces Care | Braces in Dhaka \| Metro Dental BD | Braces care for crooked teeth and bite problems at Metro Dental BD, Bangshal, Dhaka. |
| Problems | Dental Problems We Treat \| Metro Dental BD | Toothache, bleeding gums, crooked or missing teeth, sensitivity, and bad breath. Get help in Bangshal, Dhaka. |
| New Patients | New Patients \| Metro Dental BD | What to expect at your first visit and what to bring to Metro Dental BD in Bangshal, Dhaka. |
| Contact | Contact and Book \| Metro Dental BD, Bangshal Dhaka | Call 01716374977 or message on WhatsApp. 59 Kazi Alauddin Rd, Bangshal, Dhaka 1100. |

---

## 11. Placeholder Checklist (list these in your final message)

- [ ] Dr. Mustak's qualifications and confirmed name spelling in Bangla
- [ ] Opening hours
- [ ] Real reviews and permission to publish them
- [ ] Offer or free consultation details (or leave the banner hidden)
- [ ] Sterilization practices and equipment names
- [ ] Clinic story for the About page
- [ ] Accepted payment methods
- [ ] Confirmed list of services offered, with details for the five short entries
- [ ] Google Maps embed link, social links
- [ ] Native-speaker review of every Bangla line
