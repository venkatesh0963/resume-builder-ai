# AI Resume & CV Builder.

A premium, modern AI-powered resume and CV builder built with Next.js App Router, Tailwind CSS, and Zustand. It operates 100% on the client side, securely saving your data directly to your browser's local storage—no database or account required!

## 🌟 Core Features.

### 1. Dual-Mode Builder (Resume vs. CV).
The application offers two distinct, fully-featured document builders:
- **Resume Builder:** Tailored for standard, single-page professional resumes. It handles Personal Info, Summary, Experience, Education, and Skills.
- **CV Builder:** Designed for detailed, multi-page academic, research, or clinical Curriculum Vitaes. It adds dedicated sections for **Publications**, **Languages**, and **References**.

### 2. Real-Time Live Preview.
Experience true WYSIWYG editing. The workspace is split-screen: edit your details via intuitive forms on the left, and watch the A4 document update instantly on the right.

### 3. 25+ Premium Templates.
A massive suite of responsive templates that dynamically adapt to your content:
- **Standard Professional:** Modern, Classic, Corporate, and Minimal layouts.
- **Creative & Photo-centric:** Elegant layouts specifically designed for roles requiring headshots.
- **Academic & Clinical CVs:** Formats built explicitly for flowing text over multiple pages without arbitrary cutoffs (e.g., Academic, European, Medical, Research).
- **Live Template Gallery:** A dedicated `/templates` page that renders your actual resume data as live miniature previews across all templates instantly.

### 4. AI Bullet Point Enhancer.
Integrated natively into the Experience form is an "Improve with AI" button. Powered by Google's **Gemini API**, it automatically takes basic job descriptions and rewrites them into strong, action-oriented bullet points tailored to your specific job title.

### 5. 100% Client-Side Privacy (No Database).
Your data never leaves your device. State management is handled by Zustand with `localStorage` persistence, meaning you can safely refresh or close the tab and return later to find your resume exactly as you left it.

### 6. ATS-Friendly Native PDF Export
Instead of relying on clunky image-flattening libraries, this app taps into native browser printing mechanics to generate high-resolution, perfectly paginated PDFs. Crucially, this preserves selectable, machine-readable text which is required for passing through Applicant Tracking Systems (ATS).

---

## 💻 Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **UI Components:** Shadcn UI (radix-ui, lucide-react)
- **State Management:** Zustand (with local storage middleware)
- **AI Integration:** `@google/genai` (Gemini API)

---

## 🚀 Getting Started

### Prerequisites / Software Required
To run this project locally, you must have the following software installed on your machine:
1. **Node.js** (v18.17.0 or higher) - [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Git** - [Download Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MRVB96/resume-builder-ai.git
cd resume-builder-ai
```

2. Install dependencies:
```bash
npm install
```

3. Setup AI Features (Optional but recommended):
Create a `.env.local` file in the root directory and add your Google Gemini API key:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
