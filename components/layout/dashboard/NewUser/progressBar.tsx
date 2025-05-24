type CircleProps = {
  colour: string;
  percentage?: number | undefined;
};

type TextProps = {
  percentage: number | undefined;
};

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage }: CircleProps) => {
  const r = 90;
  const circ = 2 * Math.PI * r;
  const strokePct =
    percentage != null ? ((100 - percentage) * circ) / 100 : undefined; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage != null ? strokePct : 0}
      strokeLinecap="round"
      className="circle-dshb"
    ></circle>
  );
};

const Text = ({ percentage }: TextProps) => {
  return (
    <text
      x="47%"
      y="47%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
      fontWeight={600}
      color="lightgrey"
    >
      {percentage != null ? `${percentage.toFixed(0)}%` : undefined}
    </text>
  );
};

export const Pie = ({ percentage, colour }: CircleProps) => {
  const pct = percentage != null ? cleanPercentage(percentage) : undefined;
  return (
    <svg width={210} height={210}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};
