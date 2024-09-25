import Blogs from './blogs';
import Projects from './projects';

export default function HomePage() {
  return (
    <div className="home-page">
      <p className="text-center text-[var(--semi-color-text-0)] text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl p-6">
        Blogs
      </p>
      <Blogs />
      <p className="text-center text-[var(--semi-color-text-0)] mt-6 text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl p-6">
        Projects
      </p>
      <Projects style={{ paddingTop: 24 }} />
    </div>
  );
}
