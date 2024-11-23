import {Card} from "../../Downloads/chrome-extension-production/src/components/ui/card.tsx";
import {Avatar, AvatarImage} from "../../Downloads/chrome-extension-production/src/components/ui/avatar.tsx";
import {Button} from "../../Downloads/chrome-extension-production/src/components/ui/button.tsx";
import {Link} from "react-chrome-extension-router";
import Start from "src/components/Start.tsx";
import QuestionEdit from "../../Downloads/chrome-extension-production/src/features/QuestionEdit";
import Sidebar from "src/components/Sidebar.tsx";
import {useEffect, useState} from "react";
import {AuthUser} from "../../Downloads/chrome-extension-production/src/lib/utils.ts";


export default function Dashboard() {

    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, []);

    return (
        <>
            {!user ? (<div>Loading...</div>) : (
                <div className="w-full h-[100dvh]">
                    <div
                        className="w-full h-full relative p-2 text-start flex gap-2 items-center rounded-[15px] justify-center bg-[#fdebe5]">
                        <div
                            className="w-full flex items-center justify-center text-center h-full bg-white rounded-[15px]">
                            <div className="flex flex-col h-screen max-w-[468px] items-center py-6">
                                <Avatar className={"mb-4 w-20 h-20"}>
                                    <AvatarImage
                                        className="w-full h-full"
                                        src="/assets/logo.png"
                                        alt="Vite"
                                    />
                                </Avatar>
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold">
                                        Hello, <span className="font-bold text-[#424D59]">{user.name ?? "Happy!"}</span>
                                    </h3>
                                    <p className="text-base font-medium text-[#424D5980] py-2">
                                        Fill out your application in minutes.
                                    </p>
                                </div>
                                <Card className="hidden px-6 py-6 justify-start items-start w-[324px]">
                                    <div className="flex flex-row ">
                                        <div className="mr-4">
                                            <svg
                                                width="64"
                                                height="65"
                                                viewBox="0 0 64 65"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <mask
                                                    id="mask0_393_9180"
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="64"
                                                    height="65"
                                                >
                                                    <rect
                                                        y="0.106445"
                                                        width="64"
                                                        height="64"
                                                        rx="11.2457"
                                                        fill="#D9D9D9"
                                                    />
                                                </mask>
                                                <g mask="url(#mask0_393_9180)">
                                                    <g filter="url(#filter0_f_393_9180)">
                                                        <rect
                                                            x="-4.65479"
                                                            y="-4.54785"
                                                            width="73.3091"
                                                            height="73.3091"
                                                            rx="11.2457"
                                                            fill="white"
                                                        />
                                                        <rect
                                                            x="-4.65479"
                                                            y="-4.54785"
                                                            width="73.3091"
                                                            height="73.3091"
                                                            rx="11.2457"
                                                            fill="url(#pattern0_393_9180)"
                                                        />
                                                        <rect
                                                            x="-4.65479"
                                                            y="-4.54785"
                                                            width="73.3091"
                                                            height="73.3091"
                                                            rx="11.2457"
                                                            fill="white"
                                                            fill-opacity="0.1"
                                                        />
                                                    </g>
                                                    <rect
                                                        x="9.54193"
                                                        y="9.64887"
                                                        width="44.9158"
                                                        height="44.9158"
                                                        rx="5.62285"
                                                        fill="white"
                                                    />
                                                    <rect
                                                        x="9.54193"
                                                        y="9.64887"
                                                        width="44.9158"
                                                        height="44.9158"
                                                        rx="5.62285"
                                                        fill="url(#pattern1_393_9180)"
                                                    />
                                                    <rect
                                                        x="9.54193"
                                                        y="9.64887"
                                                        width="44.9158"
                                                        height="44.9158"
                                                        rx="5.62285"
                                                        stroke="white"
                                                        stroke-width="2.24914"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_f_393_9180"
                                                        x="-24.6721"
                                                        y="-24.5652"
                                                        width="113.344"
                                                        height="113.344"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="BackgroundImageFix"
                                                            result="shape"
                                                        />
                                                        <feGaussianBlur
                                                            stdDeviation="10.0087"
                                                            result="effect1_foregroundBlur_393_9180"
                                                        />
                                                    </filter>
                                                    <pattern
                                                        id="pattern0_393_9180"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1"
                                                        height="1"
                                                    >
                                                        <use
                                                            xlinkHref="#image0_393_9180"
                                                            transform="scale(0.00314465)"
                                                        />
                                                    </pattern>
                                                    <pattern
                                                        id="pattern1_393_9180"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1"
                                                        height="1"
                                                    >
                                                        <use
                                                            xlinkHref="#image0_393_9180"
                                                            transform="scale(0.00314465)"
                                                        />
                                                    </pattern>
                                                    <image
                                                        id="image0_393_9180"
                                                        width="318"
                                                        height="318"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col items-center justify-between">
                                            <h1 className="text-xl font-bold text-[#282C31]">Pied Piper</h1>
                                            <p className="inline-flex items-center space-x-2">
              <span>
                <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2805 9.11161C12.2805 7.96674 11.3528 7.03906 10.2087 7.03906C9.06391 7.03906 8.13623 7.96674 8.13623 9.11161C8.13623 10.2556 9.06391 11.1833 10.2087 11.1833C11.3528 11.1833 12.2805 10.2556 12.2805 9.11161Z"
                      stroke="#282C31"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2082 17.815C10.2082 17.815 4.14493 13.8657 3.99215 8.93779C3.88488 5.47762 6.77469 2.39844 10.2082 2.39844C13.6416 2.39844 16.5307 5.47757 16.4249 8.93779C16.2712 13.9667 10.2082 17.815 10.2082 17.815Z"
                      stroke="#282C31"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                  />
                </svg>
              </span>
                                                <span className="text-sm text-[#282C3180]">Montreal, QC</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full pt-4">
                                        <p className="text-sm text-[#282C3180] leading-6 w-full text-start">
                                            Happy's all about you! We use your profile to create spot-on AI
                                            responses. Keep it updated, and if you add more about your business,
                                            we’ll make the answers even better!
                                        </p>
                                        <Button className="mt-6 py-5" variant={"outlined"}>
                                            <Link
                                                component={Start}
                                                className="text-black py-6 hover:text-black  inline-flex items-center justify-center space-x-2 rounded-[4px] "
                                            >
                                                <span>Add more details</span>{" "}
                                                <span>
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M6.91618 17.6686C6.64769 17.4001 6.62532 16.9787 6.84906 16.6848L6.91618 16.608L16.2391 7.28589L9.51698 7.29965C9.10276 7.30054 8.76625 6.96548 8.76536 6.55126C8.76455 6.17471 9.04139 5.86237 9.40293 5.80802L9.51375 5.79965L18.0514 5.78126C18.106 5.78115 18.1592 5.78687 18.2105 5.79783C18.2256 5.80151 18.241 5.8053 18.2562 5.80958C18.2697 5.81291 18.2829 5.81704 18.2961 5.82153C18.3148 5.82835 18.3339 5.83573 18.3527 5.84392C18.3675 5.85001 18.3812 5.85653 18.3947 5.86345C18.4112 5.87219 18.4285 5.88188 18.4455 5.8923C18.4575 5.89943 18.4686 5.90671 18.4795 5.91427C18.4956 5.92565 18.5118 5.93786 18.5276 5.95082C18.5398 5.96055 18.5515 5.97068 18.5628 5.98115C18.5695 5.98764 18.5765 5.99442 18.5834 6.00136L18.6037 6.02217C18.6137 6.03298 18.6234 6.04409 18.6328 6.05548L18.5834 6.00136C18.6169 6.03482 18.6465 6.07067 18.6724 6.10834C18.6786 6.1173 18.6847 6.12672 18.6907 6.13629C18.7029 6.15602 18.7139 6.17574 18.7239 6.19583C18.729 6.20578 18.7341 6.21665 18.739 6.22765C18.7487 6.2498 18.7572 6.27175 18.7646 6.29398C18.7681 6.30439 18.7716 6.31554 18.7748 6.3268C18.7799 6.3452 18.7843 6.36323 18.788 6.38136C18.7906 6.39417 18.793 6.40785 18.795 6.42165L18.7965 6.43235C18.8009 6.46531 18.8031 6.4985 18.8031 6.53169L18.803 6.53282L18.7853 15.0711C18.7844 15.4853 18.4479 15.8204 18.0337 15.8196C17.6572 15.8188 17.346 15.5406 17.2932 15.1789L17.2853 15.068L17.2983 8.34796L7.97684 17.6686C7.68394 17.9615 7.20907 17.9615 6.91618 17.6686Z"
                      fill="#282C31"
                  />
                </svg>
              </span>
                                            </Link>
                                        </Button>
                                    </div>
                                </Card>
                                <Card className="relative px-6 py-6 justify-start items-start w-[324px] mt-6">
                                    <div className="flex relative flex-col items-start justify-start z-10">
                                        <h2 className="font-medium text-2xl bg-clip-text styled-gradient-text">
                                            Get Started!
                                        </h2>
                                        <p className="text-sm text-[#282C3180] leading-6">
                                            The more you apply the better we get!
                                        </p>
                                        <Button className="py-5 mt-6">
                                            <Link
                                                component={QuestionEdit}
                                                className="text-white hover:text-white  inline-flex items-center justify-center space-x-2 rounded-[4px] "
                                            >
                                                <span>Start Now</span>{" "}
                                                <span>
                <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M11.4829 4.49096C11.6948 4.27914 11.6948 3.93571 11.4829 3.72389L8.03115 0.272096C7.81933 0.0602772 7.4759 0.0602771 7.26408 0.272096C7.05226 0.483915 7.05226 0.827342 7.26408 1.03916L10.3323 4.10742L7.26408 7.17568C7.05226 7.3875 7.05226 7.73093 7.26408 7.94275C7.4759 8.15457 7.81933 8.15457 8.03115 7.94275L11.4829 4.49096ZM0.251465 4.64982L11.0994 4.64982L11.0994 3.56503L0.251465 3.56502L0.251465 4.64982Z"
                      fill="white"
                  />
                </svg>
              </span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <span className="absolute top-0 right-0 z-0">
          <svg
              width="169"
              height="197"
              viewBox="0 0 169 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_393_9237)">
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M125.861 82.9014C124.795 80.8414 122.678 79.5611 120.336 79.5611H99.673V57.8537C99.673 55.1331 97.9877 52.831 95.3809 51.9939C92.7617 51.1527 90.0594 52.035 88.4488 54.2262H88.4447L60.6541 92.0604C59.276 93.9439 59.0851 96.3936 60.1519 98.4618C61.2187 100.518 63.3357 101.798 65.6768 101.798H86.336V123.509C86.336 126.226 88.0213 128.524 90.6281 129.361C91.2839 129.574 91.9481 129.677 92.5998 129.677C94.5341 129.677 96.3647 128.774 97.5684 127.133L125.359 89.2987C126.737 87.4152 126.928 84.9655 125.861 82.9014Z"
                  fill="white"
              />
              <path
                  d="M125.528 83.0736C124.526 81.1395 122.539 79.9361 120.336 79.9361H99.673H99.298V79.5611V57.8537C99.298 55.2973 97.7191 53.1387 95.2662 52.351L95.3808 51.9941L95.2662 52.351C92.8002 51.559 90.2659 52.3872 88.751 54.4483L88.6386 54.6012H88.6345L60.9568 92.2818C60.9567 92.2819 60.9567 92.282 60.9566 92.282C59.6625 94.0508 59.4837 96.348 60.4849 98.2894C61.4866 100.219 63.4743 101.423 65.6768 101.423H86.336H86.711V101.798V123.509C86.711 126.061 88.2894 128.216 90.7427 129.004L90.7441 129.004C91.3626 129.206 91.9876 129.302 92.5998 129.302C94.4146 129.302 96.1329 128.456 97.2661 126.911L97.2662 126.911L125.056 89.0773L125.528 83.0736ZM125.528 83.0736C126.529 85.0106 126.351 87.3077 125.057 89.0767L125.528 83.0736Z"
                  stroke="url(#paint0_linear_393_9237)"
                  stroke-width="0.75"
              />
            </g>
            <g opacity="0.5" filter="url(#filter1_f_393_9237)">
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M128.17 81.6556C127.053 79.4719 124.838 78.1148 122.388 78.1148H100.763V55.105C100.763 52.2212 98.9995 49.781 96.2715 48.8937C93.5304 48.002 90.7025 48.9371 89.017 51.2599H89.0126L59.9295 91.3641C58.4873 93.3606 58.2875 95.9573 59.4039 98.1496C60.5203 100.329 62.7358 101.686 65.1858 101.686H86.8059V124.7C86.8059 127.58 88.5696 130.015 91.2976 130.903C91.9839 131.129 92.679 131.238 93.361 131.238C95.3853 131.238 97.301 130.281 98.5608 128.541L127.644 88.4367C129.086 86.4402 129.286 83.8435 128.17 81.6556Z"
                  stroke="url(#paint1_linear_393_9237)"
              />
            </g>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M123.489 80.095C122.373 77.9114 120.158 76.5543 117.708 76.5543H96.083V53.5445C96.083 50.6606 94.3194 48.2204 91.5913 47.3331C88.8503 46.4414 86.0223 47.3766 84.3368 49.6993H84.3325L55.2494 89.8035C53.8072 91.8 53.6073 94.3968 54.7237 96.5891C55.8401 98.7682 58.0556 100.125 60.5056 100.125H82.1257V123.14C82.1257 126.019 83.8894 128.455 86.6174 129.342C87.3038 129.568 87.9988 129.677 88.6808 129.677C90.7051 129.677 92.6209 128.72 93.8806 126.98L122.964 86.8762C124.406 84.8797 124.606 82.2829 123.489 80.095Z"
                stroke="url(#paint2_linear_393_9237)"
                stroke-width="0.75"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.309 59.1729C59.0609 58.6785 58.5686 58.3712 58.0241 58.3712H53.2187V53.1615C53.2187 52.5085 52.8268 51.956 52.2205 51.7551C51.6114 51.5532 50.983 51.765 50.6084 52.2909H50.6075L44.1446 61.3711C43.8241 61.8231 43.7797 62.411 44.0277 62.9074C44.2758 63.4008 44.7682 63.7081 45.3126 63.7081H50.1171V68.9188C50.1171 69.5708 50.509 70.1223 51.1152 70.3232C51.2678 70.3744 51.4222 70.399 51.5738 70.399C52.0236 70.399 52.4493 70.1824 52.7293 69.7884L59.1922 60.7083C59.5127 60.2562 59.5571 59.6683 59.309 59.1729Z"
                stroke="url(#paint3_linear_393_9237)"
                stroke-width="0.3"
            />
            <circle cx="123.763" cy="111.264" r="1.73685" fill="#D9D9D9"/>
            <circle cx="48.2105" cy="80.8677" r="1.73685" fill="#D9D9D9"/>
            <circle cx="68.6186" cy="130.803" r="1.30263" fill="#D9D9D9"/>
            <circle cx="133.316" cy="91.2903" r="0.868423" fill="#D9D9D9"/>
            <circle cx="43.8684" cy="110.396" r="0.868423" fill="#D9D9D9"/>
            <defs>
              <filter
                  id="filter0_d_393_9237"
                  x="0.767773"
                  y="0.979687"
                  width="184.478"
                  height="195.398"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="8"/>
                <feGaussianBlur stdDeviation="29.35"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_393_9237"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_393_9237"
                    result="shape"
                />
              </filter>
              <filter
                  id="filter1_f_393_9237"
                  x="51.988"
                  y="41.8605"
                  width="83.5978"
                  height="96.0777"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation="3.1"
                    result="effect1_foregroundBlur_393_9237"
                />
              </filter>
              <linearGradient
                  id="paint0_linear_393_9237"
                  x1="93.0066"
                  y1="52.6547"
                  x2="93.0066"
                  y2="129.677"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.4"/>
                <stop offset="1" stop-color="#A250FF" stop-opacity="0"/>
              </linearGradient>
              <linearGradient
                  id="paint1_linear_393_9237"
                  x1="110.686"
                  y1="67.1141"
                  x2="70.0051"
                  y2="103.832"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FBD570"/>
                <stop offset="0.275" stop-color="#E30147"/>
                <stop offset="0.76" stop-color="#2ACEB6"/>
                <stop offset="1" stop-color="#6F23E3"/>
              </linearGradient>
              <linearGradient
                  id="paint2_linear_393_9237"
                  x1="106.006"
                  y1="65.5535"
                  x2="65.3249"
                  y2="102.271"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FBD570"/>
                <stop offset="0.275" stop-color="#E30147"/>
                <stop offset="0.76" stop-color="#2ACEB6"/>
                <stop offset="1" stop-color="#6F23E3"/>
              </linearGradient>
              <linearGradient
                  id="paint3_linear_393_9237"
                  x1="55.4238"
                  y1="55.8805"
                  x2="46.2322"
                  y2="64.023"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FBD570"/>
                <stop offset="0.275" stop-color="#E30147"/>
                <stop offset="0.76" stop-color="#2ACEB6"/>
                <stop offset="1" stop-color="#6F23E3"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
                                    <div></div>
                                </Card>
                            </div>
                        </div>

                        <Sidebar page={"home" as const}/>
                    </div>
                </div>
            )}
        </>
    );
}
