import Link from "next/link";
import { FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Elevate<span className="text-blue-600">CV</span></span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-6">
              Create professional, ATS-friendly resumes in minutes with the power of AI. Your dream job awaits.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Templates</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Examples</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ElevateCV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
