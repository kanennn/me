---
layout: front
title: "Happy Jekylling!"
header_links: ["socials", "projects", "contact", "support"]
---

# doe-ray-me

{% capture doe-ray-me %}
hi, i'm a real person\
i'm mostly just a kid who likes to make things

i was waiting to put something here because i wanted it to be inspirational, connecting, and unique. however i think sometimes the best way to do that is honesty and vulnerability, not polish.

developing this site has been super fun, but i'm so tired right now and i want to go watch a movie. i know i don't probably know you, reading this, and i can't see you or hear you but if this is going through your head that means you are a real person out there somewhere. so to you, real person, i hope you are having a beautiful day.

one of my passions is to connect things, and connect people. so even though this may not be much of a connection, at least it's something, and i can give you my bidding that you would make connections, bring people together, and help create a beautiful world alongside everyone else.

God bless you. cheers 🍷 ~ 07-18-2024

> {% endcapture %}

<div class="doublecolumn">{{doe-ray-me | markdownify }}</div>

{% capture socials %}

# socials

{: #socials}

-   GitHub [@kanennn](https://github.com/kanennn)
-   i literally don't know where else\
    i'm a nerd LOL

{% endcapture %}

{% capture projects %}

# projects

{: #projects}

you can find me working on

-   this website :D
-   all things dev at [kanennn.dev](https://kanennn.dev)\
    (UnDER ConSTRUCTION 🚧🚧🚧 )
-   [**the archives**](https://archives.kanenstephens.com): a sort of personal analog journal
-   probably building something cool and funny that i may or may not post about somewhere

{% endcapture %}

{% include columns.html left=socials right=projects %}

# things i like

{% capture p1 %}

-   💻 development
-   🎶 byzantine, prog, and indie music (or like just vibey music)
-   🎨 art, especially digital; pixel art, graphic design, iconography, aesthetic people, great 3d renders
-   🎮 video games: minecraft, stray, botw/totk are my favs
-   ❤️ not dying

{% endcapture %}

{% capture p2 %}

-   🧠 philosophy, existentialism, theology
-   ☦️ Orthodox Christianity
-   9️⃣ the [Enneagram](https://www.enneagraminstitute.com/type-descriptions/) (i'm a type 5)
-   📚 learning literally anything (and everything)
-   🫂 people
-   🌈 the beautiful world we live in

{% endcapture %}

{% capture list %}
{% include columns.html left=p1 right=p2 %}
{% endcapture %}

{% include unlist.html content=list %}

{% capture contact %}

# contact

{: #contact}

you can contact me at **contact@kanenstephens.com**\
or, find me at one of my socials!

{% endcapture %}

{% capture support %}

# support

{: #support}

you can buy me a coffee [**here**](https://{{site.buymeacoffee}})! although I don't drink coffee. i'll just swap it out for a tea then ;D

another way you can support me is through finding and supporting me in the field through my projects!

this site is also open source and MIT licensed! feel free to contribute and help out/smash bugs/fix my spelling [here](https://{{site.repo}})!

{% endcapture %}

{% include columns.html left=contact right=support %}
