interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  pathVariant?: number;
}

const wavePaths = [
  "M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z",
  "M0,0 C200,80 400,-20 600,60 C800,140 1000,20 1200,80 L1200,120 L0,120 Z",
  "M0,0 C300,90 500,-30 800,60 C950,110 1100,20 1200,60 L1200,120 L0,120 Z",
  "M0,0 C150,100 350,-20 600,70 C850,150 1050,30 1200,60 L1200,120 L0,120 Z",
  "M0,0 C250,80 450,-30 700,70 C950,140 1050,10 1200,60 L1200,120 L0,120 Z",
  "M0,0 C200,90 400,-10 650,70 C900,140 1100,20 1200,60 L1200,120 L0,120 Z",
];

export default function WaveDivider({ fromColor, toColor, pathVariant = 0 }: WaveDividerProps) {
  const path = wavePaths[pathVariant % wavePaths.length];

  return (
    <div className={`w-full ${fromColor} overflow-hidden leading-none -mt-1 pointer-events-none select-none`}>
      <svg
        className={`w-full h-12 md:h-16 ${toColor} fill-current`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path d={path} />
      </svg>
    </div>
  );
}

