import QuestionCard from "./QuestionCard";
import { Question } from "@/pages/api/mockData";

interface RightSidebarProps {
    questions: Question[];
}

export default function RightSidebar({ questions }: RightSidebarProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                ))}
            </div>
        </div>
    );
}
