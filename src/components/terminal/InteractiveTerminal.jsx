import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { appendEntry, autocomplete, initialEntries, navigateHistory, parseCommand, prompt, quickCommands } from "./commands.mjs";
import { profile } from "./profile.mjs";
import TerminalOutput from "./TerminalOutput";
import "./terminal.css";

export default function InteractiveTerminal() {
  const reducedMotion = useReducedMotion();
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState(initialEntries);
  const [notice, setNotice] = useState("");
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const screenRef = useRef(null);
  const timerRef = useRef(null);
  const sequence = useRef(0);
  const history = useRef([]);
  const historyIndex = useRef(0);
  const draft = useRef("");
  const coffeeRestored = useRef(false);

  const cancelTyping = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
    setTyping(false);
  }, []);
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const execute = useCallback((raw) => {
    const result = parseCommand(raw);
    if (!result) return;
    if (result.kind === "coffee") coffeeRestored.current = true;
    const entry = { id: ++sequence.current, input: raw.trim(), result, animate: true, coffeeRestored: coffeeRestored.current };
    setEntries((current) => appendEntry(current, entry));
    history.current = [...history.current, raw.trim()].slice(-100);
    historyIndex.current = history.current.length;
    draft.current = "";
    setInput(""); setTyping(false);
    setNotice(result.kind === "clear" ? "Terminal cleared." : result.kind === "error" ? `${result.message}. Type help for commands.` : `${result.command} output ready.`);
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  const runCommand = useCallback((raw, animate = true) => {
    cancelTyping();
    const result = parseCommand(raw);
    if (!result) return;
    // Open within the user's click/Enter event, before the optional typing delay.
    if (result.kind === "resume") window.open(profile.resume, "_blank", "noopener,noreferrer");
    if (!animate || reducedMotion) { execute(raw); return; }
    setTyping(true); setNotice(""); setInput("");
    let count = 0;
    const step = () => {
      count += 1;
      setInput(raw.slice(0, count));
      if (count < raw.length) timerRef.current = setTimeout(step, Math.max(4, Math.min(16, 160 / raw.length)));
      else { timerRef.current = null; execute(raw); }
    };
    step();
  }, [cancelTyping, execute, reducedMotion]);

  useEffect(() => {
    const screen = screenRef.current;
    const latest = screen?.lastElementChild;
    if (!screen) return;
    if (!entries.length) { screen.scrollTop = 0; return; }
    if (entries.at(-1)?.animate && latest) {
      // Scroll only the terminal, not the recruiter's position on the page.
      screen.scrollTo({ top: Math.max(0, latest.offsetTop - 16), behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, [entries, reducedMotion]);

  const keyDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Escape") { event.preventDefault(); cancelTyping(); setInput(""); setNotice(""); historyIndex.current = history.current.length; draft.current = ""; }
    if (["ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault(); cancelTyping();
      if (historyIndex.current === history.current.length) draft.current = input;
      const next = navigateHistory(history.current, historyIndex.current, draft.current, event.key === "ArrowUp" ? -1 : 1);
      historyIndex.current = next.index; setInput(next.value);
    }
    if (event.key === "Tab" && !event.shiftKey) {
      const completion = autocomplete(input);
      if (completion.matches.length === 1 && completion.value !== input) {
        event.preventDefault(); cancelTyping(); setInput(completion.value);
        setNotice(`Completed ${completion.value}.`);
      } else if (completion.matches.length > 1) {
        setNotice(`Matches: ${completion.matches.join(", ")}.`);
      }
    }
  };

  return <section className="home-terminal-section page-shell" aria-labelledby="terminal-title" id="interactive-terminal">
    <div className="terminal-intro"><h2 id="terminal-title">A developer profile. An interactive prompt.</h2><p>Start with a button — no terminal experience needed.</p></div>
    <motion.div className="interactive-terminal recruiter-terminal" initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.25 }}>
      <div className="terminal-topbar">
        <div className="terminal-dots" aria-hidden="true"><span className="terminal-dot red"/><span className="terminal-dot amber"/><span className="terminal-dot green"/></div>
        <span>jasmita@portfolio: ~/profile</span><strong>interactive</strong>
      </div>
      <div className="terminal-screen" ref={screenRef} role="region" aria-label="Terminal output history" tabIndex={0}>
        {entries.map((entry) => <article className={`terminal-entry ${entry.animate ? "" : "terminal-initial"}`} key={entry.id}>
          <p className="terminal-prompt"><span>{prompt}</span> {entry.input}</p>
          <TerminalOutput result={entry.result} coffeeRestored={entry.coffeeRestored} runCommand={runCommand}/>
        </article>)}
      </div>
      <form className="terminal-input-row" onSubmit={(event) => { event.preventDefault(); if (!typing) runCommand(input, false); }}>
        <label htmlFor="portfolio-command" className="terminal-prompt-label">{prompt}</label>
        <div className="terminal-input-wrap"><input ref={inputRef} id="portfolio-command" aria-label="Terminal command" aria-describedby="terminal-input-help" autoComplete="off" autoCapitalize="none" spellCheck={false} maxLength={160} value={input} onChange={(event) => { cancelTyping(); setInput(event.target.value); setNotice(""); }} onKeyDown={keyDown}/>{!input && <span className="terminal-cursor" aria-hidden="true">█</span>}</div>
        <button type="submit" disabled={typing}>Run</button>
      </form>
      <p className="terminal-input-help" id="terminal-input-help">Enter to run · ↑ ↓ history · Tab to complete · Esc to clear input</p>
      <div className="terminal-command-row" aria-label="Quick terminal commands">{quickCommands.map((command) => <button type="button" key={command} onClick={() => runCommand(command)} aria-label={`Run ${command}`}>{command}</button>)}</div>
      <div className="terminal-live-status" role="status" aria-live="polite" aria-atomic="true">{notice}</div>
    </motion.div>
  </section>;
}
