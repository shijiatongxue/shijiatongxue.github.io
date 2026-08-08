import { useLanguage } from '../../../common/i18n';

const tagColorMap: Record<string, string> = {
  React: 'rgb(8, 126, 164)',
  'React UI components': 'rgb(8, 126, 164)',
  Figma: '#F43F5E',
  'Figma Plugin': '#F43F5E',
  'npm package': 'rgba(0, 0, 0, 0.7)',
  D2C: '#111827',
  'Design to code': '#111827',
  'UI components': 'rgba(20, 112, 195, 1)',
};

const tagLabelMap: Record<string, string> = {
  'Design to code': 'Design to code',
};

export default function ProjectTag(props: { name: string }) {
  const { language } = useLanguage();
  const { name } = props;
  const label = language === 'en' ? tagLabelMap[name] || name : name;
  return (
    <span
      className="project-tag"
      style={{
        background: tagColorMap[name] || 'var(--site-ink)',
      }}
    >
      {label}
    </span>
  );
}
