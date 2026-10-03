import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 organic-texture bg-background text-foreground text-center">
      <div className="max-w-md w-full p-8 rounded-2xl glass border border-rose/15 shadow-xl bg-card">
        {/* Error Code */}
        <span className="text-sm font-semibold uppercase tracking-wider text-rose">Error Code 404</span>
        
        {/* Title */}
        <h1 className="text-4xl font-serif font-semibold mt-2 mb-4">
          404 Page not found
        </h1>
        
        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed font-light mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-rose text-white hover:bg-rose-dark shadow-sm hover:shadow-lg hover:shadow-rose/25 font-semibold transition-all duration-300 btn-glow"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
