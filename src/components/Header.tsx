import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import haryanaLogo from "@/assets/haryana-logo.png";

interface HeaderProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export const Header = ({ onSignIn, onSignUp }: HeaderProps) => {
  return (
    <header className="bg-gradient-government shadow-header border-b-4 border-primary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <img 
                src={haryanaLogo} 
                alt="Government of Haryana Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Government of Haryana
                </h1>
                <p className="text-lg text-white/90 font-medium">
                  Digital Education Management System
                </p>
                <p className="text-sm text-white/80">
                  Department of Higher Education
                </p>
              </div>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="auth" 
              onClick={onSignIn}
              className="flex items-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button 
              variant="government" 
              onClick={onSignUp}
              className="flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};