import "./App.css";
import { Card } from "@/components/ui/card.tsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-chrome-extension-router";
import Dashboard from "@/components/Dashboard.tsx";

function App() {
  return (
    <>
      <div className="flex bottom flex-col items-center justify-center h-screen">
        <Avatar className={"mb-4 w-20 h-20"}>
          <AvatarImage
            className="w-full h-full"
            src="/assets/logo.png"
            alt="Vite"
          />
        </Avatar>
        <Card
          className={"bg-gradient-to-b from-blue-300 to-secondary px-4 py-6"}
        >
          <h1 className="text-2xl font-bold">
            Welcome to <span className="text-blue-500">Happly</span>
          </h1>
          <Button>
            <Link component={Dashboard} className="text-white hover:opacity-75">
              Go to Dashboard
            </Link>
          </Button>
        </Card>
      </div>
    </>
  );
}

export default App;
