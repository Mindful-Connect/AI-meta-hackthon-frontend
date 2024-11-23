import {useEffect, useRef, useState} from "react";

import Loader from "src/features/AIQuestionResponseThread/components/Loader";
import {CheckmarkIcon, RewriteIcon, Sparkle} from "../../Downloads/chrome-extension-production/src/lib/svg";
import Question from "src/features/AIQuestionResponseThread/components/Question";
import Response from "src/features/AIQuestionResponseThread/components/Response";
import RewriteModal from "src/features/AIQuestionResponseThread/components/RewriteModal";
import Sidebar from "@/components/Sidebar.tsx";
import {ScrollArea} from "@/components/ui/scroll-area"


type Props = {
    question: string;
};

export default function AIQuestionResponseThread({question}: Props) {
    const [showRewriteModal, setShowRewriteModal] = useState(false);

    // Need list of reponse history

    // Unsure of structure - string[] for now
    // probably fetch the list from backend in future
    const [responseHistory, setResponseHistory] = useState<string[]>([]);

    //THIS IS TEMPORATY UNTIL CONNECTED TO API
    // region - temporary api fetch/response
    const {isLoading, response} = useFakeApiCall();
    useEffect(() => {
        if (!isLoading && response) {
            setResponseHistory((prev) => [...prev, response]);
        }
    }, [isLoading, response]);
    // endregion

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [responseHistory]); // Scroll when responseHistory changes

    return (
        <>
            <div className="w-full h-[100dvh]">
                <div
                    className="w-full h-full relative p-2 text-start flex gap-2 items-center rounded-[15px] justify-center bg-[#fdebe5]">
                    <div className="h-screen bg-white flex flex-col justify-between rounded-[15px] space-y-4">
                        <div className="flex-1 overflow-y-auto p-1">
                            <div className="flex flex-col gap-4">
                                <ScrollArea className="h-[200px] w-full rounded-md border p-4">

                                    {responseHistory.map((response) => (
                                        <Response reponse={response}/>
                                    ))}
                                </ScrollArea>

                                {isLoading && (
                                    <div className="mb-9">
                                        <Loader/>
                                    </div>
                                )}

                                {/* Invisible element to scroll to */}
                                <div ref={messagesEndRef}/>
                            </div>
                        </div>

                        <div className="h-[25vh]">
                            <Question question={question}/>
                            <div className="space-y-4 bg-white relative rounded-tl-[22px] rounded-tr-[22px] p-4 mt-2.5">
                                <button
                                    onClick={() => setShowRewriteModal(true)}
                                    className="flex items-center gap-2 h-14 bg-white rounded-[15px] border border-[#dee3ec] text-[#282c30] font-semibold leading-normal tracking-tight w-full justify-center"
                                >
            <span className="relative flex items-center justify-center">
              <RewriteIcon/>
              <span className="absolute">
                <Sparkle/>
              </span>
            </span>
                                    Rewrite
                                </button>
                                <button
                                    className="h-14 tracking-tight bg-[#282c30] rounded-[15px] gap-2 text-white flex items-center justify-center w-full font-semibold">
                                    <CheckmarkIcon/> Onward
                                </button>

                                {showRewriteModal && (
                                    //Adds a new answer to the responseHistory ???
                                    //This should be implemented and not mocked
                                    <RewriteModal
                                        isOpen={showRewriteModal}
                                        onClose={() => setShowRewriteModal(false)}
                                    />
                                )}
                            </div>
                            {" "}
                        </div>
                    </div>
                    <Sidebar page={"home" as const}/>
                </div>
            </div>
        </>
    );
}

const useFakeApiCall = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Simulate API delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setResponse(
                    "This is a mock response from the AI. I am saying random things to fill the whitepsace. Don't read to much into this text as it has no purpose or meaning. Please act like this is the best Llama generation you have ever seen"
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return {isLoading, response};
};
