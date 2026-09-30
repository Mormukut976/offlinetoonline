"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Settings,
  Sparkles,
  Mail,
  Key,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Save,
  Send,
  Cpu,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Groq State
  const [groqApiKey, setGroqApiKey] = useState("");
  const [groqModel, setGroqModel] = useState("llama-3.3-70b-versatile");
  const [hasGroqKey, setHasGroqKey] = useState(false);
  const [groqApiKeyMasked, setGroqApiKeyMasked] = useState("");

  // SMTP State
  const [smtpHost, setSmtpHost] = useState("smtp.gmail.com");
  const [smtpPort, setSmtpPort] = useState("587");
  const [smtpUser, setSmtpUser] = useState("");
  const [smtpPass, setSmtpPass] = useState("");
  const [hasSmtpPass, setHasSmtpPass] = useState(false);
  const [smtpFromName, setSmtpFromName] = useState("Raja Singh Chauhan | O2O Digital");
  const [smtpFromEmail, setSmtpFromEmail] = useState("");

  // Test AI State
  const [testingAi, setTestingAi] = useState(false);
  const [aiTestResult, setAiTestResult] = useState<string | null>(null);

  // Test Email State
  const [testEmailTo, setTestEmailTo] = useState("");
  const [sendingTestEmail, setSendingTestEmail] = useState(false);
  const [testEmailResult, setTestEmailResult] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data.success && data.data) {
        setHasGroqKey(data.data.hasGroqKey);
        setGroqApiKeyMasked(data.data.groqApiKeyMasked);
        setGroqModel(data.data.groqModel || "llama-3.3-70b-versatile");
        setSmtpHost(data.data.smtpHost || "smtp.gmail.com");
        setSmtpPort(data.data.smtpPort || "587");
        setSmtpUser(data.data.smtpUser || "");
        setHasSmtpPass(data.data.hasSmtpPass);
        setSmtpFromName(data.data.smtpFromName || "Raja Singh Chauhan | O2O Digital");
        setSmtpFromEmail(data.data.smtpFromEmail || "");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groqApiKey,
          groqModel,
          smtpHost,
          smtpPort,
          smtpUser,
          smtpPass,
          smtpFromName,
          smtpFromEmail
        })
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        fetchSettings();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const runTestAi = async () => {
    try {
      setTestingAi(true);
      setAiTestResult(null);
      const res = await fetch("/api/ai/pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: "Sharma Ortho & Spine Hospital",
          category: "hospital",
          city: "Jaipur",
          zone: "Mansarovar",
          hasWebsite: false,
          type: "whatsapp"
        })
      });
      const data = await res.json();
      if (data.success) {
        setAiTestResult(data.result);
      } else {
        setAiTestResult(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setAiTestResult(`Failed: ${err.message}`);
    } finally {
      setTestingAi(false);
    }
  };

  const runTestEmail = async () => {
    if (!testEmailTo) {
      alert("Please enter recipient email to test!");
      return;
    }
    try {
      setSendingTestEmail(true);
      setTestEmailResult(null);
      const res = await fetch("/api/mail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: testEmailTo,
          subject: "Test Proposal from O2O Digital Agency",
          bodyText: "Namaste! This is a verification test from your O2O Digital Agency portal configured by Raja Singh Chauhan. SMTP is working perfectly!"
        })
      });
      const data = await res.json();
      if (data.success) {
        setTestEmailResult(`Success: ${data.message}`);
      } else {
        setTestEmailResult(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setTestEmailResult(`Failed: ${err.message}`);
    } finally {
      setSendingTestEmail(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-20">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-emerald-950/40 via-indigo-950/20 to-slate-900 border border-emerald-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" /> AI Engine & Communication Center
          </div>
          <h1 className="text-2xl font-black text-white">Agency Intelligence Settings</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Configure your free Groq API key for ultra-fast Llama 3.3 pitch generation and SMTP credentials for 1-click cold email outreach.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {hasGroqKey ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Groq AI Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <AlertCircle className="w-3.5 h-3.5" />
              Add Free Groq Key
            </span>
          )}
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Groq AI Settings Card */}
        <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-6 space-y-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Groq AI Engine Configuration</h3>
                <p className="text-xs text-slate-400">
                  Powers personalized WhatsApp pitches, cold email proposals, and website audits
                </p>
              </div>
            </div>

            <a
              href="https://console.groq.com/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/20"
            >
              <span>Get Free Key</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Groq API Key {hasGroqKey && <span className="text-emerald-400 font-bold">(Configured: {groqApiKeyMasked})</span>}
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder={hasGroqKey ? "Paste new key to replace..." : "gsk_..."}
                  value={groqApiKey}
                  onChange={(e) => setGroqApiKey(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Free key from console.groq.com (Never shared, stored securely in local database).
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Target AI Model
              </label>
              <select
                value={groqModel}
                onChange={(e) => setGroqModel(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="qwen/qwen3.8-27b">Qwen 3.8 27B (Recommended • Smartest Hinglish & Indian Context)</option><option value="openai/gpt-oss-120b">GPT OSS 120B (Deep Reasoning)</option><option value="llama-3.3-70b-versatile">
                  Llama 3.3 70B Versatile (Recommended • Smartest Hinglish Output)
                </option>
                <option value="llama-3.1-8b-instant">
                  Llama 3.1 8B Instant (Ultra Fast • 800+ tokens/sec)
                </option>
                <option value="mixtral-8x7b-32768">
                  Mixtral 8x7B (Deep reasoning)
                </option>
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                Llama 3.3 70B understands local Rajasthani & North Indian market context best.
              </p>
            </div>
          </div>

          {/* Test Groq AI button */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Verify if your AI pitch generator is functioning properly.
            </span>
            <button
              type="button"
              onClick={runTestAi}
              disabled={testingAi}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 rounded-xl text-xs font-bold transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{testingAi ? "Testing with Groq..." : "Test AI Pitch Generator"}</span>
            </button>
          </div>

          {aiTestResult && (
            <div className="p-4 bg-slate-900/90 border border-indigo-500/30 rounded-2xl space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block">
                Sample Generated AI Pitch (Live Response):
              </span>
              <pre className="text-xs text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">
                {aiTestResult}
              </pre>
            </div>
          )}
        </div>

        {/* SMTP Email Settings Card */}
        <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-6 space-y-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">SMTP Email Outreach Configuration</h3>
                <p className="text-xs text-slate-400">
                  Send official proposals and cold emails directly from your agency email address
                </p>
              </div>
            </div>

            {hasSmtpPass ? (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                SMTP Connected
              </span>
            ) : (
              <span className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-xl">
                Optional
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">SMTP Host</label>
              <input
                type="text"
                placeholder="smtp.gmail.com"
                value={smtpHost}
                onChange={(e) => setSmtpHost(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">SMTP Port</label>
              <input
                type="text"
                placeholder="587"
                value={smtpPort}
                onChange={(e) => setSmtpPort(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Sender Name</label>
              <input
                type="text"
                value={smtpFromName}
                onChange={(e) => setSmtpFromName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Email / Username</label>
              <input
                type="email"
                placeholder="e.g. kanu9264@gmail.com or your-gmail@gmail.com"
                value={smtpUser}
                onChange={(e) => setSmtpUser(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                App Password / Password {hasSmtpPass && <span className="text-emerald-400">(Saved ✓)</span>}
              </label>
              <input
                type="password"
                placeholder={hasSmtpPass ? "Enter new password to change..." : "Gmail 16-character App Password"}
                value={smtpPass}
                onChange={(e) => setSmtpPass(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                For Gmail: Use Google Account &gt; Security &gt; App Passwords.
              </p>
            </div>
          </div>

          {/* Test Email Box */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <span className="text-xs font-bold text-white block">Send a Test Email to verify SMTP</span>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your personal email to receive test message..."
                value={testEmailTo}
                onChange={(e) => setTestEmailTo(e.target.value)}
                className="w-full sm:flex-1 px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={runTestEmail}
                disabled={sendingTestEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{sendingTestEmail ? "Sending..." : "Send Test Mail"}</span>
              </button>
            </div>
            {testEmailResult && (
              <p className="text-xs text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                {testEmailResult}
              </p>
            )}
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-between pt-2">
          {saveSuccess ? (
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>All Settings & API Keys Saved Successfully!</span>
            </div>
          ) : (
            <div className="text-xs text-slate-500">
              Settings persist safely in your encrypted local SQLite database.
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 hover:from-emerald-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all hover:scale-102"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Saving Settings..." : "Save All Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
