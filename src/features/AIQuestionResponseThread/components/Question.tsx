type Props = {
  question: string;
};

export default function Question({ question }: Props) {
  return (
    <div className="flex items-start gap-4 p-6 text-start bg-white rounded-[15px] shadow">
      <div className="w-8 min-h-[32px] min-w-[32px] h-8 p-[3.20px] bg-[#6422c8]/10 rounded-md opacity-80 text-[#6422c8] text-sm font-bold flex items-center justify-center">
        1
      </div>

      <div className="text-[#282c30]/80 line-clamp-3">Q: {question}</div>
    </div>
  );
}
