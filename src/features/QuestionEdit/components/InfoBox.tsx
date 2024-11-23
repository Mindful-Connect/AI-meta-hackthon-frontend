import { ReactNode } from "react";

type Props = {
  text: ReactNode;
  onCloseClick: () => void;
};

export default function InfoBox({ text, onCloseClick }: Props) {
  return (
    <div className="bg-[#282c31] rounded-[15px] text-white p-4 relative">
      <div className="flex pr-8 gap-2">
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="min-h-[25px] min-w-[25px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99408 16.3258C7.65018 15.3372 6.00586 13.0157 6.00586 10.305C6.00586 6.22826 9.72748 3.02815 13.9492 3.88339C16.4488 4.39517 18.4706 6.40534 18.9921 8.9049C19.6703 12.1712 17.8927 15.1815 15.1596 16.3365L15.1567 17.6237C15.1547 18.4517 14.4834 19.1221 13.6563 19.1221H11.4915C10.6606 19.1221 9.98824 18.4468 9.99018 17.6169L9.99408 16.3258Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2832 21.7441H13.8587"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1593 16.3379L12.7109 16.3381"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-[#dee3ec] text-sm font-light">{text}</div>
      </div>

      <div
        className="absolute cursor-pointer top-0 right-0 rounded-full !h-6 !w-6 overflow-hidden max-w-[24px] max-h-[24px] flex items-center justify-center bg-[#ebebee] m-2"
        onClick={onCloseClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="black"
          className="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
