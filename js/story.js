const storiesData = {
  alula: {
    category: "Historical Journey",
    title: "The Whispers of Al-Ula",
    author: "By Sarah Al-Saud • 5 Min Read",
    heroImage: "assets/images/heritage-about.jpg",
    intro: "eep within the desert sands of northwest Saudi Arabia lies a masterpiece carved by wind and time. Al-Ula is not just a place; it is a living museum.",
    firstLetter: "D",
    quote: "To walk through Hegra is to walk through the pages of history, untouched and preserved for eternity.",
    text1: "The Nabataeans, the same architects who built Petra, chose this golden landscape to carve their tombs into the massive sandstone rocks.",
    text2: "Today, under the vast starlit sky, the silence of the desert speaks louder than words. It connects the modern visitor with the ancient soul of Arabia.",
    gallery1: "assets/images/alula-detail1.webp",
    gallery2: "assets/images/alula-detail2.jpg",
    subheading: "The Mirror of Time",
    text3: "Modern Al-Ula is a dialogue between the past and the future. The Maraya Concert Hall reflects the ancient mountains.",
    nextStoryId: "diriyah"
  },
  diriyah: {
    category: "The Birthplace",
    title: "Diriyah: Where It Began",
    author: "By Faisal Al-Malki • 4 Min Read",
    heroImage: "assets/images/aldiraia.jpg",
    intro: "t-Turaif district in Diriyah stands as a symbol of the Saudi state's foundation. The mud-brick architecture tells the story of resilience.",
    firstLetter: "A",
    quote: "Mud walls that witnessed the birth of a nation, standing tall against the test of time.",
    text1: "Walking through the winding alleyways of Diriyah, you can feel the spirit of the first Saudi state. The intricate geometric patterns on the doors reflect a unique Najdi style.",
    text2: "Restoration efforts have brought life back to these ruins, turning them into a cultural beacon for the world.",
    gallery1: "assets/images/diriyah-1.WEBP",
    gallery2: "assets/images/diriyah-2.jpg",
    subheading: "A Modern Legacy",
    text3: "Today, Diriyah Gate is becoming a global lifestyle destination, blending 300 years of history with modern luxury.",
    nextStoryId: "asir"
  },
  asir: {
    category: "Nature & Heritage",
    title: "The Clouds of Asir",
    author: "By Noura Al-Qahtani • 6 Min Read",
    heroImage: "assets/images/asir.webp",
    intro: "igh in the misty mountains of the south, Asir offers a completely different palette of Saudi heritage. Green terraces and colorful art.",
    firstLetter: "H",
    quote: "Where the mountains touch the clouds, and the houses wear the colors of nature.",
    text1: "The unique 'Al-Qatt Al-Asiri' art form, painted by women, decorates the interior walls of homes with vibrant geometric shapes.",
    text2: "The cool climate and fertile soil have made this region the agricultural basket of the kingdom for centuries.",
    gallery1: "assets/images/asir-1.webp",
    gallery2: "assets/images/asir-2.jpg",
    subheading: "The Flower Men",
    text3: "The local tribes are known for their floral crowns, a tradition that symbolizes a deep connection to the wild nature around them.",
    nextStoryId: "alula"
  }
};

const params = new URLSearchParams(window.location.search);
const storyId = params.get("id");
const data = storiesData[storyId];

if (data) {
  document.title = data.title + " | Khalaf";
  document.getElementById("story-category").textContent = data.category;
  document.getElementById("story-title").textContent = data.title;
  document.getElementById("story-author").textContent = data.author;
  document.getElementById("hero-section").style.backgroundImage = `url('${data.heroImage}')`;
  document.getElementById("drop-cap").textContent = data.firstLetter;
  document.getElementById("story-intro").textContent = data.intro;
  document.getElementById("story-quote").textContent = `"${data.quote}"`;
  document.getElementById("story-text-1").textContent = data.text1;
  document.getElementById("story-text-2").textContent = data.text2;
  document.getElementById("gallery-img-1").src = data.gallery1;
  document.getElementById("gallery-img-2").src = data.gallery2;
  document.getElementById("story-subheading").textContent = data.subheading;
  document.getElementById("story-text-3").textContent = data.text3;
  document.getElementById("next-story-link").href = `story.html?id=${data.nextStoryId}`;
} else {

  if(storyId) {
      alert("عذراً، لم يتم العثور على بيانات لهذه القصة: " + storyId);
  } else {
      console.log("No story ID provided.");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));