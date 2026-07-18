import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpenText, ThumbsDown, ThumbsUp } from "lucide-react";
import "./blog.css";

const defaultPosts = [
  {
    id: 1,
    title: "Why I Love Building AI Projects",
    text: "Working on AI-based systems like mammogram cancer detection taught me how impactful technology can be when it is applied to healthcare. Deep learning becomes more exciting when it meets real problems.",
  },
  {
    id: 2,
    title: "My Thoughts on Design and Aesthetics",
    text: "I believe design should balance function and emotion. Dark interfaces, crisp hierarchy, and small motion details can make a portfolio feel personal without getting in the user's way.",
  },
  {
    id: 3,
    title: "Balancing Tech and Creativity",
    text: "As someone who codes and performs, I have realized creativity is not limited to art. It also lives inside algorithms, debugging sessions, and the rhythm of a good product flow.",
  },
  {
    id: 4,
    title: "The Beauty of Simple Code",
    text: "Clean code is not just about fewer lines. It is about clarity, ownership, and making the next engineer feel like the system wants to be understood.",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((post) => ({
      ...post,
      agree: savedVotes[post.id]?.agree || 0,
      disagree: savedVotes[post.id]?.disagree || 0,
      userVote: votedByUser[post.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((post) =>
      post.id === id
        ? { ...post, [type]: post[type] + 1, userVote: type }
        : post
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((post) => [
        post.id,
        { agree: post.agree, disagree: post.disagree },
      ])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <BookOpenText size={16} />
          Notes
        </span>
        <h1>Thoughts from the build log.</h1>
        <p>
          Short reflections on AI, design, code clarity, and the creative energy
          behind engineering work.
        </p>
      </div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-post"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-text">{post.text}</p>
            </div>

            <div className="vote-container" aria-label={`${post.title} reactions`}>
              <motion.button
                onClick={() => vote(post.id, "agree")}
                disabled={!!post.userVote}
                whileTap={{ scale: 0.92 }}
                className={`vote-btn-circle agree ${
                  post.userVote === "agree" ? "active" : ""
                }`}
                aria-label="Agree"
              >
                <ThumbsUp size={19} />
                <motion.span
                  key={post.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {post.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(post.id, "disagree")}
                disabled={!!post.userVote}
                whileTap={{ scale: 0.92 }}
                className={`vote-btn-circle disagree ${
                  post.userVote === "disagree" ? "active" : ""
                }`}
                aria-label="Disagree"
              >
                <ThumbsDown size={19} />
                <motion.span
                  key={post.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {post.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
