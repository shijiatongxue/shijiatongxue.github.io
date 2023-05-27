const tagColorMap = {
  React: "#38bdf8ff",
  Figma: "#F43F5E",
  D2C: "#111827ff",
  "Design to code": "#111827ff",
  "UI components": "#bada55",
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
