const tagColorMap = {
  React: 'rgb(8, 126, 164)',
  'React UI components': 'rgb(8, 126, 164)',
  Figma: '#F43F5E',
  'Figma Plugin': '#F43F5E',
  'npm package': 'rgba(0, 0, 0, 0.7)',
  D2C: '#111827ff',
  'Design to code': '#111827ff',
  'UI components': 'rgba(var(--semi-blue-5), 1)',
};

export default function ProjectTag(props: { name: string }) {
  const { name } = props;
  return (
    <div
      className="shrink-0 flex justify-center items-center gap-x-[8px] py-[8px] px-[16px] rounded-[32px]"
      style={{
        background: tagColorMap[name],
      }}
    >
      <p className="shrink-0 font-['Poppins'] text-[16px] text-[#ffffffff] leading-[16px] text-left align-top font-[400]">
        {name}
      </p>
    </div>
  );
}
