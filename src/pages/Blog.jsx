import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  Clock,
  CalendarDays,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Languages,
  MessageCircle,
  Globe,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

const articles = [
  {
    id: 1,
    title: "20 Essential Spanish Greetings for Beginners",
    category: "Vocabulary",
    date: "October 20, 2026",
    readTime: "5 min read",
    icon: MessageCircle,
    color: "bg-blue-100 text-blue-800",
    excerpt:
      "Start speaking Spanish with confidence by learning the greetings and everyday expressions used in common conversations.",
    content: [
      "Learning greetings is one of the easiest ways to begin speaking Spanish. These expressions help you introduce yourself and start conversations.",
      "Hola — Hello. Buenos días — Good morning. Buenas tardes — Good afternoon. Buenas noches — Good evening or good night.",
      "¿Cómo estás? — How are you? Muy bien, gracias — Very well, thank you. ¿Y tú? — And you?",
      "Mucho gusto — Nice to meet you. Por favor — Please. Gracias — Thank you. De nada — You're welcome. Hasta luego — See you later.",
      "Practice saying these expressions aloud every day. Try using one or two in a short conversation with a classmate or language partner.",
    ],
  },
  {
    id: 2,
    title: "Spanish Grammar: Understanding Ser and Estar",
    category: "Grammar",
    date: "October 17, 2026",
    readTime: "6 min read",
    icon: BookOpen,
    color: "bg-red-100 text-red-800",
    excerpt:
      "Both verbs can mean “to be” in English, but Spanish uses them in different situations. Learn the basics with simple examples.",
    content: [
      "Ser and estar both translate to “to be,” but they are not interchangeable in every situation.",
      "Ser is commonly used for identity, origin, profession, and characteristics. For example: Soy estudiante means “I am a student.” Ella es de Kenia means “She is from Kenya.”",
      "Estar is commonly used for location and temporary states. For example: Estoy en casa means “I am at home.” Estamos felices means “We are happy.”",
      "A useful starting point is to remember that ser often describes what something is, while estar often describes where someone or something is or how they are feeling.",
      "Write five sentences with ser and five with estar. Read them aloud and check that each sentence expresses the meaning you intend.",
    ],
  },
  {
    id: 3,
    title: "How to Improve Your Spanish Pronunciation",
    category: "Pronunciation",
    date: "October 14, 2026",
    readTime: "4 min read",
    icon: Languages,
    color: "bg-purple-100 text-purple-800",
    excerpt:
      "Discover practical exercises that can help you pronounce Spanish words more clearly and become more comfortable speaking.",
    content: [
      "Clear pronunciation develops through listening, repetition, and regular speaking practice. You do not need to sound like a native speaker to communicate successfully.",
      "Listen carefully to Spanish words and short phrases. Repeat them slowly first, then try to match the speaker's rhythm and stress.",
      "Pay attention to vowel sounds. Spanish vowels are generally more consistent than English vowels: a, e, i, o, and u each have a relatively stable sound.",
      "Record yourself reading a short paragraph. Compare your recording with a reliable Spanish audio example and choose one sound to improve at a time.",
      "Practice for ten minutes each day. Short, consistent sessions are often easier to maintain than occasional long sessions.",
    ],
  },
  {
    id: 4,
    title: "Explore Spanish-Speaking Cultures Around the World",
    category: "Culture",
    date: "October 10, 2026",
    readTime: "5 min read",
    icon: Globe,
    color: "bg-amber-100 text-amber-800",
    excerpt:
      "Spanish connects learners with diverse communities, traditions, food, music, and histories across many countries.",
    content: [
      "Spanish is spoken across many countries, and each community has its own traditions, accents, expressions, and cultural experiences.",
      "Explore music, films, books, recipes, and festivals from different Spanish-speaking regions. These resources make learning more engaging and introduce you to language in context.",
      "Remember that Spanish-speaking cultures are not all the same. Vocabulary, pronunciation, food, and customs can vary between countries and even between regions.",
      "Choose one Spanish-speaking country each week. Learn a few facts about its geography, culture, and everyday expressions, then share what you discover in Spanish.",
    ],
  },
  {
    id: 5,
    title: "Five Daily Habits for Learning Spanish Faster",
    category: "Learning Tips",
    date: "October 7, 2026",
    readTime: "4 min read",
    icon: Lightbulb,
    color: "bg-green-100 text-green-800",
    excerpt:
      "Build a realistic study routine with small daily activities that develop your vocabulary, listening, reading, and speaking.",
    content: [
      "Consistency matters when learning a language. A simple daily routine can help you keep progressing, even when you have a busy schedule.",
      "First, learn five new words and use each in a sentence. Second, listen to a short Spanish audio clip. Third, read a short passage suited to your level.",
      "Fourth, speak aloud for a few minutes. Describe your day, introduce yourself, or practise a conversation you might have in real life.",
      "Fifth, review words and grammar from previous lessons. Revisiting familiar material helps reinforce what you have already learned.",
      "Set a small weekly goal and track your progress. Choose activities you enjoy so that practising Spanish becomes part of your routine.",
    ],
  },
  {
    id: 6,
    title: "What Are the Spanish A1, A2, B1, B2, C1 and C2 Levels?",
    category: "Learning Tips",
    date: "October 3, 2026",
    readTime: "6 min read",
    icon: GraduationCap,
    color: "bg-sky-100 text-sky-800",
    excerpt:
      "Understand the six commonly used CEFR language levels and what learners generally work towards at each stage.",
    content: [
      "The Common European Framework of Reference for Languages (CEFR) describes language proficiency using six levels, from A1 to C2.",
      "A1 is the beginner level, where learners practise simple expressions and basic introductions. A2 develops everyday communication about familiar topics.",
      "B1 learners work towards handling many situations while travelling and discussing familiar subjects. B2 focuses on more independent communication and understanding more complex material.",
      "C1 learners develop flexible, effective communication in demanding situations. C2 represents a very high level of proficiency and the ability to understand and express nuanced meanings.",
      "Progress depends on practice, experience, and individual learning needs. Use the levels as a guide rather than a guarantee of how quickly you will advance.",
    ],
  },
];

const categories = [
  "All Posts",
  "Vocabulary",
  "Grammar",
  "Pronunciation",
  "Culture",
  "Learning Tips",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [expandedArticle, setExpandedArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Posts" ||
        article.category === activeCategory;

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.content.some((paragraph) =>
          paragraph.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main>
      {/* Blog hero */}
      <section
        id="blog-top"
        className="relative overflow-hidden bg-brand-navy px-4 py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-brand-red/20" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <BookOpen size={17} />
            The Buenavida Spanish Blog
          </span>

          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Learn Spanish, One Article at a Time
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Explore Spanish vocabulary, grammar, pronunciation, culture, and
            practical learning tips to support your language journey.
          </p>

          <a
            href="#blog-articles"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Explore Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Blog introduction */}
      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Learn with Buenavida"
            title="Ideas to Help You Speak Spanish with Confidence"
            description="Whether you are starting from zero or strengthening your skills, find useful ideas you can put into practice."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Languages size={23} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">
                Build Your Vocabulary
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Learn useful expressions and words for everyday conversations.
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white">
                <BookOpen size={23} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">
                Understand Grammar
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Break down grammar concepts with straightforward explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 text-white">
                <Globe size={23} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">
                Discover the Culture
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Explore the cultures and communities connected by the Spanish
                language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles and filters */}
      <section
        id="blog-articles"
        className="bg-brand-light px-4 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <SectionHeading
              eyebrow="Latest from our blog"
              title="Explore Our Articles"
              description="Search for a topic or choose a category to find something useful for your Spanish learning journey."
            />
          </div>

          {/* Search */}
          <div className="mx-auto mb-7 max-w-2xl">
            <label
              htmlFor="blog-search"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Search articles
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 shadow-sm focus-within:border-brand-navy focus-within:ring-2 focus-within:ring-brand-navy/10">
              <Search size={20} className="shrink-0 text-gray-400" />

              <input
                id="blog-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Try vocabulary, grammar, culture..."
                className="w-full border-0 bg-transparent py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-brand-navy hover:text-brand-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-gray-600" aria-live="polite">
            Showing {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>

          {/* Article cards */}
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => {
                const ArticleIcon = article.icon;
                const isExpanded = expandedArticle === article.id;

                return (
                  <article
                    key={article.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex min-h-44 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 p-8">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-2xl ${article.color}`}
                      >
                        <ArticleIcon size={38} strokeWidth={1.7} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${article.color}`}
                        >
                          {article.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold leading-snug text-brand-dark">
                        {article.title}
                      </h2>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          {article.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                      </div>

                      <p className="mt-4 flex-1 leading-7 text-gray-600">
                        {article.excerpt}
                      </p>

                      {isExpanded && (
                        <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
                          {article.content.map((paragraph, index) => (
                            <p
                              key={index}
                              className="text-sm leading-7 text-gray-700"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          setExpandedArticle(isExpanded ? null : article.id)
                        }
                        aria-expanded={isExpanded}
                        className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-brand-navy transition hover:text-brand-red"
                      >
                        {isExpanded ? "Read less" : "Read article"}
                        {isExpanded ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-12 text-center">
              <Search className="mx-auto mb-4 text-gray-400" size={36} />
              <h3 className="text-xl font-bold text-brand-dark">
                No articles found
              </h3>
              <p className="mt-2 text-gray-600">
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Posts");
                }}
                className="mt-5 rounded-lg bg-brand-navy px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Learning call to action */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-navy px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <GraduationCap size={30} />
          </div>

          <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Ready to Take Your Spanish Further?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Turn what you learn into real communication skills. Explore our
            Spanish learning levels and take the next step in your journey.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-brand-navy transition hover:bg-blue-50"
            >
              Explore Courses
              <ArrowRight size={18} />
            </a>

            <a
              href="/admissions"
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Enquire About Enrollment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
